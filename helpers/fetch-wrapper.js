
import { userService } from '../services/user.services';
import axios from 'axios';


const API_URL = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = `${API_URL}/users`;

export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete,
    postFile,
    putFile
};

function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}



function postFile(url, body) {
    const requestOptions = {
        headers: {
            'Content-Type': 'multipart/form-data',
            ...authHeader(url)
        },
    };
    return axios.post(url, body, requestOptions).then(x => x.data);
}

function putFile(url, body) {
    const requestOptions = {
        headers: {
            'Content-Type': 'multipart/form-data',
            ...authHeader(url)
        },
    };
    return axios.put(url, body, requestOptions).then(x => x.data);
}
// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = userService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(API_URL.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if ([401, 403].includes(response.status) && userService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                userService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
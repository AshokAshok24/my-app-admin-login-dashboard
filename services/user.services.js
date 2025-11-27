import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = `${API_URL}/users`;

const userSubject = new BehaviorSubject(
  typeof window !== "undefined" ? JSON.parse(localStorage.getItem('star')) : null
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() { return userSubject.value },
  login,
  logout,
  register,
  getAll,
  changePassword
};


function changePassword(id, userData) {
  return fetchWrapper.put(`${baseUrl}/changepassword/${id}`, userData)
    .then(user => {
      if (user.status == 1) logout();
      return user;
    })
    .catch(err => console.error("Error:", err));
}


function login(username, password) {

  // Demo admin login (without API)
  if (username === 'admin@gmail.com' && password === 'admin') {

    const user = {
      status: 1,
      name: 'Admin',
      email: 'admin@gmail.com'
    };

    localStorage.setItem('star', JSON.stringify(user));
    userSubject.next(user);

    return Promise.resolve(user);
  }

  // API login
  return fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
    .then(user => {

      if (user.status == 0) {
        localStorage.removeItem('star');
        userSubject.next(null);
      } else {
        localStorage.setItem('star', JSON.stringify(user));
        userSubject.next(user);
      }

      return user;
    });
}


function logout() {
  localStorage.removeItem('star');
  userSubject.next(null);
  Router.push('/account/login');
}


function register(user) {
  return fetchWrapper.post(`${baseUrl}/register`, user);
}


function getAll(page, size, search) {
  return fetchWrapper.get(`${API_URL}/users?page=${page}&size=${size}&search=${search}`);
}

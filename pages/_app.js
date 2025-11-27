import HomeContainer from "/components/HomeContainer";
import "/styles/globals.css";
import "/styles/header.css";
import "/styles/sideBar.css";
import "/styles/mainContent.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { userService } from "/services/user.services";

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    checkAuth(router.asPath);

    router.events.on("routeChangeStart", () => setAuthorized(false));
    router.events.on("routeChangeComplete", checkAuth);

    return () => {
      router.events.off("routeChangeStart", () => setAuthorized(false));
      router.events.off("routeChangeComplete", checkAuth);
    };
  }, []);

  function checkAuth(url) {
    const path = url.split("?")[0];
    const publicPaths = ["/account/login"]; // only login is public

    const loggedIn = userService.userValue;

    if (!loggedIn && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push("/account/login");
    } else {
      setAuthorized(true);

      // if user is logged in and tries to open login page → redirect to home
      if (loggedIn && path === "/account/login") {
        router.push("/");
      }
    }
  }

  return (
    <>
      {router.pathname === "/account/login" ? (
        // Show login page without dashboard layout
        <Component {...pageProps} />
      ) : (
        // All other pages
        authorized && (
          <HomeContainer>
            <Component {...pageProps} />
          </HomeContainer>
        )
      )}
    </>
  );
}

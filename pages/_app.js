import "../styles/globals.css";

import { LoginContextProvider } from "./../store/login-context";

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider>
      <Component {...pageProps} />
    </LoginContextProvider>
  );
}

export default MyApp;

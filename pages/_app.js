import "../styles/globals.css";

import { LoginContextProvider } from "./../store/login-context";
import PhotoContextProvider from "./../store/photo-context";

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider>
      <PhotoContextProvider>
        <Component {...pageProps} />
      </PhotoContextProvider>
    </LoginContextProvider>
  );
}

export default MyApp;

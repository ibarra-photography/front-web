import "../styles/globals.css";

import { LoginContextProvider } from "./../store/login-context";
import PhotoContextProvider from "./../store/photo-context";

if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

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

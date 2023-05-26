import "@/styles/globals.css";
import Context from "../context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleOAuthProvider clientId="577101913991-3lui3759un3sfba21h201r9g8ouf7qi0.apps.googleusercontent.com">
        <Context>
          <Component {...pageProps} />
        </Context>
      </GoogleOAuthProvider>
    </>
  );
  // return <Component {...pageProps} />;
}

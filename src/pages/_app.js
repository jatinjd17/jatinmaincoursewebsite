import "@/styles/globals.css";
import "nprogress/nprogress.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Context from "../context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleOAuthProvider clientId="577101913991-3lui3759un3sfba21h201r9g8ouf7qi0.apps.googleusercontent.com">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Context>
            <Component {...pageProps} />
          </Context>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  );
  // return <Component {...pageProps} />;
}

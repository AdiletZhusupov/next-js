/*Tutorials 49-54 Styling 
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};
*/

/*  Tutorials 55-65 Miscellaneous 
import Head from "next/head";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "styles/layout.css";
*/

/*  Tutorials 66-79 Authentication
 */

import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../components/Navbar.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  /* Tutorials 49-54 Styling 
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    );
    */

  /*  Tutorials 55-65 Miscellaneous  
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Next.JS</title>
        <meta name="description" content="Awesome free tutorials" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
  */

  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

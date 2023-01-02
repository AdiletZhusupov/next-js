import Head from "next/head";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "styles/layout.css";
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
export default function App({ Component, pageProps }) {
  /*Tutorials 49-54 Styling 
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    );
    */

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
}

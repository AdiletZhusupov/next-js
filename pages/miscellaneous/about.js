import Head from "next/head";
import Footer from "../../components/layout/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Next.JS</title>
        <meta name="description" content="free tutorials on web development" />
      </Head>
      <h2 className="content">About</h2>
    </>
  );
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

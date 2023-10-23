import { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/Meta";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      {/* ========= Start Head ========= */}
      <Head>
        {/* SEO */}
        <Meta />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      {/* ========= End Head ========= */}

      {/* ========= Start Body ========= */}
      <body className="antialiased relative">
        {/* Start Main Content */}
        <Main />
        {/* End Main Content */}
        <NextScript />
      </body>
      {/* ========= End Body ========= */}
    </Html>
  );
}

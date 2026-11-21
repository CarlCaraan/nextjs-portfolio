import { Html, Head, Main, NextScript } from "next/document";

// SEO
import Meta from "../components/Meta";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {/* ========= Start Head ========= */}
      <Head>
        {/* SEO */}
        <Meta />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" sizes="any" href="/navbar-monogram.svg" />
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

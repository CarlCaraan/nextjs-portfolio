import { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/Meta";

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head>
        <Meta />
      </Head>
      <body className="antialiased scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

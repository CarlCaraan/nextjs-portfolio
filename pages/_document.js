import { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/Meta";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <Meta />
      </Head>
      <body className="antialiased relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

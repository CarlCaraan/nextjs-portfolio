import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // add options here
      // disable: "mobile",
      once: true,
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <ThemeProvider enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

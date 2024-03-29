import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

// Styles
import "../styles/globals.css";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Add options here
      once: true,
      // disable: "mobile",
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

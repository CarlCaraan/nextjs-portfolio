import { useEffect } from "react";
import PortfolioThemeProvider from "../components/PortfolioThemeProvider";

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
      <PortfolioThemeProvider>
        <Component {...pageProps} />
      </PortfolioThemeProvider>
    </AnimatePresence>
  );
}

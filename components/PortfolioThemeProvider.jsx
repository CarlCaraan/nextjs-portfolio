import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState } from "react";

const ThemeSelectionContext = createContext(null);

export function useThemeSelection() {
  return useContext(ThemeSelectionContext);
}

export default function PortfolioThemeProvider({ children }) {
  const [selection, setSelection] = useState("system");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="portfolio-system-theme"
      forcedTheme={selection === "system" ? undefined : selection}
    >
      <ThemeSelectionContext.Provider value={{ selection, setSelection }}>
        {children}
      </ThemeSelectionContext.Provider>
    </ThemeProvider>
  );
}

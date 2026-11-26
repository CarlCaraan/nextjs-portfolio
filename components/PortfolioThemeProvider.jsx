import { ThemeProvider, useTheme } from "next-themes";

export function useThemeSelection() {
  const { theme, setTheme } = useTheme();
  return { selection: theme || "system", setSelection: setTheme };
}

export default function PortfolioThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="portfolio-system-theme"
    >
      {children}
    </ThemeProvider>
  );
}

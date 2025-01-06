import { ReactNode } from "react";
import { ThemeProvider } from "./context";

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "./store/store";
import { ThemeProvider } from "./context";

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </Provider>
  );
};

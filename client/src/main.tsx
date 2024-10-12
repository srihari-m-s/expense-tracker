import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme accentColor="violet" grayColor="sand" appearance="dark">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      <ThemePanel />
    </Theme>
  </StrictMode>
);

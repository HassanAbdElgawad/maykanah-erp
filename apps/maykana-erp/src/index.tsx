import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CustomizationProvider } from "./contexts/CustomizationContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import "../tailwind.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <CustomizationProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </CustomizationProvider>
      </LanguageProvider>
    </Provider>
  </StrictMode>,
);

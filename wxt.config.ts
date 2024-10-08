import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "wxt-react-legendary-journey",
    host_permissions: ["*://*.example.com/*"],
    permissions: [""],
    browser_specific_settings: {
      gecko: {
        id: "",
      },
    },
  },
  vite: () => ({
    plugins: [react()],
  }),
});

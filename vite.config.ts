import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    port: 4378,
    strictPort: true,

    // these are the proxy routes that will be forwarded to your **BFF**
    proxy: {
      "/bff": {
        target: "https://localhost:7164",
        secure: false,
      },
      "/signin-oidc": {
        target: "https://localhost:7164",
        secure: false,
      },
      "/signout-callback-oidc": {
        target: "https://localhost:7164",
        secure: false,
      },
      "/api": {
        target: "https://localhost:7164",
        secure: false,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  preview: {
    port: 5173, // Set the preview port
    allowedHosts: ["technofea.csiviit.studio"], // Allow your domain
  },
});

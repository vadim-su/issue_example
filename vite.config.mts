import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import "react";
import "react-dom";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

import { defineConfig } from "vite";
import TestPlugin from "../src/index";
export default defineConfig({
  plugins: [TestPlugin()], 
});

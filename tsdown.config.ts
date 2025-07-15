import { defineConfig } from "tsdown";

export default defineConfig({
    entry: ["src/index.ts"],
    sourcemap: true,
    clean: true,
    dts: true,
    format: ["esm"],
    minify: false,
    target: "es2019",
});

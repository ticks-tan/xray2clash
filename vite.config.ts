import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		solidPlugin({
			ssr: false,
			hot: true,
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
		},
	},
});

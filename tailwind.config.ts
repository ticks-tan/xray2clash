import type { Config } from "tailwindcss";
import { withMaterialColors } from "tailwind-material-colors";

const config: Config = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
	],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [],
};

export default withMaterialColors(config, {
	primary: "#6D5EE4",
});

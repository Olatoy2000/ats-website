/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				sm: "0px 4px 12px 1px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};

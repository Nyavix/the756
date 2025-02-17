import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        bannerImg: "url('/graphics/Background.jpg')",
		bannerMarImg: "url('/graphics/Marble.jpg')",
		bannerAltImg: "url('/graphics/Graphite.jpg')",
        blackOverlay: "linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
      },
      animation: {
				"fade-in": "fade-in 1.5s ease-in-out forwards",
				title: "title 1s ease-out forwards",
				"fade-left": "fade-left 1s ease-in-out forwards",
				"fade-right": "fade-right 1s ease-in-out forwards",
        "wiggle" : "wiggle 1.5s ease-in-out infinite"
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"30%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0.2deg)' },
          '50%': { transform: 'rotate(0.2deg)' },
        }
			},
    },
  },
  plugins: [],
} satisfies Config;

// contactsapp/lib/config/RoutesConfig.ts

const BASE_URL = "/wiki";

export const RouteConfig = {
	home: `${BASE_URL}`,

	discord: "https://discord.gg/demonizedidle",
	contribute: "https://github.com/ToxicBlades/demonized-wiki",

	guides: {
		beginners_guide: `${BASE_URL}/beginners-guide`,
		community_guides: `${BASE_URL}/community-guides`,
	},

	content: {
		items: `${BASE_URL}/items`,
		character: `${BASE_URL}/character`,
		locations: `${BASE_URL}/locations`,
		resources: `${BASE_URL}/resources`,
	},

	terms: "/terms",
	policy: "/policy",
};

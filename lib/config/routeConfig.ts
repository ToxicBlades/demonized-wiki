// contactsapp/lib/config/RoutesConfig.ts

const BASE_URL = "/wiki";

export const RouteConfig = {
	home: `${BASE_URL}`,

	discord: "https://discord.gg/demonizedidle",
	contribute: "https://github.com/ToxicBlades/demonized-wiki",

	guides: {
		beginners_guide: `${BASE_URL}/beginners-guide`,
		community_guides: {
			base: `${BASE_URL}/community-guides`,
			example: `${BASE_URL}/community-guides/example`,
		},
	},

	content: {
		items: `${BASE_URL}/game-tabs/items`,
		character: `${BASE_URL}/game-tabs/character`,
		locations: `${BASE_URL}/game-tabs/locations`,
		resources: `${BASE_URL}/game-tabs/resources`,
	},

	terms: "/terms",
	policy: "/policy",
};

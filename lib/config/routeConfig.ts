// contactsapp/lib/config/RoutesConfig.ts

const BASE_URL = "/wiki";

export const RouteConfig = {
	home: `${BASE_URL}`,

	discord: "https://discord.gg/demonizedidle",
	contribute: "https://github.com/ToxicBlades/demonized-wiki",

	mine_grid: `${BASE_URL}/mine-grid`,

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

	data_base: {
		character: {
			experience: `${BASE_URL}/data-base/character/experience`,
		},
		stats: {
			str: `${BASE_URL}/data-base/stats/str`,
			dex: `${BASE_URL}/data-base/stats/dex`,
			agi: `${BASE_URL}/data-base/stats/agi`,
			luk: `${BASE_URL}/data-base/stats/luk`,
			aspd: `${BASE_URL}/data-base/stats/aspd`,
			mspd: `${BASE_URL}/data-base/stats/mspd`,
		},
		resources: {
			monster_meat: `${BASE_URL}/data-base/resources/monster-meat`,
		},
	},

	terms: "/terms",
	policy: "/policy",
};

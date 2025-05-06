// contactsapp/lib/config/RoutesConfig.ts

const BASE_URL = "/wiki";

export const RouteConfig = {
	home: `${BASE_URL}`,

	discord: "https://discord.gg/demonizedidle",
	contribute: "https://github.com/ToxicBlades/demonized-wiki",
	contributors: `${BASE_URL}/contributors`,
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
		relics: `${BASE_URL}/relics`,
		stats: {
			str: `${BASE_URL}/data-base/stats/str`,
			dex: `${BASE_URL}/data-base/stats/dex`,
			agi: `${BASE_URL}/data-base/stats/agi`,
			luk: `${BASE_URL}/data-base/stats/luk`,

			accuracy: `${BASE_URL}/data-base/stats/accuracy`,
			life: `${BASE_URL}/data-base/stats/life`,

			skill_damage: `${BASE_URL}/data-base/stats/skill-damage`,
			penetrating_dmg: `${BASE_URL}/data-base/stats/penetrating-dmg`,

			trait_atack: `${BASE_URL}/data-base/stats/trait-coefficient`,
			trait_coefficent: `${BASE_URL}/data-base/stats/trait-coefficient`,
			wind: `${BASE_URL}/data-base/stats/wind`,
			fire: `${BASE_URL}/data-base/stats/fire`,
			earth: `${BASE_URL}/data-base/stats/earth`,
			water: `${BASE_URL}/data-base/stats/water`,

			aspd: `${BASE_URL}/data-base/stats/aspd`,
			mspd: `${BASE_URL}/data-base/stats/mspd`,
		},
		resources: {
			monster_meat: `${BASE_URL}/data-base/resources/monster-meat`,
			candle: `${BASE_URL}/data-base/resources/candle`,
			chalice: `${BASE_URL}/data-base/resources/chalice`,
		},
	},

	terms: "/terms",
	policy: "/privacy",
	contacts: "/contacts",
};

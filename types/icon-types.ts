// Auto-generated icon type definitions
export type IconCategory = 'books' | 'common' | 'currency' | 'interface' | 'pots' | 'stats';

export type IconNameMap = {
  books: 'blue_book' | 'green_book' | 'legendary_book' | 'red_book';
  common: 'placeholder';
  currency: 'anvil' | 'apple' | 'bread' | 'chest' | 'magic_staff' | 'rusted_chest' | 'upgrade_stone';
  interface: 'map';
  pots: 'afk_bottle' | 'afk_pot' | 'gold_pot' | 'lucky_pot' | 'xp_pot';
  stats: 'accuracy' | 'atk' | 'atk_percent' | 'crit_atk' | 'dex' | 'earth' | 'evasion' | 'fire' | 'max_atk' | 'min_atk' | 'penetration_chance' | 'penetration_damage' | 'str' | 'water' | 'wind';
};

export type IconName<C extends IconCategory> = C extends keyof IconNameMap
  ? IconNameMap[C]
  : string;

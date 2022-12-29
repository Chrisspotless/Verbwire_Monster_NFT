const attributes = {
  monsterNames: [
    'Goblin',
    'Orc',
    'Demon',
    'Troll',
    'Dragon',
    'Giant',
    'Lich',
    'Wraith',
    'Vampire',
    'Werewolf',
  ],
  environment: [
    'Dark Forest',
    'Mountain Range',
    'Underground Cave',
    'Swamp',
    'Desert',
    'Haunted Mansion',
    'Tundra',
    'Jungle',
    'Underwater Kingdom',
    'Volcanic Island',
  ],
  rarity: Array.from(Array(6).keys()),
}
const generateMeta = () => [
  {
    trait_type: 'Environment',
    value: attributes.environment.sort(() => 0.5 - Math.random())[0],
  },
  {
    trait_type: 'Monsters',
    value: attributes.monsterNames.sort(() => 0.5 - Math.random())[0],
  },
  {
    trait_type: 'Rarity',
    value: attributes.rarity.sort(() => 0.5 - Math.random())[0],
    max_value: 10,
  },
  {
    display_type: 'date',
    trait_type: 'Created',
    value: Date.now(),
  },
  {
    display_type: 'number',
    trait_type: 'generation',
    value: 1,
  },
]

exports.generateMeta = generateMeta

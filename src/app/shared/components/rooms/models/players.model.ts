interface Player {
  number: number;
  name: string;
  selected?: boolean;
}

const players: Array<Player> = [
  {
    number: 1,
    name: 'Courtois'
  },
  {
    number: 2,
    name: 'Carvajal',
  },
  {
    number: 3,
    name: 'Militao'
  },
  {
    number: 4,
    name: 'Alaba'
  },
  {
    number: 5,
    name: 'Bellingham'
  },
  {
    number: 6,
    name: 'Camavinga'
  },
  {
    number: 7,
    name: 'Vinicius'
  },
  {
    number: 8,
    name: 'Valverde'
  },
  {
    number: 9,
    name: 'Mbappe'
  },
  {
    number: 10,
    name: 'Modric'
  },
  {
    number: 11,
    name: 'Rodrygo'
  }
];

export {
  Player,
  players
}
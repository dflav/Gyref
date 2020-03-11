export const exercises = [
  {
    name: 'Barbell Bench Press',
    type: 'Strength',
    main: 'Chest',
    other: 'Triceps, Shoulders',
    mechanics: 'Compound',
    difficulty: 'Beginner',
    equipment: ['Barbell'],
    image: '/images/flat-bench-press.jpg',
    description: 'blah'
  },
  {
    name: 'Dips',
    type: 'Strength',
    main: 'Chest',
    other: 'Triceps, Shoulders',
    mechanics: 'Compound',
    difficulty: 'Beginner',
    equipment: ['Body weight', 'Plate'],
    image: '/images/dips.jpg',
    description: 'blah'
  },
  {
    name: 'Incline Chest Flys',
    type: 'Strength',
    main: 'Chest',
    other: 'Triceps, Shoulders',
    mechanics: 'Isolation',
    difficulty: 'Beginner',
    equipment: ['Dumbbell'],
    image: '/images/incline-chest-fly.jpg',
    description: 'blah'
  }
];

export const menuTypes = {
  Chest: {
    image: '/images/chest.jpg',
    type: 'Muscles',
    info:
      'To build a big chest you have to target the chest muscles from different angles.Both incline, decline and flat exercises help for building big and strong pecks targeting the muscles from every angle.'
  },
  Back: {
    image: '/images/back.jpg',
    type: 'Muscles'
  },
  Arm: {
    image: '/images/arms.jpg',
    type: 'Muscles'
  },
  Shoulder: {
    image: '/images/shoulder.jpg',
    type: 'Muscles'
  },
  Quad: {
    image: '/images/quad.jpeg',
    type: 'Muscles'
  },
  Calf: {
    image: '/images/calves.jpg',
    type: 'Muscles'
  },
  Ab: {
    image: '/images/abs.jpeg',
    type: 'Muscles'
  },
  Forearm: {
    image: '/images/forearm.jpg',
    type: 'Muscles'
  },
  Hamstring: {
    image: '/images/hamstrigs.jpg',
    type: 'Muscles'
  },
  Barbell: {
    image: '/images/Barbell.jpg',
    type: 'Equipment'
  },
  Dumbbell: {
    image: '/images/dumbbell.jpg',
    type: 'Equipment'
  },
  'Body weight': {
    image: '/images/bodyw.jpg',
    type: 'Equipment'
  },
  Bench: {
    image: '/images/bench.jpg',
    type: 'Equipment'
  },
  'Pull-up bar': {
    image: '/images/pullbar.jpeg',
    type: 'Equipment'
  },
  Machine: {
    image: '/images/machines.jpg',
    type: 'Equipment'
  },
  Cable: {
    image: '/images/cable.jpg',
    type: 'Equipment'
  },
  Plate: {
    image: '/images/plates.jpg',
    type: 'Equipment'
  },
  Compound: {
    image: '/images/compound.jpg',
    type: 'Type'
  },
  Isolation: {
    image: '/images/isolation.jpg',
    type: 'Type'
  }
};

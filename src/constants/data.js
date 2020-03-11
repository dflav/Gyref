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
    description: [
      'Lie with your back flat on a bench with your feet  on the ground and the bar resting on the bench’s rack.',
      'Retract scapula and keep elbows between 45 to 90 degree angle. You should tuck the shoulders into the sockets and lift your chest up to avoid injures.',
      'Slowly lift the bar off the rack and hold it above your chest with arms extended. This will be the starting position.',
      'Breathe in and lower the bar down to the middle chest.',
      'Then from the bottom push the bar up to the starting position squeezing the chest',
      'Repeat for reps.'
    ]
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
    description: ['bluh']
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
    description: ['blah']
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

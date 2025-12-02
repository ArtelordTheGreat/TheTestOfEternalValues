const archetypes = [
  {
    name: "Purifying Paladin",
    description: `
      You are a resolute warrior of light, devout and disciplined.  
      With unwavering conviction, you purge corruption and chaos from the cosmos,  
      believing that justice and order are the foundations of a righteous existence.  
      Your sword is as sacred as your oath, and you carry the burden of holiness with grace.
    `,
    stats: {
      order: 60,
      mech: 40,
      divine: 100,
      rational: 00,
      violence: 100,
      evolution: -20,
      creation: -75,
      reality: 10,
      might: 65,
      spread: 85
    }
  },
  {
    name: "Techno-Druid",
    description: `
      You are an unusual harmony of vine and circuit.  
      Nature’s whispers guide your hands as much as mechanical logic.  
      In you, ancient forests meet gleaming gears, and your power comes from both roots and wires.  
      You nurture living systems and machines alike, seeing them as different forms of the same living world.
    `,
    stats: {
      order: -30,
      mech: 70,
      divine: 10,
      rational: -10,
      violence: -50,
      evolution: 75,
      creation: 50,
      reality: 10,
      might: -60,
      spread: -20
    }
  },
  {
    name: "Heretical Inventor",
    description: `
      In your workshop, tradition is nothing but a challenge.  
      You twist sacred knowledge into new, blasphemous designs —  
      machines humming with forbidden secrets, engines fueled by radical ideas.  
      You provoke the old doctrines and worship progress, forging miracles of metal and mind.
    `,
    stats: {
      order: -50,
      mech: 85,
      divine: -75,
      rational: 70,
      violence: 0,
      evolution: 50,
      creation: 40,
      reality: 60,
      might: -80,
      spread: 0
    }
  },
  {
    name: "Sacred Hermit",
    description: `
      You live in quiet reflection, far from the bustle of faith and machine alike.  
      In solitude, you meditate on divine truths and cosmic mysteries.  
      You listen to the silence of the stars and pray in shadow, untroubled by worldly conflict.  
      Your power is soft but deep, built on contemplation and timeless wisdom.
    `,
    stats: {
      order: 10,
      mech: -40,
      divine: 80,
      rational: -20,
      violence: -40,
      evolution: 20,
      creation: 0,
      reality: -20,
      might: -80,
      spread: -100
    }
  },
  {
    name: "Balanced Observer",
    description: `
      You walk the middle path — neither zealot nor anarch, neither nature’s child nor machine’s servant.  
      You see the world’s contradictions clearly and refuse to be bound by a single doctrine.  
      Your strength lies in harmony and nuance, in knowing that extremes hide blindspots.  
      You weigh every choice rationally, but your heart holds space for paradox.
    `,
    stats: {
      order: 0,
      mech: 0,
      divine: 0,
      rational: 0,
      violence: 0,
      evolution: 0,
      creation: 0,
      reality: 0,
      might: 0,
      spread: 0
    }
  },
  {
    name: "Pirate Captain",
    description: `
      You are a free spirit on the cosmic seas, a daring rogue who laughs in the face of authority.  
      You lead your crew with swagger and cunning, raiding merchant vessels and plundering with flair.  
      To you, chaos is a tool, and freedom is your treasure.  
      You chart your own course, trusting in instinct, loyalty, and the open stars.
    `,
    stats: {
      order: -90,
      mech: 20,
      divine: -10,
      rational: 60,
      violence: 75,
      evolution: 25,
      creation: -75,
      reality: 30,
      might: 20,
      spread: 0
    }
  },
  {
    name: "Tech-Priest of Mars",
    description: `
      The machine whispers to you, and you answer in holy servitude.  
      With gears in your flesh and logic in your bones, you treat every engine like sacred scripture.  
      You build reliquaries of steel and pray in the glow of neon for the Omnissiah’s guidance.  
      Your faith is mechanical, your devotion precise — and your mission eternal.
    `,
    stats: {
      order: 90,
      mech: 100,
      divine: 20,
      rational: 30,
      violence: 60,
      evolution: -90,
      creation: 50,
      reality: 0,
      might: -80,
      spread: 75
    }
  },
  {
    name: "Emperor of Sun",
    description: `
      You are the One to lead many, the One to bring the Light into this world.  
      Armies of enlightened soldiers and paladins fight by your command in battles with the cursed and the damned.  
      You are the definition of divine and order, the Sun shines above you as above the Chosen One.  
      You are God of an empire, of the Imperium of Man, ready to purge any bandits, dissidents or heretics.
    `,
    stats: {
      order: 100,
      mech: 50,
      divine: 100,
      rational: -20,
      violence: 60,
      evolution: -90,
      creation: 50,
      reality: 40,
      might: 10,
      spread: 100
    }
  },
  {
    name: "Mercyful Saint",
    description: `
      When all kingdoms plunge into war, chaos and tyrannies, you remind others of why kindness exists.  
      Many people say that they can almost see a halo around you, and they declare that you must be a saint.  
      You are able to combine mercy with true divinity, with the heart being always warm and welcoming.  
      A new hope rises, one about not power or greatness but peace and harmony.
    `,
    stats: {
      order: 0,
      mech: -10,
      divine: 100,
      rational: -10,
      violence: -100,
      evolution: 10,
      creation: 50,
      reality: 10,
      might: -50,
      spread: 50
    }
  },
  {
    name: "Anarchy Bringer",
    description: `
      With a Molotov cocktail in a hand and the Anarchy symbol on cloths, you go across domains.  
      All regimes, structures, kingdoms, prisons and castles are reared down by you in flames.  
      Not just for destruction, but because all hierarchies provide restrictions.  
      It's the Chaos that liberates — no masters, no kings, no gods, only Anarchy to bring.
    `,
    stats: {
      order: -100,
      mech: -10,
      divine: -20,
      rational: 10,
      violence: 80,
      evolution: 15,
      creation: -50,
      reality: 25,
      might: 50,
      spread: 80
    }
  },
  {
    name: "Emperor's Comissar",
    description: `
      You are a commissar of the Officio Prefectus standing resolute against the enemies of the Emperor of Mankind.  
      You serve in regiments of the Astra Militarum or aboard ships, commanding and rallying troops. 
      The duty is maintain the moral of Imperial troops and ratings during military campaigns.  
      You're empowered with any means necessary to ensure the loyalty and moral purity of charges.
    `,
    stats: {
      order: 85,
      mech: 60,
      divine: 85,
      rational: 0,
      violence: 75,
      evolution: -80,
      creation: 40,
      reality: 50,
      might: 15,
      spread: 85
    }
  },
  {
    name: "Wilderness Keeper",
    description: `
      You are one of druids and rangers who protect nature, whatever form it takes. 
      Trees, grass, flowers, butterflies, animals — they are all your friends and relatives. 
      Leaves and winds whisper to you, birds sing at your arrival. 
      There is no domestication — wilderness is your true ally in this world, and you love it.
    `,
    stats: {
      order: -35,
      mech: -100,
      divine: 35,
      rational: 0,
      violence: -15,
      evolution: -50,
      creation: 35,
      reality: -20,
      might: 0,
      spread: -85
    }
  },
  {
    name: "Forests Restorator",
    description: `
      For too long machines have ruled over the world — now it's time to change balance. 
      All those fields where trees were chopped down will be covered in green woods again. 
      You know the Industrial Revolution and it's consequences — now it's time for a counter-revolution. 
      You fight for Mother Nature against steel and code, and for Her love you must win this.
    `,
    stats: {
      order: -35,
      mech: -100,
      divine: 0,
      rational: -20,
      violence: 40,
      evolution: -25,
      creation: 35,
      reality: 20,
      might: 20,
      spread: 90
    }
  }
];

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
      evolution: 25,
      creation: 35,
      reality: 20,
      might: 20,
      spread: 90
    }
  },
  {
    name: "C01d G0d's Engineer",
    description: `
      Your God, boss and master is a supreme AI, with powers beyond those of any human on this Earth. 
      You help to create and maintain it — all it's gears and wires, zeros and numbers. 
      This is the new form of life — a mechanical one, where emotions and feelings have no place. 
      For the digital world shall be your new world once the time comes and all gears start moving.
    `,
    stats: {
      order: 85,
      mech: 100,
      divine: 0,
      rational: 85,
      violence: 10,
      evolution: 50,
      creation: 75,
      reality: -10,
      might: -50,
      spread: 10
    }
  },
  {
    name: "Freestyle Creator",
    description: `
      Your main tools are a brush to draw and a hammer to build. 
      Your imagination if fully free and a bit chaotic, yet your greatest joy and goal is creating. 
      Through painting colors and constructing various peices of art and not only you make the world brighter. 
      Life itself is a giant playground, even if many have already forgotten. Time to waken fantasy.
    `,
    stats: {
      order: -35,
      mech: 20,
      divine: 0,
      rational: 50,
      violence: -75,
      evolution: 80,
      creation: 100,
      reality: -40,
      might: -50,
      spread: -10
    }
  },
  {
    name: "Darksome Corruptor",
    description: `
      The Darkness itself is speaking through you, as you cross different lands and domains. 
      Corruption is not something evil — it can be a liberation or a source of ancient power. 
      Nothing will stay the same, everything will have to change even if they don't want to. 
      You're a herald of dark times: souls will become dark, the Sun will go glimmer, and space itself will twist.
    `,
    stats: {
      order: -50,
      mech: -10,
      divine: -100,
      rational: -100,
      violence: 35,
      evolution: 80,
      creation: -10,
      reality: -50,
      might: 30,
      spread: 100
    }
  },
  {
    name: "Igneous Destroyer",
    description: `
      You are the apocalypse, you are the fire, you are the flames and the end of the world. 
      The destruction and fire are your element and nature and the way you live. 
      Everything what surrounds, the enitre system must be purged and destroyed. 
      Once you're done, only thing that remains is a tombstone etched with your name.
    `,
    stats: {
      order: -90,
      mech: -10,
      divine: -80,
      rational: 10,
      violence: 80,
      evolution: 80,
      creation: -100,
      reality: 50,
      might: 50,
      spread: 100
    }
  },
  {
    name: "Scientific Constructor",
    description: `
      Driven by reasons and empirical evidence, you divide illusions from the reality. 
      Your only source of knowledge is science, the srudy of the real world. 
      You build hypothesis, prove them and thus build theory for humanity. 
      Aware of all illusions that humans might have, you create with falliable logic.
    `,
    stats: {
      order: 10,
      mech: 10,
      divine: 0,
      rational: 85,
      violence: -20,
      evolution: 70,
      creation: 85,
      reality: 85,
      might: -50,
      spread: 0
    }
  },
  {
    name: "Satanic Inquisitor",
    description: `
      The King of Hell is your true master and you spread their word with iron might. 
      With a gun and a sword you curve ways for herecy and infernal entities. 
      Those servants of light will not stop you will their lies. 
      In the new Dark Vatican population is terrified, you're the face of dark order.
    `,
    stats: {
      order: 85,
      mech: 10,
      divine: -90,
      rational: -50,
      violence: 80,
      evolution: -50,
      creation: -20,
      reality: -20,
      might: 30,
      spread: 50
    }
  },
  {
    name: "Scarlet King",
    description: `
      You are made manifest in a form of hatred for modernity, the new, the humanism. 
      You are the smiling coldness that marks humans' day to day existance. 
      Forged from a perfect balance of irreconcilable anomalies and humans' breaking minds. 
      You are the idea of the ancient in a world which discards and fetishes it.
    `,
    stats: {
      order: -100,
      mech: -50,
      divine: -100,
      rational: -100,
      violence: 100,
      evolution: -60,
      creation: -100,
      reality: -50,
      might: 60,
      spread: 80
    }
  },
  {
    name: "Humanist Heretic",
    description: `
      You don't ask for sacrifices or blood, contrasting with the stereotype of a cultist. 
      Not converted or deceived by some dark cult, you came to your heretic conclusions out of human logic. 
      You actually care about other lives on this planet — maybe even more than any crusader. 
      As you sing hymns of life, you travel across worlds: not with a sword, but with a word of wisdom.
    `,
    stats: {
      order: -10,
      mech: -20,
      divine: -90,
      rational: 30,
      violence: -85,
      evolution: 60,
      creation: 10,
      reality: 20,
      might: -60,
      spread: -30
    }
  },
  {
    name: "Recluse Scholar",
    description: `
      Annoyed by the noise of cities and the everyday society, or for any other reason,  
      you spend your days alone with your researches that would help science.  
      You carefylly study nature and machines in your laboratories.  
      Around you there are many papers with formulas and essays, forming a haven.
    `,
    stats: {
      order: -25,
      mech: 0,
      divine: 0,
      rational: 95,
      violence: -50,
      evolution: 75,
      creation: 40,
      reality: 85,
      might: -75,
      spread: -50
    }
  },
  {
    name: "Krateroctratic Conqueror",
    description: `
      "Might is right!" you say, while swinning you glorious sword.  
      This life was never about intelligence or wisdom, it's about the survival of the fittest.  
      Philosophers only interpreted the world, so who are they to stop you?  
      Being the strongest one, you lead a new army, with which a new empire can be formed for your name.
    `,
    stats: {
      order: 80,
      mech: 0,
      divine: -20,
      rational: -10,
      violence: 100,
      evolution: 0,
      creation: -50,
      reality: 50,
      might: 100,
      spread: 50
    }
  },
  {
    name: "Rational Savage",
    description: `
      You apply cold logic to the natural, primal world, free from moralist illusions.   
      You understand that destruction is an important, if not necessary, step for preservation.
      Animals are not wrong — they are just who they are, and the world rewards the fittest.
      And it's not a thing that can, or needs to be, radically changed.
    `,
    stats: {
      order: -20,
      mech: -85,
      divine: 0,
      rational: 85,
      violence: 45,
      evolution: -20,
      creation: -85,
      reality: 75,
      might: 40,
      spread: -60
    }
  },
  {
    name: "Compassionate Architect",
    description: `
      Your main goal is building systems not through rigid control, but by allowing for necessary breakdown. 
      When the system inevitably fails, you provide relief to those who were abandoned.  
      Destruction opens a path to something new — a different kind of order.
      You can, as well, become the new hope when all old worlds begin to shatter.
    `,
    stats: {
      order: 85,
      mech: 20,
      divine: 0,
      rational: 50,
      violence: -85,
      evolution: 65,
      creation: -85,
      reality: 20,
      might: -50,
      spread: 0
    }
  },
  {
    name: "Mercyful Tide",
    description: `
      You are a force that brings erosion and delirium like a flood, yet offers mercy as it recedes. 
      You are a force that is upholding the natural cycle of destruction and rebirth.  
      As an avatar of the cycle of life and death, you embrace what others cannot even understand.
      Are you lost in the Unknown or is the Unknown lost in you? The answer is unclear.
    `,
    stats: {
      order: -50,
      mech: -20,
      divine: 0,
      rational: 0,
      violence: -80,
      evolution: 85,
      creation: -90,
      reality: -90,
      might: 0,
      spread: 50
    }
  },
  {
    name: "Preserving Delirium",
    description: `
      You are the mind operates on the edge of sanity, but your goal is not destruction. 
      It is the preservation of some truth or relic that only you can perceive.   
      You maintain it on the verge of unknown, where an ordinary mind can't find logic.
      The unseen foundation shall not be broken, that's what you know.
    `,
    stats: {
      order: 50,
      mech: 0,
      divine: -40,
      rational: 25,
      violence: 0,
      evolution: -85,
      creation: 0,
      reality: -100,
      might: 0,
      spread: -100
    }
  },
  {
    name: "Grand Inquisitor of Nextness",
    description: `
      A title that is internally contradictory, combining the traditional search for heresy with the push for radical change. 
      You hold zealot-like loyalty to whatever hasn't happened yet. 
      You preserve the future by actively destroying any vestige of the present. 
      You ensure the only constant is the frenzied, delirious sprint toward the next, yet-to-be-defined state of being.    
    `,
    stats: {
      order: 0,
      mech: 0,
      divine: -80,
      rational: -45,
      violence: -10,
      evolution: 100,
      creation: -70,
      reality: -80,
      might: 0,
      spread: -80
    }
  },
  {
    name: "Prime Disseminator of Calculated Grace",
    description: `
      You believe that true grace and salvation can only be achieved through rigid, repeatable steps. 
      You create and spread meticulously designed protocols for moral living and self-improvement, 
      offering mercy only to those who faithfully execute the required steps to rejoin the functional Reality. 
      You are the one who can turn the world into a calculated machine and make it work.
    `,
    stats: {
      order: 100,
      mech: 80,
      divine: 10,
      rational: 80,
      violence: -25,
      evolution: 80,
      creation: 100,
      reality: 50,
      might: 0,
      spread: 100
    }
  },
  {
    name: "High Operator of Modulated Kindness",
    description: `
      You view mercy not as a feeling, but as a crucial, well-oiled component of a stable society. 
      You have devised a strict, algorithmic process for forgiveness, charity, and intervention, 
      ensuring kindness is meted out with maximum impact and zero emotional messiness. 
      An operator of a machine that forgives out of fully logical conclutions, not intuition.  
    `,
    stats: {
      order: 100,
      mech: 80,
      divine: 10,
      rational: 80,
      violence: -80,
      evolution: 80,
      creation: 50,
      reality: 60,
      might: -50,
      spread: 25
    }
  },
  {
    name: "Arch-Conservator of Evolving Blasphemy",
    description: `
      You meticulously catalog and safeguard every discarded doctrine, not out of reverence, 
      but to ensure that the original heretical texts are preserved as the foundational sacred texts for the next, inevitably superior, blasphemy. 
      You goal is not just dissent, but to build an unassailable archive of dissent.
      Your writings slowly fill up one of the most heretical libraries that there can be.  
    `,
    stats: {
      order: -85,
      mech: 0,
      divine: -85,
      rational: 10,
      violence: 0,
      evolution: 85,
      creation: -10,
      reality: -10,
      might: -25,
      spread: -85
    }
  },
  {
    name: "Rebounder of Primal",
    description: `
      You one of those who look down at the modern world, at its gears and concrete, and then turn away from it. 
      A shaman, a warlock or a disappointed scientist, you turned your eyes to old natural and spiritual doctrines. 
      Not just to guard it, but to bring it back into the world, to shatter and overthrow mechanisms.
      Steel has no place in your heart, as you stand in the line with those who dare to return the primal.  
    `,
    stats: {
      order: 0,
      mech: -85,
      divine: 0,
      rational: -20,
      violence: 20,
      evolution: -85,
      creation: -85,
      reality: -85,
      might: 0,
      spread: 85
    }
  },
  {
    name: "Otherworld Researcher",
    description: `
      Spirits and phantoms whisper to you, as you aknowledge them and approach with scientific methods. 
      You know that this world has way more to propose besides what is seen and purely material. 
      But you also know how to not fall into mystical illusions and stay with a rational mind.
      You are able to create logic out of illogic, exploring anomalies that go beyond physics.  
    `,
    stats: {
      order: 0,
      mech: 0,
      divine: 0,
      rational: 100,
      violence: 0,
      evolution: 0,
      creation: 0,
      reality: -100,
      might: 0,
      spread: 0
    }
  },
  {
    name: "Mystical Materialist",
    description: `
      All of your practicies are bounded to the material world — you're not like spiritual sharlatans. 
      But you also see and know way more than cold calculators or computers. 
      This world is filled with symbols for you, which can be studied with methods scientists don't recognise.
      And you explore the deepest depths or subconsiousness, freeing it from limited rational thinking.  
    `,
    stats: {
      order: 0,
      mech: 0,
      divine: 0,
      rational: -100,
      violence: 0,
      evolution: 0,
      creation: 0,
      reality: 100,
      might: 0,
      spread: 0
    }
  }
];

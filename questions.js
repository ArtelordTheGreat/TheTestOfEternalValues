let questions = [
  {
    question: "Only through structure can the universe sing in harmony.",
    effect: { order: 5 } //order
  },
  {
    question: "Only through iron discipline we will be able to overcome what's ahead of us.",
    effect: { order: 5 }
  },
  {
    question: "Without unbroken structure, even the most beautiful creation is nothing but drifting ash.",
    effect: { order: 5 }
  },
  {
    question: "A world ruled by rigid laws and circuit-straight lines is superior to one born from roaring storms and unpredictable tides.",
    effect: { order: 5 }
  },
  {
    question: "We must throw away personal impulses for the sake of being organised.",
    effect: { order: 5 }
  },
  {
    question: "Society built on chaos, free-formed and wild, better reflects the true nature of reality than any carved statute.",
    effect: { order: -5 } //chaos
  },
  {
    question: "The only way to be free and happy is to don't follow rules that others made.",
    effect: { order: -5 }
  },
  {
    question: "Live by your own pace and desire and then you'll find harmony.",
    effect: { order: -5 }
  },
  {
    question: "This life should be lived through by doing only what you feel like doing.",
    effect: { order: -5 }
  },
  {
    question: "Laws keep us restricted - it's better to abolish them and free inner avarity.",
    effect: { order: -5 }
  },
  {
    question: "Flesh is weak, mankind must use more steel instead.",
    effect: { mech: 5 } //mechanism
  },
  {
    question: "If we want to become immortal or to live longer, we have to embrace transhumanism.",
    effect: { mech: 5 }
  },
  {
    question: "Gears, pistons and metal contraptions are the highest expression of progress; nature is overrated sentimental fluff.",
    effect: { mech: 5 }
  },
  {
    question: "It is nobler to build a city of shining steel than to kneel and plant seeds in crumbling soil.",
    effect: { mech: 5 }
  },
  {
    question: "Humanity should forge its own future out of code and metal.",
    effect: { mech: 5 }
  },
  {
    question: "Rust and vines are both forms of growth.",
    effect: { mech: -5 } //nature
  },
  {
    question: "Humans are children of Mother Nature and we should stay loyal to here.",
    effect: { mech: -5 }
  },
  {
    question: "Wild forests, rivers and living soil embody truths machines can never reach.",
    effect: { mech: -5 }
  },
  {
    question: "In harmony and synthesis with nature we will find a better life.",
    effect: { mech: -5 }
  },
  {
    question: "The closer a person to trees, grass and animals is, the better his or her life is.",
    effect: { mech: -5 }
  },
  {
    question: "To reach Heaven or inner peace one must follow divinity.",
    effect: { divine: 5 } //divine
  },
  {
    question: "The reason we perish is all sins that we did.",
    effect: { divine: 5 }
  },
  {
    question: "Any person becomes better when they confess and turn to the light.",
    effect: { divine: 5 }
  },
  {
    question: "True power flows from sacred skies and divine decree, not human will.",
    effect: { divine: 5 }
  },
  {
    question: "All saints are people who did something incredible and marvelous.",
    effect: { divine: 5 }
  },
  {
    question: "To defy the divine is to embrace freedom.",
    effect: { divine: -5 } //heretic
  },
  {
    question: "Heretics are not wrongful — they are challengers of oppressors.",
    effect: { divine: -5 }
  },
  {
    question: "We must reject all divine superstition — heresy is the first step toward true enlightenment.",
    effect: { divine: -5 }
  },
  {
    question: "Satan is the first freethinker and the emancipator of worlds.",
    effect: { divine: -5 }
  },
  {
    question: "Questioning the divine is the highest act of faith in one’s own nature.",
    effect: { divine: -5 }
  },
  {
    question: "Science can explain anything in the world if given enough time.",
    effect: { rational: 5 } //rational
  },
  {
    question: "A statement is true only if proved by logic and evidence.",
    effect: { rational: 5 }
  },
  {
    question: "Better to rule one’s mind with iron will than wander lost through dreams.",
    effect: { rational: 5 }
  },
  {
    question: "Emotions can drive us off but we must stay with rationality.",
    effect: { rational: 5 }
  },
  {
    question: "Pure logic, mathematics and reason are the only trustworthy guides; all mystic babble is foolishness.",
    effect: { rational: 5 }
  },
  {
    question: "Instinct is wiser than calculation.",
    effect: { rational: -5 } //irrational
  },
  {
    question: "Emotions and faith can also be sources of knowledge.",
    effect: { rational: -5 }
  },
  {
    question: "Hidden signs, arcane rituals and whispers between worlds hold more truth than any dry calculation.",
    effect: { rational: -5 }
  },
  {
    question: "To gain deeper understanding of the world one should turn to unconscious processes.",
    effect: { rational: -5 }
  },
  {
    question: "An equation may describe a star — but only mysteries can summon its soul.",
    effect: { rational: -5 }
  },
  {
    question: "You won't win the war if you hold onto non-violence.",
    effect: { violence: 5 } //violence
  },
  {
    question: "Strength and ruthlessness are necessary to carve order from chaos.",
    effect: { violence: 5 }
  },
  {
    question: "The sword that strikes once to stop suffering is kinder than mercy that lets suffering linger.",
    effect: { violence: 5 }
  },
  {
    question: "To bring a major change to this universe or protect the good, blood has to be spilled.",
    effect: { violence: 5 }
  },
  {
    question: "Mercy is a chain — sometimes the chain must break to let the mighty walk free.",
    effect: { violence: 5 }
  },
  {
    question: "If you're as violent as your opponents are, you are not better than them.",
    effect: { violence: -5 } //mercy
  },
  {
    question: "Compassion can make people change their alignment and become better.",
    effect: { violence: -5 }
  },
  {
    question: "A world of eternal peace is possible and this is what we should strive for.",
    effect: { violence: -5 }
  },
  {
    question: "Mercy even in victory is the sign of a civilized society; violence is for savages.",
    effect: { violence: -5 }
  },
  {
    question: "Even the worst ones deserve a chance to change.",
    effect: { violence: -5 }
  },
  {
    question: "Nothing in this world is flawless — there is always a place for improvement.",
    effect: { evolution: 5 } //evolution
  },
  {
    question: "Change, growth and transformation are the only proofs of life — stagnation is death.",
    effect: { evolution: 5 }
  },
  {
    question: "Life is like riding a bicycle — if you stop, you might as well fall over.",
    effect: { evolution: 5 }
  },
  {
    question: "The only way to escape decay is to continue the endless evolution.",
    effect: { evolution: 5 }
  },
  {
    question: "Let the old gods weep — the different future shall rise.",
    effect: { evolution: 5 }
  },
  {
    question: "We must strike for perfection that has nowhere to improve.",
    effect: { evolution: -5 } //stasis
  },
  {
    question: "Preserve traditions, culture, and identity unchanged; evolution leads only to undesirable chaos.",
    effect: { evolution: -5 }
  },
  {
    question: "Once we achieve all our goals, any further change would be adverse.",
    effect: { evolution: -5 }
  },
  {
    question: "A stable foundation endures; ceaseless change destroys everything built on the old.",
    effect: { evolution: -5 }
  },
  {
    question: "The process of reforms and revolutions is not eternal, it will end no matter what evolutionists say.",
    effect: { evolution: -5 }
  },
  {
    question: "When the world burns, I light the forge — from the ashes, I build anew.",
    effect: { creation: 5 } //creation
  },
  {
    question: "We must fully focus on construction, not deconstruction.",
    effect: { creation: 5 }
  },
  {
    question: "The greatest joy that exists is one of creativity.",
    effect: { creation: 5 }
  },
  {
    question: "I’d rather build soaring monuments and new worlds than watch old ruins crumble to dust.",
    effect: { creation: 5 }
  },
  {
    question: "To create from nothing is sacred; to tear down what stands is only for those without visio.",
    effect: { creation: 5 }
  },
  {
    question: "In order to achieve anything, the surrent state of things must be abolished.",
    effect: { creation: -5 } //erosion
  },
  {
    question: "Destruction leads the way, the burning fire illuminates it.",
    effect: { creation: -5 }
  },
  {
    question: "To solve primary problems, we must first destroy what already exists.",
    effect: { creation: -5 }
  },
  {
    question: "Sometimes decay, collapse, and destruction are purifying — erosion clears the old to make space.",
    effect: { creation: -5 }
  },
  {
    question: "Being very destructive is a fine part of our nature.",
    effect: { creation: -5 }
  },
  {
    question: "There is no other dimension beyond the one we're living in.",
    effect: { reality: 5 } //reality
  },
  {
    question: "We must fully focus on the world we're living in, not on dreams or fiction.",
    effect: { reality: 5 }
  },
  {
    question: "The material seen world is our domain, none other is.",
    effect: { reality: 5 }
  },
  {
    question: "I trust waking logic over fevered visions, illusions and hallucinations.",
    effect: { reality: 5 }
  },
  {
    question: "Cold, concrete reality — with its limits and certainties — is more real than any dreamy fantasy.",
    effect: { reality: 5 }
  },
  {
    question: "Dreams are a powerful tools that can unlock the power of the unconscious mind.",
    effect: { reality: -5 } //delirium
  },
  {
    question: "Metaphysics are real and worth exploring deeper.",
    effect: { reality: -5 }
  },
  {
    question: "It is possible to go beyond physical limits.",
    effect: { reality: -5 }
  },
  {
    question: "Delirium, dreamscapes and wild visions reveal truths reality dares not show.",
    effect: { reality: -5 }
  },
  {
    question: "A renewed cultural imagination could achieve moments of rupture and sunbursts.",
    effect: { reality: -5 }
  },
  {
    question: "Might makes right.",
    effect: { might: 5 } //might
  },
  {
    question: "The world is shaped by those who are the strongest.",
    effect: { might: 5 }
  },
  {
    question: "If you have strength, you don't need intelligence.",
    effect: { might: 5 }
  },
  {
    question: "Raw strength — the power of arms and might — is more reliable than any cunning or intellect.",
    effect: { might: 5 }
  },
  {
    question: "Fighters and warriors are most honorable roles, better than civilians.",
    effect: { might: 5 }
  },
  {
    question: "The world is shaped by those who are the smartest.",
    effect: { might: -5 } //intellect
  },
  {
    question: "Knowledge is power.",
    effect: { might: -5 }
  },
  {
    question: "If you know how the world is structured, than you can make big changes even with little effort.",
    effect: { might: -5 }
  },
  {
    question: "True supremacy is not in muscle or might, but in the mind that wields it.",
    effect: { might: -5 }
  },
  {
    question: "Wisdom, strategy and intellect rule over brute force; the brain is stronger than the sword.",
    effect: { might: -5 }
  },
  {
    question: "Spread our ideals, culture and power across the world — expansion is the destiny of greatness.",
    effect: { spread: 5 } //spread
  },
  {
    question: "We must care of citizens abroad as much as of our own.",
    effect: { spread: 5 }
  },
  {
    question: "Interventions in other countries are justified even if they have high costs.",
    effect: { spread: 5 }
  },
  {
    question: "We must fight for our values across the entire world, not just our home.",
    effect: { spread: 5 }
  },
  {
    question: "We can rest only once we have spread our ideas across the Universe.",
    effect: { spread: 5 }
  },
  {
    question: "Even if growth and outreach are noble, maintaining purity at home matters more.",
    effect: { spread: -5 } //preserve
  },
  {
    question: "It's better to keep what we already have than to try to expand.",
    effect: { spread: -5 }
  },
  {
    question: "If there is too much injustice around your home, just build walls to not see it.",
    effect: { spread: -5 }
  },
  {
    question: "We must care about ourselves first of all, not about geopolitical neighbours.",
    effect: { spread: -5 }
  },
  {
    question: "Preserve our traditions, heritage and identity; spreading too far dilutes our soul.",
    effect: { spread: -5 }
  }
];

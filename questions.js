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
    question: "In order there is strength, it is what gives both power and peace.",
    effect: { order: 5 }
  },
  {
    question: "Strict rules must be set in place and be followed.",
    effect: { order: 5 }
  },
  {
    question: "We must throw away personal impulses for the sake of being organised.",
    effect: { order: 5 }
  },
  {
    question: "It is better to act not according to plans, but to momentary impulses that push you.",
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
    question: "If we want to become immortal or to live longer, we have embrace transhumanism.",
    effect: { mech: 5 }
  },
  {
    question: "It is a good thing if the mankind keeps on replacing everything with machines.",
    effect: { mech: 5 }
  },
  {
    question: "Artificial constructs are trustworthy and better tools of mankind.",
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
    question: "Plants and animals are our relatives - they also should have rights.",
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
    question: "One who serves the greater good becomes a good person.",
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
    question: "Heretics are not wrongful - they're challenging oppressors.",
    effect: { divine: -5 }
  },
  {
    question: "Power comes to those who dare to challenge morals.",
    effect: { divine: -5 }
  },
  {
    question: "Satan is the first freethinker and the emancipator of worlds.",
    effect: { divine: -5 }
  },
  {
    question: "Sins are our strikes to be what we want to be and rightful acts.",
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
    question: "To achieve anything we must stay rational when making decisions.",
    effect: { rational: 5 }
  },
  {
    question: "Emotions can drive us off but we must stay with rationality.",
    effect: { rational: 5 }
  },
  {
    question: "We should not trust what cannot be explained logically.",
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
    question: "Reason and empirical evidence alone are not enough to explain everything.",
    effect: { rational: -5 }
  },
  {
    question: "To gain deeper understanding of the world one should turn to unconscious processes.",
    effect: { rational: -5 }
  },
  {
    question: "Truth is not universal but subjective and individual.",
    effect: { rational: -5 }
  },
  {
    question: "You won't win any battle if you hold onto non-violence.",
    effect: { violence: 5 } //violence
  },
  {
    question: "Slaughter is justified if it's done for a good cause.",
    effect: { violence: 5 }
  },
  {
    question: "In this world you must kill to not be killed.",
    effect: { violence: 5 }
  },
  {
    question: "To bring a major change to this universe or protect the good, blood has to be spilled.",
    effect: { violence: 5 }
  },
  {
    question: "If you truly want to achieve something, you must not be afraid to use violence.",
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
    question: "True victory is obtained not throught slaying enemies but through forgiving them.",
    effect: { violence: -5 }
  },
  {
    question: "Even the worst ones deserve a chance to change.",
    effect: { violence: -5 }
  },
  {
    question: "Nothing in this world is flawless - there is always a place for improvement.",
    effect: { evolution: 5 } //evolution
  },
  {
    question: "What doesn't change is not alive, life always moves.",
    effect: { evolution: 5 }
  },
  {
    question: "Life is like riding a bicycle - if you stop, you fall over.",
    effect: { evolution: 5 }
  },
  {
    question: "The only way to escape decay is to continue the evolution.",
    effect: { evolution: 5 }
  },
  {
    question: "There can be no Utopia, every system is just another step of the ladder.",
    effect: { evolution: 5 }
  },
  {
    question: "We must strike for perfection that has nowhere to improve.",
    effect: { evolution: -5 } //stasis
  },
  {
    question: "Once we're done, the world will be perfect as it is.",
    effect: { evolution: -5 }
  },
  {
    question: "Once we achieve all our goals, any further change would be adverse.",
    effect: { evolution: -5 }
  },
  {
    question: "One day all social conflicts and problems will be solved.",
    effect: { evolution: -5 }
  },
  {
    question: "The process of reforms and revolutions is not eternal, it will end.",
    effect: { evolution: -5 }
  },
  {
    question: "Problems should be solved by creating something new.",
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
    question: "The best people in the world are creators.",
    effect: { creation: 5 }
  },
  {
    question: "The greatest act that there can be is bringing something into existance.",
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
    question: "To solve main problems, we must attempt to destroy what exists.",
    effect: { creation: -5 }
  },
  {
    question: "What we live in must be shredded into pieces.",
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
    question: "Thoughts are no use if they don't lead to actions in the real world.",
    effect: { reality: 5 }
  },
  {
    question: "Idealisation of certain aspects of the world is dangerous or useless.",
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
    question: "Metaphysics are real and worth exploring deeper.",
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
    question: "The sword and the hammer are main tools of achieving our goals.",
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
    question: "The smartest ones must inherit the Earth.",
    effect: { might: -5 }
  },
  {
    question: "The world is shaped by those who have intelligence.",
    effect: { might: -5 }
  },
  {
    question: "It is our duty to liberate others all across the world.",
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
    question: "It is never important what happens abroad unless it touches us.",
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
    question: "The best solution would be to isolate our home from the outside.",
    effect: { spread: -5 }
  }
];

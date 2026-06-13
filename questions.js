let questions = [
  {
    question: "Only through structure can the universe sing in harmony.",
    effect: { order: 5 } //order
  },
  {
    question: "Iron discipline will allow us to overcome what is ahead of us.",
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
    question: "Laws are necessary for society to function.",
    effect: { order: 5 }
  },
  {
    question: "Society that is free-formed and wild, better reflects the true nature of reality than any carved statute.",
    effect: { order: -5 } //chaos
  },
  {
    question: "Rules should be followed only if they align with personal values.",
    effect: { order: -5 }
  },
  {
    question: "Live by your own pace and desire, that is the best option you have.",
    effect: { order: -5 }
  },
  {
    question: "Personal freedom should not be limited by artificial structures.",
    effect: { order: -5 }
  },
  {
    question: "Social and legal pyramids that restrict us must be abolished.",
    effect: { order: -5 }
  },
  {
    question: "Flesh is weak, mankind can progress forward only by becoming steel.",
    effect: { mech: 5 } //mechanism
  },
  {
    question: "To become immortal or even just to live longer, we have to take transhumanism and its products.",
    effect: { mech: 5 }
  },
  {
    question: "Gears, pistons and metal contraptions are the highest expression of progress; nature is often romanticized and limits human progress.",
    effect: { mech: 5 }
  },
  {
    question: "It is nobler to build a city of shining steel than to kneel and plant seeds in crumbling soil.",
    effect: { mech: 5 }
  },
  {
    question: "Humanity should forge its own future out of code and metal, concrete and robots.",
    effect: { mech: 5 }
  },
  {
    question: "Rust and vines are both forms of growth.",
    effect: { mech: -5 } //nature
  },
  {
    question: "Humans are children of Mother Nature and we should stay loyal to her.",
    effect: { mech: -5 }
  },
  {
    question: "Wild forests, rivers and living soil embody truths machines can never reach.",
    effect: { mech: -5 }
  },
  {
    question: "In harmony and synthesis with nature we will find better life.",
    effect: { mech: -5 }
  },
  {
    question: "Animals and plants are better friends to us than cold machines.",
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
    question: "Saints are people who did something incredible and marvelous.",
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
    question: "Figures cast as ‘rebels’ or ‘fallen’ often represent necessary challengers to authority.",
    effect: { divine: -5 }
  },
  {
    question: "Questioning the divine is the highest act of faith in one’s own nature.",
    effect: { divine: -5 }
  },
  {
    question: "In principle, science can explain most phenomena given enough time.",
    effect: { rational: 5 } //rational
  },
  {
    question: "A statement is true if proved by logic and evidence, not supported by intuition.",
    effect: { rational: 5 }
  },
  {
    question: "Better to rule one’s mind with calculated logic than wander lost through illusions.",
    effect: { rational: 5 }
  },
  {
    question: "Emotions can drive us off and misinform, a rational mind is more often correct.",
    effect: { rational: 5 }
  },
  {
    question: "Pure logic, mathematics and reason are the most reliable guides; all mystic babble is foolishness.",
    effect: { rational: 5 }
  },
  {
    question: "Instinct is wiser than calculation.",
    effect: { rational: -5 } //irrational
  },
  {
    question: "Emotions and faith can also be sources of true knowledge.",
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
    question: "You won't win if you hold onto non-violence.",
    effect: { violence: 5 } //violence
  },
  {
    question: "Force and ruthlessness can be justified and used for greater goals.",
    effect: { violence: 5 }
  },
  {
    question: "The sword that strikes once to stop suffering is kinder than mercy that lets suffering linger.",
    effect: { violence: 5 }
  },
  {
    question: "Major change often requires force or confrontation.",
    effect: { violence: 5 }
  },
  {
    question: "Mercy is a chain — it often restricts from making preferable choices.",
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
    question: "A world of peace between humans is possible and this is what we should strive for.",
    effect: { violence: -5 }
  },
  {
    question: "Mercy even in victory is the sign of a civilized society; violence is for savages.",
    effect: { violence: -5 }
  },
  {
    question: "Even the worst ones deserve a chance to change, better to rehabilitate than execute.",
    effect: { violence: -5 }
  },
  {
    question: "Nothing in this world is flawless — there is always place for improvement.",
    effect: { evolution: 5 } //evolution
  },
  {
    question: "Change, growth and transformation are the only proofs of life — stagnation is death.",
    effect: { evolution: 5 }
  },
  {
    question: "Life is like riding a bicycle — if you stop, you might as well just fall over.",
    effect: { evolution: 5 }
  },
  {
    question: "Traditions should adapt to changing circumstances rather than remain fixed.",
    effect: { evolution: 5 }
  },
  {
    question: "Let the old gods weep — the everchanging future shall rise.",
    effect: { evolution: 5 }
  },
  {
    question: "The highest goal that there can be is making a perfect stable world.",
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
    question: "The process of reforms and revolutions is not eternal, it has to come to an end.",
    effect: { evolution: -5 }
  },
  {
    question: "When the world burns, I light the forge — from the ashes, I build anew.",
    effect: { creation: 5 } //creation
  },
  {
    question: "Construction can provide what deconstruction will never achieve.",
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
    question: "To create from nothing is sacred; to tear down what stands is only for those without vision.",
    effect: { creation: 5 }
  },
  {
    question: "In order to achieve goals, the current state of things must be abolished.",
    effect: { creation: -5 } //erosion
  },
  {
    question: "Destruction is the main tool of making a path to greater change, the burning fire illuminates it.",
    effect: { creation: -5 }
  },
  {
    question: "Construction alone will not improve the world — the foundation of what exists should be destroyed.",
    effect: { creation: -5 }
  },
  {
    question: "Sometimes decay, collapse, and destruction are purifying — erosion clears the old to make space.",
    effect: { creation: -5 }
  },
  {
    question: "Destruction is sometimes necessary to remove harmful systems.",
    effect: { creation: -5 }
  },
  {
    question: "Our world must be seen as one that is fully material and following laws of physics.",
    effect: { reality: 5 } //reality
  },
  {
    question: "We must fully focus on the world we're living in, not on dreams or fiction.",
    effect: { reality: 5 }
  },
  {
    question: "Human mind is rooted in matter, all thoughts are electronic impulses in brains.",
    effect: { reality: 5 }
  },
  {
    question: "Everything what was confused as magic is either trickery or human imagination.",
    effect: { reality: 5 }
  },
  {
    question: "Cold, concrete reality — with its limits and certainties — is more real than any dreamy fantasy.",
    effect: { reality: 5 }
  },
  {
    question: "Dreams and subjective experiences can hold truths beyond physical reality.",
    effect: { reality: -5 } //delirium
  },
  {
    question: "Besides explained material phenomenons we can encounter anomalies and magic.",
    effect: { reality: -5 }
  },
  {
    question: "It is possible to go beyond current physical limits.",
    effect: { reality: -5 }
  },
  {
    question: "Delirium, dreamscapes and wild visions reveal truths reality dares to not show.",
    effect: { reality: -5 }
  },
  {
    question: "Dreams and fantasies, magicians and spirits are real wonders that others just fail to see.",
    effect: { reality: -5 }
  },
  {
    question: "Using force and strength is preferable to intrigues and manipulations.",
    effect: { might: 5 } //might
  },
  {
    question: "The world is shaped by those who have arms and weapons, not books or papers.",
    effect: { might: 5 }
  },
  {
    question: "Decisive strength is often more effective than overthinking.",
    effect: { might: 5 }
  },
  {
    question: "Raw strength — the power of arms and might — is more reliable than any cunning or intellect.",
    effect: { might: 5 }
  },
  {
    question: "Soldiers and warriors are more important than intellectuals.",
    effect: { might: 5 }
  },
  {
    question: "The world is shaped by those who are the smartest.",
    effect: { might: -5 } //intellect
  },
  {
    question: "If you want more power, you need more knowledge and information.",
    effect: { might: -5 }
  },
  {
    question: "If you know how the world is structured, then you can make big changes even with little effort.",
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
    question: "We must care about humans abroad as much as of our own.",
    effect: { spread: 5 }
  },
  {
    question: "Intervention beyond one’s borders can be justified to defend values or stability.",
    effect: { spread: 5 }
  },
  {
    question: "We must fight for our values across the entire world, not just our homeland.",
    effect: { spread: 5 }
  },
  {
    question: "When given a chance, we should promote our ideas and insist others on taking them.",
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
    question: "Internal stability should take priority over external problems.",
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

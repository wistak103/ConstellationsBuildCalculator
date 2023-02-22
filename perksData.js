class SkillTree {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.levelBase;
        this.levelTotal;
        this.customLevel = 0;
        this.perks = [];
        this.takenPerks = [];
    }
}

let alchemy = new SkillTree('alchemy', 0);
alchemy.perks = [

    //0
    {
        name: "Alchemical Lore", skill: alchemy, skillReq: 0,
        xPos: 19.3, yPos: 90, preReqs: [], chain: 3, rank: 1, 
        description: "You've acquired basic alchemical insights and understand how to work with a laboratory. Thus, you can now craft your own potions and poisons.",
        labels: [], lines: [], chainPerks: []
    },
    //1
    {
        name: "Alchemical Lore", skill: alchemy, skillReq: 20,
        xPos: 19.3, yPos: 90, preReqs: [0], chain: 3, rank: 2,
        description: "Through advanced alchemical knowledge, you can enhance your mixtures and craft alchemical powders. <br> You determine an additional property of consumed ingredients",
        labels: [], lines: [], chainPerks: [] 
    },
	//2
    {
        name: "Alchemical Lore", skill: alchemy, skillReq: 40,
        xPos: 19.3, yPos: 90, preReqs: [0], chain: 3, rank: 3,
        description: "Through obscure knowledge, your potions and poisons have an even higher potency.<br>You determine all properties of consumed ingredients.",
        labels: [], lines: [], chainPerks: [] 
    },
    //3
    {
        name: "Improved Elixirs", skill: alchemy, skillReq: 25,
        xPos: 75.7, yPos: 80.75, preReqs: [0], chain: 0,
        description: "Having refinined the brewing process, you are now able to improve the effects of all your elixirs.",
        labels: [], lines: []
    },
    //4
    {
        name: "Night Vision", skill: alchemy, skillReq: 25,
        xPos: 87, yPos: 62.5, preReqs: [3], chain: 0,
        description: "Having altered your body with extracts from a sabrecat eye, you can now make your eyes see in the dark at will.",
        labels: [], lines: []
    },
    //5
    {
        name: "Concentrated<br>Poisons", skill: alchemy, skillReq: 25,
        xPos: 30.7, yPos: 61.5, preReqs: [3, 0], chain: 0,
        description: "Your experience in the obscure alchemical arts allows you to concentrate your poisons. Thus, you can make most of them last longer before they need to be reapplied.",
        labels: [], lines: []
    },
    //6
    {
        name: "Regeneration", skill: alchemy, skillReq: 50,
        xPos: 75.7, yPos: 40.5, preReqs: [3], chain: 0,
        description: "Having altered your body with extracts from troll fat, slaughterfish eggs and spriggan sap, you're now able to regenerate your body, and do so even more rapidly when you are immersed in water.",
        labels: [], lines: []
    },
    //7
    {
        name: "Catalysis", skill: alchemy, skillReq: 50,
        xPos: 181 / 3, yPos: 194 / 4, preReqs: [3], chain: 2, rank: 1,
        description: "You've started experimenting with a catalyst that increases the yield of the brewing process.",
        labels: [], lines: [], chainPerks: []
    },
    //8
    {
        name: "Catalysis", skill: alchemy, skillReq: 100,
        xPos: 181 / 3, yPos: 194 / 4, preReqs: [7], chain: 2, rank: 2,
        description: "You've perfected the catalyst. Thereby, you can craft double the amount of mixtures with the same amount of ingredients.",
        labels: [], lines: [], chainPerks: []
    },
    //9
    {
        name: "Improved Poisons", skill: alchemy, skillReq: 50,
        xPos: 104 / 3, yPos: 156 / 4, preReqs: [5], chain: 0,
        description: "By adding small amounts of truly horrifying ingredients, you are able to make your poisons more potent.",
        labels: [], lines: []
    },
    //10
    {
        name: "Immunization", skill: alchemy, skillReq: 75,
        xPos: 172 / 3, yPos: 98 / 4, preReqs: [7, 9], chain: 0,
        description: "You've discovered a way to make your body more resilient to all kinds of diseases and poisons.",
        labels: [], lines: []
    },
    //11
    {
        name: "Fortified Muscles", skill: alchemy, skillReq: 75,
        xPos: 148 / 3, yPos: 225 / 4, preReqs: [10], chain: 0,
        description: "Having altered your body with extracts from troll fat and a mammoth heart, you've become more resilient to harm.",
        labels: [], lines: []
    },
    //12
    {
        name: "Alchemical Intellect", skill: alchemy, skillReq: 100,
        xPos: 219 / 3, yPos: 45 / 4, preReqs: [10], chain: 0,
        description: "Having altered your body with extracts from a Dremora's Heart and Ectoplasm, your mind has transcended mortal limits, expanding your magicka and improving your spell casting.",
        labels: [], lines: []
    },
    //13
    {
        name: "Purification<br>Process", skill: alchemy, skillReq: 100,
        xPos: 140 / 3, yPos: 20 / 4, preReqs: [10], chain: 0,
        description: "You've found a method to eliminate disadvantages from your mixtures and to make all of them even more potent.",
        labels: [], lines: []
    },
    //14
    {
        name: "Drunken<br>Combat", skill: alchemy, skillReq: 0,
        xPos: 15, yPos: 70, preReqs: [], levelReq: 0, chain: 0,
        description: "Alcohol pumps you up, boosting your combat abilities. You also gain resistance to poison and diseases.<br>[+10% resistances, while inebriated: +5% movement speed, +15% melee damage, +100 armor]",
        labels: [], lines: [], chainPerks: []
    },
    //POSITION TESTER
	/*
    {
        name: "Position<br>Tester", skill: alchemy, skillReq: 0,
        xPos: 100, yPos: 100, preReqs: [], levelReq: 0, chain: 0,
        description: "Alcohol pumps you up, boosting your combat abilities. You also gain resistance to poison and diseases.<br>[+10% resistances, while inebriated: +5% movement speed, +15% melee damage, +100 armor]",
        labels: [], lines: [], chainPerks: []
    },
	*/

];

let alteration = new SkillTree('alteration', 1);
alteration.perks = [
    //0
    {
        name: "Novice Alteration", skill: alteration, skillReq: 0,
        xPos: 144 / 3, yPos: 90, preReqs: [], chain: 0,
        description: "You've learned how to cast Novice level spells decreased effort while your newfound knowledge also allows you to augment all Alteration spells.",
        labels: [], lines: []

    },
    //1
    {
        name: "Apprentice Alteration", skill: alteration, skillReq: 25,
        xPos: 160 / 3, yPos: 75, preReqs: [0], chain: 0,
        description: "By pursuing your apprenticeship in Alteration, you're now able to augment and cast them with less effort.",
        labels: [], lines: []
    },
    //2
    {
        name: "Adept<br>Alteration", skill: alteration, skillReq: 50,
        xPos: 162 / 3, yPos: 50, preReqs: [1], chain: 0,
        description: "By advancing further into the school of Alteration, you've learned how to augment and cast spells of the Adept rank more easily.",
        labels: [], lines: []
    },
    //3
    {
        name: "Expert Alteration", skill: alteration, skillReq: 75,
        xPos: 190 / 3, yPos: 100 / 4, preReqs: [2], chain: 0,
        description: "You've unlocked almost every secret in the school of Alteration. You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
        labels: [], lines: []
    },
    //4
    {
        name: "Master Alteration", skill: alteration, skillReq: 90,
        xPos: 185 / 3, yPos: 5, preReqs: [3], chain: 0,
        description: "Your knowledge of Alteration has become all-encompassing.You can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
        labels: [], lines: []
    },
    //5
    {
        name: "Aeromancy", skill: alteration, skillReq: 25,
        xPos: 50 / 3, yPos: 280 / 4, preReqs: [0], chain: 2, rank: 1, 
        description: "You are now able to intesify the force of all your wind spells.",
        labels: [], lines: [], chainPerks: []
    },
    //6
    {
        name: "Aeromancy", skill: alteration, skillReq: 50,
        xPos: 50 / 3, yPos: 280 / 4, preReqs: [5], chain: 2, rank: 2, 
        description: "You are now able to greatly intesify the force of all your wind spells.",
        labels: [], lines: [], chainPerks: []
    },
    //7
    {
        name: "Aeromantic<br>Strength", skill: alteration, skillReq: 75,
        xPos: 10, yPos: 40, preReqs: [5], chain: 0,
        description: "Your wind spells are now able to throw all but the strongest of targets.",
        labels: [], lines: []
    },
    //8
    {
        name: "Aeromantic<br>Mastery", skill: alteration, skillReq: 100,
        xPos: 10, yPos: 5, preReqs: [7], chain: 0,
        description: "Your fascination for wind now grants you the ability to stagger or throw any target, while also increasing all your wind spells power even further",
        labels: [], lines: []
    },
    //9
    {
        name: "Empowered<br>Alterations", skill: alteration, skillReq: 25,
        xPos: 100 / 3, yPos: 250 / 4, preReqs: [0], chain: 0,
        description: "You learned how to empower Alteration spells by dual casting them. Thus, you now can overcharge their effects into even more powerful, longer lasting versions.",
        labels: [], lines: []
    },
    //10
    {
        name: "Improved<br>Mage Armor", skill: alteration, skillReq: 25,
        xPos: 30, yPos: 50, preReqs: [1], chain: 0,
        description: "You've mastered the art of casting armor spells, their effect is increased by 80%. Additionally you take 15% less damage from ranged attacks while a mage armor spell is active. (less effective when wearing light/heavy armor)",
        labels: [], lines: []
    },
    //11
    {
        name: "Magic<br>Resistance", skill: alteration, skillReq: 25,
        xPos: 70, yPos: 50, preReqs: [1], chain: 3, rank: 1, thisOr: [26],
        description: "You're able to block a part of a dangerous spell's effect.",
        labels: [], lines: [], chainPerks: []
    },
    //12
    {
        name: "Magic<br>Resistance", skill: alteration, skillReq: 50,
        xPos: 70, yPos: 50, preReqs: [11], chain: 3, rank: 2, 
        description: "You are able to block more of a dangerous spell's effect.",
        labels: [], lines: [], chainPerks: []
    },
    //13
    {
        name: "Magic<br>Resistance", skill: alteration, skillReq: 75,
        xPos: 70, yPos: 50, preReqs: [12], chain: 3, rank: 3, 
        description: "You are able to block even more of a dangerous spell's effect.",
        labels: [], lines: [], chainPerks: []
    },
    //14
    {
        name: "Stability", skill: alteration, skillReq: 50,
        xPos: 110 / 3, yPos: 160 / 4, preReqs: [2], chain: 0,
        description: "You've become exceptionally good at making your alteration spells more stable. Thus, they now last longer.",
        labels: [], lines: []
    },
    //15
    {
        name: "Metamagical<br>Thesis", skill: alteration, skillReq: 75,
        xPos: 90 / 3, yPos: 100 / 4, preReqs: [14], chain: 0,
        description: "Your knowledge of the very fabric of magic itself allows you to cast any spell of any school with decreased effort.",
        labels: [], lines: []
    },
    //16
    {
        name: "Metamagical<br>Empowerment", skill: alteration, skillReq: 100,
        xPos: 90 / 3, yPos: 5, preReqs: [15], chain: 0,
        description: "Having delved even deeper in metamagical lore, you can cast any spell more effectively and augment all magical effects.",
        labels: [], lines: []
    },
    //17
    {
        name: "Spell Armor", skill: alteration, skillReq: 75,
        xPos: 75, yPos: 35, preReqs: [3], chain: 0,
        description: "You've expanded the versatility of your Mage Armor spells by enabling them to also decrease incoming elemental damage.",
        labels: [], lines: []
    },
    //18
    {
        name: "Magical<br>Absorbtion", skill: alteration, skillReq: 100,
        xPos: 140 / 3, yPos: 60 / 4, preReqs: [3], chain: 0,
        description: "You've mastered the art of absorbing Magicka from incoming spells, and are now able to fully absorb their power from time to time.",
        labels: [], lines: []
    },
    //19
    {
        name: "Metallurgy", skill: alteration, skillReq: 25,
        xPos: 75, yPos: 260 / 4, preReqs: [0], chain: 2, rank: 1, 
        description: "You are now able to intesify the strength of your corrosion spells. Thus, they now deal increased damage.",
        labels: [], lines: [], chainPerks: []
    },
    //20
    {
        name: "Metallurgy", skill: alteration, skillReq: 50,
        xPos: 75, yPos: 260 / 4, preReqs: [19], chain: 2, rank: 2, 
        description: "You are now able to greatly intesify the strength of your corrosion spells. Thus, they now deal increased damage.",
        labels: [], lines: [], chainPerks: []
    },
    //21
    {
        name: "Rust", skill: alteration, skillReq: 75,
        xPos: 90, yPos: 165 / 4, preReqs: [19], chain: 0,
        description: "Your corrosion spells now lower your foes armor for far longer.",
        labels: [], lines: []
    },
    //22
    {
        name: "Corrosion Mastery", skill: alteration, skillReq: 100,
        xPos: 90, yPos: 5, preReqs: [21], chain: 0,
        description: "Your fascination for corrosion now grantsyou a natural ability to penetrate armor, while also increasing all your corrosion spells power even further.",
        labels: [], lines: []
    },
    //23
    {
        name: "Metamagical<br>Flexibility", skill: alteration, skillReq: 60,
        xPos: 140 / 3, yPos: 125 / 4, preReqs: [14], chain: 0,
        description: "By focusing on your Magicka, you can alter the effects of your spells in exchange of increased magicka cost of spells. [Overpowered (magnitude), Extended (duration), Distant (range)]",
        labels: [], lines: []
    },
    //24
    {
        name: "Unskilled<br>Spellcasting", skill: alteration, skillReq: 0, levelReq: 0,
        xPos: 10, yPos: 85, preReqs: [], chain: 3, rank: 1,
        description: "Having learned over the shoulders, you can cast novice level spells but all spells cast have reduced effectivity. [Novice spells: -60% spell cost, -10% magnitude/duration for all spells]",
        labels: [], lines: [], chainPerks: []
    },
    //25
    {
        name: "Unskilled<br>Spellcasting", skill: alteration, skillReq: 0, levelReq: 10,
        xPos: 10, yPos: 85, preReqs: [24], chain: 3, rank: 2, 
        description: "Having learned over the shoulders, you can now also cast apprentice level spells. [Apprentice spells: -55% spell cost]",
        labels: [], lines: [], chainPerks: []
    },
    //26
    {
        name: "Unskilled<br>Spellcasting", skill: alteration, skillReq: 0, levelReq: 20,
        xPos: 10, yPos: 85, preReqs: [25], chain: 3, rank: 3,
        description: "Having learned over the shoulders, you can cast adept level spell. [Adept spells: -50% spell cost]",
        labels: [], lines: [], chainPerks: []
    },

];

let block = new SkillTree("block", 2);
block.perks = [
    //0
    {
        name: "Improved Blocking", skill: block, skillReq: 0,
        xPos: 150 / 3, yPos: 323 / 4, preReqs: [], chain: 0, 
        description: "You strengthened your shield arm and trained to parry blows a little. [Block 25% more damage]",
        labels: [], lines: []
    },
    //1
    {
        name: "Experienced<br>Blocking", skill: block, skillReq: 20,
        xPos: 100 / 3, yPos: 222 / 4, preReqs: [0], chain: 0,
        description: "With weapon or shield you can block almost any blow with rock-solid confidence.<br>[Block 50% more damage, recover some stamina when blocking a hit]",
        labels: [], lines: []
    },
    //2
    {
        name: "Strong Grip", skill: block, skillReq: 15,
        xPos: 30 / 3, yPos: 239 / 4, preReqs: [0], chain: 0,
        description: "You hold on to your shield like you would hold on to your life.<br>[75% less shield weight, 10% more armor rating, block 40% more damage, arrows that hit the shield do no damage]",
        labels: [], lines: []
    },
    //3
    {
        name: "Elemental Protection", skill: block, skillReq: 50,
        xPos: 55 / 3, yPos: 115 / 4, preReqs: [2], chain: 0,
        description: "You've learned how to block damaging spells.<br>[Take 50% less fire, frost, and shock damage when blocking with a shield]",
        labels: [], lines: []
    },
    //4
    {
        name: "Defensive Stance", skill: block, skillReq: 75,
        xPos: 103 / 3, yPos: 60 / 4, preReqs: [3], chain: 0,
        description: "You have honed your defensive movements to perfection.<br>[Blocking with a shield does not slow you down]",
        labels: [], lines: []
    },
    //5
    {
        name: "Powerful Bashes", skill: block, skillReq: 25,
        xPos: 250 / 3, yPos: 239 / 4, preReqs: [0], chain: 0,
        description: "By gathering your strength for a short while, you can perform a much more powerful bash.<br>[Able to do a power bash]",
        labels: [], lines: []
    },
    //6
    {
        name: "Overpowering Bashes", skill: block, skillReq: 50,
        xPos: 250 / 3, yPos: 175 / 4, preReqs: [5], chain: 0,
        description: "When you put all of your power into your shield bashes, you will often overpower your foes.<br>[Power bashing with a shield can knock down]",
        labels: [], lines: []
    },
    //7
    {
        name: "Disarming Bash", skill: block, skillReq: 75,
        xPos: 225 / 3, yPos: 75 / 4, preReqs: [6], chain: 0,
        description: "Sometimes, when you put all your strength into your bashes, your foes drop their weapon because of the pain.<br>[25% chance to disarm when power bashing with a shield, 5% chance to disarm when power bashing with a weapon]",
        labels: [], lines: []
    },
    //8
    {
        name: "Unstoppable Charge", skill: block, skillReq: 100,
        xPos: 150 / 3, yPos: 30 / 4, preReqs: [4, 7], chain: 0,
        description: "When bull rushing with your shield raised, you are a tremendous force to deal with.<br>[Sprinting with a shield raised knocks down most targets]",
        labels: [], lines: []
    },
    //9
    {
        name: "Shield Strike", skill: block, skillReq: 25,
        xPos: 170 / 3, yPos: 222 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "You can use your shield more offensively, using it as a deadly weapon.<br>[+50% shield bash damage, fortify block increases shield bash damage, -3 shield bash stamina cost]",
        labels: [], lines: [], chainPerks: []
    },
    //10
    {
        name: "Shield Strike", skill: block, skillReq: 50,
        xPos: 170 / 3, yPos: 222 / 4, preReqs: [9], chain: 2, rank: 2,
        description: "You can use your shield more offensively, using it as a deadly weapon.<br>[+100% shield bash damage, fortify block increases shield bash damage, -6 shield bash stamina cost]",
        labels: [], lines: [], chainPerks: []
    },

    //11
    {
        name: "Torch<br>Combat", skill: block, skillReq: 0, levelReq: 0,
        xPos: 80 / 4, yPos: 300 / 4, preReqs: [], chain: 0,
        description: "You can use your torch more effectively in combat, causing stronger burns and blocking frost damage.<br>[+7 light bash damage, +14 power bash damage, power bash staggers, +10% frost resist with torch equipped]",
        labels: [], lines: [], chainPerks: []
    },

];

let conjuration = new SkillTree("conjuration", 3);
conjuration.perks = [
    //0
    {
        name: "Novice<br>Conjuration", skill: conjuration, skillReq: 0,
        xPos: 216 / 4, yPos: 354 / 4, preReqs: [], chain: 0,
        description: "You've learned how to cast Novice level spells with decreased effort <br> while your newfound knowledge also allows you to augment all Conjuration spells.",
        labels: [], lines: []
    },
    //1
    {
        name: "Apprentice<br>Conjuration", skill: conjuration, skillReq: 25,
        xPos: 308 / 4, yPos: 250 / 4, preReqs: [0], chain: 0,
        description: "By pursuing your apprenticeship in Conjuration, you're now<br>able to augment and cast them with less effort.",
        labels: [], lines: []
    },
    //2
    {
        name: "Adept<br>Conjuration", skill: conjuration, skillReq: 50,
        xPos: 318 / 4, yPos: 192 / 4, preReqs: [1], chain: 0,
        description: "By advancing further into the school of Conjuration, you've learned how<br>to augment and cast spells of the Adept rank more easily.",
        labels: [], lines: []
    },
    //3
    {
        name: "Expert<br>Conjuration", skill: conjuration, skillReq: 75,
        xPos: 328 / 4, yPos: 122 / 4, preReqs: [2], chain: 0,
        description: "You've unlocked almost every secret in the school of Conjuration.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
        labels: [], lines: []
    },
    //4
    {
        name: "Master<br>Conjuration", skill: conjuration, skillReq: 90,
        xPos: 342 / 4, yPos: 50 / 4, preReqs: [3], chain: 0,
        description: "Your knowledge of Conjuration has become all-encompassing. You can cast<br>the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
        labels: [], lines: []
    },
    //5
    {
        name: "Mystic<br>Binding", skill: conjuration, skillReq: 25,
        xPos: 250 / 4, yPos: 249 / 4, preReqs: [0], chain: 0,
        description: "You've become skilled in binding weapon-shaped daedra from Oblivion. <br> Thereby, bound weapons are stronger and longer-lasting.",
        labels: [], lines: []
    },
    //6
    {
        name: "Mystic<br>Maelstrom", skill: conjuration, skillReq: 50,
        xPos: 264 / 4, yPos: 180 / 4, preReqs: [5], chain: 0,
        description: "The weapon-shaped Daedra you conjure are now even more powerful,<br> and trap the souls of your victims and bypass a small amount of their armor.",
        labels: [], lines: []
    },
    //7
    {
        name: "Mystic<br>Banishment", skill: conjuration, skillReq: 75,
        xPos: 275 / 4, yPos: 112 / 4, preReqs: [6], chain: 0,
        description: "Your bound weapons are now able to send summoned creatures back into the waters of Oblivion <br> and are more powerful.",
        labels: [], lines: []
    },
    //8
    {
        name: "Mystic<br>Disruption", skill: conjuration, skillReq: 100,
        xPos: 261 / 4, yPos: 60 / 4, preReqs: [7], chain: 0,
        description: "You've perfected your invocations of summoning weapon-shaped daedra by making them<br>even more powerful and able to turn the undead.",
        labels: [], lines: []
    },
    //9
    {
        name: "Necromancy", skill: conjuration, skillReq: 25,
        xPos: 220 / 4, yPos: 218 / 4, preReqs: [0], chain: 2, rank : 1,
        description: "You've developed a knack for making the dead serve your commands.<br> Therefore, all spells that summon or raise the dead and ghosts last longer and can raise more powerful entities.",
        labels: [], lines: [], chainPerks: []
    },
	//10
    {
        name: "Necromancy", skill: conjuration, skillReq: 50,
        xPos: 220 / 4, yPos: 218 / 4, preReqs: [9], chain: 2, rank : 2,
        description: "You've further improved your ability making the dead serve your commands.<br> Therefore, all spells that summon or raise the dead and ghosts last even longer and can raise even more powerful entities.",
        labels: [], lines: [], chainPerks: []
    },
    //11
    {
        name: "Ritualism", skill: conjuration, skillReq: 50,
        xPos: 212 / 4, yPos: 153 / 4, preReqs: [9], chain: 0,
        description: "Your knowledge of the realms of the dead surpasses that of many and decreases <br> the effort needed to raise or summon the dead and ghosts.",
        labels: [], lines: []
    },
    //12
    {
        name: "Dark<br>Infusion", skill: conjuration, skillReq: 75,
        xPos: 181 / 4, yPos: 76 / 4, preReqs: [11], chain: 0,
        description: "By infusing your undead creations with dark energies, you are able to make them <br> stronger and more resilient. You can even prevent your creations from decaying to dust.",
        labels: [], lines: []
    },
    //13
    {
        name: "Summoner's<br>Insight", skill: conjuration, skillReq: 25,
        xPos: 172 / 4, yPos: 247 / 4, preReqs: [0], chain: 0,
        description: "You've learned how to empower Conjuration spells by dual casting them.<br>Thus, you can now make them last longer in this realm.",
        labels: [], lines: []
    },
    //14
    {
        name: "Cognitive<br>Flexibility", skill: conjuration, skillReq: 50,
        xPos: 150 / 4, yPos: 117 / 4, preReqs: [13], chain: 2, rank : 1,
        description: "You have practiced the mental ability of maintaining two summons at the same time. This power requires great amounts of magical power. <br> [+15% manacost for summoning spells]",
        labels: [], lines: [], chainPerks: []
    },
    //15
    {
        name: "Cognitive<br>Flexibility", skill: conjuration, skillReq: 100,
        xPos: 150 / 4, yPos: 117 / 4, preReqs: [14], chain: 2, rank : 2,
        description: "You've mastered the art of Cognitive Flexibility, allowing you to summon three summons at the cost of vast amounts of magical power. <br> [+30% manacost for summoning spells]",
        labels: [], lines: [], chainPerks: []
    },
    //16
    {
        name: "Stabilized<br>Binding", skill: conjuration, skillReq: 25,
        xPos: 85 / 4, yPos: 221 / 4, preReqs: [0], chain: 2, rank : 1,
        description: "Having studied the barriers that divide the planes of existence,<br> you can make your summoned daedra and spirits last longer in this realm.",
        labels: [], lines: [], chainPerks: []
    },
    //17
    {
        name: "Stabilized<br>Binding", skill: conjuration, skillReq: 50,
        xPos: 85 / 4, yPos: 221 / 4, preReqs: [16], chain: 2, rank : 2,
        description: "Furthering your studies about the barriers that divide the planes of existence,<br> you can make your summoned daedra and spirits last even longer in this realm.",
        labels: [], lines: [], chainPerks: []
    },
    //18
    {
        name: "Spiritual<br>Binding", skill: conjuration, skillReq: 35,
        xPos: 98 / 4, yPos: 161 / 4, preReqs: [16], chain: 0,
        description: "Your knowledge of Oblivion's spiritual aspects increases the strength of all your summoned spirits.",
        labels: [], lines: []
    },
    //19
    {
        name: "Extended<br>Binding", skill: conjuration, skillReq: 50,
        xPos: 53 / 4, yPos: 131 / 4, preReqs: [16], chain: 0,
        description: "You've perfected your spells' formulae to summon daedra and spirits,<br>and are now able to cast them more easily and further away.",
        labels: [], lines: []
    },
    //20
    {
        name: "Elemental<br>Binding", skill: conjuration, skillReq: 75,
        xPos: 76 / 4, yPos: 70 / 4, preReqs: [19], chain: 0,
        description: "Your knowledge of Oblivion's elemental aspects increases the strength of all your summoned Atronachs<br>while the highest level rituals will conjure Thralls that are immune to Banishment and Control spells.",
        labels: [], lines: []
    },
    //21
    {
        name: "Soulmancer", skill: conjuration, skillReq: 25,
        xPos: 360 / 4, yPos: 231 / 4, preReqs: [0], chain: 2, rank : 1,
        description: "You now are able to intensify the potency of your soul spells. <br> (Unrelated to Perk: Soul spells deal up to 60% less damage depending on the targets current magicka)",
        labels: [], lines: [], chainPerks: []
    },
    //22
    {
        name: "Soulmancer", skill: conjuration, skillReq: 50,
        xPos: 360 / 4, yPos: 231 / 4, preReqs: [21], chain: 2, rank : 2,
        description: "You now are able to intensify the potency of your soul spells. <br> (Unrelated to Perk: Soul spells deal up to 60% less damage depending on the targets current magicka)",
        labels: [], lines: [], chainPerks: []
    },
	
    //23
    {
        name: "Enslavement", skill: conjuration, skillReq: 75,
        xPos: 362 / 4, yPos: 164 / 4, preReqs: [21], chain: 0,
        description: "You are able to raise foes up to level 30 that are slain with your adept or higher soul spells.",
        labels: [], lines: [], chainPerks: []
    },
	
    //24
    {
        name: "Enthrallment", skill: conjuration, skillReq: 100,
        xPos: 365 / 4, yPos: 92 / 4, preReqs: [23], chain: 0,
        description: "You are able to raise most foes that are slain with your adept or higher soul spells.",
        labels: [], lines: [], chainPerks: []
    },
	

];

let destruction = new SkillTree("destruction", 4);
destruction.perks = [
    //0
    {
        name: "Novice Destruction", skill: destruction, skillReq: 0,
        xPos: 50, yPos: 90, preReqs: [], chain: 0,
        description: "You've learned how to cast Novice level spells with decreased effort <br> while your newfound knowledge also allows you to augment all Destruction spells.",
        labels: [], lines: []
    },
    //1
    {
        name: "Apprentice<br>Destruction", skill: destruction, skillReq: 25,
        xPos: 80, yPos: 70, preReqs: [0], chain: 0,
        description: "By pursuing your apprenticeship in Destruction, you're now<br>able to augment and cast them with less effort.",
        labels: [], lines: []
    },
    //2
    {
        name: "Adept<br>Destruction", skill: destruction, skillReq: 50,
        xPos: 80, yPos: 50, preReqs: [1], chain: 0,
        description: "By advancing further into the school of Destruction, you've learned how<br>to augment and cast spells of the Adept rank more easily.",
        labels: [], lines: []
    },
    //3
    {
        name: "Expert<br>Destruction", skill: destruction, skillReq: 75,
        xPos: 80, yPos: 30, preReqs: [2], chain: 0,
        description: "You've unlocked almost every secret in the school of Destruction.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
        labels: [], lines: []
    },
    //4
    {
        name: "Master<br>Destruction", skill: destruction, skillReq: 100,
        xPos: 80, yPos: 5, preReqs: [3], chain: 0,
        description: "YYour knowledge of Destruction has become all-encompassing. You can cast<br>the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
        labels: [], lines: []
    },
	//5
    {
        name: "Geomancy", skill: destruction, skillReq: 25,
        xPos: 10, yPos: 70, preReqs: [0],  chain: 2, rank : 1,
        description: "You now are able to intensify the strength of your earth spells. Thus, <br> they now deal increased damage.",
        labels: [], lines: [], chainPerks: []
    },
    //6
    {
        name: "Geomancy", skill: destruction, skillReq: 50,
        xPos: 10, yPos: 70, preReqs: [5],  chain: 2, rank : 2,
        description: "You now are able to greatly intensify the strength of your earth spells. Thus, <br> they now deal increased damage.",
        labels: [], lines: [], chainPerks: []
    },
    //7
    {
        name: "Knockout", skill: destruction, skillReq: 75,
        xPos: 10, yPos: 30+2, preReqs: [5], chain: 0,
        description: "Your higher level earth spells are so strong that foes are set sometimes knocked out.",
        labels: [], lines: []
    },
    //8
    {
        name: "Earth<br>Mastery", skill: destruction, skillReq: 100,
        xPos: 10, yPos: 5+2, preReqs: [7], chain: 0,
        description: "Your fascination for geomancy now grants you a natural resistance to physical damage, <br> while also increasing all your earth spells' power even further.",
        labels: [], lines: []
    },
    //9
    {
        name: "Annihilation", skill: destruction, skillReq: 25,
        xPos: 20, yPos: 65, preReqs: [0], chain: 2, rank : 1,
        description: "You now are able to intensify the strength of your Annihilation spells.",
        labels: [], lines: [], chainPerks: []
    },
    //10
    {
        name: "Annihilation", skill: destruction, skillReq: 50,
        xPos: 20, yPos: 65, preReqs: [9], chain: 2, rank : 2,
        description: "You now are able to greatly intensify the strength of your Annihilation spells.",
        labels: [], lines: [], chainPerks: []
    },
    //11
    {
        name: "Obliteration", skill: destruction, skillReq: 75,
        xPos: 20, yPos: 40+2, preReqs: [9], chain: 0,
        description: "Your Annihilation spells now disintergrate all but the most powerful of foes.",
        labels: [], lines: [], chainPerks: []
    },
	
    //12
    {
        name: "Annihilation<br>Mastery", skill: destruction, skillReq: 100,
        xPos: 20, yPos: 15, preReqs: [11], chain: 0,
        description: "Your fascination for Annihilaion spells now grants you a natural resistance to magical damage, <br> while also increasing all your Annihilation spells' power even further.",
        labels: [], lines: [], chainPerks: []
    },
    //13
    {
        name: "Hemomancer", skill: destruction, skillReq: 25,
        xPos: 30, yPos: 70, preReqs: [0],  chain: 2, rank : 1,
        description: "You now are able to intensify the strength of your drain life spells. <br> (Unrelated to Perk: Drain life spells deal up to 60% less damage depending on the targets current health)",
        labels: [], lines: [], chainPerks: []
    },
    //14
    {
        name: "Hemomancer", skill: destruction, skillReq: 50,
        xPos: 30, yPos: 70, preReqs: [13],  chain: 2, rank : 2,
        description: "You now are able to intensify the strength of your drain life spells. <br> (Unrelated to Perk: Drain life spells deal up to 60% less damage depending on the targets current health)",
        labels: [], lines: [], chainPerks: []
    },
    //15
    {
        name: "Drain<br>Strength", skill: destruction, skillReq: 75,
        xPos: 30, yPos: 30+2, preReqs: [13], chain: 0,
        description: "Your drain life spells now sap the strength from your foes, draining stamina as well.",
        labels: [], lines: []
    },
    //16
    {
        name: "Drain<br>Willpower", skill: destruction, skillReq: 100,
        xPos: 30, yPos: 5+2, preReqs: [15], chain: 0,
        description: "Your drain life spells now sap the willpower from your foes, draining magicka as well.",
        labels: [], lines: []
    },
    //17
    {
        name: "Pyromancy", skill: destruction, skillReq: 25,
        xPos: 40, yPos: 65, preReqs: [0],  chain: 2, rank : 1,
        description: "You now are able to intensify the heat of your fire spells. Thus, <br> they now deal increased damage.",
        labels: [], lines: [], chainPerks: []
    },
    //18
    {
        name: "Pyromancy", skill: destruction, skillReq: 50,
        xPos: 40, yPos: 65, preReqs: [17], chain: 2, rank : 2,
        description: "Your fire spells burn with almost otherworldly heat <br> and consume earth and flesh with terrifying ease.",
        labels: [], lines: [], chainPerks: []
    },
    //19
    {
        name: "Cremation", skill: destruction, skillReq: 75,
        xPos: 40, yPos: 40+2, preReqs: [17], chain: 0,
        description: "Your higher level fire spells burn so ferociously that foes are set ablaze,<br>often causing them to run away in gruesome agony as their very skin becomes molten.",
        labels: [], lines: []
    },
    //20
    {
        name: "Fire<br>Mastery", skill: destruction, skillReq: 100,
        xPos: 40, yPos: 15, preReqs: [19], chain: 0,
        description: "Your fascination for fire now grants you a natural resistance to it, <br> while also increasing all your fire spells' power even further.",
        labels: [], lines: []
    },
    //21
    {
        name: "Cryomancy", skill: destruction, skillReq: 25,
        xPos: 50, yPos: 70, preReqs: [0], chain: 2, rank : 1,
        description: "You now are able to improve your ice spells <br> and thereby increase their effectiveness.",
        labels: [], lines: [], chainPerks: []
    },
    //22
    {
        name: "Cryomancy", skill: destruction, skillReq: 50,
        xPos: 50, yPos: 70, preReqs: [21], chain: 2, rank : 2,
        description: "Your ice spells freeze even air in a trice <br> and make the harsh winters of Skyrim look like a refreshing breeze.",
        labels: [], lines: [], chainPerks: []
    },
    //23
    {
        name: "Deep Freeze", skill: destruction, skillReq: 75,
        xPos: 50, yPos: 30+2, preReqs: [21], chain: 0,
        description: "Your higher level ice spells are colder than Skyrim's most ferocious blizzards,<br>causing them to freeze foes with low resistance to frost.",
        labels: [], lines: []
    },
    //24
    {
        name: "Frost<br>Mastery", skill: destruction, skillReq: 100,
        xPos: 50, yPos: 5+2, preReqs: [23], chain: 0,
        description: "Your understanding of all that is cold grants you a natural resistance to it, <br> while increasing all your frost spells' power even further.",
        labels: [], lines: []
    },
    //25
    {
        name: "Electromancy", skill: destruction, skillReq: 25,
        xPos: 60, yPos: 65, preReqs: [0], chain: 2, rank : 1,
        description: "You can now energize your lightning spells more effectively, causing them to deal more damage.",
        labels: [], lines: [], chainPerks: []
    },
    //26
    {
        name: "Electromancy", skill: destruction, skillReq: 50,
        xPos: 60, yPos: 65, preReqs: [25], chain: 2, rank : 2,
        description: "Compared to your lightning spells, <br> the worst tempests would look like a mild summer breeze.",
        labels: [], lines: [], chainPerks: []
    },
    //27
    {
        name: "Electrostatic<br>Discharge", skill: destruction, skillReq: 75,
        xPos: 60, yPos: 40+2, preReqs: [25], chain: 0,
        description: "Your lightning strikes pass through body and mind with thundering intensity.<br>Thus, they now vaporize vast amounts of Magicka off your targets.",
        labels: [], lines: []
    },
    //28
    {
        name: "Lightning<br>Mastery", skill: destruction, skillReq: 100,
        xPos: 60, yPos: 15, preReqs: [27], chain: 0,
        description: "Your aptitude with lightning grants you a natural resistance to it,<br> while also increasing all your shock spells' power even further.",
        labels: [], lines: []
    },
    //29
    {
        name: "Magical Fist", skill: destruction, skillReq: 50,
        xPos: 65, yPos: 75, preReqs: [1], chain: 2, rank : 1,
        description: "Your touch spells have a chance of staggering your foes.",
        labels: [], lines: [], chainPerks: []
    },
    //30
    {
        name: "Magical Fist", skill: destruction, skillReq: 75,
        xPos: 65, yPos: 75, preReqs: [29], chain: 2, rank : 2,
        description: "Your touch spells have a greater chance of staggering your foes.",
        labels: [], lines: [], chainPerks: []
    },
    //31
    {
        name: "Enhanced<br>Infusions", skill: destruction, skillReq: 50,
        xPos: 70, yPos: 60-2, preReqs: [1], chain: 2, rank : 1,
        description: "You now are able to intensify the power of your infusion spells by 15%.",
        labels: [], lines: [], chainPerks: []
    },
    //32
    {
        name: "Enhanced<br>Infusions", skill: destruction, skillReq: 75,
        xPos: 70, yPos: 60-2, preReqs: [31], chain: 2, rank : 2,
        description: "You now are able to intensify the power of your infusion spells by 30%.",
        labels: [], lines: [], chainPerks: []
    },
	
    //33
    {
        name: "Intense<br>Bolts", skill: destruction, skillReq: 75,
        xPos: 90, yPos: 50, preReqs: [1], chain: 2, rank : 1,
        description: "Your bolt spells now have a small chance to knockdown your foes.",
        labels: [], lines: [], chainPerks: []
    },
    //34
    {
        name: "Intense<br>Bolts", skill: destruction, skillReq: 100,
        xPos: 90, yPos: 50, preReqs: [33], chain: 2, rank : 2,
        description: "Your bolt spells now have a higher chance to knockdown your foes.",
        labels: [], lines: [], chainPerks: []
    },
    //35
    {
        name: "Rune Mastery", skill: destruction, skillReq: 50,
        xPos: 90, yPos: 65, preReqs: [1], chain: 2, rank: 1,
        description: "You have unlocked the secret of maintaining two active runes instead of just one. You can also cast runes at triple the distance.",
        labels: [], lines: [], chainPerks: []
    },
    //36
    {
        name: "Rune Mastery", skill: destruction, skillReq: 75,
        xPos: 90, yPos: 65, preReqs: [35], chain: 2, rank: 2,
        description: "You have unlocked the secret of maintaining three active runes instead of just one. You can also cast runes at six times the distance.",
        labels: [], lines: [], chainPerks: []
    },
    //37
    {
        name: "Powerful Waves", skill: destruction, skillReq: 50,
        xPos: 90, yPos: 80-3, preReqs: [1], chain: 2, rank: 1,
        description: "Your Wave spells now are 15% more powerful.",
        labels: [], lines: [], chainPerks: []
    },
    //38
    {
        name: "Powerful Waves", skill: destruction, skillReq: 75,
        xPos: 90, yPos: 80-3, preReqs: [37], chain: 2, rank: 2,
        description: "Your Wave spells now are 30% more powerful.",
        labels: [], lines: [], chainPerks: []
    },
    //39
    {
        name: "Efficient<br>Beams", skill: destruction, skillReq: 75,
        xPos: 70, yPos: 35, preReqs: [2], chain: 2, rank: 1,
        description: "Your beam spells now cost 15% less magicka.",
        labels: [], lines: [], chainPerks: []
    },
    //40
    {
        name: "Efficient<br>Beams", skill: destruction, skillReq: 100,
        xPos: 70, yPos: 35, preReqs: [39], chain: 2, rank: 2,
        description: "Your beam spells now cost 30% less magicka.",
        labels: [], lines: [], chainPerks: []
    },
    //41
    {
        name: "Extended Cloaks", skill: destruction, skillReq: 75,
        xPos: 90, yPos: 40-2, preReqs: [2], chain: 2, rank: 1,
        description: "Your cloak spells now cover a 50% greater distance.",
        labels: [], lines: [], chainPerks: []
    },
    //42
    {
        name: "Extended Cloaks", skill: destruction, skillReq: 100,
        xPos: 90, yPos: 40-2, preReqs: [41], chain: 2, rank: 2,
        description: "Your cloak spells now cover double the distance.",
        labels: [], lines: [], chainPerks: []
    },
    //43
    {
        name: "Empowered<br>Elements", skill: destruction, skillReq: 25,
        xPos: 65+2, yPos: 85+2, preReqs: [0], chain: 0,
        description: "You learned how to empower Destruction spells. Thus, you're able to overcharge their effects.",
        labels: [], lines: []
    },
    //44
    {
        name: "Impact", skill: destruction, skillReq: 50,
        xPos: 80, yPos: 85, preReqs: [43], chain: 2, rank : 1,
        description: "By intensifying the force of most of your overcharged Destruction spells, you're now capable of staggering your foes.",
        labels: [], lines: [],chainPerks: []
    },
];

let enchanting = new SkillTree("enchanting", 5);
enchanting.perks = [
    //0
    {
        name: "Enchanter's Insight", skill: enchanting, skillReq: 0,
        xPos: 183 / 4, yPos: 342 / 4, preReqs: [], chain: 3, rank: 1,
        description: "You've acquired fundamental insights into how matter and magic intertwine. Thus, you can now infuse<br> items with arcane energy at an enchanter and use soul gems to recharge enchanted items of all kinds.",
        labels: [], lines: [], chainPerks: []
    },
    //1
    {
        name: "Enchanter's Insight", skill: enchanting, skillReq: 30,
        xPos: 183 / 4, yPos: 342 / 4, preReqs: [0], chain: 3, rank: 2,
        description: "Your advanced knowledge of arcane energy allows you to improve all your enchantments even more.",
        labels: [], lines: [], chainPerks: []
    },
	//2
    {
        name: "Enchanter's Insight", skill: enchanting, skillReq: 60,
        xPos: 183 / 4, yPos: 342 / 4, preReqs: [0], chain: 3, rank: 3,
        description: "Through obscure knowledge of arcane energy you are able to improve all your enchantments even more.",
        labels: [], lines: [], chainPerks: []
    },
    //3
    {
        name: "Soul Gem Mastery", skill: enchanting, skillReq: 25,
        xPos: 246 / 4, yPos: 218 / 4, preReqs: [0], chain: 0,
        description: "You've learned how to draw more energy from soul gems and are now able to <br> craft them at a smelter by transmuting and melting certain minerals.",
        labels: [], lines: []
    },
    //4
    {
        name: "Arcane Experimentation", skill: enchanting, skillReq: 50,
        xPos: 259 / 4, yPos: 160 / 4, preReqs: [3], chain: 0,
        description: "Your studies have enabled you to research unique enchantments of your own<br>and to craft better staves at the forge.",
        labels: [], lines: []
    },
    //5
    {
        name: "Artificer's Insight", skill: enchanting, skillReq: 75,
        xPos: 264 / 4, yPos: 80 / 4, preReqs: [4], chain: 0,
        description: "You could fill grimoires with your newfound knowledge that allows you to create<br>even better enchantments and staves.",
        labels: [], lines: []
    },
    //6
    {
        name: "Elemental Lore", skill: enchanting, skillReq: 25,
        xPos: 138 / 4, yPos: 219 / 4, preReqs: [0], chain: 0,
        description: "You've learned how to tame the elements most efficiently.<br> Thus, all elemental enchantments are stronger.",
        labels: [], lines: []
    },
    //7
    {
        name: "Corpus Lore", skill: enchanting, skillReq: 50,
        xPos: 150 / 4, yPos: 150 / 4, preReqs: [6], chain: 0, 
        description: "You've become skilled in using enchantments to strengthen mind and body. Thus, <br> all such enchantments are stronger.",
        labels: [], lines: []
    },
    //8
    {
        name: "Skill Lore", skill: enchanting, skillReq: 75,
        xPos: 191 / 4, yPos: 93 / 4, preReqs: [7], chain: 0, 
        description: "You've become a master of infusing enchantments that transfer knowledge and skill to the user,<br> making all such ones stronger.",
        labels: [], lines: []
    },
    //9
    {
        name: "Enchantment Mastery", skill: enchanting, skillReq: 100,
        xPos: 258 / 4, yPos: 35 / 4, preReqs: [5, 8], chain: 0, 
        description: "You've found a way to bind even more energy into inanimate matter. Thus, you can bend the Law of Firsts to an extent<br> and even create Daedric staves. Additionally, all enchanted items also consume less energy.",
        labels: [], lines: []
    },
    //10
    {
        name: "Arcane<br>Artificery", skill: enchanting, skillReq: 25,
        xPos: 280 / 4, yPos: 280 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "Your understanding of enchantments allow you to use them more effectively and efficiently.<br>[+15% staff & scroll magnitude and duration]",
        labels: [], lines: [], chainPerks: []
    },
    //11
    {
        name: "Arcane<br>Artificery", skill: enchanting, skillReq: 50,
        xPos: 280 / 4, yPos: 280 / 4, preReqs: [10], chain: 2, rank: 2,
        description: "Your understanding of enchantments allow you to use them more effectively and efficiently.<br>[+30% staff & scroll magnitude and duration]",
        labels: [], lines: [], chainPerks: []
    },
    //12
    {
        name: "Staff<br>Channeling", skill: enchanting, skillReq: 25,
        xPos: 120 / 4, yPos: 300 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "You can use your magic staff to channel your own spells, making them more powerful and more efficient.<br>[while having staff equipped: +5% spell magnitude and duration, -10% spell cost]",
        labels: [], lines: [], chainPerks: []
    },
    //13
    {
        name: "Staff<br>Channeling", skill: enchanting, skillReq: 40,
        xPos: 120 / 4, yPos: 300 / 4, preReqs: [12], chain: 2, rank: 2,
        description: "You can use your magic staff to channel your own spells, making them more powerful and more efficient.<br>[while having staff equipped: +10% spell magnitude and duration, -20% spell cost]",
        labels: [], lines: [], chainPerks: []
    }
];


   let evasion = new SkillTree('evasion', 6);
   evasion.perks = [
    //0
    {
        name: "Agility", skill: evasion, skillReq: 0,
        xPos: 219 / 4, yPos: 345 / 4, preReqs: [], chain: 0,
        description: "After some training you are now much more confident in your evasive movements.<br>[25% less falling damage when wearing no heavy armor, unique bonus when wearing high-quality materials, -50% armor weight penalty]",
        labels: [], lines: []
    },
    //1
    {
        name: "Athletics", skill: evasion, skillReq: 25,
        xPos: 277 / 4, yPos: 254 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "You are more agile and can recover from exhaustion faster.<br>[+10% movement speed when sprinting or swimming, +15% stamina regeneration]",
        labels: [], lines: [], chainPerks: []
    },
    //2
    {
        name: "Athletics", skill: evasion, skillReq: 50,
        xPos: 277 / 4, yPos: 254 / 4, preReqs: [1], chain: 2, rank: 2,
        description: "You are more agile and can recover from exhaustion faster.<br>[+20% movement speed when sprinting or swimming, +30% stamina regeneration]",
        labels: [], lines: [], chainPerks: []
    },
    //3
    {
        name: "Unarmored", skill: evasion, skillReq: 15,
        xPos: 115 / 4, yPos: 70, preReqs: [0], chain: 2, rank: 1,
        description: "Having no weight on your body allows you to control your moves better in combat.<br>[while unarmored: +100 armor rating, +3% movement speed, +10% stamina regen]",
        labels: [], lines: [], chainPerks: []
    },
    //4
    {
        name: "Unarmored", skill: evasion, skillReq: 30,
        xPos: 115 / 4, yPos: 70, preReqs: [3], chain: 2, rank: 2,
        description: "Having no weight on your body allows you to control your moves better in combat.<br>[while unarmored: +200 armor rating, +6% movement speed, +20% stamina regen]",
        labels: [], lines: [], chainPerks: []
    },
    //5
    {
        name: "Agile Spellcasting", skill: evasion, skillReq: 30,
        xPos: 115 / 4, yPos: 193 / 4, preReqs: [0], chain: 0,
        description: "You learned how to avoid the limitations light armors bestow upon somatic spell components.<br>[No spell cost penalty for casting spells in light armor]",
        labels: [], lines: []
    },
    //6
    {
        name: "Finesse", skill: evasion, skillReq: 25,
        xPos: 192 / 4, yPos: 240 / 4, preReqs: [0], chain: 0,
        description: "You are able to hit more precisely.<br>[Up to 12% more power attack damage when wearing no heavy armor: head, chest, hands, feet]",
        labels: [], lines: []
    },
    //7
    {
        name: "Dexterity", skill: evasion, skillReq: 50,
        xPos: 128 / 4, yPos: 148 / 4, preReqs: [6], chain: 0,
        description: "You are able to balance your weapon better.<br>[Up to 24% less power attack stamina cost when wearing no heavy armor: head, chest, hands, feet]",
        labels: [], lines: []
    },
    //8
    {
        name: "Wind Walker", skill: evasion, skillReq: 75,
        xPos: 142 / 4, yPos: 92 / 4, preReqs: [7], chain: 0,
        description: "Your light armor and clothes have become your second skin.<br>[Up to +10% movement speed when wearing no heavy armor: head, chest, hands, feet, -25% armor weight penalty]",
        labels: [], lines: []
    },
    //9
    {
        name: "Vexing Flanker", skill: evasion, skillReq: 50,
        xPos: 267 / 4, yPos: 159 / 4, preReqs: [6], chain: 0,
        description: "You have learned to flank your enemies with ease.<br>[Up to 16% more melee attack damage when running and wearing no heavy armor: head, chest, hands, feet, immune to finishers]",
        labels: [], lines: []
    },
    //10
    {
        name: "Combat Reflexes", skill: evasion, skillReq: 75,
        xPos: 237 / 4, yPos: 80 / 4, preReqs: [9], chain: 0,
        description: "You've gained the ability to act faster in combat, though doing so will quickly exhaust you.<br>[Lesser power: Slow time by 50% for 30 seconds, drains 5 stamina per second]",
        labels: [], lines: []
    },
    //13
    {
        name: "Meteoric Reflexes", skill: evasion, skillReq: 100,
        xPos: 195 / 4, yPos: 35 / 4, preReqs: [8, 10], chain: 0,
        description: "Your reflexes are lightning fast.<br>[50% chance to take 95% less melee damage when wearing no heavy armor: head, chest, hands, feet]",
        labels: [], lines: []
    }
   ];

   let heavyarmor = new SkillTree('heavyarmor', 7);
   heavyarmor.perks = [
    //0
    {
        name: "Conditioning", skill: heavyarmor, skillReq: 0,
        xPos: 249 / 4.5, yPos: 406 / 4.5, preReqs: [], chain: 0,
        description: "You've accustomed yourself to using heavy armor.<br>[No stamina drain for wearing heavy armor, unique bonus when wearing high-quality materials, -35% armor weight penalty]",
        labels: [], lines: []
    },
    //1
    {
        name: "Relentless Onslaught", skill: heavyarmor, skillReq: 20,
        xPos: 249 / 4.5, yPos: 280 / 4.5, preReqs: [0], chain: 0,
        description: "After extensive training you now can sprint and dodge in heavy armor without problems.<br>[no sprinting stamina cost penalty, enables you to dodge while wearing heavy armor, -10% armor weight penalty]",
        labels: [], lines: []
    },
    //2
    {
        name: "Combat Casting", skill: heavyarmor, skillReq: 25,
        xPos: 130 / 4.5, yPos: 301 / 4.5, preReqs: [0], chain: 0,
        description: "You are able to keep concentrated enough in heavy armor.<br>[No spell cost penalty for casting Novice and Apprentice spells in heavy armor]",
        labels: [], lines: []
    },
    //3
    {
        name: "Combat Trance", skill: heavyarmor, skillReq: 50,
        xPos: 73 / 4.5, yPos: 200 / 4.5, preReqs: [2], chain: 0,
        description: "Your heavy armor distracts you even less.<br>[No spell cost penalty for casting Adept spells in heavy armor]",
        labels: [], lines: []
    },
    //4
    {
        name: "Combat Meditation", skill: heavyarmor, skillReq: 75,
        xPos: 84 / 4.5, yPos: 110 / 4.5, preReqs: [3], chain: 0,
        description: "You're accustomed to your heavy armor so much that you can now cast even sophisticated spells with relative ease.<br>[No spell cost penalty for casting Expert spells in heavy armor]",
        labels: [], lines: []
    },
    //5
    {
        name: "Battle Mage", skill: heavyarmor, skillReq: 100,
        xPos: 103 / 4.5, yPos: 36 / 4.5, preReqs: [4], chain: 0,
        description: "You have mastered spellcasting while wearing heavy armor.<br>[No spell cost penalty for casting Master spells in heavy armor, 15% less spell cost when wearing all heavy armor: head, chest, hands, feet]",
        labels: [], lines: []
    },
    //6
    {
        name: "Combat Training", skill: heavyarmor, skillReq: 25,
        xPos: 355 / 4.5, yPos: 307 / 4.5, preReqs: [0], chain: 0,
        description: "You are less hindered by your armor and can attack with ease.<br>[No power attack stamina cost penalty, increased unarmed damage with heavy gauntlets, -10% armor weight penalty]",
        labels: [], lines: []
    },
    //7
    {
        name: "Fortitude", skill: heavyarmor, skillReq: 50,
        xPos: 387 / 4.5, yPos: 216 / 4.5, preReqs: [6], chain: 0,
        description: "Your training made you stronger and you are now less burdened by the rigidity of your armor.<br>[+40 stamina, +20 carry weight, -10% armor weight penalty]",
        labels: [], lines: []
    },
    //8
    {
        name: "Power of<br>the Combatant", skill: heavyarmor, skillReq: 75,
        xPos: 400 / 4.5, yPos: 140 / 4.5, preReqs: [7], chain: 0,
        description: "Once a day, you can now push yourself to continue fighting.<br>[Daily power: Restore 25 stamina per second for 30 seconds, -10% armor weight penalty]",
        labels: [], lines: []
    },
    //9
    {
        name: "Juggernaut", skill: heavyarmor, skillReq: 100,
        xPos: 366 / 4.5, yPos: 36 / 4.5, preReqs: [8], chain: 0,
        description: "You've reached perfection in the skill of wearing heavy armor and are now significantly more maneuverable in it.<br>[15% less armor weight, 10% more armor rating, 90% less stagger when wearing all heavy armor: head, chest, hands, feet]",
        labels: [], lines: []
    },
   ];

   let illusion = new SkillTree('illusion', 8);
   illusion.perks = [
    //0
    {
        name: "Novice Illusion", skill: illusion, skillReq: 0,
        xPos: 180 / 3.5, yPos: 303 / 3.5, preReqs: [], chain: 0,
        description: "You've learned how to cast Novice level spells with decreased effort <br> while your newfound knowledge also allows you to augment all Illusion spells.",
        labels: [], lines: []
    },
    //1
    {
        name: "Apprentice<br>Illusion", skill: illusion, skillReq: 25,
        xPos: 183 / 3.5, yPos: 198 / 3.5, preReqs: [0], chain: 0,
        description: "By pursuing your apprenticeship in Illusion, you're now<br>able to augment and cast them with less effort.",
        labels: [], lines: []
    },
    //2
    {
        name: "Adept Illusion", skill: illusion, skillReq: 50,
        xPos: 185 / 3.5, yPos: 142 / 3.5, preReqs: [1], chain: 0,
        description: "By advancing further into the school of Illusion, you've learned how<br>to augment and cast spells of the Adept rank more easily.",
        labels: [], lines: []
    },
    //3
    {
        name: "Expert Illusion", skill: illusion, skillReq: 75,
        xPos: 185 / 3.5, yPos: 80 / 3.5, preReqs: [2], chain: 0,
        description: "You've unlocked almost every secret in the school of Illusion.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
        labels: [], lines: []
    },
    //4
    {
        name: "Master Illusion", skill: illusion, skillReq: 90,
        xPos: 186 / 3.5, yPos: 40 / 3.5, preReqs: [3], chain: 0,
        description: "Your knowledge of Illusion has become all-encompassing. You can cast<br>the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
        labels: [], lines: []
    },
    //5
    {
        name: "Quiet Casting", skill: illusion, skillReq: 25,
        xPos: 55 / 3.5, yPos: 226 / 3.5, preReqs: [0], chain: 0,
        description: "Empowering Muffle spells and Veil of Silence lets you cast spells from the illusion school silently. Muffle also lasts longer.",
        labels: [], lines: []
    },
    //6
    {
        name: "Silent Casting", skill: illusion, skillReq: 50,
        xPos: 45 / 3.5, yPos: 142 / 3.5, preReqs: [5], chain: 0,
        description: "Empowering Muffle spells lets you cast spells from all schools silently. Invisibility now works while you are running. Invisibility and Muffle last longer.",
        labels: [], lines: []
    },
    //7
    {
        name: "Unbreakable Invisibility", skill: illusion, skillReq: 75,
        xPos: 50 / 3.5, yPos: 80 / 3.5, preReqs: [6], chain: 0,
        description: "Your invisibility spells now reapply themselves when you crouch while the effect is active. Invisibility and Muffle last longer.",
        labels: [], lines: []
    },
    //8
    {
        name: "Visual<br>Manipulation", skill: illusion, skillReq: 25,
        xPos: 110 / 3.5, yPos: 220 / 3.5, preReqs: [0], chain: 0,
        description: "Your knowledge of Shadow Magic grants the power to summon night vision at will. Blur is more effective.",
        labels: [], lines: []
    },
    //9
    {
        name: "Shadow Shaping", skill: illusion, skillReq: 50,
        xPos: 100 / 3.5, yPos: 130 / 3.5, preReqs: [8], chain: 0,
        description: "You have gained even deeper insights into the weave of shadows. Blur is more powerful and long lasting. Empowering Shadow Dance grants immunity to most impact effects and increases attack speed.",
        labels: [], lines: []
    },
    //10
    {
        name: "Shadow Mastery", skill: illusion, skillReq: 75,
        xPos: 100 / 3.5, yPos: 60 / 3.5, preReqs: [9], chain: 0,
        description: "You have gained even deeper insights into the weave of shadows. Empowering Shadow Simulacrum or Mistress of the Dark improves your illusions. Blur is more effective. Shadow Dance and Blur now laster even longer.",
        labels: [], lines: []
    },
    //11
    {
        name: "Delusive<br>Phantasms", skill: illusion, skillReq: 15,
        xPos: 300 / 3.5, yPos: 240 / 3.5, preReqs: [0], chain: 0,
        description: "You can effect basic emotions like fear, calmness and courage more easily. Empowered spells now grant secondary effects. Fear lowers armor, Charm drains magicka and stamina and Courage restores them.",
        labels: [], lines: []
    },
    //12
    {
        name: "Otherworldly<br>Phantasms", skill: illusion, skillReq: 25,
        xPos: 235 / 3.5, yPos: 60, preReqs: [0], chain: 0,
        description: "You have improved your ability to turn your foes into berserking maniacs or cause them to fall asleep. Empowered Fury spells increase damage and stamina regeneration. Empowered Sleep spells reduce magicka and stamina regeneration.",
        labels: [], lines: []
    },
    //13
    {
        name: "Pain and Agony", skill: illusion, skillReq: 50,
        xPos: 260 / 3.5, yPos: 40, preReqs: [1], chain: 0,
        description: "You can now invoke terrible agony in your foes with ease. Empowering Nightmare can kill sleeping targets instantly. Empowered Phantom Pain reduces movement speed.",
        labels: [], lines: []
    },
    //14
    {
        name: "Obliterate the Mind", skill: illusion, skillReq: 75,
        xPos: 270 / 3.5, yPos: 72 / 3.5, preReqs: [2], chain: 0,
        description: "Empowered Phantasmal Killer causes an instant heart attack. Empowered Blackout causes unconsciousness. Empowered Fog of Shadows cripples their magicka regeneration.",
        labels: [], lines: []
    },
    //15
    {
        name: "Domination", skill: illusion, skillReq: 100,
        xPos: 267 / 3.5, yPos: 10 / 3.5, preReqs: [3], chain: 0,
        description: "There is no thinking being that can escape your influence. Empowered Phantasmal Miasma reduces movement speed and Empowered Mind Maelstrom can inflict victims with frenzy or sleep.",
        labels: [], lines: []
    },
	//16
    {
        name: "Empowered Illusions", skill: illusion, skillReq: 20,
        xPos: 85 / 3.5, yPos: 275 / 3.5, preReqs: [0], chain: 0,
        description: "You learned how to empower Illusion spells by dual casting them. Thus, <br> you're able to overcharge their effects.",
        labels: [], lines: []
    },
   ];

   let lockpicking = new SkillTree('lockpicking', 9);
   lockpicking.perks = [
    //0
    {
        name: "Cheap Tricks", skill: lockpicking, skillReq: 0,
        xPos: 150 / 4, yPos: 357 / 4, preReqs: [], chain: 0,
        description: "You have learned the basics of the art of picking locks and gain 20 expertise. You can now pick novice and apprentice locks without difficulty,<br>but adept locks remain a challenge. If you apply some basic smithing techniques, you can even forge steel ingots into lockpicks.",
        labels: [], lines: []
    },
    //1
    {
        name: "Locksmithing Lore", skill: lockpicking, skillReq: 45,
        xPos: 250 / 4, yPos: 195 / 4, preReqs: [0], chain: 0,
        description: "You have extended your repertoire of lockpicking tricks, which increases your expertise by an additional 25 points.<br>Adept locks can be picked without effort and you can attempt to open expert locks.",
        labels: [], lines: []
    },
    //2
    {
        name: "Masterly Lockpicking", skill: lockpicking, skillReq: 90,
        xPos: 280 / 4, yPos: 50 / 4, preReqs: [1], chain: 0,
        description: "You learned everything there is to know about the art of lockpicking. Your expertise increases by 35 points,<br>you can now pick expert locks without difficulty and even master locks are no longer safe from you.",
        labels: [], lines: []
    },
    //3
    {
        name: "Treasure Hunter", skill: lockpicking, skillReq: 50,
        xPos: 150 / 4, yPos: 130 / 4, preReqs: [1], chain: 0,
        description: "You are able to locate secret spaces in containers when you search them <br> and can thereby find more loot.",
        labels: [], lines: []
    },
    //4
    {
        name: "Locksmith's Memory", skill: lockpicking, skillReq: 30,
        xPos: 123 / 4, yPos: 280 / 4, preReqs: [0], chain: 0,
        description: "You are able to remember your lockpick's angle after they break. Also increases your expertise by 10 points.",
        labels: [], lines: []
    },
   ];

   let marksman = new SkillTree('marksman', 10);
   marksman.perks = [
    //0
    {
        name: "Ranged Combat Training", skill: marksman, skillReq: 0,
        xPos: 314 / 4, yPos: 360 / 4, preReqs: [], chain: 0,
        description: "After some training at the shooting range you can deal more damage with bows and crossbows.<br>[20% more damage, -50% weapon weight penalties, ammunition grants armor penetration]",
        labels: [], lines: []
    },
    //1
    {
        name: "Ranger", skill: marksman, skillReq: 15,
        xPos: 177 / 4, yPos: 322 / 4, preReqs: [0], chain: 0,
        description: "You improved your footwork when engaging in ranged combat with light weapons.<br>[Able to run with a drawn light bow or crossbow]",
        labels: [], lines: []
    },
    //2
    {
        name: "Eagle Eye", skill: marksman, skillReq: 25,
        xPos: 170 / 4, yPos: 250 / 4, preReqs: [0], chain: 0,
        description: "By concentrating only on your target and holding your breath, you can now aim much more precisely.<br>[Zoom in by holding right mouse button]",
        labels: [], lines: []
    },
    //3
    {
        name: "Marksman's<br>Focus", skill: marksman, skillReq: 50,
        xPos: 83 / 4, yPos: 161 / 4, preReqs: [2], chain: 0,
        description: "When fully focusing on your target, everything around you seems to slow down remarkably.<br>[Time slows down while zooming, -25% weapon weight penalties]",
        labels: [], lines: []
    },
    //4
    {
        name: "Rapid Reload", skill: marksman, skillReq: 60,
        xPos: 90 / 4, yPos: 119 / 4, preReqs: [2], chain: 0,
        description: "Your have familiarized yourself with the mechanics of your crossbow and can use this knowledge to reload it significantly faster.<br>[+10 expertise, +50% reload speed with crossbows]",
        labels: [], lines: []
    },
    //5
    {
        name: "Power Shot", skill: marksman, skillReq: 75,
        xPos: 100 / 4, yPos: 78 / 4, preReqs: [2], chain: 0,
        description: "You have discovered the art of aiming at tendons and joints.<br>[Chance to stagger targets]",
        labels: [], lines: []
    },
    //6
    {
        name: "Quick Shot", skill: marksman, skillReq: 60,
        xPos: 175 / 4, yPos: 124 / 4, preReqs: [2], chain: 0,
        description: "You have learned to draw and fire in one single movement.<br>[+50% draw speed with bows]",
        labels: [], lines: []
    },
    //7
    {
        name: "Precise Aim", skill: marksman, skillReq: 20,
        xPos: 302 / 4, yPos: 288 / 4, preReqs: [0], chain: 0,
        description: "Your aim is now precise enough to target weak spots in the enemy's defenses.<br>[20% more damage]",
        labels: [], lines: []
    },
    //8
    {
        name: "Piercing Shot", skill: marksman, skillReq: 45,
        xPos: 284 / 4, yPos: 200 / 4, preReqs: [7], chain: 0,
        description: "You've learned how to hit the weakest parts of armor.<br>[+50% armor penetration from ammunition]",
        labels: [], lines: []
    },
    //9
    {
        name: "Penetrating Shot", skill: marksman, skillReq: 80,
        xPos: 224 / 4, yPos: 67 / 4, preReqs: [8], chain: 0,
        description: "You've mastered the technique of hitting weak armor parts.<br>[+50% armor penetration from ammunition]",
        labels: [], lines: []
    },
    //10
    {
        name: "Stunning Precision", skill: marksman, skillReq: 100,
        xPos: 174 / 4, yPos: 27 / 4, preReqs: [9, 5], chain: 0,
        description: "Any successful staggering shot will almost always stun the target momentarily.<br>[Staggering hits will also stun the target]",
        labels: [], lines: []
    },
    //11
    {
        name: "Hunter", skill: marksman, skillReq: 15, levelReq: 0,
        xPos: 250 / 4, yPos: 270 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "You are more adapted to wildlife, and better understand its inhabitants.<br>[against animals: +15% physical damage, -10% physical damage taken, +10% poison and disease resist]",
        labels: [], lines: [], chainPerks: []
    },
    //12
    {
        name: "Hunter", skill: marksman, skillReq: 30, levelReq: 0,
        xPos: 250 / 4, yPos: 270 / 4, preReqs: [11], chain: 2, rank: 2,
        description: "You are more adapted to wildlife, and better understand its inhabitants.<br>[against animals: +30% physical damage, -20% physical damage taken, +20% poison and disease resist]",
        labels: [], lines: [], chainPerks: []
    },
    //13
    {
        name: "Bow Strike", skill: marksman, skillReq: 25, levelReq: 0,
        xPos: 90 / 4, yPos: 280 / 4, preReqs: [1], chain: 2, rank: 1,
        description: "You can use your bow or crossbow as melee weapon in close combat.<br>[+15 bash damage, bash causes stagger, -3 bash stamina cost]",
        labels: [], lines: [], chainPerks: []
    },
    //14
    {
        name: "Bow Strike", skill: marksman, skillReq: 50, levelReq: 0,
        xPos: 90 / 4, yPos: 280 / 4, preReqs: [13], chain: 2, rank: 2,
        description: "You can use your bow or crossbow as melee weapon in close combat.<br>[+30 bash damage, bash causes stagger, -6 bash stamina cost]",
        labels: [], lines: [], chainPerks: []
    },
   ];

   let onehanded = new SkillTree('onehanded', 11);
   onehanded.perks = [
    //0
    {
        name: "Weapon Mastery", skill: onehanded, skillReq: 0,
        xPos: 191 / 4, yPos: 90, preReqs: [], chain: 2, rank: 1,
        description: "Your improved fighting techniques allow you to swing one-handed weapons with less effort and deal more damage with one-handed weapons and unarmed attacks.<br>[20% more damage]",
        labels: [], lines: [], chainPerks: []
    },
    //1
    {
        name: "Weapon Mastery", skill: onehanded, skillReq: 0,
        xPos: 191 / 4, yPos: 90, preReqs: [1], chain: 2, rank: 2,
        description: "Your improved fighting techniques increase your damage dealt with one-handed weapons and unarmed attacks greatly.<br>[40% more damage]",
        labels: [], lines: [], chainPerks: []
    },
    //2
    {
        name: "Penetrating<br>Strikes", skill: onehanded, skillReq: 20,
        xPos: 195 / 4, yPos: 274 / 4, preReqs: [0], chain: 0,
        description: "Your power attacks with one-handed weapons are now devastating enough to penetrate enemy armor and less exhausting.<br>[-50% power attack stamina cost, +5% armor penetration]",
        labels: [], lines: []
    },
    //3
    {
        name: "Dagger<br>Focus", skill: onehanded, skillReq: 25,
        xPos: 85 / 4, yPos: 240 / 4, preReqs: [2], chain: 3, rank: 1,
        description: "You learned some dirty tricks for your dagger.<br>[20% irresistible sneak attack damage, +10% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //4
    {
        name: "Dagger<br>Focus", skill: onehanded, skillReq: 50,
        xPos: 85 / 4, yPos: 240 / 4, preReqs: [3], chain: 3, rank: 2,
        description: "A dagger in your hand turns into a deadly weapon.<br>[55% irresistible sneak attack damage, +20% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //5
    {
        name: "Dagger<br>Focus", skill: onehanded, skillReq: 75,
        xPos: 85 / 4, yPos: 240 / 4, preReqs: [4], chain: 3, rank: 3,
        description: "You have mastered the deadly art of the dagger.<br>[100% irresistible sneak attack damage, +30% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //6
    {
        name: "Axe<br>Focus", skill: onehanded, skillReq: 25,
        xPos: 140 / 4, yPos: 200 / 4, preReqs: [2], chain: 3, rank: 1,
        description: "You've become familiar with one-handed axes.<br>[10% more damage, +10% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //7
    {
        name: "Axe<br>Focus", skill: onehanded, skillReq: 50,
        xPos: 140 / 4, yPos: 200 / 4, preReqs: [6], chain: 3, rank: 2,
        description: "You've become an advanced one-handed axe fighter.<br>[20% more damage, +20% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //8
    {
        name: "Axe<br>Focus", skill: onehanded, skillReq: 75,
        xPos: 140 / 4, yPos: 200 / 4, preReqs: [7], chain: 3, rank: 3,
        description: "You've become a master of one-handed axe combat.<br>[30% more damage, +30% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //9
    {
        name: "Blunt Weapon<br>Focus", skill: onehanded, skillReq: 25,
        xPos: 260 / 4, yPos: 200 / 4, preReqs: [2], chain: 3, rank: 1,
        description: "You've learned some techniques to crush armor with maces, clubs, and mauls.<br>[5% more power attack damage, +15% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //10
    {
        name: "Blunt Weapon<br>Focus", skill: onehanded, skillReq: 50,
        xPos: 260 / 4, yPos: 200 / 4, preReqs: [9], chain: 3, rank: 2,
        description: "You've become an advanced blunt weapon fighter and know how to find weak spots in enemy armor.<br>[10% more power attack damage, +30% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //11
    {
        name: "Blunt Weapon<br>Focus", skill: onehanded, skillReq: 75,
        xPos: 260 / 4, yPos: 200 / 4, preReqs: [10], chain: 3, rank: 3,
        description: "You've become a masterly blunt weapon fighter, rendering armor almost useless.<br>[15% more power attack damage, +45% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //12
    {
        name: "Sword/Spear<br>Focus", skill: onehanded, skillReq: 25,
        xPos: 285 / 4, yPos: 246 / 4, preReqs: [2],chain: 3, rank: 1,
        description: "You've learned the basics of one-handed sword and spear combat.<br>[+8% attack speed, +7% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //13
    {
        name: "Sword/Spear<br>Focus", skill: onehanded, skillReq: 50,
        xPos: 285 / 4, yPos: 246 / 4, preReqs: [12],chain: 3, rank: 2,
        description: "You've acquired the advanced techniques of fighting with one-handed swords and spears.<br>[+16% attack speed, +14% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //14
    {
        name: "Sword/Spear<br>Focus", skill: onehanded, skillReq: 75,
        xPos: 285 / 4, yPos: 246 / 4, preReqs: [13], chain: 3, rank: 3,
        description: "You've become a master of one-handed swords and spears.<br>[+24% attack speed, +21% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //15
    {
        name: "Powerful Strike", skill: onehanded, skillReq: 50,
        xPos: 150 / 4, yPos: 150 / 4, preReqs: [2], chain: 0,
        description: "You know how to put the maximum force into your power attacks.<br>[20% more power attack damage]",
        labels: [], lines: []
    },
    //16
    {
        name: "Powerful Charge", skill: onehanded, skillReq: 50,
        xPos: 250 / 4, yPos: 150 / 4, preReqs: [2], chain: 0,
        description: "You have learned to perform a leaping power attack while sprinting.<br>[Able to do sprinting power attack]",
        labels: [], lines: []
    },
    //17
    {
        name: "Stunning Charge", skill: onehanded, skillReq: 100,
        xPos: 200 / 4, yPos: 25 / 4, preReqs: [15, 16], chain: 0,
        description: "Putting your whole weight behind your charge, your forward power attacks now have enough momentum to knock down opponent.<br>[Forward power attacks can knock down]",
        labels: [], lines: []
    },
    //18
    {
        name: "Balanced<br>Wielding", skill: onehanded, skillReq: 25,
        xPos: 230 / 4, yPos: 310 / 4, preReqs: [0],chain: 2, rank: 1,
        description: "With your off hand free you can balance your weapon better, swinging it even faster and stronger.<br>[while having off hand free: +15% damage, +10% attack speed]",
        labels: [], lines: [], chainPerks: []
    },
    //19
    {
        name: "Balanced<br>Wielding", skill: onehanded, skillReq: 50,
        xPos: 230 / 4, yPos: 310 / 4, preReqs: [18], chain: 2, rank: 2,
        description: "With your off hand free you can balance your weapon better, swinging it even faster and stronger.<br>[while having off hand free: +30% damage, +20% attack speed]",
        labels: [], lines: [], chainPerks: []
    },
	//20
    {
        name: "Armed<br>Spellcasting", skill: onehanded, skillReq: 25,
        xPos: 72, yPos: 80, preReqs: [0], chain: 2, rank: 1,
        description: "You're more adapted to wielding both weapon & magic, and can use your weapon to aid your spellcasting.<br>[with one-handed weapon on right hand and magic on left hand: +5% attack speed, -13% spell cost]",
        labels: [], lines: [], chainPerks: []
    },
    //21
    {
        name: "Armed<br>Spellcasting", skill: onehanded, skillReq: 50,
        xPos: 72, yPos: 80, preReqs: [20],chain: 2, rank: 2,
        description: "You're more adapted to wielding both weapon & magic, and can use your weapon to aid your spellcasting.<br>[with one-handed weapon on right hand and magic on left hand: +10% attack speed, -25% spell cost]",
        labels: [], lines: [], chainPerks: []
    },
    //22
    {
        name: "Flurry", skill: onehanded, skillReq: 25,
        xPos: 88, yPos: 90, preReqs: [0],chain: 2, rank: 1,
        description: "When fighting with one-handed weapons or fists, you are able to attack faster than normal.<br>[+10% attack speed]",
        labels: [], lines: [], chainPerks: []
    },
    //23
    {
        name: "Flurry", skill: onehanded, skillReq: 50,
        xPos: 88, yPos: 90, preReqs: [23], chain: 2, rank: 2,
        description: "When fighting with one-handed weapons or fists, you're able to attack even faster.<br>[+25% attack speed]",
        labels: [], lines: [], chainPerks: []
    },
    //24
    {
        name: "Storm of Steel", skill: onehanded, skillReq: 75,
        xPos: 88, yPos: 100 / 4, preReqs: [23], chain: 0,
        description: "You've become very skilled in wielding two weapons at once.<br>[20% more dual-wield power attack damage]",
        labels: [], lines: []
    },
	//25
    {
        name: "Martial Arts", skill: onehanded, skillReq: 0,
        xPos: 100 / 4, yPos: 320 / 4, preReqs: [], chain: 0,
        description: "You are a passionate fist fighter, and train regularly to toughen your muscles to their very limits.<br>[+30 unarmed damage, 67% less unarmed power attack cost]",
        labels: [], lines: []
    }
   ];

   let pickpocket = new SkillTree('pickpocket', 12);
   pickpocket.perks = [
    //0
    {
        name: "Nimble Fingers", skill: pickpocket, skillReq: 0,
        xPos: 112 / 4, yPos: 337 / 4, preReqs: [], chain: 3, rank: 1,
        description: "You've spent some time improving your sleight of hand,<br>which gives you substantial chances when pickpocketing.",
        labels: [], lines: [], chainPerks: []
    },
    //1
    {
        name: "Nimble Fingers", skill: pickpocket, skillReq: 15,
        xPos: 112 / 4, yPos: 337 / 4, preReqs: [0], chain: 3, rank: 2,
        description: "Your fingers have become very nimble, and besides other advantages, they allow you to <br> pickpocket even better and to apply poisons on your victims. Why fight if a vial of deadly venom can also do the trick?",
        labels: [], lines: [], chainPerks: []
    },
    //2
    {
        name: "Nimble Fingers", skill: pickpocket, skillReq: 30,
        xPos: 112 / 4, yPos: 337 / 4, preReqs: [1], chain: 3, rank: 3,
        description: "Your mastery of the art of pickpocketing has made you quicker and more discreet, further increasing your chances of successful thievery.",
        labels: [], lines: [], chainPerks: []
    },
    //3
    {
        name: "Cutpurse", skill: pickpocket, skillReq: 25,
        xPos: 161 / 4, yPos: 242 / 4, preReqs: [0], chain: 0,
        description: "People shouldn't burden themselves with purses and keys.<br>Luckily, you now can free them of these burdens more easily.",
        labels: [], lines: []
    },
    //4
    {
        name: "Nightly Thief", skill: pickpocket, skillReq: 50,
        xPos: 202 / 4, yPos: 146 / 4, preReqs: [3], chain: 0,
        description: "You have learned how to avoid waking up targets during your \"nightly visits\", <br> so you can free them from their worldly burdens with ease.",
        labels: [], lines: []
    },
    //5
    {
        name: "Misdirection", skill: pickpocket, skillReq: 75,
        xPos: 221 / 4, yPos: 60 / 4, preReqs: [4], chain: 0,
        description: "Why should someone own a nice weapon or piece of jewelry when it could be yours? <br> Now you can sometimes adjust this inequity.",
        labels: [], lines: []
    },
    //6
    {
        name: "Perfected Art", skill: pickpocket, skillReq: 100,
        xPos: 254 / 4, yPos: 20 / 4, preReqs: [5], chain: 0,
        description: "After having learned everything there is to know about thievery,<br>your legendary skill means you almost never get caught.",
        labels: [], lines: []
    },
    //7
    {
        name: "Mighty Greed", skill: pickpocket, skillReq: 25,
        xPos: 257 / 4, yPos: 275 / 4, preReqs: [3], chain: 0,
        description: "You are either very strong or very greedy... You now can carry more items <br> without becoming overencumbered.",
        labels: [], lines: []
    }
   ];

   let restoration = new SkillTree('restoration', 13);
   restoration.perks = [
    //0
    {
        name: "Novice<br>Restoration", skill: restoration, skillReq: 0,
        xPos: 220 / 4, yPos: 350 / 4, preReqs: [], chain: 0,
        description: "You've learned how to cast Novice level spells with decreased effort <br> while your newfound knowledge also allows you to augment all Restoration spells.",
        labels: [], lines: []
    },
    //1
    {
        name: "Apprentice<br>Restoration", skill: restoration, skillReq: 25,
        xPos: 236 / 4, yPos: 268 / 4, preReqs: [0], chain: 0,
        description: "By pursuing your apprenticeship in Restoration, you're now<br>able to augment and cast them with less effort.",
        labels: [], lines: []
    },
    //2
    {
        name: "Adept<br>Restoration", skill: restoration, skillReq: 50,
        xPos: 220 / 4, yPos: 160 / 4, preReqs: [1], chain: 0,
        description: "By advancing further into the school of Restoration, you've learned how<br>to augment and cast spells of the Adept rank more easily.",
        labels: [], lines: []
    },
    //3
    {
        name: "Expert Restoration", skill: restoration, skillReq: 75,
        xPos: 219 / 4, yPos: 88 / 4, preReqs: [2], chain: 0,
        description: "You've unlocked almost every secret in the school of Restoration.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
        labels: [], lines: []
    },
    //4
    {
        name: "Master<br>Restoration", skill: restoration, skillReq: 90,
        xPos: 178 / 4, yPos: 30 / 4, preReqs: [3], chain: 0,
        description: "Your knowledge of Restoration has become all-encompassing. You can cast<br>the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
        labels: [], lines: []
    },
    //5
    {
        name: "Benefactor's<br>Insight", skill: restoration, skillReq: 20,
        xPos: 306 / 4, yPos: 295 / 4, preReqs: [0], chain: 0,
        description: "You learned how to empower Restoration spells by dual casting them. <br> Therefore, you are now able to overcharge their effects.",
        labels: [], lines: []
    },
    //6
    {
        name: "Focused Mind", skill: restoration, skillReq: 25,
        xPos: 336 / 4, yPos: 253 / 4, preReqs: [1], chain: 0,
        description: "You've learned to focus your mind. Thus, you can keep your concentration even<br>in stressful situations and regenerate your magicka faster.",
        labels: [], lines: []
    },
    //7
    {
        name: "Power of Life", skill: restoration, skillReq: 50,
        xPos: 282 / 4, yPos: 160 / 4, preReqs: [6], chain: 0,
        description: "Your studies of healing magic now grant you <br> the power of making yourself almost invulnerable for a short duration once a day.",
        labels: [], lines: []
    },
    //8
    {
        name: "Essence of Life", skill: restoration, skillReq: 75,
        xPos: 350 / 4, yPos: 201 / 4, preReqs: [7], chain: 0,
        description: "Your understanding of healing and how magic and life are intertwined <br>allows you to call upon your newfound power more often.",
        labels: [], lines: []
    },
    //9
    {
        name: "Improved Wards", skill: restoration, skillReq: 30,
        xPos: 100 / 4, yPos: 300 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "Your arcane wards now cost less magicka and are more powerful.",
        labels: [], lines: [], chainPerks: []
    },
    //10
    {
        name: "Improved Wards", skill: restoration, skillReq: 60,
        xPos: 100 / 4, yPos: 300 / 4, preReqs: [9], chain: 2, rank: 2,
        description: "Your improved knowledge about arcane wards allows you to absorb magicka from incoming spells and they are even more powerful.",
        labels: [], lines: [], chainPerks: []
    },
    //11
    {
        name: "Improved Healing", skill: restoration, skillReq: 50,
        xPos: 120 / 4, yPos: 264 / 4, preReqs: [0], chain: 0,
        description: "Your healing spells are now more effective, and also restore the affected subject's stamina if they are out of combat.",
        labels: [], lines: []
    },
    //12
    {
        name: "Respite", skill: restoration, skillReq: 75,
        xPos: 35 / 4, yPos: 238 / 4, preReqs: [11], chain: 0,
        description: "Your healing spells now restore the affected subject's stamina in combat at well.",
        labels: [], lines: []
    },
    //13
    {
        name: "Divine Light", skill: restoration, skillReq: 25,
        xPos: 100 / 4, yPos: 200 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "You now are able to intensify the heat of your sun spells. Thus, <br> they now deal increased damage.",
        labels: [], lines: [], chainPerks: []
    },
    //14
    {
        name: "Divine Light", skill: restoration, skillReq: 50,
        xPos: 100 / 4, yPos: 200 / 4, preReqs: [13], chain: 2, rank: 2,
        description: "Your sun spells burn with almost otherworldly heat <br> and smite the undead with terrifying ease.",
        labels: [], lines: [], chainPerks: []
    },
    //15
    {
        name: "Blinding Light", skill: restoration, skillReq: 75,
        xPos: 60 / 4, yPos: 130 / 4, preReqs: [13], chain: 0,
        description: "Your higher level sun spells are so bright that all but the most powerful foes are stunned, living and dead.",
        labels: [], lines: []
    },
    //16
    {
        name: "Mysticism", skill: restoration, skillReq: 100,
        xPos: 60 / 4, yPos: 30 / 4, preReqs: [15], chain: 0,
        description: "You've learned the art of weaving mystical energies into your spells, <br> making all of them more effective against the undead and Daedra.",
        labels: [], lines: []
    },
    //17
    {
        name: "Venomancer", skill: restoration, skillReq: 25,
        xPos: 180 / 4, yPos: 230 / 4, preReqs: [0], chain: 2, rank: 1,
        description: "Your higher level sun spells are so bright that all but the most powerful foes are stunned, living and dead.",
        labels: [], lines: [], chainPerks: []
    },
    //18
    {
        name: "Venomancer", skill: restoration, skillReq: 50,
        xPos: 180 / 4, yPos: 230 / 4, preReqs: [17], chain: 2, rank: 2,
        description: "You now are able to greatly intensify the potency of your poison spells. <br>Thus, they now deal far more damage.",
        labels: [], lines: [], chainPerks: []
    },
    //19
    {
        name: "Immobilization", skill: restoration, skillReq: 75,
        xPos: 150 / 4, yPos: 170 / 4, preReqs: [17], chain: 0,
        description: "Your poison spells are now more effective at paralyzing your victims, working on stronger enemies, and effecting them faster.",
        labels: [], lines: []
    },
    //20
    {
        name: "Poison<br>Master", skill: restoration, skillReq: 100,
        xPos: 120 / 4, yPos: 30 / 4, preReqs: [19], chain: 0,
        description: "Your fascination for poison now grants you a natural resistance to it, <br> while also increasing all your poison spells' power even further.",
        labels: [], lines: []
    },
   ];

   
let smithing = new SkillTree("smithing", 14);
smithing.perks = [

    //0
    {
        name: "Craftsmanship", skill: smithing, skillReq: 0,
        xPos: 230 / 5, yPos: 310 / 3.5, preReqs: [], chain: 0,
        description: "You've acquired the basics of craftsmanship and know how to properly use all kinds of tools. <br> Thus, you are able to craft and improve a wide variety of common goods.",
        labels: [], lines: []
    },
    //1
    {
        name: "Advanced<br>Blacksmithing", skill: smithing, skillReq: 50,
        xPos: 180 / 5, yPos: 180 / 3.5, preReqs: [0], chain: 0,
        description: "You've gained quite some finesse, allowing you to craft plate armor and fine jewelry.<br>You have also found a way to melt and crush certain gems into alchemically usable dust.",
        labels: [], lines: []
    },
    //2
    {
        name: "Arcane<br>Craftsmanship", skill: smithing, skillReq: 50,
        xPos: 180 / 5, yPos: 100 / 3.5, preReqs: [1], chain: 0,
        description: "After reading a tome about the ancient secrets of explosive dwemer bolts, you've learned the<br>techniques to craft magical armor and bolts/arrows infused with elemental power.",
        labels: [], lines: []
    },
    //3
    {
        name: "Legendary<br>Blacksmithing", skill: smithing, skillReq: 100,
        xPos: 300 / 5, yPos: 100 / 3.5, preReqs: [1], chain: 0,
        description: "You make steel sing songs on the anvil. Your hammer is no longer a mere tool, but a loom that weaves the fabric of myths.<br>You can even improve the divine artifacts of Aedra and Daedra.",
        labels: [], lines: []
    },
    //4
    {
        name: "Morrowind<br>Smithing", skill: smithing, skillReq: 25,
        xPos: 280 / 5, yPos: 203 / 3.5, preReqs: [0], chain: 2, rank: 1, 
        description: "As a rule, Dunmer are masters of the processing of bone of the fauna of Morrowind, <br>but you have mastered their knowledge with the help of this compendium written by the famous blacksmith of Morrowind.",
        labels: [], lines: [], chainPerks: []
    },
    //5
    {
        name: "Morrowind<br>Smithing", skill: smithing, skillReq: 50,
        xPos: 280 / 5, yPos: 203 / 3.5, preReqs: [4], chain: 2, rank: 2, 
        description: "You have honed your bone processing skills and are now able to work with such complex material as chitin. <br> Having read the compendium to the holes, you have become a master of this technology.",
        labels: [], lines: [], chainPerks: []
    },
    //6
    {
        name: "Advanced<br>Light Armors", skill: smithing, skillReq: 25,
        xPos: 115 / 5, yPos: 220 / 3.5, preReqs: [0], chain: 0, 
        description: "You've been able to learn more intricate techniques, <br> allowing you to craft and efficiently improve advanced light armors.",
        labels: [], lines: []
    },
    //7
    {
        name: "Elven Smithing", skill: smithing, skillReq: 50,
        xPos: 48 / 5, yPos: 150 / 3.5, preReqs: [6], chain: 0,
        description: "You've gained enough finesse to create and improve Elven armor and weapons <br> by studying the Elven craftmanship carefully.",
        labels: [], lines: []
    },
    //8
    {
        name: "Glass Smithing", skill: smithing, skillReq: 75,
        xPos: 70 / 5, yPos: 90 / 3.5, preReqs: [7], chain: 0,
        description: "Crafting and improving Glass equipment is not for the unskilled, <br>but having studied intensely, you aren't one of them any more.",
        labels: [], lines: []
    },
    //9
    {
        name: "Dwarven<br>Smithing", skill: smithing, skillReq: 25,
        xPos: 355 / 5, yPos: 240 / 3.5, preReqs: [0], chain: 0,
        description: "You've studied some long-lost schematics of dwarven equipment and <br> acquired the secret knowledge of how to create and improve them efficiently.",
        labels: [], lines: []
    },
    //10
    {
        name: "Orcish<br>Smithing", skill: smithing, skillReq: 50,
        xPos: 380 / 5, yPos: 162 / 3.5, preReqs: [4, 9], chain: 0,
        description: "Orcish equipment is hard to craft, but you've got what it takes. <br>Especially the schematics! You can craft and improve it easily and most efficiently.",
        labels: [], lines: [], chainPerks: [], choiceNeeded: true
    },
    //11
    {
        name: "Nordic<br>Smithing", skill: smithing, skillReq: 55,
        xPos: 430 / 5, yPos: 182 / 3.5, preReqs: [9], chain: 0,
        description: "The key mixture found in Nordic equipment is the blend of Quicksilver and Ebony ore. <br> The combination creates some of the hardest alloys on Nirn.",
        labels: [], lines: [], chainPerks: []
    },
    //12
    {
        name: "Ebony<br>Smithing", skill: smithing, skillReq: 75,
        xPos: 390 / 5, yPos: 90 / 3.5, preReqs: [10, 11], chain: 0, 
        description: "Ebony weapons and armor - some even fail at heating the metal. But not you. <br>Now that you've studied the related schematics, you can craft and improve ebony equipment with ease.",
        labels: [], lines: [], chainPerks: [], choiceNeeded: true
    },
    //13
    {
        name: "Daedric Smithing", skill: smithing, skillReq: 100,
        xPos: 440 / 5, yPos: 35 / 3.5, preReqs: [12], chain: 0,
        description: "The creation of daedric weapons and armor is a secret few mortals know - still, <br> somehow you managed to acquire this knowledge...",
        labels: [], lines: []
    },
    //14
    {
        name: "Stahlrim Smithing", skill: smithing, skillReq: 85,
        xPos: 251 / 5, yPos: 70 / 3.5, preReqs: [8, 12], chain: 0, 
        description: "Around the world, only a few know the secret of properly processing enchanted ice, <br>but you were lucky, for the help you provided to Skaals, they agreed to share their secrets.",
        labels: [], lines: [],choiceNeeded: true
    },
    //15
    {
        name: "Draconic Blacksmithing", skill: smithing, skillReq: 100,
        xPos: 251 / 5, yPos: 40 / 3.5, preReqs: [8, 12], chain: 0,
        description: "The scales and bones of dragons are probably the hardest material to work with, <br> but you've mastered even this art since you studied that old compendium.",
        labels: [], lines: [], choiceNeeded: true
    },
    //16
    {
        name: "Shivering Isles Smithing", skill: smithing, skillReq: 100,
        xPos: 251 / 5, yPos: 10 / 3.5, preReqs: [8, 12], chain: 0,
        description: "On your travels you have discovered the secrets to unleash the power of the <br>mystical amber and madness ore of the Shivering Isles. Few could hope to achieve such a feat without losing their mind...",
        labels: [], lines: [], choiceNeeded: true
    }];

   let sneak = new SkillTree('sneak', 15);
   sneak.perks = [
    //0
    {
        name: "Stealth", skill: sneak, skillReq: 0,
        xPos: 189 / 4, yPos: 349 / 4, preReqs: [], chain: 2, rank: 1,
        description: "You know the basics of moving silently and are harder to detect when sneaking <br> while not wearing any heavy armor.",
        labels: [], lines: [], chainPerks: []
    },
    //1
    {
        name: "Stealth", skill: sneak, skillReq: 0,
        xPos: 189 / 4, yPos: 349 / 4, preReqs: [0],  chain: 2, rank: 2,
        description: "You are even harder to detect when sneaking while not wearing any heavy armor.",
        labels: [], lines: [], chainPerks: []
    },
    //2
    {
        name: "Deft Strike", skill: sneak, skillReq: 25,
        xPos: 300 / 4, yPos: 252 / 4, preReqs: [0],  chain: 0,
        description: "You've learned to exploit weaknesses in your foes' armor <br> when sneak attacking with daggers, bows or swords.",
        labels: [], lines: []
    },
    //3
    {
        name: "Anatomical Lore", skill: sneak, skillReq: 50,
        xPos: 308 / 4, yPos: 174 / 4, preReqs: [2],  chain: 0,
        description: "Newfound knowledge of humanoid anatomy allows you to slay almost any <br> human-like creature outright with sneak attacks.",
        labels: [], lines: []
    },
    //4
    {
        name: "Advanced Anatomical Lore", skill: sneak, skillReq: 75,
        xPos: 260 / 4, yPos: 134 / 4, preReqs: [3],  chain: 0,
        description: "Your vast knowledge of anatomy allows you to perform devastating sneak attacks on almost any target.",
        labels: [], lines: []
    },
    //5
    {
        name: "Muffled Movement", skill: sneak, skillReq: 25,
        xPos: 86 / 4, yPos: 245 / 4, preReqs: [0],  chain: 0,
        description: "Your newfound finesse allows you to move more quietly while not wearing any heavy armor.",
        labels: [], lines: []
    },
    //6
    {
        name: "Light Steps", skill: sneak, skillReq: 50,
        xPos: 129 / 4, yPos: 147 / 4, preReqs: [5],  chain: 0,
        description: "By distributing your weight more consciously,<br>you're able to avoid triggering pressure plates or similar mechanisms.",
        labels: [], lines: []
    },
    //7
    {
        name: "Acrobatics", skill: sneak, skillReq: 75,
        xPos: 227 / 4, yPos: 79 / 4, preReqs: [6],  chain: 0,
        description: "Your improved balance allows you to silently roll forward,<br>avoid getting knocked down except through magic and move even more quietly.",
        labels: [], lines: []
    },
    //8
    {
        name: "Shadowrunner", skill: sneak, skillReq: 100,
        xPos: 324 / 4, yPos: 45 / 4, preReqs: [7],  chain: 0,
        description: "There's almost nothing you cannot evade.<br>You are even harder to detect, more silent and all falling damage is decreased.",
        labels: [], lines: []
    },
   ];

   let speech = new SkillTree('speech', 16);
   speech.perks = [
    //0
    {
        name: "Haggling", skill: speech, skillReq: 0,
        xPos: 118 / 4, yPos: 335 / 4, preReqs: [], chain: 3, rank: 1,
        description: "You've further advanced your knowledge on how to handle merchants <br> and are able to haggle for even better prices.",
        labels: [], lines: [], chainPerks: []
    },
	//1
    {
        name: "Haggling", skill: speech, skillReq: 30,
        xPos: 118 / 4, yPos: 335 / 4, preReqs: [0], chain: 3, rank: 2,
        description: "You've learned how to deal with Skyrim's greedy merchants <br> and how to haggle for better prices.",
        labels: [], lines: [], chainPerks: []
    },
	//2
    {
        name: "Haggling", skill: speech, skillReq: 60,
        xPos: 118 / 4, yPos: 335 / 4, preReqs: [1], chain: 3, rank: 3,
        description: "You've perfected haggling with greedy merchants <br> and are able to get the best prices.",
        labels: [], lines: [], chainPerks: []
    },
    //3
    {
        name: "Merchant", skill: speech, skillReq: 50,
        xPos: 98 / 4, yPos: 271 / 4, preReqs: [0], chain: 0,
        description: "Your trading skills are good enough to sell almost anything to any merchant willing to trade with you, <br> and you can invest some of your gold with a shopkeeper to increase his available gold permanently.",
        labels: [], lines: []
    },
    //4
    {
        name: "Fencing", skill: speech, skillReq: 100,
        xPos: 141 / 4, yPos: 246 / 4, preReqs: [3], chain: 0,
        description: "You've become so persuasive that you could make almost anyone believe that <br> your goods are of a legal origin.",
        labels: [], lines: []
    },
    //5
    {
        name: "Silver Tongue", skill: speech, skillReq: 25,
        xPos: 48 / 4, yPos: 333 / 4, preReqs: [0], chain: 0,
        description: "You've spent quite some time improving your rhetorical skills and are now able to greatly influence<br>any conversation and to fascinate the opposite gender. You also get better offers at respective vendors.",
        labels: [], lines: []
    },
    //6
    {
        name: "Leadership", skill: speech, skillReq: 75,
        xPos: 118 / 4, yPos: 174 / 4, preReqs: [5], chain: 0,
        description: "Your rhetorical skill makes you the perfect leader. By inspiring all those who fight by your side,<br>you encourage your followers to always push their abilities to their very limits.",
        labels: [], lines: []
    },
    //7
    {
        name: "Masquerade", skill: speech, skillReq: 50,
        xPos: 102 / 4, yPos: 93 / 4, preReqs: [5],chain: 2, rank: 1,
        description: "You've become proficient at acting, and with the right equipment you can now disguise yourself,<br>although sometimes people can still tell that you are not truly one of them.",
        labels: [], lines: [], chainPerks: []
    },
    //8
    {
        name: "Masquerade", skill: speech, skillReq: 100,
        xPos: 102 / 4, yPos: 93 / 4, preReqs: [7], chain: 2, rank: 2,
        description: "There is no role you cannot play, and your acting is so believable that there is almost no way <br> for others to see through your disguises.",
        labels: [], lines: [], chainPerks: []
    },
    //9
    {
        name: "Lore of the Thu'um", skill: speech, skillReq: 0,
        xPos: 340 / 4, yPos: 338 / 4, preReqs: [], chain: 0,
        description: "You've been studying the lore and ancient script of dragons and the Thu'um.<br>Thus, you can shout more often.",
        labels: [], lines: [], chainPerks: []
    },
    //10
    {
        name: "Destructive Urge", skill: speech, skillReq: 0, levelReq: 30,
        xPos: 250 / 4, yPos: 320 / 4, preReqs: [9], chain: 0,
        description: "[Requires Level 30] The horrors that the Thu'um can inflict are etched into your mind.<br>Your Thu'um will wreak even greater havoc among your unfortunate foes. ",
        labels: [], lines: []
    },
    //11
    {
        name: "Indomitable<br>Force", skill: speech, skillReq: 0, levelReq: 25,
        xPos: 265 / 4, yPos: 251 / 4, preReqs: [9], chain: 0,
        description: "[Requires Level 25] You know what it means to be called Ysmir, Dragon of the North.<br> As you have withstood the test of Thu'um, so you will withstand the Thu'um of others.",
        labels: [], lines: []
    },
    //12
    {
        name: "Spiritual<br>Equilibrium", skill: speech, skillReq: 0, levelReq: 20,
        xPos: 273 / 4, yPos: 160 / 4, preReqs: [9], chain: 0,
        description: "[Requires Level 20] You have been guided in meditating on the Thu'um.<br>Now your shouts linger, lasting longer than they did before.",
        labels: [], lines: []
    },
    //13
    {
        name: "The Way of<br>the Voice", skill: speech, skillReq: 0, levelReq: 15,
        xPos: 296 / 4, yPos: 96 / 4, preReqs: [9], chain: 0,
        description: "[Requires Level 15] You've meditated thoroughly, and acquired vast insights into the Way of the Voice.<br>Every aspect of your Thu'um will be improved.",
        labels: [], lines: []
    },
    //14
    {
        name: "Tongue's<br>Insight", skill: speech, skillReq: 0, levelReq: 10,
        xPos: 349 / 4, yPos: 71 / 4, preReqs: [9], chain: 0,
        description: "[Requires Level 10] You've spent time meditating on the Way of the Voice, unearthing more knowledge and gaining <br> valuable insights. Thus, you can harness the might of yet another word of power.",
        labels: [], lines: []
    },
    //15
    {
        name: "Commander", skill: speech, skillReq: 50, levelReq: 0,
        xPos: 40 / 4, yPos: 200 / 4, preReqs: [5], chain: 0,
        description: "Your knowledge in combat tactics allow you to effectively lead your allies in combat.<br>All nearby allies are motivated by you which improves their ability to fight",
        labels: [], lines: [], chainPerks: []
    }
   ];

   let twohanded = new SkillTree('twohanded', 17);
   twohanded.perks = [
    //0
    {
        name: "Great Weapon Mastery", skill: twohanded, skillReq: 0,
        xPos: 50, yPos: 362 / 4, preReqs: [], chain: 2, rank: 1,
        description: "Your improved fighting techniques increase your damage dealt with two-handed weapons.<br>[20% more damage]",
        labels: [], lines: [], chainPerks: []
    },
    //1
    {
        name: "Great Weapon Mastery", skill: twohanded, skillReq: 0,
        xPos: 50, yPos: 362 / 4, preReqs: [0], chain: 2, rank: 2,
        description: "Your improved fighting techniques increase your damage dealt with two-handed weapons even more.<br>[30% more damage]",
        labels: [], lines: [], chainPerks: []
    },
    //2
    {
        name: "Barbaric Might", skill: twohanded, skillReq: 20,
        xPos: 50, yPos: 75, preReqs: [0], chain: 0,
        description: "Your power attacks become mighty blows that will penetrate armor and are less tiring.<br>[-50% power attack stamina cost, +5% armor penetration]",
        labels: [], lines: [],
    },
    //3
    {
        name: "Axe/Halberd Focus", skill: twohanded, skillReq: 25,
        xPos: 20, yPos: 70, preReqs: [2],chain: 3, rank: 1,
        description: "You've become familiar with two-handed axes and halberds.<br>[10% more damage, +10% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //4
    {
        name: "Axe/Halberd Focus", skill: twohanded, skillReq: 50,
        xPos: 20, yPos: 70, preReqs: [3],chain: 3, rank: 2,
        description: "You've become an advanced fighter with two-handed axes and halberds.<br>[20% more damage, +20% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //5
    {
        name: "Axe/Halberd Focus", skill: twohanded, skillReq: 75,
        xPos: 20, yPos: 70, preReqs: [4], chain: 3, rank: 3,
        description: "You've become a master of two-handed axes and halberds.<br>[30% more damage, +30% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //6
    {
        name: "Sword/Spear Focus", skill: twohanded, skillReq: 25,
        xPos: 280 / 4, yPos: 230 / 4, preReqs: [2],chain: 3, rank: 1,
        description: "You've learned the basics of two-handed sword and spear combat.<br>[+8% attack speed, +7% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //7
    {
        name: "Sword/Spear Focus", skill: twohanded, skillReq: 50,
        xPos: 280 / 4, yPos: 230 / 4, preReqs: [6],chain: 3, rank: 2,
        description: "You've acquired the advanced techniques of two-handed sword and spear combat.<br>[+16% attack speed, +14% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //8
    {
        name: "Sword/Spear Focus", skill: twohanded, skillReq: 75,
        xPos: 280 / 4, yPos: 230 / 4, preReqs: [7], chain: 3, rank: 3,
        description: "You've become a master of two-handed sword and spear combat.<br>[+24% attack speed, +21% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //9
    {
        name: "Blunt Weapon Focus", skill: twohanded, skillReq: 25,
        xPos: 80, yPos: 70, preReqs: [2],chain: 3, rank: 1,
        description: "You've learned some techniques to crush armor with warhammers, long maces, and battlestaffs.<br>[5% more power attack damage, +15% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //10
    {
        name: "Blunt Weapon Focus", skill: twohanded, skillReq: 50,
        xPos: 80, yPos: 70, preReqs: [9],chain: 3, rank: 2,
        description: "You've become an advanced blunt weapon fighter and know how to find weak spots in enemy armor.<br>[10% more power attack damage, +30% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //11
    {
        name: "Blunt Weapon Focus", skill: twohanded, skillReq: 75,
        xPos: 80, yPos: 70, preReqs: [10], chain: 3, rank: 3,
        description: "You've become a masterly blunt weapon fighter, rendering armor almost useless.<br>[15% more power attack damage, +45% armor penetration]",
        labels: [], lines: [], chainPerks: []
    },
    //12
    {
        name: "Devastating<br>Charge", skill: twohanded, skillReq: 50,
        xPos: 150 / 4, yPos: 183 / 4, preReqs: [2], chain: 0,
        description: "You've learned to perform a leaping power attack while sprinting, reducing your enemies to smithereens.<br>[Able to do sprinting power attack]",
        labels: [], lines: [], chainPerks: []
    },
    //13
    {
        name: "Devastating<br>Strike", skill: twohanded, skillReq: 50,
        xPos: 250 / 4, yPos: 183 / 4, preReqs: [2], chain: 0,
        description: "Your two-handed combat style has improved so much that all power attacks have become devastating.<br>[20% more power attack damage]",
        labels: [], lines: []
    },
    //14
    {
        name: "Cleave", skill: twohanded, skillReq: 75,
        xPos: 200 / 4, yPos: 91 / 4, preReqs: [12, 13], chain: 0,
        description: "Your power attacks are truly devastating and can cut down multiple foes with a single sweeping blow.<br>[Able to do sideways power attack that hits multiple targets]",
        labels: [], lines: []
    },
    //15
    {
        name: "Devastating Cleave", skill: twohanded, skillReq: 100,
        xPos: 200 / 4, yPos: 50 / 4, preReqs: [14], chain: 0,
        description: "Putting your whole weight behind your swing, your sidewards power attacks are now powerful enough to knock down foes.<br>[Sideways power attacks can knock down]",
        labels: [], lines: []
    },
    //16
    {
        name: "Mighty Strike", skill: twohanded, skillReq: 100,
        xPos: 200 / 4, yPos: 10 / 4, preReqs: [15], chain: 0,
        description: "You can kill almost any foe with a single strike of your two-hander, as your blows even fell giants with ease.<br>[25% more damage]",
        labels: [], lines: []
    },
   ];

    



let skillsList = [smithing, heavyarmor, block, twohanded, onehanded, marksman, evasion, sneak, lockpicking, pickpocket, speech, alchemy, illusion, conjuration, destruction, restoration, alteration, enchanting];

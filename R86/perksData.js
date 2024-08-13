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
let Onehanded = new SkillTree("Onehanded", 0);
Onehanded.perks = [
	//0
	{
		name: "Weapon Mastery", skill: Onehanded, skillReq: 0,
		 xPos: 56, yPos: 84, preReqs: [], chain: 2,  rank: 1,
		 description: "Your improved fighting techniques allow you to swing one-handed weapons with less effort and deal more damage with one-handed weapons and unarmed attacks.<br>[20% more damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Weapon Mastery", skill: Onehanded, skillReq: 0,
		 xPos: 56, yPos: 84, preReqs: [0], chain: 2,  rank: 2,
		 description: "Your improved fighting techniques increase your damage dealt with one-handed weapons and unarmed attacks greatly.<br>[35% more damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Penetrating Strikes", skill: Onehanded, skillReq: 20,
		 xPos: 56, yPos: 73, preReqs: [0], chain: 0,
		 description: "Your power attacks with one-handed weapons are now devastating enough to penetrate enemy armor and less exhausting.<br>[-50% power attack stamina cost, +5% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Powerful Strike", skill: Onehanded, skillReq: 50,
		 xPos: 42, yPos: 55, preReqs: [2], chain: 0,
		 description: "You know how to put the maximum force into your power attacks.<br>[20% more power attack damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Stunning Charge", skill: Onehanded, skillReq: 100,
		 xPos: 51, yPos: 10, preReqs: [3,5], chain: 0,
		 description: "Putting your whole weight behind your charge, your forward power attacks now have enough momentum to knock down opponent.<br>[Forward power attacks can knock down]",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Powerful Charge", skill: Onehanded, skillReq: 50,
		 xPos: 65, yPos: 55, preReqs: [2], chain: 0,
		 description: "You have learned to perform a leaping power attack while sprinting.<br>[Able to do sprinting power attack]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Axe Focus", skill: Onehanded, skillReq: 25,
		 xPos: 40, yPos: 66, preReqs: [2], chain: 3,  rank: 1,
		 description: "You've become familiar with one-handed axes.<br>[10% more damage, +10% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Axe Focus", skill: Onehanded, skillReq: 50,
		 xPos: 40, yPos: 66, preReqs: [6], chain: 3,  rank: 2,
		 description: "You've become an advanced one-handed axe fighter.<br>[20% more damage, +20% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Axe Focus", skill: Onehanded, skillReq: 75,
		 xPos: 40, yPos: 66, preReqs: [7], chain: 3,  rank: 3,
		 description: "You've become a master of one-handed axe combat.<br>[30% more damage, +30% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Blunt Weapon Focus", skill: Onehanded, skillReq: 25,
		 xPos: 69, yPos: 66, preReqs: [2], chain: 3,  rank: 1,
		 description: "You've learned some techniques to crush armor with maces, clubs, and mauls.<br>[5% more power attack damage, +15% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Blunt Weapon Focus", skill: Onehanded, skillReq: 50,
		 xPos: 69, yPos: 66, preReqs: [9], chain: 3,  rank: 2,
		 description: "You've become an advanced blunt weapon fighter and know how to find weak spots in enemy armor.<br>[10% more power attack damage, +30% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Blunt Weapon Focus", skill: Onehanded, skillReq: 75,
		 xPos: 69, yPos: 66, preReqs: [10], chain: 3,  rank: 3,
		 description: "You've become a masterly blunt weapon fighter, rendering armor almost useless.<br>[15% more power attack damage, +45% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Sword/Spear Focus", skill: Onehanded, skillReq: 25,
		 xPos: 84, yPos: 64, preReqs: [2], chain: 3,  rank: 1,
		 description: "You've learned the basics of one-handed sword and spear combat.<br>[+8% attack speed, +7% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Sword/Spear Focus", skill: Onehanded, skillReq: 50,
		 xPos: 84, yPos: 64, preReqs: [12], chain: 3,  rank: 2,
		 description: "You've acquired the advanced techniques of fighting with one-handed swords and spears.<br>[+16% attack speed, +14% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Sword/Spear Focus", skill: Onehanded, skillReq: 75,
		 xPos: 84, yPos: 64, preReqs: [13], chain: 3,  rank: 3,
		 description: "You've become a master of one-handed swords and spears.<br>[+24% attack speed, +21% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Storm of Steel", skill: Onehanded, skillReq: 30,
		 xPos: 88, yPos: 80, preReqs: [0], chain: 0,
		 description: "You've become very skilled in wielding two weapons at once.<br>[25% more dual-wield power attack damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Flurry", skill: Onehanded, skillReq: 25,
		 xPos: 69, yPos: 80, preReqs: [0], chain: 2,  rank: 1,
		 description: "When fighting with one-handed weapons or fists, you are able to attack faster than normal.<br>[+10% attack speed]",
		 labels: [], lines: [], chainPerks: []
	},
	//17
	{
		name: "Flurry", skill: Onehanded, skillReq: 50,
		 xPos: 69, yPos: 80, preReqs: [16], chain: 2,  rank: 2,
		 description: "When fighting with one-handed weapons or fists, you're able to attack even faster.<br>[+20% attack speed]",
		 labels: [], lines: [], chainPerks: []
	},
	//18
	{
		name: "Spellblade Mastery", skill: Onehanded, skillReq: 25,
		 xPos: 63, yPos: 76, preReqs: [0], chain: 2,  rank: 1,
		 description: "You unlock deeper magical potentials by blending the art of war with arcane power.<br>[with an equipped one-handed weapon: attacks reduce magic resistance by 15% for 10 seconds, -10% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//19
	{
		name: "Spellblade Mastery", skill: Onehanded, skillReq: 50,
		 xPos: 63, yPos: 76, preReqs: [18], chain: 2,  rank: 2,
		 description: "You unlock deeper magical potentials by blending the art of war with arcane power.<br>[with an equipped one-handed weapon: attacks reduce magic resistance by 30% for 10 seconds, -20% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//20
	{
		name: "Martial Arts", skill: Onehanded, skillReq: 0,
		 xPos: 44, yPos: 77, preReqs: [], chain: 2,  rank: 1,
		 description: "You are a passionate fist fighter, and train regularly to toughen your muscles to their very limits.<br>[+30 unarmed damage, 50% less unarmed power attack cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//21
	{
		name: "Martial Arts", skill: Onehanded, skillReq: 0,
		 xPos: 44, yPos: 77, preReqs: [20], chain: 2,  rank: 2,
		 description: "[Requires Level 15]<br>Through relentless training your fists are now as hard as steel, allowing you to deliver devastating blows.<br>[+10 unarmed damage, Ignore 30% armor]",
		 labels: [], lines: [], chainPerks: []
	},
	//22
	{
		name: "Dagger Focus", skill: Onehanded, skillReq: 25,
		 xPos: 26, yPos: 66, preReqs: [2], chain: 3,  rank: 1,
		 description: "You learned some dirty tricks for your dagger.<br>[30% sneak attack damage, +10% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//23
	{
		name: "Dagger Focus", skill: Onehanded, skillReq: 50,
		 xPos: 26, yPos: 66, preReqs: [22], chain: 3,  rank: 2,
		 description: "A dagger in your hand turns into a deadly weapon.<br>[60% irresistible sneak attack damage, +20% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//24
	{
		name: "Dagger Focus", skill: Onehanded, skillReq: 75,
		 xPos: 26, yPos: 66, preReqs: [23], chain: 3,  rank: 3,
		 description: "You have mastered the deadly art of the dagger.<br>[100% irresistible sneak attack damage, +30% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
];
let Twohanded = new SkillTree("Twohanded", 1);
Twohanded.perks = [
	//0
	{
		name: "Great Weapon Mastery", skill: Twohanded, skillReq: 0,
		 xPos: 42, yPos: 97, preReqs: [], chain: 2,  rank: 1,
		 description: "Your improved fighting techniques increase your damage dealt with two-handed weapons.<br>[15% more damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Great Weapon Mastery", skill: Twohanded, skillReq: 0,
		 xPos: 42, yPos: 97, preReqs: [0], chain: 2,  rank: 2,
		 description: "Your improved fighting techniques increase your damage dealt with two-handed weapons even more.<br>[30% more damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Barbaric Might", skill: Twohanded, skillReq: 20,
		 xPos: 43, yPos: 89, preReqs: [0], chain: 0,
		 description: "Your power attacks become mighty blows that will penetrate armor and are less tiring.<br>[-50% power attack stamina cost, +5% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Devastating Strike", skill: Twohanded, skillReq: 50,
		 xPos: 51, yPos: 77, preReqs: [2], chain: 0,
		 description: "Your two-handed combat style has improved so much that all power attacks have become devastating.<br>[20% more power attack damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Cleave", skill: Twohanded, skillReq: 75,
		 xPos: 43, yPos: 59, preReqs: [3,7], chain: 0,
		 description: "Your power attacks are truly devastating and can cut down multiple foes with a single sweeping blow.<br>[Able to do sideways power attack that hits multiple targets]",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Devastating Cleave", skill: Twohanded, skillReq: 100,
		 xPos: 43, yPos: 39, preReqs: [4], chain: 0,
		 description: "Putting your whole weight behind your swing, your sidewards power attacks are now powerful enough to knock down foes.<br>[Sideways power attacks can knock down]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Mighty Strike", skill: Twohanded, skillReq: 100,
		 xPos: 43, yPos: 8, preReqs: [5], chain: 0,
		 description: "You can kill almost any foe with a single strike of your two-hander, as your blows even fell giants with ease.<br>[25% more damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Devastating Charge", skill: Twohanded, skillReq: 50,
		 xPos: 31, yPos: 77, preReqs: [2], chain: 0,
		 description: "You've learned to perform a leaping power attack while sprinting, reducing your enemies to smithereens.<br>[Able to do sprinting power attack]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Axe/Halberd Focus", skill: Twohanded, skillReq: 25,
		 xPos: 16, yPos: 84, preReqs: [2], chain: 3,  rank: 1,
		 description: "You've become familiar with two-handed axes and halberds.<br>[10% more damage, +10% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Axe/Halberd Focus", skill: Twohanded, skillReq: 50,
		 xPos: 16, yPos: 84, preReqs: [8], chain: 3,  rank: 2,
		 description: "You've become an advanced fighter with two-handed axes and halberds.<br>[20% more damage, +20% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Axe/Halberd Focus", skill: Twohanded, skillReq: 75,
		 xPos: 16, yPos: 84, preReqs: [9], chain: 3,  rank: 3,
		 description: "You've become a master of two-handed axes and halberds.<br>[30% more damage, +30% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Sword/Spear Focus", skill: Twohanded, skillReq: 25,
		 xPos: 67, yPos: 84, preReqs: [2], chain: 3,  rank: 1,
		 description: "You've learned the basics of two-handed sword and spear combat.<br>[+8% attack speed, +7% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Sword/Spear Focus", skill: Twohanded, skillReq: 50,
		 xPos: 67, yPos: 84, preReqs: [11], chain: 3,  rank: 2,
		 description: "You've acquired the advanced techniques of two-handed sword and spear combat.<br>[+16% attack speed, +14% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Sword/Spear Focus", skill: Twohanded, skillReq: 75,
		 xPos: 67, yPos: 84, preReqs: [12], chain: 3,  rank: 3,
		 description: "You've become a master of two-handed sword and spear combat.<br>[+24% attack speed, +21% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Blunt Weapon Focus", skill: Twohanded, skillReq: 25,
		 xPos: 86, yPos: 84, preReqs: [2], chain: 3,  rank: 1,
		 description: "You've learned some techniques to crush armor with warhammers, long maces, and battlestaffs.<br>[5% more power attack damage, +15% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Blunt Weapon Focus", skill: Twohanded, skillReq: 50,
		 xPos: 86, yPos: 84, preReqs: [14], chain: 3,  rank: 2,
		 description: "You've become an advanced blunt weapon fighter and know how to find weak spots in enemy armor.<br>[10% more power attack damage, +30% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Blunt Weapon Focus", skill: Twohanded, skillReq: 75,
		 xPos: 86, yPos: 84, preReqs: [15], chain: 3,  rank: 3,
		 description: "You've become a masterly blunt weapon fighter, rendering armor almost useless.<br>[15% more power attack damage, +45% armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
];
let Marksman = new SkillTree("Marksman", 2);
Marksman.perks = [
	//0
	{
		name: "Ranged Combat Training", skill: Marksman, skillReq: 0,
		 xPos: 80, yPos: 85, preReqs: [], chain: 0,
		 description: "After some training at the shooting range you can deal more damage with bows and crossbows.<br>[20% more damage, 10% attack speed, -50% weapon weight penalties, ammunition grants armor penetration]",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Eagle Eye", skill: Marksman, skillReq: 25,
		 xPos: 45, yPos: 70, preReqs: [0], chain: 0,
		 description: "By concentrating only on your target and holding your breath, you can now aim much more precisely.<br>[Zoom in by holding right mouse button]",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Marksman's Focus", skill: Marksman, skillReq: 50,
		 xPos: 18, yPos: 54, preReqs: [1], chain: 0,
		 description: "When fully focusing on your target, everything around you seems to slow down remarkably.<br>[Time slows down while zooming, -25% weapon weight penalties]",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Quick Shot", skill: Marksman, skillReq: 40,
		 xPos: 45, yPos: 44, preReqs: [1], chain: 0,
		 description: "You have learned to draw and fire in one single movement.<br>[+40% draw speed with bows]",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Rapid Reload", skill: Marksman, skillReq: 40,
		 xPos: 18, yPos: 44, preReqs: [1], chain: 0,
		 description: "Your have familiarized yourself with the mechanics of your crossbow and can use this knowledge to reload it significantly faster.<br>[+40% reload speed with crossbows]",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Power Shot", skill: Marksman, skillReq: 75,
		 xPos: 18, yPos: 34, preReqs: [1], chain: 0,
		 description: "You have discovered the art of aiming at tendons and joints.<br>[Chance to stagger targets]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Stunning Precision", skill: Marksman, skillReq: 100,
		 xPos: 43, yPos: 17, preReqs: [5,9], chain: 0,
		 description: "Any successful staggering shot will almost always stun the target momentarily.<br>[Staggering hits will also stun the target]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Precise Aim", skill: Marksman, skillReq: 20,
		 xPos: 79, yPos: 75, preReqs: [0], chain: 0,
		 description: "Your aim is now precise enough to target weak spots in the enemy's defenses.<br>[20% more damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Piercing Shot", skill: Marksman, skillReq: 40,
		 xPos: 77, yPos: 60, preReqs: [7], chain: 0,
		 description: "You've learned how to hit the weakest parts of armor.<br>[+50% armor penetration from ammunition]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Penetrating Shot", skill: Marksman, skillReq: 80,
		 xPos: 61, yPos: 28, preReqs: [8], chain: 0,
		 description: "You've mastered the technique of hitting weak armor parts.<br>[+50% armor penetration from ammunition]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Ranger", skill: Marksman, skillReq: 15,
		 xPos: 45, yPos: 82, preReqs: [0], chain: 0,
		 description: "You refined your footwork in combat, allowing for improved movement and more effective strikes with light ranged weapons.<br>[15% increased damage, able to run with light ranged weapons]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Hunter", skill: Marksman, skillReq: 15,
		 xPos: 67, yPos: 70, preReqs: [0], chain: 2,  rank: 1,
		 description: "You are more adapted to wildlife, and better understand its inhabitants.<br>[+15% physical damage against animals, +10% poison and disease resist, increased stealth in the wilderness]",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Hunter", skill: Marksman, skillReq: 30,
		 xPos: 67, yPos: 70, preReqs: [11], chain: 2,  rank: 2,
		 description: "You are more adapted to wildlife, and better understand its inhabitants.<br>[+30% physical damage against animals, +20% poison and disease resist, increased stealth in the wilderness]",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Bow Strike", skill: Marksman, skillReq: 0,
		 xPos: 31, yPos: 69, preReqs: [10], chain: 0,
		 description: "You can use your bow or crossbow as melee weapon in close combat.<br>[+60 bash damage, improved stagger]",
		 labels: [], lines: [], chainPerks: []
	},
];
let Block = new SkillTree("Block", 3);
Block.perks = [
	//0
	{
		name: "Improved Blocking", skill: Block, skillReq: 0,
		 xPos: 48, yPos: 85, preReqs: [], chain: 0,
		 description: "You strengthened your shield arm and trained to parry blows a little.<br>[Block 25% more damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Strong Grip", skill: Block, skillReq: 15,
		 xPos: 14, yPos: 70, preReqs: [0], chain: 0,
		 description: "You hold on to your shield like you would hold on to your life.<br>[75% less shield weight, 10% more armor rating, block 40% more damage, arrows that hit the shield do no damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Elemental Protection", skill: Block, skillReq: 50,
		 xPos: 18, yPos: 38, preReqs: [1], chain: 0,
		 description: "You've learned how to block damaging spells.<br>[Take 50% less fire, frost, and shock damage when blocking with a shield]",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Defensive Stance", skill: Block, skillReq: 75,
		 xPos: 29, yPos: 28, preReqs: [2], chain: 0,
		 description: "You have honed your defensive movements to perfection.<br>[Blocking with a shield does not slow you down]",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Unstoppable Charge", skill: Block, skillReq: 100,
		 xPos: 48, yPos: 17, preReqs: [3,7], chain: 0,
		 description: "When bull rushing with your shield raised, you are a tremendous force to deal with.<br>[Sprinting with a shield raised knocks down most targets]",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Powerful Bashes", skill: Block, skillReq: 25,
		 xPos: 76, yPos: 69, preReqs: [0], chain: 0,
		 description: "By gathering your strength, you can perform a much more powerful bash.<br>[Able to do a power bash, +50% shield bash damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Overpowering Bashes", skill: Block, skillReq: 50,
		 xPos: 79, yPos: 49, preReqs: [5], chain: 0,
		 description: "When you put all of your power into your shield bashes, you will often overpower your foes.<br>[Power bashing with a shield can knock down, fortify block effects increase shield bash damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Disarming Bash", skill: Block, skillReq: 75,
		 xPos: 75, yPos: 28, preReqs: [6], chain: 0,
		 description: "Sometimes, when you put all your strength into your bashes, your foes drop their weapon because of the pain.<br>[25% chance to disarm when power bashing with a shield, 5% chance to disarm when power bashing with a weapon]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Experienced Blocking", skill: Block, skillReq: 20,
		 xPos: 48, yPos: 64, preReqs: [0], chain: 0,
		 description: "With weapon or shield you can block almost any blow with rock-solid confidence.<br>[Block 50% more damage, recover some stamina when blocking a hit]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Torch Combat", skill: Block, skillReq: 0,
		 xPos: 34, yPos: 83, preReqs: [], chain: 0,
		 description: "You can use your torch more effectively in combat, causing stronger burns and blocking frost damage.<br>[+25 light bash damage, +35 power bash damage, power bash staggers, +15% frost resist with torch equipped]",
		 labels: [], lines: [], chainPerks: []
	},
];
let Smithing = new SkillTree("Smithing", 4);
Smithing.perks = [
	//0
	{
		name: "Craftsmanship", skill: Smithing, skillReq: 0,
		 xPos: 45, yPos: 86, preReqs: [0], chain: 0,
		 description: "You've acquired the basics of craftsmanship and know how to properly use all kinds of tools. <br> [Blacksmithing perks require the corresponding crafting book]",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Dwarven Smithing", skill: Smithing, skillReq: 25,
		 xPos: 66, yPos: 74, preReqs: [0,1], chain: 0,
		 description: "You've studied some long-lost schematics of dwarven equipment and <br> acquired the secret knowledge of how to create and improve them efficiently.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Orcish Smithing", skill: Smithing, skillReq: 50,
		 xPos: 82, yPos: 59, preReqs: [1,13,15,2], chain: 0,
		 description: "Orcish equipment is hard to craft, but you've got what it takes. <br>Especially the schematics! You can craft and improve it easily and most efficiently.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//3
	{
		name: "Ebony Smithing", skill: Smithing, skillReq: 75,
		 xPos: 82, yPos: 44, preReqs: [14,2,3,8], chain: 0,
		 description: "Ebony weapons and armor - some even fail at heating the metal. But not you. <br>Now that you've studied the related schematics, you can craft and improve ebony equipment with ease.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//4
	{
		name: "Daedric Smithing", skill: Smithing, skillReq: 100,
		 xPos: 92, yPos: 31, preReqs: [3,4], chain: 0,
		 description: "The creation of daedric weapons and armor is a secret few mortals know - still, <br> somehow you managed to acquire this knowledge...",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Stalhrim Smithing", skill: Smithing, skillReq: 85,
		 xPos: 45, yPos: 33, preReqs: [14,3,5], chain: 0,
		 description: "Around the world, only a few know the secret of properly processing enchanted ice, <br>but you were lucky, for the help you provided to Skaals, they agreed to share their secrets.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//6
	{
		name: "Draconic Blacksmithing", skill: Smithing, skillReq: 100,
		 xPos: 45, yPos: 28, preReqs: [14,3,6], chain: 0,
		 description: "The scales and bones of dragons are probably the hardest material to work with, <br> but you've mastered even this art since you studied that old compendium.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//7
	{
		name: "Shivering Isles Smithing", skill: Smithing, skillReq: 100,
		 xPos: 45, yPos: 23, preReqs: [14,3,7], chain: 0,
		 description: "On your travels you have discovered the secrets to unleash the power of the <br>mystical amber and madness ore of the Shivering Isles. Few could hope to achieve such a feat without losing their mind...",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//8
	{
		name: "Nordic Smithing", skill: Smithing, skillReq: 55,
		 xPos: 84, yPos: 62, preReqs: [1,13,15], chain: 0,
		 description: "The key mixture found in Nordic equipment is the blend of Quicksilver and Ebony ore. <br> The combination creates some of the hardest alloys on Nirn.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//9
	{
		name: "Advanced Blacksmithing", skill: Smithing, skillReq: 50,
		 xPos: 45, yPos: 74, preReqs: [0], chain: 0,
		 description: "You've gained quite some finesse, allowing you to craft plate armor and fine jewelry.<br>You have also found a way to melt and crush certain gems into alchemically usable dust.",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Legendary Blacksmithing", skill: Smithing, skillReq: 100,
		 xPos: 51, yPos: 65, preReqs: [9], chain: 0,
		 description: "You make steel sing songs on the anvil. Your hammer is no longer a mere tool, but a loom that weaves the fabric of myths.<br>You can even improve the divine artifacts of Aedra and Daedra.",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Arcane Craftsmanship", skill: Smithing, skillReq: 50,
		 xPos: 39, yPos: 65, preReqs: [11,9], chain: 0,
		 description: "After reading a tome about the ancient secrets of explosive dwemer bolts, you've learned the<br>techniques to craft magical armor and bolts/arrows infused with elemental power.",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Advanced Light Armors", skill: Smithing, skillReq: 25,
		 xPos: 29, yPos: 72, preReqs: [0,12], chain: 0,
		 description: "You've been able to learn more intricate techniques, <br> allowing you to craft and efficiently improve advanced light armors.",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Elven Smithing", skill: Smithing, skillReq: 50,
		 xPos: 9, yPos: 59, preReqs: [12,13,2,8], chain: 0,
		 description: "You've gained enough finesse to create and improve Elven armor and weapons <br> by studying the Elven craftmanship carefully.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//14
	{
		name: "Glass Smithing", skill: Smithing, skillReq: 75,
		 xPos: 9, yPos: 44, preReqs: [13,14,3], chain: 0,
		 description: "Crafting and improving Glass equipment is not for the unskilled, <br>but having studied intensely, you aren't one of them any more.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//15
	{
		name: "Morrowind Smithing", skill: Smithing, skillReq: 25,
		 xPos: 66, yPos: 71, preReqs: [0,15], chain: 2,  rank: 1,
		 description: "As a rule, Dunmer are masters of the processing of bone of the fauna of Morrowind, <br>but you have mastered their knowledge with the help of this compendium written by the famous blacksmith of Morrowind.",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Morrowind Smithing", skill: Smithing, skillReq: 50,
		 xPos: 66, yPos: 71, preReqs: [15], chain: 2,  rank: 2,
		 description: "You have honed your bone processing skills and are now able to work with such complex material as chitin. <br> Having read the compendium to the holes, you have become a master of this technology.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
];
let HeavyArmor = new SkillTree("HeavyArmor", 5);
HeavyArmor.perks = [
	//0
	{
		name: "Conditioning", skill: HeavyArmor, skillReq: 0,
		 xPos: 48, yPos: 85, preReqs: [], chain: 0,
		 description: "You've accustomed yourself to using heavy armor.<br>[No stamina drain for wearing heavy armor, unique bonus when wearing high-quality materials, -20% armor weight penalty]",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Combat Casting", skill: HeavyArmor, skillReq: 25,
		 xPos: 30, yPos: 71, preReqs: [0], chain: 0,
		 description: "You are able to keep concentrated enough in heavy armor.<br>[No spell cost penalty for casting Novice and Apprentice spells in heavy armor]",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Combat Trance", skill: HeavyArmor, skillReq: 50,
		 xPos: 15, yPos: 55, preReqs: [1], chain: 0,
		 description: "Your heavy armor distracts you even less.<br>[No spell cost penalty for casting Adept spells in heavy armor]",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Combat Meditation", skill: HeavyArmor, skillReq: 75,
		 xPos: 10, yPos: 28, preReqs: [2], chain: 0,
		 description: "You're accustomed to your heavy armor so much that you can now cast even sophisticated spells with relative ease.<br>[No spell cost penalty for casting Expert spells in heavy armor]",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Battle Mage", skill: HeavyArmor, skillReq: 100,
		 xPos: 10, yPos: 11, preReqs: [3], chain: 0,
		 description: "You have mastered spellcasting while wearing heavy armor.<br>[No spell cost penalty for casting Master spells in heavy armor, 15% less spell cost when wearing all heavy armor: head, chest, hands, feet]",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Combat Training", skill: HeavyArmor, skillReq: 25,
		 xPos: 65, yPos: 71, preReqs: [0], chain: 0,
		 description: "You are less hindered by your armor and can attack with ease.<br>[No power attack stamina cost penalty, increased unarmed damage with heavy gauntlets, -10% armor weight penalty]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Fortitude", skill: HeavyArmor, skillReq: 50,
		 xPos: 75, yPos: 55, preReqs: [5], chain: 0,
		 description: "Your training made you stronger and you are now less burdened by the rigidity of your armor.<br>[+40 stamina, +20 carry weight, -10% armor weight penalty]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Power of the Combatant", skill: HeavyArmor, skillReq: 75,
		 xPos: 84, yPos: 42, preReqs: [6], chain: 0,
		 description: "Once a day, you can now push yourself to continue fighting.<br>[Daily power: Restore 25 stamina per second for 30 seconds, -10% armor weight penalty]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Juggernaut", skill: HeavyArmor, skillReq: 100,
		 xPos: 84, yPos: 11, preReqs: [7], chain: 0,
		 description: "You've reached perfection in the skill of wearing heavy armor and are now significantly more maneuverable in it.<br>[15% less armor weight, 10% more armor rating, 90% less stagger when wearing all heavy armor: head, chest, hands, feet]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Relentless Onslaught", skill: HeavyArmor, skillReq: 20,
		 xPos: 48, yPos: 71, preReqs: [0], chain: 0,
		 description: "After extensive training you now can sprint in heavy armor without problems.<br>[reduced sprinting stamina cost penalty, take 80% less melee damage when bullrushing, -15% armor weight penalty]",
		 labels: [], lines: [], chainPerks: []
	},
];
let Evasion = new SkillTree("Evasion", 6);
Evasion.perks = [
	//0
	{
		name: "Agility", skill: Evasion, skillReq: 0,
		 xPos: 59, yPos: 85, preReqs: [], chain: 0,
		 description: "After some training you are now much more confident in your evasive movements.<br>[25% less falling damage when wearing no heavy armor, unique bonus when wearing high-quality materials, -40% armor weight penalty]",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Finesse", skill: Evasion, skillReq: 25,
		 xPos: 50, yPos: 68, preReqs: [0], chain: 0,
		 description: "You are able to hit more precisely.<br>[Up to 12% more power attack damage when wearing no heavy armor: head, chest, hands, feet]",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Vexing Flanker", skill: Evasion, skillReq: 75,
		 xPos: 71, yPos: 28, preReqs: [7], chain: 0,
		 description: "You have learned to flank your enemies with ease.<br>[Up to 18% more melee attack damage when running and wearing no heavy armor: head, chest, hands, feet, immune to finishers]",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Meteoric Reflexes", skill: Evasion, skillReq: 100,
		 xPos: 50, yPos: 17, preReqs: [4,5], chain: 0,
		 description: "Your reflexes are lightning fast.<br>[50% chance to take 95% less melee damage when wearing no heavy armor: head, chest, hands, feet]",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Wind Walker", skill: Evasion, skillReq: 50,
		 xPos: 23, yPos: 49, preReqs: [1], chain: 0,
		 description: "Your light armor and clothes have become your second skin.<br>[Up to +10% movement speed when wearing no heavy armor: head, chest, hands, feet, -25% armor weight penalty]",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Combat Reflexes", skill: Evasion, skillReq: 75,
		 xPos: 26, yPos: 34, preReqs: [4], chain: 0,
		 description: "You've gained the ability to act faster in combat, though doing so will quickly exhaust you.<br>[Lesser power: Slow time by 50% for 30 seconds, drains 5 stamina per second]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Agile Spellcasting", skill: Evasion, skillReq: 30,
		 xPos: 20, yPos: 59, preReqs: [0], chain: 0,
		 description: "You learned how to avoid the limitations light armors bestow upon somatic spell components.<br>[No spell cost penalty for casting spells in light armor]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Dexterity", skill: Evasion, skillReq: 50,
		 xPos: 82, yPos: 49, preReqs: [1], chain: 0,
		 description: "You are able to balance your weapon better.<br>[Up to 24% less power attack stamina cost when wearing no heavy armor: head, chest, hands, feet]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Athletics", skill: Evasion, skillReq: 25,
		 xPos: 82, yPos: 70, preReqs: [0], chain: 2,  rank: 1,
		 description: "You are more agile and can recover from exhaustion faster when wearing no heavy armor.<br>[+10% movement speed when sprinting or swimming, +15% stamina regeneration]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Athletics", skill: Evasion, skillReq: 50,
		 xPos: 82, yPos: 70, preReqs: [8], chain: 2,  rank: 2,
		 description: "You are more agile and can recover from exhaustion faster when wearing no heavy armor.<br>[+20% movement speed when sprinting or swimming, +30% stamina regeneration]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Unarmored", skill: Evasion, skillReq: 15,
		 xPos: 25, yPos: 77, preReqs: [0], chain: 2,  rank: 1,
		 description: "Having no weight on your body allows you to control your moves better in combat.<br>[while unarmored: +50 armor rating, +5% movement speed, +10% stamina regeneration]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Unarmored", skill: Evasion, skillReq: 30,
		 xPos: 25, yPos: 77, preReqs: [10], chain: 2,  rank: 2,
		 description: "Having no weight on your body allows you to control your moves better in combat.<br>[while unarmored: +100 armor rating, +10% movement speed, +20% stamina regen]",
		 labels: [], lines: [], chainPerks: []
	},
];
let Pickpocket = new SkillTree("Pickpocket", 7);
Pickpocket.perks = [
	//0
	{
		name: "Nimble Fingers", skill: Pickpocket, skillReq: 0,
		 xPos: 25, yPos: 85, preReqs: [], chain: 3,  rank: 1,
		 description: "You've spent some time improving your sleight of hand,<br>which gives you substantial chances when pickpocketing.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Nimble Fingers", skill: Pickpocket, skillReq: 15,
		 xPos: 25, yPos: 85, preReqs: [0], chain: 3,  rank: 2,
		 description: "Your fingers have become very nimble, and besides other advantages, they allow you to <br> pickpocket even better and to apply poisons on your victims. Why fight if a vial of deadly venom can also do the trick?",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Nimble Fingers", skill: Pickpocket, skillReq: 30,
		 xPos: 25, yPos: 85, preReqs: [1], chain: 3,  rank: 3,
		 description: "Your mastery of the art of pickpocketing has made you quicker and more discreet, further increasing your chances of successful thievery.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Cutpurse", skill: Pickpocket, skillReq: 25,
		 xPos: 39, yPos: 70, preReqs: [0], chain: 2,  rank: 1,
		 description: "People shouldn't burden themselves with purses and keys.<br>Luckily, you now can free them of these burdens more easily.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Cutpurse", skill: Pickpocket, skillReq: 40,
		 xPos: 39, yPos: 70, preReqs: [3], chain: 2,  rank: 2,
		 description: "Your quick fingers serve you well, enabling you to deftly liberate unsuspecting citizens of their most valuable gems and jewelry.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Nightly Thief", skill: Pickpocket, skillReq: 50,
		 xPos: 54, yPos: 49, preReqs: [3], chain: 0,
		 description: "You have learned how to avoid waking up targets during your \"nightly visits\", <br> so you can free them from their worldly burdens with ease.",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Misdirection", skill: Pickpocket, skillReq: 75,
		 xPos: 64, yPos: 22, preReqs: [5], chain: 0,
		 description: "Why should someone own a nice weapon or piece of jewelry when it could be yours? <br> Now you can sometimes adjust this inequity.",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Perfected Art", skill: Pickpocket, skillReq: 100,
		 xPos: 82, yPos: 17, preReqs: [6], chain: 0,
		 description: "After having learned everything there is to know about thievery,<br>your legendary skill means you almost never get caught.",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Mighty Greed", skill: Pickpocket, skillReq: 25,
		 xPos: 74, yPos: 75, preReqs: [3], chain: 0,
		 description: "You are either very strong or very greedy... You now can carry more items <br> without becoming overencumbered.",
		 labels: [], lines: [], chainPerks: []
	},
];
let Lockpicking = new SkillTree("Lockpicking", 8);
Lockpicking.perks = [
	//0
	{
		name: "Cheap Tricks", skill: Lockpicking, skillReq: 0,
		 xPos: 18, yPos: 86, preReqs: [], chain: 0,
		 description: "You have learned the basics of the art of picking locks and gain 25 expertise. You can now pick novice and apprentice locks without difficulty,<br>but adept locks remain a challenge. If you apply some basic smithing techniques, you can even forge steel ingots into lockpicks.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Locksmithing Lore", skill: Lockpicking, skillReq: 45,
		 xPos: 57, yPos: 49, preReqs: [0], chain: 0,
		 description: "You have extended your repertoire of lockpicking tricks, which increases your expertise by an additional 25 points.<br>Adept locks can be picked without effort and you can attempt to open expert locks.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Masterly Lockpicking", skill: Lockpicking, skillReq: 90,
		 xPos: 81, yPos: 12, preReqs: [1], chain: 0,
		 description: "You learned everything there is to know about the art of lockpicking. Your expertise increases by 35 points,<br>you can now pick expert locks without difficulty and even master locks are no longer safe from you.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Treasure Hunter", skill: Lockpicking, skillReq: 50,
		 xPos: 31, yPos: 28, preReqs: [1], chain: 0,
		 description: "You are able to locate secret spaces in containers when you search them <br> and can thereby find more loot.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Locksmith's Memory", skill: Lockpicking, skillReq: 30,
		 xPos: 25, yPos: 65, preReqs: [0], chain: 0,
		 description: "You are able to remember your lockpick's angle after they break. Also increases your expertise by 10 points.",
		 labels: [], lines: [], chainPerks: []
	},
];
let Sneak = new SkillTree("Sneak", 9);
Sneak.perks = [
	//0
	{
		name: "Stealth", skill: Sneak, skillReq: 0,
		 xPos: 41, yPos: 85, preReqs: [], chain: 2,  rank: 1,
		 description: "You know the basics of sneaking and are harder to detect while not wearing any heavy armor.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Stealth", skill: Sneak, skillReq: 0,
		 xPos: 41, yPos: 85, preReqs: [0], chain: 2,  rank: 2,
		 description: "You are even harder to detect when sneaking while not wearing any heavy armor.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Deft Strike", skill: Sneak, skillReq: 25,
		 xPos: 61, yPos: 70, preReqs: [0], chain: 0,
		 description: "You've learned to exploit weaknesses in your foes' armor when sneak attacking with daggers, bows or swords.<br>[Ignore 50% armor when attacking while not detected]",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Anatomical Lore", skill: Sneak, skillReq: 50,
		 xPos: 65, yPos: 49, preReqs: [2], chain: 2,  rank: 1,
		 description: "Your knowledge of anatomy allows you to deal immense damage to humanoids that are vulnerable to sneak attacks.<br>[x2 for bows/spells, x5 for melee weapons]",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Anatomical Lore", skill: Sneak, skillReq: 65,
		 xPos: 65, yPos: 49, preReqs: [3], chain: 2,  rank: 2,
		 description: "Your advanced knowledge of anatomy allows you to perform devastating attacks on all enemies vulnerable to sneak attacks.<br>[x2 for bows/spells, x5 for melee weapons]",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Advanced Anatomical Lore", skill: Sneak, skillReq: 80,
		 xPos: 53, yPos: 44, preReqs: [3], chain: 0,
		 description: "With your extensive understanding of anatomy, you can now deliver sneak attacks to even the most resilient enemies.<br>[Enemies immune to sneak attacks are now vulnerable to them]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Muffled Movement", skill: Sneak, skillReq: 25,
		 xPos: 15, yPos: 70, preReqs: [0], chain: 0,
		 description: "Your newfound finesse allows you to move more quietly, reducing the generated noise by 50%, while not wearing any heavy armor.",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Light Steps", skill: Sneak, skillReq: 50,
		 xPos: 20, yPos: 49, preReqs: [6], chain: 0,
		 description: "By distributing your weight more consciously, you're able to avoid triggering pressure plates or similar mechanisms, and move even more stealthily.",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Acrobatics", skill: Sneak, skillReq: 75,
		 xPos: 48, yPos: 28, preReqs: [7], chain: 0,
		 description: "Your improved balance allows you to silently roll forward, avoid getting knocked down except through magic and sneak around more efficiently.",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Shadowrunner", skill: Sneak, skillReq: 100,
		 xPos: 83, yPos: 12, preReqs: [8], chain: 0,
		 description: "There's almost nothing you cannot evade.<br>You are even harder to detect, more silent and all falling damage is decreased.",
		 labels: [], lines: [], chainPerks: []
	},
];
let Alchemy = new SkillTree("Alchemy", 10);
Alchemy.perks = [
	//0
	{
		name: "Alchemical Lore", skill: Alchemy, skillReq: 0,
		 xPos: 36, yPos: 84, preReqs: [], chain: 3,  rank: 1,
		 description: "You've acquired basic alchemical insights and understand how to work with a laboratory. <br> You can now craft potions.  ",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Alchemical Lore", skill: Alchemy, skillReq: 30,
		 xPos: 36, yPos: 84, preReqs: [0], chain: 3,  rank: 2,
		 description: "Through advanced alchemical knowledge, you can enhance your mixtures and craft alchemical powders. <br> You determine an additional property of consumed ingredients",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Alchemical Lore", skill: Alchemy, skillReq: 60,
		 xPos: 36, yPos: 84, preReqs: [1], chain: 3,  rank: 3,
		 description: "Through obscure knowledge, your potions and poisons have an even higher potency. <br> You determine all properties of consumed ingredients.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Improved Elixirs", skill: Alchemy, skillReq: 25,
		 xPos: 83, yPos: 81, preReqs: [0], chain: 0,
		 description: "Having refinined the brewing process, <br> you are now able to improve the effects of all your elixirs.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Catalysis", skill: Alchemy, skillReq: 50,
		 xPos: 71, yPos: 59, preReqs: [3], chain: 2,  rank: 1,
		 description: "You've started experimenting with a catalyst that increases the yield of the brewing process.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Catalysis", skill: Alchemy, skillReq: 100,
		 xPos: 71, yPos: 59, preReqs: [4], chain: 2,  rank: 2,
		 description: "You've perfected the catalyst. Thereby, you can craft double the amount of <br> mixtures with the same amount of ingredients.",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Immunization", skill: Alchemy, skillReq: 75,
		 xPos: 69, yPos: 32, preReqs: [13,4], chain: 0,
		 description: "You've discovered a way to make your body more resilient to all kinds of diseases and poisons.",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Purification Process", skill: Alchemy, skillReq: 100,
		 xPos: 61, yPos: 10, preReqs: [6], chain: 0,
		 description: "You've found a method to eliminate disadvantages from your mixtures<br> and to make all of them even more potent.",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Fortified Muscles", skill: Alchemy, skillReq: 75,
		 xPos: 59, yPos: 59, preReqs: [6,8], chain: 0,
		 description: "Having altered your body with extracts from troll fat and a mammoth heart,<br>you've become more durable and robust. [+50 health/stamina]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Alchemical Intellect", skill: Alchemy, skillReq: 100,
		 xPos: 83, yPos: 21, preReqs: [6,9], chain: 0,
		 description: "Having altered your body with extracts from a Dremora's Heart and Ectoplasm,<br>your mind has transcended mortal limits, expanding your magicka and improving your spell casting.",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Night Vision", skill: Alchemy, skillReq: 25,
		 xPos: 86, yPos: 70, preReqs: [10,3], chain: 0,
		 description: "Having altered your body with extracts from a sabrecat eye, <br> you can now make your eyes see in the dark at will.",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Regeneration", skill: Alchemy, skillReq: 50,
		 xPos: 78, yPos: 51, preReqs: [11,3], chain: 0,
		 description: "Having altered your body with extracts from troll fat, slaughterfish eggs and spriggan sap, you're now able to regenerate your stamina and health, and do so even more rapidly when you are immersed in water.",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Concentrated Poisons", skill: Alchemy, skillReq: 25,
		 xPos: 41, yPos: 70, preReqs: [3], chain: 0,
		 description: "Your experience in the obscure alchemical arts allows you to concentrate your poisons.<br> Thus, you can make most of them last longer before they need to be reapplied.",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Improved Poisons", skill: Alchemy, skillReq: 50,
		 xPos: 41, yPos: 51, preReqs: [12], chain: 0,
		 description: "By adding small amounts of truly horrifying ingredients, <br> you are able to make your poisons more potent.",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Drunken Combat", skill: Alchemy, skillReq: 0,
		 xPos: 23, yPos: 77, preReqs: [], chain: 0,
		 description: "Alcohol pumps you up, boosting your combat abilities. You also gain resistance to poison and diseases.<br>[+10% resistances, while inebriated: +5% movement speed, +15% melee damage, +100 armor]  ",
		 labels: [], lines: [], chainPerks: []
	},
];
let Speech = new SkillTree("Speech", 11);
Speech.perks = [
	//0
	{
		name: "Haggling", skill: Speech, skillReq: 0,
		 xPos: 28, yPos: 85, preReqs: [], chain: 3,  rank: 1,
		 description: "You've learned how to haggle with Skyrim's greedy merchants <br> and your speech skill now gains proficiency faster.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Haggling", skill: Speech, skillReq: 30,
		 xPos: 28, yPos: 85, preReqs: [0], chain: 3,  rank: 2,
		 description: "You've further advanced your knowledge on how to handle merchants <br> and your speech skill now gains proficiency even faster.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Haggling", skill: Speech, skillReq: 60,
		 xPos: 28, yPos: 85, preReqs: [1], chain: 3,  rank: 3,
		 description: "You've perfected haggling with greedy merchants <br> and your speech skill now gains proficiency even faster.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Merchant", skill: Speech, skillReq: 50,
		 xPos: 21, yPos: 75, preReqs: [0], chain: 0,
		 description: "Your trading skills are good enough to sell almost anything to any merchant willing to trade with you, <br> and you can invest some of your gold with a shopkeeper to increase his available gold permanently.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Fencing", skill: Speech, skillReq: 100,
		 xPos: 29, yPos: 70, preReqs: [3], chain: 0,
		 description: "You've become so persuasive that you could make almost anyone believe that <br> your goods are of a legal origin.",
		 labels: [], lines: [], chainPerks: [], choiceNeeded: true
	},
	//5
	{
		name: "Silver Tongue", skill: Speech, skillReq: 25,
		 xPos: 15, yPos: 85, preReqs: [0], chain: 0,
		 description: "You've spent quite some time improving your rhetorical skills and are now able to greatly influence<br>any conversation and to fascinate the opposite gender. You also get better offers at respective vendors.",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Masquerade", skill: Speech, skillReq: 50,
		 xPos: 12, yPos: 33, preReqs: [5], chain: 2,  rank: 1,
		 description: "You've become proficient at acting, and with the right equipment you can now disguise yourself,<br>although sometimes people can still tell that you are not truly one of them.",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Masquerade", skill: Speech, skillReq: 100,
		 xPos: 12, yPos: 33, preReqs: [6], chain: 2,  rank: 2,
		 description: "There is no role you cannot play, and your acting is so believable that there is almost no way <br> for others to see through your disguises.",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Leadership", skill: Speech, skillReq: 75,
		 xPos: 21, yPos: 54, preReqs: [5], chain: 0,
		 description: "Your rhetorical skill makes you the perfect leader. By inspiring all those who fight by your side,<br>you encourage your followers to always push their abilities to their very limits.",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Lore of the Thu'um", skill: Speech, skillReq: 0,
		 xPos: 75, yPos: 85, preReqs: [], chain: 0,
		 description: "You've been studying the lore and ancient script of dragons and the Thu'um.<br>Thus, you can shout more often.",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Tongue's Insight", skill: Speech, skillReq: 0,
		 xPos: 86, yPos: 17, preReqs: [9], chain: 0,
		 description: "[Requires Level 10] You've spent time meditating on the Way of the Voice, unearthing more knowledge and gaining <br> valuable insights. Thus, you can harness the might of yet another word of power.",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Spiritual Equilibrium", skill: Speech, skillReq: 0,
		 xPos: 59, yPos: 49, preReqs: [9], chain: 0,
		 description: "[Requires Level 20] You have been guided in meditating on the Thu'um.<br>Now your shouts linger, lasting longer than they did before.",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Indomitable Force", skill: Speech, skillReq: 0,
		 xPos: 56, yPos: 70, preReqs: [9], chain: 0,
		 description: "[Requires Level 25] You know what it means to be called Ysmir, Dragon of the North.<br> As you have withstood the test of Thu'um, so you will withstand the Thu'um of others.",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Destructive Urge", skill: Speech, skillReq: 0,
		 xPos: 61, yPos: 85, preReqs: [9], chain: 0,
		 description: "[Requires Level 30] The horrors that the Thu'um can inflict are etched into your mind.<br>Your Thu'um will wreak even greater havoc among your unfortunate foes. ",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "The Way of the Voice", skill: Speech, skillReq: 0,
		 xPos: 68, yPos: 28, preReqs: [9], chain: 0,
		 description: "[Requires Level 15] You've meditated thoroughly, and acquired vast insights into the Way of the Voice.<br>Every aspect of your Thu'um will be improved.",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Commander", skill: Speech, skillReq: 50,
		 xPos: 9, yPos: 56, preReqs: [5], chain: 0,
		 description: "Your knowledge in combat tactics allow you to effectively lead your allies in combat.<br>All nearby allies are motivated by you which improves their ability to fight",
		 labels: [], lines: [], chainPerks: []
	},
];
let Alteration = new SkillTree("Alteration", 12);
Alteration.perks = [
	//0
	{
		name: "Novice Alteration", skill: Alteration, skillReq: 0,
		 xPos: 40, yPos: 84, preReqs: [23], chain: 0,
		 description: "You've learned how to cast Novice level spells with decreased effort while your newfound knowledge also allows you to augment all Alteration spells.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Apprentice Alteration", skill: Alteration, skillReq: 25,
		 xPos: 43, yPos: 67, preReqs: [0], chain: 0,
		 description: "By pursuing your apprenticeship in Alteration, you're now able to augment and cast them with less effort.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Adept Alteration", skill: Alteration, skillReq: 50,
		 xPos: 49, yPos: 45, preReqs: [1], chain: 0,
		 description: "By advancing further into the school of Alteration, you've learned how to augment and cast spells of the Adept rank more easily.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Expert Alteration", skill: Alteration, skillReq: 75,
		 xPos: 52, yPos: 32, preReqs: [2], chain: 0,
		 description: "You've unlocked almost every secret in the school of Alteration.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Master Alteration", skill: Alteration, skillReq: 100,
		 xPos: 75, yPos: 11, preReqs: [3], chain: 0,
		 description: "Your knowledge of Alteration has become all-encompassing. You can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Magical Absorption", skill: Alteration, skillReq: 100,
		 xPos: 37, yPos: 11, preReqs: [3], chain: 0,
		 description: "You've mastered the art of absorbing Magicka from incoming spells, and are now able to fully absorb their power from time to time.<br>[30% spell absorption]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Spell Armor", skill: Alteration, skillReq: 75,
		 xPos: 74, yPos: 42, preReqs: [3], chain: 0,
		 description: "You've expanded the versatility of your Mage Armor and Elemental Shell spells by enabling them to decrease incoming elemental damage.<br>[15% reduced damage to elemental damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Stability", skill: Alteration, skillReq: 50,
		 xPos: 30, yPos: 32, preReqs: [2], chain: 0,
		 description: "You've become exceptionally good at making your alteration spells more stable. Thus, they now last longer.<br>[+50% duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Metamagical Thesis", skill: Alteration, skillReq: 75,
		 xPos: 22, yPos: 23, preReqs: [7], chain: 0,
		 description: "Your knowledge of the very fabric of magic itself allows you to cast any spell of any school with decreased effort.<br>[-10% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Metamagical Empowerment", skill: Alteration, skillReq: 100,
		 xPos: 15, yPos: 13, preReqs: [8], chain: 0,
		 description: "Having delved even deeper in metamagical lore, you can cast any spell more effectively and augment all magical effects.<br>[+20% magnitude/duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Improved Mage Armor", skill: Alteration, skillReq: 25,
		 xPos: 30, yPos: 49, preReqs: [1], chain: 0,
		 description: "You've mastered the art of casting armor spells, their effect is increased by 75%. Additionally you take 15% less damage from ranged attacks while a mage armor spell is active. (less effective when wearing light/heavy armor)",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Empowered Alterations", skill: Alteration, skillReq: 20,
		 xPos: 34, yPos: 62, preReqs: [0], chain: 0,
		 description: "You learned how to empower Alteration spells by dual casting them. Thus, you now can overcharge their effects into even more powerful, longer lasting versions.",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Metallurgy", skill: Alteration, skillReq: 20,
		 xPos: 55, yPos: 67, preReqs: [0], chain: 2,  rank: 1,
		 description: "You now are able to intensify the strength of your corrosion spells and increase your weapon damage against enemies with reduced armor.<br>[+15% magnitude, 10% weapon damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Metallurgy", skill: Alteration, skillReq: 40,
		 xPos: 55, yPos: 67, preReqs: [12], chain: 2,  rank: 2,
		 description: "You now are able to greatly intensify the strength of your corrosion spells and increase your weapon damage against enemies with reduced armor.<br>[+30% magnitude, 20% weapon damage]",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Rust", skill: Alteration, skillReq: 65,
		 xPos: 84, yPos: 49, preReqs: [12], chain: 0,
		 description: "Your corrosion spells now lower your foes armor for far longer.<br>[x10 duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Corrosion Mastery", skill: Alteration, skillReq: 90,
		 xPos: 87, yPos: 11, preReqs: [14], chain: 0,
		 description: "Your mastery over corrosion grants you the ability to penetrate armor with weapons, while also empowering your corrosion spells even further.<br>[15% armor penetration, +5% magnitude, -10% spell cost]  ",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Aeromancy", skill: Alteration, skillReq: 20,
		 xPos: 25, yPos: 67, preReqs: [0], chain: 2,  rank: 1,
		 description: "You now are able to intensify the force of your wind spells and gain the ability to move faster as you cast any spell.<br>[+15% magnitude, +20% movement speed]",
		 labels: [], lines: [], chainPerks: []
	},
	//17
	{
		name: "Aeromancy", skill: Alteration, skillReq: 40,
		 xPos: 25, yPos: 67, preReqs: [16], chain: 2,  rank: 2,
		 description: "You now are able to greatly intensify the force of your wind spells and gain the ability to move faster as you cast any spell.<br>[+30% magnitude, +40% movement speed]",
		 labels: [], lines: [], chainPerks: []
	},
	//18
	{
		name: "Aeromantic Strength", skill: Alteration, skillReq: 65,
		 xPos: 18, yPos: 49, preReqs: [16], chain: 0,
		 description: "Your wind spells are now able to throw all but the strongest of targets.",
		 labels: [], lines: [], chainPerks: []
	},
	//19
	{
		name: "Aeromantic Mastery", skill: Alteration, skillReq: 90,
		 xPos: 8, yPos: 17, preReqs: [18], chain: 0,
		 description: "Your mastery over the wind grants you the ability to knockback any target, while also empowering your wind spells even further.<br>[+5% magnitude, -10% spell cost]  ",
		 labels: [], lines: [], chainPerks: []
	},
	//20
	{
		name: "Magic Resistance", skill: Alteration, skillReq: 30,
		 xPos: 59, yPos: 49, preReqs: [1], chain: 2,  rank: 1,
		 description: "You're able to block a part of a dangerous spell's effect.<br>[+8% magic resistance]",
		 labels: [], lines: [], chainPerks: []
	},
	//21
	{
		name: "Magic Resistance", skill: Alteration, skillReq: 60,
		 xPos: 59, yPos: 49, preReqs: [20], chain: 2,  rank: 2,
		 description: "You are able to block more of a dangerous spell's effect.<br>[+16% magic resistance]",
		 labels: [], lines: [], chainPerks: []
	},
	//22
	{
		name: "Metamagical Flexibility", skill: Alteration, skillReq: 60,
		 xPos: 33, yPos: 22, preReqs: [7], chain: 0,
		 description: "By focusing on your Magicka, you can alter the effects of your spells in exchange of increased magicka cost of spells.<br>[Overpowered (magnitude), Extended (duration), Distant (range)]",
		 labels: [], lines: [], chainPerks: []
	},
	//23
	{
		name: "Innate Sorcery", skill: Alteration, skillReq: 0,
		 xPos: 27, yPos: 79, preReqs: [0], chain: 3,  rank: 1,
		 description: "[Only available with no magic school perks and locks them]<br>Your exposure to latent magical energies has unlocked the ability to cast novice-level spells at reduced effectivity.<br>[-75% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//24
	{
		name: "Innate Sorcery", skill: Alteration, skillReq: 0,
		 xPos: 27, yPos: 79, preReqs: [23], chain: 3,  rank: 2,
		 description: "[Requires Level 10]<br>As you delve deeper into the realm of magic, you gain the ability to cast apprentice-level spells at reduced effectivity.<br>[-70% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//25
	{
		name: "Innate Sorcery", skill: Alteration, skillReq: 0,
		 xPos: 27, yPos: 79, preReqs: [24], chain: 3,  rank: 3,
		 description: "[Requires Level 20]<br>Your growing understanding of magical principles allows you to cast adept-level spells at reduced effectivity.<br>[-65% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
];
let Conjuration = new SkillTree("Conjuration", 13);
Conjuration.perks = [
	//0
	{
		name: "Novice Conjuration", skill: Conjuration, skillReq: 0,
		 xPos: 53, yPos: 85, preReqs: [], chain: 0,
		 description: "You've learned how to cast Novice level spells with decreased effort while your newfound knowledge also allows you to augment all Conjuration spells.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Apprentice Conjuration", skill: Conjuration, skillReq: 25,
		 xPos: 72, yPos: 65, preReqs: [0], chain: 0,
		 description: "By pursuing your apprenticeship in Conjuration, you're now able to augment and cast them with less effort.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Adept Conjuration", skill: Conjuration, skillReq: 50,
		 xPos: 74, yPos: 49, preReqs: [1], chain: 0,
		 description: "By advancing further into the school of Conjuration, you've learned how to augment and cast spells of the Adept rank more easily.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Expert Conjuration", skill: Conjuration, skillReq: 75,
		 xPos: 74, yPos: 33, preReqs: [2], chain: 0,
		 description: "You've unlocked almost every secret in the school of Conjuration.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Master Conjuration", skill: Conjuration, skillReq: 100,
		 xPos: 69, yPos: 12, preReqs: [3], chain: 0,
		 description: "Your knowledge of Conjuration has become all-encompassing. You can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Summoner's Insight", skill: Conjuration, skillReq: 20,
		 xPos: 42, yPos: 70, preReqs: [0], chain: 0,
		 description: "You've learned how to empower Conjuration spells by dual casting them. Thus, you can now make them last longer in this realm.",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Cognitive Flexibility", skill: Conjuration, skillReq: 60,
		 xPos: 32, yPos: 43, preReqs: [5], chain: 2,  rank: 1,
		 description: "You have practiced the mental ability of maintaining two summons at the same time. This power requires great amounts of magical power. <br> [+15% manacost for summoning spells]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Cognitive Flexibility", skill: Conjuration, skillReq: 100,
		 xPos: 32, yPos: 43, preReqs: [6], chain: 2,  rank: 2,
		 description: "You've mastered the art of Cognitive Flexibility, allowing you to summon three summons at the cost of vast amounts of magical power. <br> [+30% manacost for summoning spells]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Necromancy", skill: Conjuration, skillReq: 25,
		 xPos: 41, yPos: 54, preReqs: [0], chain: 2,  rank: 1,
		 description: "Spells that summon or raise the dead and ghosts last longer and can raise more powerful entities.<br>[Raise Dead: duration x5/magnitude x1.5, Summon Undead: duration x1.5]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Necromancy", skill: Conjuration, skillReq: 50,
		 xPos: 41, yPos: 54, preReqs: [8], chain: 2,  rank: 2,
		 description: "Spells that summon or raise the dead and ghosts last even longer and can raise even more powerful entities.<br>[Raise Dead: duration x10/magnitude x2, Summon Undead: duration x2]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Ritualism", skill: Conjuration, skillReq: 50,
		 xPos: 41, yPos: 44, preReqs: [8], chain: 0,
		 description: "Your knowledge of the realms of the dead surpasses that of many and decreases the effort needed to raise or summon the dead and ghosts.<br>[-25% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Dark Infusion", skill: Conjuration, skillReq: 75,
		 xPos: 35, yPos: 22, preReqs: [10], chain: 0,
		 description: "By infusing your undead creations with dark energies, you are able to make them stronger and more resilient. You can even prevent your creations from decaying to dust.",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Mystic Binding", skill: Conjuration, skillReq: 20,
		 xPos: 58, yPos: 70, preReqs: [0], chain: 0,
		 description: "You've become skilled in binding weapon-shaped daedra from Oblivion.<br>Thereby, bound weapons are stronger and longer-lasting.",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Mystic Maelstrom", skill: Conjuration, skillReq: 40,
		 xPos: 58, yPos: 43, preReqs: [12], chain: 0,
		 description: "The weapon-shaped Daedra you conjure are now even more powerful, trap the souls of your victims and bypass some of their armor.",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Mystic Banishment", skill: Conjuration, skillReq: 65,
		 xPos: 56, yPos: 27, preReqs: [13], chain: 0,
		 description: "Your bound weapons are now able to send summoned creatures back into the waters of Oblivion and are more powerful.",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Mystic Disruption", skill: Conjuration, skillReq: 90,
		 xPos: 53, yPos: 12, preReqs: [14], chain: 0,
		 description: "You've perfected your invocations of summoning weapon-shaped daedra by making them even more powerful, able to turn the undead and pierce even more armor.",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Stabilized Binding", skill: Conjuration, skillReq: 25,
		 xPos: 25, yPos: 65, preReqs: [0], chain: 2,  rank: 1,
		 description: "Having studied the barriers that divide the planes of existence, your non-undead summoned creatures last longer in this realm.<br>[+50% duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//17
	{
		name: "Stabilized Binding", skill: Conjuration, skillReq: 50,
		 xPos: 25, yPos: 65, preReqs: [16], chain: 2,  rank: 2,
		 description: "Furthering your studies about the barriers that divide the planes of existence, your non-undead summoned creatures last even longer in this realm.<br>[+100% duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//18
	{
		name: "Extended Binding", skill: Conjuration, skillReq: 50,
		 xPos: 17, yPos: 38, preReqs: [16], chain: 0,
		 description: "You've perfected your spells' formulae to summon non-undead creatures, and are now able to cast them more easily and further away.<br>[x5 range, -25% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//19
	{
		name: "Elemental Binding", skill: Conjuration, skillReq: 75,
		 xPos: 17, yPos: 6, preReqs: [18], chain: 0,
		 description: "Your knowledge of Oblivion's elemental aspects increases the strength of all your summoned Atronachs while the highest level rituals will conjure Thralls that are immune to Banishment and Control spells.",
		 labels: [], lines: [], chainPerks: []
	},
	//20
	{
		name: "Spiritual Binding", skill: Conjuration, skillReq: 35,
		 xPos: 25, yPos: 48, preReqs: [16], chain: 0,
		 description: "Your knowledge of Oblivion's spiritual aspects increases the strength of all your summoned spirits.",
		 labels: [], lines: [], chainPerks: []
	},
	//21
	{
		name: "Soulmancer", skill: Conjuration, skillReq: 20,
		 xPos: 88, yPos: 54, preReqs: [0], chain: 2,  rank: 1,
		 description: "You now are able to intensify the potency of your soul spells.<br>[+20% magnitude]<br>(Unrelated to Perk: Soul spells deal up to 60% less damage depending on the targets current magicka)",
		 labels: [], lines: [], chainPerks: []
	},
	//22
	{
		name: "Soulmancer", skill: Conjuration, skillReq: 40,
		 xPos: 88, yPos: 54, preReqs: [0], chain: 2,  rank: 2,
		 description: "You now are able to intensify the potency of your soul spells.<br>[+40% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//23
	{
		name: "Enslavement", skill: Conjuration, skillReq: 65,
		 xPos: 86, yPos: 33, preReqs: [21], chain: 0,
		 description: "You raise foes up to level 30 that are slain with your adept or higher soul spells.",
		 labels: [], lines: [], chainPerks: []
	},
	//24
	{
		name: "Enthrallment", skill: Conjuration, skillReq: 90,
		 xPos: 85, yPos: 12, preReqs: [23], chain: 0,
		 description: "You raise most foes that are slain with your adept or higher soul spells.",
		 labels: [], lines: [], chainPerks: []
	},
];
let Destruction = new SkillTree("Destruction", 14);
Destruction.perks = [
	//0
	{
		name: "Novice Destruction", skill: Destruction, skillReq: 0,
		 xPos: 57, yPos: 85, preReqs: [], chain: 0,
		 description: "You've learned how to cast Novice level spells with decreased effort while your newfound knowledge also allows you to augment all Destruction spells.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Apprentice Destruction", skill: Destruction, skillReq: 25,
		 xPos: 72, yPos: 68, preReqs: [0], chain: 0,
		 description: "By pursuing your apprenticeship in Destruction, you're now able to augment and cast them with less effort.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Adept Destruction", skill: Destruction, skillReq: 50,
		 xPos: 79, yPos: 43, preReqs: [1], chain: 0,
		 description: "By advancing further into the school of Destruction, you've learned how to augment and cast spells of the Adept rank more easily.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Expert Destruction", skill: Destruction, skillReq: 75,
		 xPos: 79, yPos: 27, preReqs: [2], chain: 0,
		 description: "You've unlocked almost every secret in the school of Destruction.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Master Destruction", skill: Destruction, skillReq: 100,
		 xPos: 79, yPos: 6, preReqs: [3], chain: 0,
		 description: "Your knowledge of Destruction has become all-encompassing. You can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Extended Cloaks", skill: Destruction, skillReq: 75,
		 xPos: 74, yPos: 33, preReqs: [2], chain: 2,  rank: 1,
		 description: "Specialising in cloak spells allows you to empower them with increased duration and increased area of effect.<br>[+50% area/duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Extended Cloaks", skill: Destruction, skillReq: 100,
		 xPos: 74, yPos: 33, preReqs: [5], chain: 2,  rank: 2,
		 description: "Your mastery over cloak spells allows you to empower them with even greater duration and area of effect.<br>[+100% area/duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Rune Mastery", skill: Destruction, skillReq: 50,
		 xPos: 73, yPos: 49, preReqs: [1], chain: 2,  rank: 1,
		 description: "You have unlocked the secret of maintaining two active runes instead of just one. You can also cast runes at triple the distance.",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Rune Mastery", skill: Destruction, skillReq: 75,
		 xPos: 73, yPos: 49, preReqs: [7], chain: 2,  rank: 2,
		 description: "You have unlocked the secret of maintaining three active runes instead of just one. You can also cast runes at six times the distance.",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Enhanced Infusions", skill: Destruction, skillReq: 30,
		 xPos: 70, yPos: 57, preReqs: [1], chain: 2,  rank: 1,
		 description: "You are now able to dispel infusions at will and increase the power of your infusion spells.<br>[+15% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Enhanced Infusions", skill: Destruction, skillReq: 60,
		 xPos: 70, yPos: 57, preReqs: [9], chain: 2,  rank: 2,
		 description: "You are able to intensify the power of your infusion spells even further, increasing their power and duration.<br>[+30% magnitude, +100% duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Pyromancy", skill: Destruction, skillReq: 20,
		 xPos: 46, yPos: 65, preReqs: [0], chain: 2,  rank: 1,
		 description: "Your fire spells now burn with increased intensity, dealing progressively more damage as your foes weaken.<br>[Up to +25% damage based on enemy health]",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Pyromancy", skill: Destruction, skillReq: 40,
		 xPos: 46, yPos: 65, preReqs: [11], chain: 2,  rank: 2,
		 description: "Your fire spells now burn with relentless intensity, dealing devastating damage as your foes weaken.<br>[Up to +50% damage based on enemy health]",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Cremation", skill: Destruction, skillReq: 65,
		 xPos: 44, yPos: 49, preReqs: [11], chain: 0,
		 description: "Your higher level fire spells burn so ferociously that foes are set ablaze, often causing them to run away in gruesome agony as their very skin becomes molten.",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Fire Mastery", skill: Destruction, skillReq: 90,
		 xPos: 43, yPos: 22, preReqs: [13], chain: 0,
		 description: "Your mastery over fire grants you resistance to it, while also empowering your fire spells even further.<br>[+25% resistance, +5% magnitude, -10% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Cryomancy", skill: Destruction, skillReq: 20,
		 xPos: 54, yPos: 65, preReqs: [0], chain: 2,  rank: 1,
		 description: "You have enhanced your ice spells to be more effective and weaken chilled enemies.<br>[+10% magnitude, -10% physical damage from enemies affected by frost]",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Cryomancy", skill: Destruction, skillReq: 40,
		 xPos: 54, yPos: 65, preReqs: [15], chain: 2,  rank: 2,
		 description: "You have further enhanced your ice spells to be even more powerful and severely weakening chilled enemies.<br>[+20% magnitude, -20% physical damage from enemies affected by frost]",
		 labels: [], lines: [], chainPerks: []
	},
	//17
	{
		name: "Deep Freeze", skill: Destruction, skillReq: 65,
		 xPos: 54, yPos: 38, preReqs: [15], chain: 0,
		 description: "Your higher level ice spells are colder than Skyrim's most ferocious blizzards, causing them to freeze foes with low resistance to frost.",
		 labels: [], lines: [], chainPerks: []
	},
	//18
	{
		name: "Frost Mastery", skill: Destruction, skillReq: 90,
		 xPos: 54, yPos: 17, preReqs: [17], chain: 0,
		 description: "Your mastery over frost grants you resistance to it, while also empowering your frost spells even further.<br>[+25% resistance, +5% magnitude, -10% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//19
	{
		name: "Electromancy", skill: Destruction, skillReq: 20,
		 xPos: 61, yPos: 59, preReqs: [0], chain: 2,  rank: 1,
		 description: "You can now energize your lightning spells more effectively, causing them to deal more damage when your mind is clear and focused.<br>[Over 50% Magicka: +25% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//20
	{
		name: "Electromancy", skill: Destruction, skillReq: 40,
		 xPos: 61, yPos: 59, preReqs: [19], chain: 2,  rank: 2,
		 description: "You can now energize your lightning spells even more effectively, causing them to deal devastating damage when your mind is clear and focused.<br>[Over 50% Magicka: +50% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//21
	{
		name: "Electrostatic Discharge", skill: Destruction, skillReq: 65,
		 xPos: 61, yPos: 33, preReqs: [19], chain: 0,
		 description: "Your lightning strikes pass through body and mind with thundering intensity. Thus, they now vaporize vast amounts of Magicka off your targets.",
		 labels: [], lines: [], chainPerks: []
	},
	//22
	{
		name: "Lightning Mastery", skill: Destruction, skillReq: 90,
		 xPos: 64, yPos: 12, preReqs: [21], chain: 0,
		 description: "Your mastery over lightning grants you resistance to it, while also empowering your shock spells even further.<br>[+25% resistance, +5% magnitude, -10% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//23
	{
		name: "Empowered Elements", skill: Destruction, skillReq: 20,
		 xPos: 74, yPos: 81, preReqs: [0], chain: 0,
		 description: "You learned how to empower Destruction spells by dual casting them. Thus, you're able to overcharge their effects.",
		 labels: [], lines: [], chainPerks: []
	},
	//24
	{
		name: "Impact", skill: Destruction, skillReq: 50,
		 xPos: 85, yPos: 76, preReqs: [23], chain: 0,
		 description: "By intensifying the force of most of your overcharged Destruction spells, you're now capable of staggering your foes.",
		 labels: [], lines: [], chainPerks: []
	},
	//25
	{
		name: "Hemomancer", skill: Destruction, skillReq: 20,
		 xPos: 39, yPos: 65, preReqs: [0], chain: 2,  rank: 1,
		 description: "Killing an enemy with your destruction drain spells empowers you for a short period of time.<br>[Buff grants: +15% magnitude to drain spells, +1 health/sec for 120 seconds]",
		 labels: [], lines: [], chainPerks: []
	},
	//26
	{
		name: "Hemomancer", skill: Destruction, skillReq: 40,
		 xPos: 39, yPos: 65, preReqs: [25], chain: 2,  rank: 2,
		 description: "Killing an enemy with your destruction drain spells now greatly empowers you for an extended period.<br>[Buff grants: +30% magnitude to drain spells, +2 health/sec for 240 seconds]",
		 labels: [], lines: [], chainPerks: []
	},
	//27
	{
		name: "Drain Strength", skill: Destruction, skillReq: 65,
		 xPos: 35, yPos: 44, preReqs: [25], chain: 0,
		 description: "Your drain life spells now sap the strength from your foes, draining stamina as well.",
		 labels: [], lines: [], chainPerks: []
	},
	//28
	{
		name: "Drain Willpower", skill: Destruction, skillReq: 90,
		 xPos: 34, yPos: 22, preReqs: [27], chain: 0,
		 description: "Your drain life spells now sap the willpower from your foes, draining magicka as well.",
		 labels: [], lines: [], chainPerks: []
	},
	//29
	{
		name: "Annihilation", skill: Destruction, skillReq: 20,
		 xPos: 31, yPos: 65, preReqs: [0], chain: 2,  rank: 1,
		 description: "You now are able to intensify the strength of your Annihilation spells by channeling additional magicka into them.<br>[+20% magnitude, +10% spellcost]",
		 labels: [], lines: [], chainPerks: []
	},
	//30
	{
		name: "Annihilation", skill: Destruction, skillReq: 40,
		 xPos: 31, yPos: 65, preReqs: [29], chain: 2,  rank: 2,
		 description: "You now are able to greatly intensify the strength of your Annihilation spells by weaving massive amounts of magicka into them.<br>[+40% magnitude, +20% spell cost]  ",
		 labels: [], lines: [], chainPerks: []
	},
	//31
	{
		name: "Obliteration", skill: Destruction, skillReq: 65,
		 xPos: 25, yPos: 49, preReqs: [29], chain: 0,
		 description: "Your Annihilation spells now disintergrate all but the most powerful of foes.",
		 labels: [], lines: [], chainPerks: []
	},
	//32
	{
		name: "Annihilation Mastery", skill: Destruction, skillReq: 90,
		 xPos: 24, yPos: 17, preReqs: [29], chain: 0,
		 description: "Your mastery over annihilation grants you magic resistance, while also empowering your annihilation spells even further.<br>[+10% resistance, +5% magnitude, -10% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//33
	{
		name: "Geomancy", skill: Destruction, skillReq: 20,
		 xPos: 21, yPos: 65, preReqs: [0], chain: 2,  rank: 1,
		 description: "You now are able to intensify the strength of your earth spells. Thus, they now deal increased damage to enemies that are not heavily armored.<br>[+25% magnitude, excluding heavily armored enemies]",
		 labels: [], lines: [], chainPerks: []
	},
	//34
	{
		name: "Geomancy", skill: Destruction, skillReq: 40,
		 xPos: 21, yPos: 65, preReqs: [33], chain: 2,  rank: 2,
		 description: "You now are able to greatly intensify the strength of your earth spells. Thus, they now deal increased damage to enemies that are not heavily armored.<br>[+50% magnitude, excluding heavily armored enemies]",
		 labels: [], lines: [], chainPerks: []
	},
	//35
	{
		name: "Knockout", skill: Destruction, skillReq: 65,
		 xPos: 17, yPos: 44, preReqs: [33], chain: 0,
		 description: "Your higher level earth spells are so strong that foes are set sometimes knocked out.",
		 labels: [], lines: [], chainPerks: []
	},
	//36
	{
		name: "Unstable Surge", skill: Destruction, skillReq: 50,
		 xPos: 85, yPos: 52, preReqs: [1], chain: 2,  rank: 1,
		 description: "Through your profound understanding of the chaotic essence of destruction magic, you are able to shape its volatile nature to your advantage.<br>[25% chance +50% Magnitude, excluding concentration spells]",
		 labels: [], lines: [], chainPerks: []
	},
	//37
	{
		name: "Unstable Surge", skill: Destruction, skillReq: 75,
		 xPos: 85, yPos: 52, preReqs: [36], chain: 2,  rank: 2,
		 description: "Through your mastery of the chaotic essence of destruction magic, you are able to cause devastating surges of power.<br>[25% chance +100% Magnitude, excluding concentration spells]  ",
		 labels: [], lines: [], chainPerks: []
	},
	//38
	{
		name: "Earth Mastery", skill: Destruction, skillReq: 90,
		 xPos: 16, yPos: 12, preReqs: [35], chain: 0,
		 description: "Your mastery over geomancy grants you armor, while also empowering your earth spells even further.<br>[+200 armor, +5% magnitude, -10% spell cost]  ",
		 labels: [], lines: [], chainPerks: []
	},
];
let Illusion = new SkillTree("Illusion", 15);
Illusion.perks = [
	//0
	{
		name: "Novice Illusion", skill: Illusion, skillReq: 0,
		 xPos: 48, yPos: 86, preReqs: [], chain: 0,
		 description: "You've learned how to cast Novice level spells with decreased effort while your newfound knowledge also allows you to augment all Illusion spells.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Quiet Casting", skill: Illusion, skillReq: 25,
		 xPos: 14, yPos: 70, preReqs: [0], chain: 0,
		 description: "Empowering Muffle spells and Veil of Silence lets you cast spells from the illusion school silently. Muffle spells last 100% longer.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Silent Casting", skill: Illusion, skillReq: 50,
		 xPos: 11, yPos: 44, preReqs: [1], chain: 0,
		 description: "Empowering Muffle spells lets you cast spells from all schools silently. Invisibility now works while you are running.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Unbreakable Invisibility", skill: Illusion, skillReq: 75,
		 xPos: 11, yPos: 22, preReqs: [2], chain: 0,
		 description: "Your invisibility spells now reapply themselves when you crouch while the effect is active. Invisibility and Muffle spells last 75% longer.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Visual Manipulation", skill: Illusion, skillReq: 25,
		 xPos: 31, yPos: 70, preReqs: [0], chain: 0,
		 description: "Your knowledge of Shadow Magic grants the power to summon night vision at will. Blur and Shadow Shield are more effective.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Shadow Shaping", skill: Illusion, skillReq: 50,
		 xPos: 29, yPos: 44, preReqs: [4], chain: 0,
		 description: "You have gained even deeper insights into the weave of shadows. Blur and Shadow Shield are more powerful and last 30% longer. Empowering Shadow Shield grants immunity to most impact effects and increases attack speed by 10%.",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Shadow Mastery", skill: Illusion, skillReq: 75,
		 xPos: 29, yPos: 22, preReqs: [5], chain: 0,
		 description: "You have gained even deeper insights into the weave of shadows. Empowering Shadow Simulacrum or Mistress of the Dark improves your illusions. Blur and Shadow Shield are more effective and last 30% longer.",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Empowered Illusions", skill: Illusion, skillReq: 20,
		 xPos: 20, yPos: 80, preReqs: [0], chain: 0,
		 description: "You learned how to empower Illusion spells by dual casting them. Thus, you're able to overcharge their effects.",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Delusive Phantasms", skill: Illusion, skillReq: 15,
		 xPos: 72, yPos: 75, preReqs: [0], chain: 0,
		 description: "Spells that effect basic emotions like fear, calmness and courage are 30% more powerful. Empowered spells now grant secondary effects. Fear lowers armor, Charm drains magicka and stamina and Courage restores them.",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Otherwordly Phantasms", skill: Illusion, skillReq: 20,
		 xPos: 71, yPos: 65, preReqs: [0], chain: 0,
		 description: "Your ability to turn your foes into berserking maniacs or cause them to fall asleep is improved by 30%. Empowered Fury spells increase damage and stamina regeneration. Empowered Sleep spells reduce magicka and stamina regeneration.",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Apprentice Illusion", skill: Illusion, skillReq: 25,
		 xPos: 48, yPos: 70, preReqs: [0], chain: 0,
		 description: "By pursuing your apprenticeship in Illusion, you're now able to augment and cast them with less effort.",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Adept Illusion", skill: Illusion, skillReq: 50,
		 xPos: 48, yPos: 48, preReqs: [10], chain: 0,
		 description: "By advancing further into the school of Illusion, you've learned how to augment and cast spells of the Adept rank more easily.",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Expert Illusion", skill: Illusion, skillReq: 75,
		 xPos: 48, yPos: 33, preReqs: [11], chain: 0,
		 description: "You've unlocked almost every secret in the school of Illusion.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Master Illusion", skill: Illusion, skillReq: 100,
		 xPos: 48, yPos: 18, preReqs: [12], chain: 0,
		 description: "Your knowledge of Illusion has become all-encompassing. You can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Domination", skill: Illusion, skillReq: 90,
		 xPos: 70, yPos: 17, preReqs: [12], chain: 0,
		 description: "There is no thinking being that can escape your influence. Empowered Phantasmal Miasma reduces movement speed and Empowered Mind Maelstrom can inflict victims with frenzy or sleep. These spells are 30% more powerful.",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Obliterate the Mind", skill: Illusion, skillReq: 65,
		 xPos: 70, yPos: 34, preReqs: [11], chain: 0,
		 description: "Empowered Phantasmal Killer causes an instant heart attack. Empowered Blackout causes unconsciousness. Empowered Fog of Shadows cripples their magicka regeneration. These spells are 30% more powerful. ",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Pain and Agony", skill: Illusion, skillReq: 40,
		 xPos: 70, yPos: 51, preReqs: [10], chain: 0,
		 description: "You can now invoke terrible agony in your foes with ease. Empowering Nightmare can kill sleeping targets instantly. Empowered Phantom Pain reduces movement speed. These spells are 30% more powerful.",
		 labels: [], lines: [], chainPerks: []
	},
];
let Restoration = new SkillTree("Restoration", 16);
Restoration.perks = [
	//0
	{
		name: "Novice Restoration", skill: Restoration, skillReq: 0,
		 xPos: 54, yPos: 85, preReqs: [], chain: 0,
		 description: "You've learned how to cast Novice level spells with decreased effort while your newfound knowledge also allows you to augment all Restoration spells.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Apprentice Restoration", skill: Restoration, skillReq: 25,
		 xPos: 57, yPos: 70, preReqs: [0], chain: 0,
		 description: "By pursuing your apprenticeship in Restoration, you're now able to augment and cast them with less effort.",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Adept Restoration", skill: Restoration, skillReq: 50,
		 xPos: 53, yPos: 49, preReqs: [1], chain: 0,
		 description: "By advancing further into the school of Restoration, you've learned how to augment and cast spells of the Adept rank more easily.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Expert Restoration", skill: Restoration, skillReq: 75,
		 xPos: 55, yPos: 22, preReqs: [2], chain: 0,
		 description: "You've unlocked almost every secret in the school of Restoration.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Master Restoration", skill: Restoration, skillReq: 100,
		 xPos: 44, yPos: 12, preReqs: [3], chain: 0,
		 description: "Your knowledge of Restoration has become all-encompassing. You can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Improved Healing", skill: Restoration, skillReq: 40,
		 xPos: 39, yPos: 69, preReqs: [0], chain: 0,
		 description: "Your healing spells are now more effective, and also restore the affected subject's stamina if they are out of combat.<br>[+15% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Respite", skill: Restoration, skillReq: 75,
		 xPos: 17, yPos: 65, preReqs: [5], chain: 0,
		 description: "You've mastered the art of healing spells which makes them even more effective and they are now able to restore stamina in combat.<br>[+15% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Improved Wards", skill: Restoration, skillReq: 30,
		 xPos: 42, yPos: 82, preReqs: [0], chain: 2,  rank: 1,
		 description: "Your arcane wards now cost less magicka and are more powerful.<br>[-30% spell cost, +25% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Improved Wards", skill: Restoration, skillReq: 60,
		 xPos: 42, yPos: 82, preReqs: [7], chain: 2,  rank: 2,
		 description: "Your improved knowledge about arcane wards allows you to absorb magicka from incoming spells and they are even more powerful.<br>[30% absorb, +50% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Divine Light", skill: Restoration, skillReq: 20,
		 xPos: 39, yPos: 60, preReqs: [0], chain: 2,  rank: 1,
		 description: "You now are able to intensify the power of your sun and turn undead spells.<br>[+15% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Divine Light", skill: Restoration, skillReq: 40,
		 xPos: 39, yPos: 60, preReqs: [9], chain: 2,  rank: 2,
		 description: "You now are able to greatly intensify the power of your sun and turn undead spells.<br>[+30% magnitude]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Blinding Light", skill: Restoration, skillReq: 65,
		 xPos: 17, yPos: 43, preReqs: [9], chain: 0,
		 description: "Your apprentice or higher sun spells are so bright that all but the most powerful undead and Daedra are stunned.",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Mysticism", skill: Restoration, skillReq: 90,
		 xPos: 17, yPos: 9, preReqs: [11], chain: 0,
		 description: "You've learned the art of weaving mystical energies into your spells, making all of them more effective against the undead and Daedra.<br>[+25% magnitude, +40% duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Venomancer", skill: Restoration, skillReq: 20,
		 xPos: 49, yPos: 60, preReqs: [0], chain: 2,  rank: 1,
		 description: "You now are able to intensify the potency of your poison spells. Thus, they now have increased duration.<br>[+25% duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Venomancer", skill: Restoration, skillReq: 40,
		 xPos: 49, yPos: 60, preReqs: [13], chain: 2,  rank: 2,
		 description: "You now are able to greatly intensify the potency of your poison spells. Thus, they now deal far more damage.<br>[+50% duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Immobilization", skill: Restoration, skillReq: 65,
		 xPos: 28, yPos: 43, preReqs: [13], chain: 0,
		 description: "Your poison spells are now more effective at paralyzing your victims, working on stronger enemies, and effecting them faster.",
		 labels: [], lines: [], chainPerks: []
	},
	//16
	{
		name: "Poison Mastery", skill: Restoration, skillReq: 90,
		 xPos: 28, yPos: 9, preReqs: [15], chain: 0,
		 description: "Your mastery over poison grants you resistance to it, while also empowering your poison spells even further.<br>[+25% resistance, +5% magnitude, -10% spell cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//17
	{
		name: "Benefactor's Insight", skill: Restoration, skillReq: 20,
		 xPos: 71, yPos: 75, preReqs: [0], chain: 0,
		 description: "You learned how to empower Restoration spells by dual casting them. Therefore, you are now able to overcharge their effects.",
		 labels: [], lines: [], chainPerks: []
	},
	//18
	{
		name: "Focused Mind", skill: Restoration, skillReq: 25,
		 xPos: 80, yPos: 65, preReqs: [1], chain: 0,
		 description: "You've learned to focus your mind. Thus, you can keep your concentration even in stressful situations and regenerate your magicka faster.<br>[+50% magicka regeneration, no magicka penalty when hit]",
		 labels: [], lines: [], chainPerks: []
	},
	//19
	{
		name: "Power of Life", skill: Restoration, skillReq: 50,
		 xPos: 70, yPos: 43, preReqs: [18], chain: 0,
		 description: "Your studies of healing magic allow you to regenerate health over time and increase the effectiveness of healing spells in stressful situations.<br>[health regeneration and +20% magnitude in combat]  ",
		 labels: [], lines: [], chainPerks: []
	},
	//20
	{
		name: "Essence of Life", skill: Restoration, skillReq: 75,
		 xPos: 90, yPos: 49, preReqs: [19], chain: 0,
		 description: "Your understanding of healing and how magic and life are intertwined grant you the power of making yourself almost invulnerable for a short duration twice a day.",
		 labels: [], lines: [], chainPerks: []
	},
];
let Enchanting = new SkillTree("Enchanting", 17);
Enchanting.perks = [
	//0
	{
		name: "Enchanter's Insight", skill: Enchanting, skillReq: 0,
		 xPos: 50, yPos: 85, preReqs: [], chain: 3,  rank: 1,
		 description: "You've acquired fundamental insights into how matter and magic intertwine. Thus, you can now infuse<br> items with arcane energy at an enchanter and use soul gems to recharge enchanted items of all kinds.",
		 labels: [], lines: [], chainPerks: []
	},
	//1
	{
		name: "Enchanter's Insight", skill: Enchanting, skillReq: 30,
		 xPos: 50, yPos: 85, preReqs: [0], chain: 3,  rank: 2,
		 description: "Your advanced knowledge of arcane energy allows you to improve all your enchantments even more.  ",
		 labels: [], lines: [], chainPerks: []
	},
	//2
	{
		name: "Enchanter's Insight", skill: Enchanting, skillReq: 60,
		 xPos: 50, yPos: 85, preReqs: [1], chain: 3,  rank: 3,
		 description: "Through obscure knowledge of arcane energy you are able to improve all your enchantments even more.",
		 labels: [], lines: [], chainPerks: []
	},
	//3
	{
		name: "Elemental Lore", skill: Enchanting, skillReq: 25,
		 xPos: 30, yPos: 65, preReqs: [0], chain: 0,
		 description: "You've learned how to tame the elements most efficiently.<br> Thus, all elemental enchantments are stronger.",
		 labels: [], lines: [], chainPerks: []
	},
	//4
	{
		name: "Corpus Lore", skill: Enchanting, skillReq: 50,
		 xPos: 30, yPos: 49, preReqs: [3], chain: 0,
		 description: "You've become skilled in using enchantments to strengthen mind and body. Thus, <br> all such enchantments are stronger.",
		 labels: [], lines: [], chainPerks: []
	},
	//5
	{
		name: "Skill Lore", skill: Enchanting, skillReq: 75,
		 xPos: 45, yPos: 34, preReqs: [4], chain: 0,
		 description: "You've become a master of infusing enchantments that transfer knowledge and skill to the user,<br> making all such ones stronger.",
		 labels: [], lines: [], chainPerks: []
	},
	//6
	{
		name: "Enchantment Mastery", skill: Enchanting, skillReq: 100,
		 xPos: 79, yPos: 17, preReqs: [5,9], chain: 0,
		 description: "You've found a way to bind even more energy into inanimate matter. Thus, you can bend the Law of Firsts to an extent<br> and even create Daedric staves. Additionally, all enchanted items also consume less energy.",
		 labels: [], lines: [], chainPerks: []
	},
	//7
	{
		name: "Soul Gem Mastery", skill: Enchanting, skillReq: 25,
		 xPos: 71, yPos: 64, preReqs: [0], chain: 0,
		 description: "You've learned how to draw more energy from soul gems and are now able to <br> craft them at a smelter by transmuting and melting certain minerals.",
		 labels: [], lines: [], chainPerks: []
	},
	//8
	{
		name: "Arcane Experimentation", skill: Enchanting, skillReq: 50,
		 xPos: 76, yPos: 54, preReqs: [7], chain: 0,
		 description: "Your studies have enabled you to research unique enchantments of your own<br>and to craft better staves at the forge.",
		 labels: [], lines: [], chainPerks: []
	},
	//9
	{
		name: "Artificer's Insight", skill: Enchanting, skillReq: 75,
		 xPos: 81, yPos: 28, preReqs: [8], chain: 0,
		 description: "You could fill grimoires with your newfound knowledge that allows you to create<br>even better enchantments and staves.",
		 labels: [], lines: [], chainPerks: []
	},
	//10
	{
		name: "Staff Channeling", skill: Enchanting, skillReq: 20,
		 xPos: 33, yPos: 76, preReqs: [12], chain: 2,  rank: 1,
		 description: "You can use your magic staff to channel arcane power, making spells, scrolls, and staffs stronger.<br>[while having staff equipped: +10% magnitude and duration, -20% staff charge cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//11
	{
		name: "Staff Channeling", skill: Enchanting, skillReq: 40,
		 xPos: 33, yPos: 76, preReqs: [10], chain: 2,  rank: 2,
		 description: "You can use your magic staff to channel arcane power, making spells, scrolls, and staffs stronger.<br>[while having staff equipped: +20% magnitude and duration, -40% staff charge cost]",
		 labels: [], lines: [], chainPerks: []
	},
	//12
	{
		name: "Arcane Artificery", skill: Enchanting, skillReq: 15,
		 xPos: 30, yPos: 85, preReqs: [], chain: 2,  rank: 1,
		 description: "Your understanding of enchantments allows you to use scrolls and staff more effectively.<br>[+20% staff & scroll magnitude and duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//13
	{
		name: "Arcane Artificery", skill: Enchanting, skillReq: 30,
		 xPos: 30, yPos: 85, preReqs: [12], chain: 2,  rank: 2,
		 description: "Your understanding of enchantments allows you to use scrolls and staff more effectively.<br>[+40% staff & scroll magnitude and duration]",
		 labels: [], lines: [], chainPerks: []
	},
	//14
	{
		name: "Arcane Scholar", skill: Enchanting, skillReq: 25,
		 xPos: 19, yPos: 70, preReqs: [12], chain: 2,  rank: 1,
		 description: "Through meticulous study, you unlock hidden potentials in scrolls and staffs, boosting their spell magnitude and duration.<br>[+0.75% magnitude/duration for each point in your Enchantment skill]",
		 labels: [], lines: [], chainPerks: []
	},
	//15
	{
		name: "Arcane Scholar", skill: Enchanting, skillReq: 50,
		 xPos: 19, yPos: 70, preReqs: [14], chain: 2,  rank: 2,
		 description: "Through meticulous study, you unlock hidden potentials in scrolls and staffs, boosting their spell magnitude and duration.<br>[+1.5% magnitude/duration for each point in your Enchantment skill]",
		 labels: [], lines: [], chainPerks: []
	},
];
let skillsList = [Onehanded, Twohanded, Marksman, Block, Smithing, HeavyArmor, Evasion, Pickpocket, Lockpicking, Sneak, Alchemy, Speech, Alteration, Conjuration, Destruction, Illusion, Restoration, Enchanting];

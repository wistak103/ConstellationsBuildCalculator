class profession {
    constructor(name) {
        this.name = name;
		this.skillgroup = 0; // 0 mage, 1 warrior, 2 thief
        this.additionalSkills = [];
        this.additionalAttributes = 0; //0 = magic, 1 = health, 2 = stamina
    }
}


let custom = new profession('custom');
custom.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
custom.additionalAttributes = 0;

//COMBAT CLASSES

let archer = new profession('archer');
archer.skillgroup = 1;
archer.additionalSkills = [ 
    5,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    5,      //onehanded
    5,      //marksman
    5,      //evasion
    5,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    5,      //restoration
    0,      //alteration
    0];     //enchanting
archer.additionalAttributes = 2;

let barbarian = new profession('barbarian');
barbarian.skillgroup = 1;
barbarian.additionalSkills = [ 
    5,      //smithing
    0,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    5,      //marksman
    5,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
barbarian.additionalAttributes = 1;

let crusader = new profession('crusader');
crusader.skillgroup = 1;
crusader.additionalSkills = [ 
    0,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    5,      //destruction
    5,      //restoration
    0,      //alteration
    0];     //enchanting
crusader.additionalAttributes = 1;

let knight = new profession('knight');
knight.skillgroup = 1;
knight.additionalSkills = [ 
    0,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    5,      //speech
    0,      //alchemy
    5,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
knight.additionalAttributes = 1;

let rogue = new profession('rogue');
rogue.skillgroup = 1;
rogue.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    5,      //onehanded
    0,      //marksman
    5,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
rogue.additionalAttributes = 2;

let scout = new profession('scout');
scout.skillgroup = 1;
scout.additionalSkills = [ 
    5,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    5,      //onehanded
    5,      //marksman
    5,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    5,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
scout.additionalAttributes = 2;

let warrior = new profession('warrior');
warrior.skillgroup = 1;
warrior.additionalSkills = [ 
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    5,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
warrior.additionalAttributes = 1;

//MAGIC CLASSES

let battlemage = new profession('battlemage');
battlemage.skillgroup = 0;
battlemage.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    5,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    5,      //alchemy
    0,      //illusion
    5,      //conjuration
    5,      //destruction
    0,      //restoration
    5,      //alteration
    5];     //enchanting
battlemage.additionalAttributes = 0;

let healer = new profession('healer');
healer.skillgroup = 0;
healer.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    0,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    0];     //enchanting
healer.additionalAttributes = 0;

let mage = new profession('mage');
mage.skillgroup = 0;
mage.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting
mage.additionalAttributes = 0;

let nightblade = new profession('nightblade');
nightblade.skillgroup = 0;
nightblade.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    5,      //onehanded
    0,      //marksman
    5,      //evasion
    5,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    5,      //illusion
    0,      //conjuration
    5,      //destruction
    0,      //restoration
    5,      //alteration
    0];     //enchanting
nightblade.additionalAttributes = 0;

let sorcerer = new profession('sorcerer');
sorcerer.skillgroup = 0;
sorcerer.additionalSkills = [ 
    0,      //smithing
    5,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    0,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting
sorcerer.additionalAttributes = 0;

let spellsword = new profession('spellsword');
spellsword.skillgroup = 0;
spellsword.additionalSkills = [ 
    0,      //smithing
    5,      //heavyarmor
    0,      //block
    0,      //twohanded
    5,      //onehanded
    0,      //marksman
    0,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    5,      //illusion
    0,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    0];     //enchanting
spellsword.additionalAttributes = 1;

let witchhunter = new profession('witchhunter');
witchhunter.skillgroup = 0;
witchhunter.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    5,      //marksman
    0,      //evasion
    0,      //sneak
    5,      //lockpicking
    0,      //pickpocket
    0,      //speech
    5,      //alchemy
    0,      //illusion
    5,      //conjuration
    5,      //destruction
    0,      //restoration
    0,      //alteration
    5];     //enchanting
witchhunter.additionalAttributes = 2;

//STEALTH CLASSES

let acrobat = new profession('acrobat');
acrobat.skillgroup = 2;
acrobat.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    5,      //onehanded
    5,      //marksman
    0,      //evasion
    5,      //sneak
    5,      //lockpicking
    0,      //pickpocket
    5,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
acrobat.additionalAttributes = 2;

let agent = new profession('agent');
agent.skillgroup = 2;
agent.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    5,      //marksman
    0,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    0,      //alchemy
    5,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
agent.additionalAttributes = 2;

let assassin = new profession('assassin');
assassin.skillgroup = 2;
assassin.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    5,      //onehanded
    5,      //marksman
    5,      //evasion
    5,      //sneak
    5,      //lockpicking
    0,      //pickpocket
    0,      //speech
    5,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
assassin.additionalAttributes = 2;

let bard = new profession('bard');
bard.skillgroup = 2;
bard.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    5,      //onehanded
    0,      //marksman
    5,      //evasion
    0,      //sneak
    0,      //lockpicking
    0,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
bard.additionalAttributes = 2;

let monk = new profession('monk');
monk.skillgroup = 2;
monk.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    0,      //onehanded
    5,      //marksman
    0,      //evasion
    5,      //sneak
    5,      //lockpicking
    0,      //pickpocket
    0,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    5,      //restoration
    5,      //alteration
    0];     //enchanting
monk.additionalAttributes = 2;

let pilgrim = new profession('pilgrim');
pilgrim.skillgroup = 2;
pilgrim.additionalSkills = [ 
    5,      //smithing
    0,      //heavyarmor
    5,      //block
    5,      //twohanded
    0,      //onehanded
    0,      //marksman
    5,      //evasion
    0,      //sneak
    5,      //lockpicking
    0,      //pickpocket
    5,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
pilgrim.additionalAttributes = 1;

let thief = new profession('thief');
thief.skillgroup = 2;
thief.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    5,      //marksman
    5,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    0,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
thief.additionalAttributes = 2;

//0 = magic, 1 = health, 2 = stamina
let professionList = [custom, archer, barbarian, crusader, knight, rogue, scout, warrior, battlemage, healer, mage, nightblade, sorcerer, spellsword, witchhunter, acrobat, agent, assassin, bard, monk, pilgrim, thief];
class profession {
    constructor(name) {
        this.name = name;
        this.additionalSkills = [];
        this.additionalAttributes = []; //0 = magic, 1 = health, 2 = stamina
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
custom.additionalAttributes = [0, 0, 0];

//COMBAT CLASSES

let archer = new profession('archer');
archer.additionalSkills = [ 
    10,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    10,      //onehanded
    10,      //marksman
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
archer.additionalAttributes = [0, 0, 10];

let barbarian = new profession('barbarian');
barbarian.additionalSkills = [ 
    10,      //smithing
    5,      //heavyarmor
    10,      //block
    10,      //twohanded
    10,      //onehanded
    10,      //marksman
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
barbarian.additionalAttributes = [0, 10, 0];

let crusader = new profession('crusader');
crusader.additionalSkills = [ 
    5,      //smithing
    10,      //heavyarmor
    10,      //block
    10,      //twohanded
    10,      //onehanded
    5,      //marksman
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
crusader.additionalAttributes = [0, 10, 0];

let knight = new profession('knight');
knight.additionalSkills = [ 
    5,      //smithing
    10,      //heavyarmor
    10,      //block
    10,      //twohanded
    10,      //onehanded
    5,      //marksman
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
knight.additionalAttributes = [0, 10, 0];

let rogue = new profession('rogue');
rogue.additionalSkills = [ 
    5,      //smithing
    5,      //heavyarmor
    10,      //block
    5,      //twohanded
    10,      //onehanded
    5,      //marksman
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
rogue.additionalAttributes = [0, 0, 10];

let scout = new profession('scout');
scout.additionalSkills = [ 
    10,      //smithing
    5,      //heavyarmor
    10,      //block
    5,      //twohanded
    10,      //onehanded
    10,      //marksman
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
scout.additionalAttributes = [0, 0, 10];

let warrior = new profession('warrior');
warrior.additionalSkills = [ 
    10,      //smithing
    10,      //heavyarmor
    10,      //block
    10,      //twohanded
    10,      //onehanded
    10,      //marksman
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
warrior.additionalAttributes = [0, 10, 0];

//MAGIC CLASSES

let battlemage = new profession('battlemage');
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
    5,      //illusion
    10,      //conjuration
    10,      //destruction
    5,      //restoration
    10,      //alteration
    10];     //enchanting
battlemage.additionalAttributes = [10, 0, 0];

let healer = new profession('healer');
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
    10,      //illusion
    5,      //conjuration
    10,      //destruction
    10,      //restoration
    10,      //alteration
    5];     //enchanting
healer.additionalAttributes = [10, 0, 0];

let mage = new profession('mage');
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
    10,      //illusion
    10,      //conjuration
    10,      //destruction
    10,      //restoration
    10,      //alteration
    10];     //enchanting
mage.additionalAttributes = [10, 0, 0];

let nightblade = new profession('nightblade');
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
    10,      //illusion
    5,      //conjuration
    10,      //destruction
    5,      //restoration
    10,      //alteration
    5];     //enchanting
nightblade.additionalAttributes = [10, 0, 0];

let sorcerer = new profession('sorcerer');
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
    5,      //illusion
    10,      //conjuration
    10,      //destruction
    10,      //restoration
    10,      //alteration
    10];     //enchanting
sorcerer.additionalAttributes = [10, 0, 0];

let spellsword = new profession('spellsword');
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
    10,      //illusion
    5,      //conjuration
    10,      //destruction
    10,      //restoration
    10,      //alteration
    5];     //enchanting
spellsword.additionalAttributes = [0, 10, 0];

let witchhunter = new profession('witchhunter');
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
    5,      //illusion
    10,      //conjuration
    10,      //destruction
    5,      //restoration
    5,      //alteration
    10];     //enchanting
witchhunter.additionalAttributes = [0, 0, 10];

//STEALTH CLASSES

let acrobat = new profession('acrobat');
acrobat.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    5,      //onehanded
    5,      //marksman
    5,      //evasion
    10,      //sneak
    10,      //lockpicking
    5,      //pickpocket
    10,      //speech
    5,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
acrobat.additionalAttributes = [0, 0, 10];

let agent = new profession('agent');
agent.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    5,      //marksman
    5,      //evasion
    10,      //sneak
    10,      //lockpicking
    10,      //pickpocket
    10,      //speech
    5,      //alchemy
    5,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
agent.additionalAttributes = [0, 0, 10];

let assassin = new profession('assassin');
assassin.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    5,      //onehanded
    5,      //marksman
    10,      //evasion
    10,      //sneak
    10,      //lockpicking
    5,      //pickpocket
    5,      //speech
    10,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
assassin.additionalAttributes = [0, 0, 10];

let bard = new profession('bard');
bard.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    5,      //onehanded
    0,      //marksman
    10,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    10,      //speech
    10,      //alchemy
    5,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
bard.additionalAttributes = [0, 0, 10];

let monk = new profession('monk');
monk.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    5,      //block
    0,      //twohanded
    0,      //onehanded
    5,      //marksman
    5,      //evasion
    10,      //sneak
    10,      //lockpicking
    5,      //pickpocket
    5,      //speech
    5,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    5,      //restoration
    5,      //alteration
    0];     //enchanting
monk.additionalAttributes = [0, 0, 10];

let pilgrim = new profession('pilgrim');
pilgrim.additionalSkills = [ 
    5,      //smithing
    0,      //heavyarmor
    5,      //block
    5,      //twohanded
    0,      //onehanded
    0,      //marksman
    10,      //evasion
    5,      //sneak
    10,      //lockpicking
    5,      //pickpocket
    10,      //speech
    5,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
pilgrim.additionalAttributes = [0, 10, 0];

let thief = new profession('thief');
thief.additionalSkills = [ 
    0,      //smithing
    0,      //heavyarmor
    0,      //block
    0,      //twohanded
    0,      //onehanded
    5,      //marksman
    10,      //evasion
    10,      //sneak
    10,      //lockpicking
    10,      //pickpocket
    10,      //speech
    5,      //alchemy
    0,      //illusion
    0,      //conjuration
    0,      //destruction
    0,      //restoration
    0,      //alteration
    0];     //enchanting
thief.additionalAttributes = [0, 0, 10];

//0 = magic, 1 = health, 2 = stamina
let professionList = [custom, archer, barbarian, crusader, knight, rogue, scout, warrior, battlemage, healer, mage, nightblade, sorcerer, spellsword, witchhunter, acrobat, agent, assassin, bard, monk, pilgrim, thief];
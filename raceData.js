class Race {
    constructor(name) {
        this.name = name;
        this.baseSkills = [];
        this.baseAttributes = [];
        this.bonusAttributes = [];
        this.baseRegens = [];
        this.baseCarryWeight;
        this.baseResists = []; //0 = magic, 1 = disease, 2 = poison
    }
}


let altmer = new Race('altmer');
altmer.baseSkills = [ 
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    5,      //marksman
    5,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    5,      //alchemy
    15,      //illusion
    10,      //conjuration
    15,      //destruction
    10,      //restoration
    10,      //alteration
    10];     //enchanting

altmer.baseAttributes = [130, 90, 80];
altmer.bonusAttributes = [50, 0, 0];
altmer.baseRegens = [1.25, 0, 1.55];
altmer.baseCarryWeight = 95;
altmer.baseResists = [0, 75, 0];

let bosmer = new Race('bosmer');
bosmer.baseSkills = [
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    15,      //marksman
    15,      //evasion
    10,      //sneak
    10,      //lockpicking
    10,      //pickpocket
    5,      //speech
    10,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting

bosmer.baseAttributes = [110, 90, 120];
bosmer.bonusAttributes = [0, 0, 0];
bosmer.baseRegens = [1.05, 0, 1.65];
bosmer.baseCarryWeight = 85;
bosmer.baseResists = [0, 75, 0];

let breton = new Race('breton');
breton.baseSkills = [
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    5,      //marksman
    5,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    10,      //speech
    10,      //alchemy
    10,      //illusion
    20,      //conjuration
    5,      //destruction
    10,      //restoration
    10,      //alteration
    5];     //enchanting
breton.baseAttributes = [120, 90, 90];
breton.bonusAttributes = [0, 0, 0];
breton.baseRegens = [1.15, 0, 1.55];
breton.baseCarryWeight = 90;
breton.baseResists = [10, 0, 0];

let dunmer = new Race('dunmer');
dunmer.baseSkills = [
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    15,      //onehanded
    5,      //marksman
    10,      //evasion
    10,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    10,      //alchemy
    10,      //illusion
    5,      //conjuration
    15,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting
dunmer.baseAttributes = [100, 100, 100];
dunmer.bonusAttributes = [0, 0, 0];
dunmer.baseRegens = [1.1, 0, 1.6];
dunmer.baseCarryWeight = 100;
dunmer.baseResists = [0, 0, 0];

let imperial = new Race('imperial');
imperial.baseSkills = [ 
    5,      //smithing
    10,      //heavyarmor
    10,     //block
    5,      //twohanded
    10,      //onehanded
    5,      //marksman
    5,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    15,      //speech
    5,      //alchemy
    5,      //illusion
    5,      //conjuration
    10,     //destruction
    15,      //restoration
    5,      //alteration
    5];     //enchanting

imperial.baseAttributes = [100, 110, 110];
imperial.bonusAttributes = [0, 0, 30];
imperial.baseRegens = [1.1, 0, 1.9];
imperial.baseCarryWeight = 110;
imperial.baseResists = [0, 0, 0];


let khajiit = new Race('khajiit');
khajiit.baseSkills = [
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    10,      //onehanded
    10,      //marksman
    5,      //evasion
    20,      //sneak
    10,      //lockpicking
    10,      //pickpocket
    5,      //speech
    10,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting

khajiit.baseAttributes = [90, 90, 120];
khajiit.bonusAttributes = [0, 0, 0];
khajiit.baseRegens = [1, 0, 1.65];
khajiit.baseCarryWeight = 100;
khajiit.baseResists = [0, 0, 0];

let nord = new Race('nord');
nord.baseSkills = [
    15,      //smithing
    10,      //heavyarmor
    10,      //block
    15,      //twohanded
    10,      //onehanded
    5,      //marksman
    10,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting

nord.baseAttributes = [80, 120, 120];
nord.bonusAttributes = [0, 0, 0];
nord.baseRegens = [1.05, 0, 1.65];
nord.baseCarryWeight = 115;
nord.baseResists = [0, 0, 0];

let orismer = new Race('orismer');
orismer.baseSkills = [
    15,      //smithing
    15,      //heavyarmor
    10,      //block
    10,      //twohanded
    10,      //onehanded
    5,      //marksman
    10,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting
    
orismer.baseAttributes = [60, 130, 110];
orismer.bonusAttributes = [0, 0, 0];
orismer.baseRegens = [1, 0, 1.7];
orismer.baseCarryWeight = 125;
orismer.baseResists = [5, 0, 0];

let redguard = new Race('redguard');
redguard.baseSkills = [
    10,      //smithing
    5,      //heavyarmor
    15,      //block
    5,      //twohanded
    15,      //onehanded
    10,      //marksman
    5,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    5,      //conjuration
    10,      //destruction
    5,      //restoration
    10,      //alteration
    5];     //enchanting

redguard.baseAttributes = [70, 110, 120];
redguard.bonusAttributes = [0, 0, 0];
redguard.baseRegens = [1, 0, 1.65];
redguard.baseCarryWeight = 105;
redguard.baseResists = [0, 75, 75];


let saxheel = new Race('saxheel');
saxheel.baseSkills = [ 
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    5,      //marksman
    15,      //evasion
    10,      //sneak
    15,      //lockpicking
    10,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    10,      //restoration
    10,      //alteration
    5];     //enchanting
    
saxheel.baseAttributes = [90, 105, 120];
saxheel.bonusAttributes = [0, 0, 0];
saxheel.baseRegens = [1.1, 0, 1.6];
saxheel.baseCarryWeight = 105;
saxheel.baseResists = [0, 75, 100];


let raceList = [altmer, bosmer, breton, dunmer, imperial, khajiit, nord, orismer, redguard, saxheel];
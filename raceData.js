class Race {
    constructor(name) {
        this.name = name;
        this.baseSkills = [];
        this.baseAttributes = []; //0 = magic, 1 = health, 2 = stamina
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
    15];     //enchanting

altmer.baseAttributes = [165, 140, 115];
altmer.bonusAttributes = [70, 0, 0];
altmer.baseRegens = [1.35, 0, 1.55];
altmer.baseCarryWeight = 95;
altmer.baseResists = [-20, 75, 0];

let argonian = new Race('argonian');
argonian.baseSkills = [ 
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    5,      //marksman
    15,      //evasion
    10,      //sneak
    15,      //lockpicking
    15,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    10,      //restoration
    10,      //alteration
    5];     //enchanting
    
argonian.baseAttributes = [125, 155, 155];	
argonian.bonusAttributes = [0, 0, 0];
argonian.baseRegens = [1.1, 0, 1.6];
argonian.baseCarryWeight = 105;
argonian.baseResists = [0, 75, 90];

let bosmer = new Race('bosmer');
bosmer.baseSkills = [
    5,      //smithing
    5,      //heavyarmor
    5,      //block
    5,      //twohanded
    5,      //onehanded
    20,      //marksman
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

bosmer.baseAttributes = [145, 140, 155];
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
    15,      //alteration
    5];     //enchanting
breton.baseAttributes = [155, 140, 125];
breton.bonusAttributes = [0, 0, 0];
breton.baseRegens = [1.2, 0, 1.55];
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
    5,      //alchemy
    10,      //illusion
    5,      //conjuration
    20,      //destruction
    5,      //restoration
    10,      //alteration
    5];     //enchanting
dunmer.baseAttributes = [135, 150, 135];
dunmer.bonusAttributes = [0, 0, 0];
dunmer.baseRegens = [1.1, 0, 1.6];
dunmer.baseCarryWeight = 100;
dunmer.baseResists = [0, 0, 0];

let imperial = new Race('imperial');
imperial.baseSkills = [ 
    5,      //smithing
    10,      //heavyarmor
    15,     //block
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

imperial.baseAttributes = [135, 160, 145];
imperial.bonusAttributes = [0, 0, 40];
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
    15,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    5,      //alteration
    5];     //enchanting

khajiit.baseAttributes = [125, 140, 155];
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
    15,      //onehanded
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

nord.baseAttributes = [100, 175, 160];
nord.bonusAttributes = [0, 0, 0];
nord.baseRegens = [1.00, 0, 1.65];
nord.baseCarryWeight = 115;
nord.baseResists = [0, 0, 0];

let orismer = new Race('orismer');
orismer.baseSkills = [
    10,      //smithing
    15,      //heavyarmor
    15,      //block
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
    
orismer.baseAttributes = [95, 180, 150];
orismer.bonusAttributes = [0, 0, 0];
orismer.baseRegens = [1, 0, 1.7];
orismer.baseCarryWeight = 125;
orismer.baseResists = [0, 0, 0];

let redguard = new Race('redguard');
redguard.baseSkills = [
    10,      //smithing
    5,      //heavyarmor
    10,      //block
    10,      //twohanded
    20,      //onehanded
    15,      //marksman
    5,      //evasion
    5,      //sneak
    5,      //lockpicking
    5,      //pickpocket
    5,      //speech
    5,      //alchemy
    5,      //illusion
    5,      //conjuration
    5,      //destruction
    5,      //restoration
    10,      //alteration
    5];     //enchanting

redguard.baseAttributes = [105, 160, 160];
redguard.bonusAttributes = [0, 0, 0];
redguard.baseRegens = [1, 0, 2.3];
redguard.baseCarryWeight = 105;
redguard.baseResists = [0, 75, 75];


let raceList = [altmer, argonian, bosmer, breton, dunmer, imperial, khajiit, nord, orismer, redguard];
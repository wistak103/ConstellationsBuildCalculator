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
    5,       //Alchemy
    10,       //Alteration
    5,       //Block
    10,       //Conjuration
    15,       //Destruction
    10,       //Enchanting
    5,       //Evasion
    5,       //Heavy Armor
    15,       //Illusion
    5,       //Lockpicking
    5,       //Marksman
    5,       //One-handed
    5,       //Pickpocket
    10,       //Restoration
    5,       //Smithing
    5,       //Sneak
    5,       //Speech
    5];       //Two-handed

altmer.baseAttributes = [130, 90, 80];
altmer.bonusAttributes = [50, 0, 0];
altmer.baseRegens = [1.25, 0, 1.55];
altmer.baseCarryWeight = 95;
altmer.baseResists = [0, 75, 0];

let bosmer = new Race('bosmer');
bosmer.baseSkills = [
    10,       //Alchemy
    5,       //Alteration
    5,       //Block
    5,       //Conjuration
    5,       //Destruction
    5,       //Enchanting
   15,       //Evasion
    5,       //Heavy Armor
    5,       //Illusion
   10,       //Lockpicking
   15,       //Marksman
    5,       //One-handed
   10,       //Pickpocket
    5,       //Restoration
    5,       //Smithing
   10,       //Sneak
    5,       //Speech
    5];       //Two-handed
bosmer.baseAttributes = [110, 90, 120];
bosmer.bonusAttributes = [0, 0, 0];
bosmer.baseRegens = [1.05, 0, 1.65];
bosmer.baseCarryWeight = 85;
bosmer.baseResists = [0, 75, 0];

let breton = new Race('breton');
breton.baseSkills = [
    10,       //Alchemy
    10,       //Alteration
     5,       //Block
    15,       //Conjuration
     5,       //Destruction
     5,       //Enchanting
     5,       //Evasion
     5,       //Heavy Armor
    10,       //Illusion
     5,       //Lockpicking
     5,       //Marksman
     5,       //One-handed
     5,       //Pickpocket
    10,       //Restoration
     5,       //Smithing
     5,       //Sneak
    10,       //Speech
     5];       //Two-handed
breton.baseAttributes = [120, 90, 90];
breton.bonusAttributes = [0, 0, 0];
breton.baseRegens = [1.15, 0, 1.55];
breton.baseCarryWeight = 90;
breton.baseResists = [10, 0, 0];

let dunmer = new Race('dunmer');
dunmer.baseSkills = [
    10,       //Alchemy
    5,       //Alteration
    5,       //Block
    5,       //Conjuration
   15,       //Destruction
    5,       //Enchanting
   10,       //Evasion
    5,       //Heavy Armor
   10,       //Illusion
    5,       //Lockpicking
    5,       //Marksman
   15,       //One-handed
    5,       //Pickpocket
    5,       //Restoration
    5,       //Smithing
   10,       //Sneak
    5,       //Speech
    5];       //Two-handed
dunmer.baseAttributes = [100, 100, 100];
dunmer.bonusAttributes = [0, 0, 0];
dunmer.baseRegens = [1.1, 0, 1.6];
dunmer.baseCarryWeight = 100;
dunmer.baseResists = [0, 0, 0];

let imperial = new Race('imperial');
imperial.baseSkills = [ 
    5,       //Alchemy
    5,       //Alteration
   10,       //Block
    5,       //Conjuration
   10,       //Destruction
    5,       //Enchanting
    5,       //Evasion
   10,       //Heavy Armor
    5,       //Illusion
    5,       //Lockpicking
    5,       //Marksman
   10,       //One-handed
    5,       //Pickpocket
   15,       //Restoration
    5,       //Smithing
    5,       //Sneak
   15,       //Speech
    5];       //Two-handed
imperial.baseAttributes = [100, 110, 110];
imperial.bonusAttributes = [0, 0, 30];
imperial.baseRegens = [1.1, 0, 1.9];
imperial.baseCarryWeight = 110;
imperial.baseResists = [0, 0, 0];


let khajiit = new Race('khajiit');
khajiit.baseSkills = [
    10,       //Alchemy
    5,       //Alteration
    5,       //Block
    5,       //Conjuration
    5,       //Destruction
    5,       //Enchanting
    5,       //Evasion
    5,       //Heavy Armor
    5,       //Illusion
   10,       //Lockpicking
   10,       //Marksman
   10,       //One-handed
   10,       //Pickpocket
    5,       //Restoration
    5,       //Smithing
   20,       //Sneak
    5,       //Speech
    5];       //Two-handed
khajiit.baseAttributes = [90, 90, 120];
khajiit.bonusAttributes = [0, 0, 0];
khajiit.baseRegens = [1, 0, 1.65];
khajiit.baseCarryWeight = 100;
khajiit.baseResists = [0, 0, 0];

let nord = new Race('nord');
nord.baseSkills = [
    5,       //Alchemy
    5,       //Alteration
    10,       //Block
    5,       //Conjuration
    5,       //Destruction
    5,       //Enchanting
    10,       //Evasion
    10,       //Heavy Armor
    5,       //Illusion
    5,       //Lockpicking
    5,       //Marksman
    10,       //One-handed
    5,       //Pickpocket
    5,       //Restoration
    15,       //Smithing
    5,       //Sneak
    5,       //Speech
    15];       //Two-handed
nord.baseAttributes = [80, 120, 120];
nord.bonusAttributes = [0, 0, 0];
nord.baseRegens = [1.05, 0, 1.65];
nord.baseCarryWeight = 115;
nord.baseResists = [0, 0, 0];

let orismer = new Race('orismer');
orismer.baseSkills = [
    5,       //Alchemy
    5,       //Alteration
    10,       //Block
    5,       //Conjuration
    5,       //Destruction
    5,       //Enchanting
    10,       //Evasion
    15,       //Heavy Armor
    5,       //Illusion
    5,       //Lockpicking
    5,       //Marksman
    10,       //One-handed
    5,       //Pickpocket
    5,       //Restoration
    15,       //Smithing
    5,       //Sneak
    5,       //Speech
    10];       //Two-handed
orismer.baseAttributes = [60, 130, 110];
orismer.bonusAttributes = [0, 0, 0];
orismer.baseRegens = [1, 0, 1.7];
orismer.baseCarryWeight = 125;
orismer.baseResists = [5, 0, 0];

let redguard = new Race('redguard');
redguard.baseSkills = [
    5,       //Alchemy
    10,       //Alteration
    15,       //Block
    5,       //Conjuration
    10,       //Destruction
    5,       //Enchanting
    5,       //Evasion
    5,       //Heavy Armor
    5,       //Illusion
    5,       //Lockpicking
    10,       //Marksman
    15,       //One-handed
    5,       //Pickpocket
    5,       //Restoration
    10,       //Smithing
    5,       //Sneak
    5,       //Speech
    5];       //Two-handed
redguard.baseAttributes = [70, 110, 120];
redguard.bonusAttributes = [0, 0, 0];
redguard.baseRegens = [1, 0, 1.65];
redguard.baseCarryWeight = 105;
redguard.baseResists = [0, 75, 75];


let saxheel = new Race('saxheel');
saxheel.baseSkills = [ 
    5,       //Alchemy
    10,       //Alteration
    5,       //Block
    5,       //Conjuration
    5,       //Destruction
    5,       //Enchanting
    15,       //Evasion
    5,       //Heavy Armor
    5,       //Illusion
    15,       //Lockpicking
    5,       //Marksman
    5,       //One-handed
    10,       //Pickpocket
    10,       //Restoration
    5,       //Smithing
    10,       //Sneak
    5,       //Speech
    5];       //Two-handed
saxheel.baseAttributes = [90, 105, 120];
saxheel.bonusAttributes = [0, 0, 0];
saxheel.baseRegens = [1.1, 0, 1.6];
saxheel.baseCarryWeight = 105;
saxheel.baseResists = [0, 75, 100];


let raceList = [altmer, bosmer, breton, dunmer, imperial, khajiit, nord, orismer, redguard, saxheel];
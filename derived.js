let magicResist = 0;
let magicRegen = 0;
let healthRegen = 0;
let staminaRegen = 0;
let moveSpeed = 0;
let carryWeight = 0;
let marksmanDmg = 0;
let oneHandedDmg = 0;
let twoHandedDmg = 0;
let unarmedDmg = 0;
let diseaseResist = 0;
let poisonResist = 0;

let derivedAttributes = document.getElementsByClassName("derived-value");

function updateMagickaRegen() {
    let baseMagicRegen = race.baseRegens[0];
    

    let bonusRegen = 8 * (Math.sqrt(baseAttributes[0]-100));
    if(isNaN(bonusRegen)==true) {
        bonusRegen = 0;
    }
    else {
        bonusRegen = Math.round(bonusRegen * 100)/100;
        bonusRegen = 1 + bonusRegen/100;
    }

    totalRegen = baseMagicRegen * bonusRegen;

    if (stoneIndex == 1) {
        totalRegen = totalRegen + (baseMagicRegen*2);
    }
    if(stoneIndex == 2) {
        totalRegen = 0;
    }

    totalRegen = Math.round(totalRegen*100)/100;
    derivedAttributes[0].textContent = totalRegen + "%";
};

function updateStaminaRegen() {
    let baseStaminaRegen = race.baseRegens[2];
    

    let bonusRegen = 8 * (Math.sqrt(baseAttributes[2]-100));

    if(isNaN(bonusRegen)==true || bonusRegen < 0) {
        bonusRegen = 1;
    }   
    else {
        bonusRegen = Math.round(bonusRegen * 100)/100;
        bonusRegen = 1 + bonusRegen/100;
    }

    

    totalRegen = baseStaminaRegen * bonusRegen;
    if (stoneIndex == 9) {
        totalRegen = totalRegen + (baseStaminaRegen*0.5);
    }

    totalRegen = Math.round(totalRegen*100)/100;



    derivedAttributes[1].textContent = totalRegen + "%";
}

function updateCarryWeight() {
    //z = (4H + S) / 5
    //4x sqrt{Z - 110}

    
    

    let z = ((4*baseAttributes[1]) + baseAttributes[2])/5;
    let bonusCW = 4*(Math.sqrt(z-110));

    if (stoneIndex == 8) {
        if(isNaN(bonusCW)==true || bonusCW < 0) {
            bonusCW = 20;
        } else {
            bonusCW += 20;   
        }
    };

    bonusCW = Math.round(bonusCW);

    

    if (bonusCW > 0) {
        derivedAttributes[2].textContent = race.baseCarryWeight + bonusCW;
    } 
    
    else {derivedAttributes[2].textContent = race.baseCarryWeight};
}

function updateMovementSpeed(){
    //(3/4)x sqrt{Z - 125}
    //z = (H + 4S) / 5

    
    

    let z = (baseAttributes[1] + (4*baseAttributes[2]))/5;
    let bonusSpeed = (3/4) * (Math.sqrt(z-125));
    if(isNaN(bonusSpeed)==true || bonusSpeed < 0) {
        bonusSpeed = 0;
    }   

    bonusSpeed = Math.round(bonusSpeed*100)/100;

    derivedAttributes[3].textContent = "+" + bonusSpeed + "%";
}

function updateMarksman() {
    //4x sqrt{Z - 150}	
    //z = (H + 4S) / 5

    
    

    let z = (baseAttributes[1] + (4*baseAttributes[2]))/5;
    let bonusDmg = 4*(Math.sqrt(z-150));


    if(isNaN(bonusDmg)==true || bonusDmg < 0) {
        bonusDmg = 0;
    }   
    else {
        bonusDmg = Math.round(bonusDmg * 100)/100;
    }
    derivedAttributes[4].textContent = "+" + bonusDmg + "%";
}

function updateOneHanded() {
    //	4x sqrt{Z - 150}	(H + S)/2

    
    

    let z = (baseAttributes[1] + baseAttributes[2])/2;
    let bonusDmg = 4*(Math.sqrt(z-150));

    if(isNaN(bonusDmg)==true || bonusDmg < 0) {
        bonusDmg = 0;
    }   
    else {
        bonusDmg = Math.round(bonusDmg * 100)/100;
    }
    derivedAttributes[5].textContent = "+" + bonusDmg + "%";
}

function updateTwoHanded() {
    //4x sqrt{Z - 150}	(4H + S) / 5	
    
    

    let z = ((4*baseAttributes[1]) + baseAttributes[2])/5;
    let bonusDmg = 4*(Math.sqrt(z-150));

    if(isNaN(bonusDmg)==true || bonusDmg < 0) {
        bonusDmg = 0;
    }   
    else {
        bonusDmg = Math.round(bonusDmg * 100)/100;
    }
    derivedAttributes[6].textContent = "+" + bonusDmg + "%";
}

function updateUnarmed() {
        //4x sqrt{Z - 110}	(H + S) / 2	
        
        
    
        let z = (baseAttributes[1] + baseAttributes[2])/2;
        let bonusDmg = 4*(Math.sqrt(z-110));
    
        if(isNaN(bonusDmg)==true || bonusDmg < 0) {
            bonusDmg = 0;
        }   
        else {
            bonusDmg = Math.round(bonusDmg * 100)/100;
        }
        derivedAttributes[7].textContent = "+" + bonusDmg;
}

function updateMagicResist() {
    
    let baseResist = race.baseResists[0];

    magicResist = Math.sqrt(baseAttributes[0]-150);
    if(isNaN(magicResist)==true) {
        magicResist = 0;
    }

    else {
        magicResist = Math.round(magicResist * 100)/100;
    }

    let totalResist = baseResist + magicResist;

    if(stoneIndex == 1) {
        totalResist -= 25;
    }
    if(stoneIndex == 10) {
        totalResist += 15;
    }
    derivedAttributes[8].textContent = totalResist + "%";
};

function updateDiseaseResist() {
    //	4x sqrt{Z - 100}	z = (2H + 3S) / 5
    
    
    let baseResist = race.baseResists[1];


    let z = ((2*baseAttributes[1]) + (3*baseAttributes[2]))/5;
    let bonusResist = 4*(Math.sqrt(z-100));

    if(isNaN(bonusResist)==true || bonusResist < 0) {
        bonusResist = 0;
    }   
    else {
        bonusResist = Math.round(bonusResist * 100)/100;
    }
    
    let totalResist = baseResist + bonusResist;
    derivedAttributes[9].textContent = totalResist + "%";
}

function updatePoisonResist() {
        //	4x sqrt{Z - 140}	z = (3H + 2S) / 5
        
        
        let baseResist = race.baseResists[2];
    
        let z = ((3*baseAttributes[1]) + (2*baseAttributes[2]))/5;
        let bonusResist = 4*(Math.sqrt(z-140));
		
		if (stoneIndex == 13) {
			if(isNaN(bonusResist)==true || bonusResist < 0) {
				bonusResist = 50;
			}
			else {
				bonusResist += 50;
			}
		}
        if(isNaN(bonusResist)==true || bonusResist < 0) {
            bonusResist = 0;
        }   
        else {
            bonusResist = Math.round(bonusResist * 100)/100;
        }

        let totalResist = baseResist + bonusResist;
        derivedAttributes[10].textContent = totalResist + "%";
}

function updateDerivedValues() {
    updateMagickaRegen();
    updateStaminaRegen();
    updateCarryWeight();
    updateMovementSpeed();
    updateMarksman();
    updateOneHanded();
    updateTwoHanded();
    updateUnarmed()
    updateMagicResist();
    updateDiseaseResist();
    updatePoisonResist();
}
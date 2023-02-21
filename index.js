let activeSkillTree = alchemy;
let svgBox = document.getElementById("tree-viewer-svg");
let skillsIconsSVG = document.getElementsByClassName("skill-icon");
let skillsIconsLevel = document.getElementsByClassName("skill-level");
let skillsIconLabels = document.getElementsByClassName("skill-text");
let buildLevel = 1;
let attributeTotals = [100, 100, 100]; //Magicka, Health, Stamina
let attributeIncreases = [0, 0, 0]; //Magicka, Health, Stamina
let attributeModifiers = [0, 0, 0]; //Magicka, Health, Stamina

let settings = [{costTo25: 3, costTo50: 7, costTo75: 13, costTo100: 25,
    cap: 5, base: 12, mult: 3}];
let spentSP = 0;
let unspentSP = 0;
let spentPerks = 0;
let unspentPerks = 0;
let totalAttributePoints = 0;
let unspentAttributes = 0;
let spentAttributes = 0;
let usedSkills = [];
let race = altmer;
let stoneIndex = document.getElementById("stone-select").value;
let professionIndex = document.getElementById("profession-select").value;
let professionSkills = [];
let ogmah = document.getElementById("ogmah-select").value;

function addChainArrays() {
    //run through every skill tree
    for (i = 0; i < skillsList.length; i++) {
        //run through every perk in skill tree
        for (j = 0; j < skillsList[i].perks.length; j++) {
            let perk = skillsList[i].perks[j];
            //chains are always 2 or 3 ranks
            if (perk.chain == 2) {
                let chainPerks = [];
                //add perk ranks in correct order to each perk in chain. There's probably a better way of doing this...
                if (perk.rank == 1) { 
                    perk.chainPerks.push(perk);
                    perk.chainPerks.push(skillsList[i].perks[j+1]);
                };
                if (perk.rank == 2) { 
                    perk.chainPerks.push(skillsList[i].perks[j-1]);
                    perk.chainPerks.push(perk);
                }
            }

            if (perk.chain == 3) {
                let chainPerks = [];
                //add perk ranks in correct order to each perk in chain. There's probably a better way of doing this...
                if (perk.rank == 1) { 
                    perk.chainPerks.push(perk);
                    perk.chainPerks.push(skillsList[i].perks[j+1]);
                    perk.chainPerks.push(skillsList[i].perks[j+2]);
                };
                if (perk.rank == 2) { 
                    perk.chainPerks.push(skillsList[i].perks[j-1]);
                    perk.chainPerks.push(perk);
                    perk.chainPerks.push(skillsList[i].perks[j+1]);
                }
                if (perk.rank == 3) {
                    perk.chainPerks.push(skillsList[i].perks[j-2]);
                    perk.chainPerks.push(skillsList[i].perks[j-1]);
                    perk.chainPerks.push(perk);
                }
            }
        }
    }
}
function drawStar(xPos, yPos, id) {
    let svgBoxRect = svgBox.getBoundingClientRect();

    let points=[21.47, 17.81, 30, 15, 21.47, 12.19, 22.98, 7.02, 17.81, 8.53, 15, 0, 12.19, 8.53, 7.02, 7.02, 8.53, 12.19, 0, 15, 8.53, 17.81, 7.02, 22.98, 12.19, 21.47, 15, 30, 17.81, 21.47, 22.98, 22.98, 21.47, 17.81];

    for (i = 0; i < points.length; i++) {
        if(i == 0 || i%2 == 0){
            points[i] = points[i]+xPos-15;
            points[i+1] = points[i+1]+yPos-15;
        }
    }

    let string = points.toString();
    string = string.replace(/,/g,' ');
    let newStar = newPerkStar(string, id);
    return newStar;
}

function newPerkStar (string, id) {
    var newStar = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    newStar.setAttribute("points", string);
    newStar.setAttribute("fill", "#000");
    newStar.setAttribute("class", "perk-circle");
    newStar.setAttribute("id", id);
    svgBox.appendChild(newStar);
    return newStar;

}

function newPerkLine (svgBox, x1, y1, x2, y2, strokeWidth) {
    var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", "rgba(93, 67, 50, 0.2)");
    newLine.setAttribute("stroke-width", strokeWidth);
    svgBox.appendChild(newLine);
    return newLine;
}

function newPerkCircle(svgBox, r, xPos, yPos, perkNum, id) {
    var newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("r", r);
    newCircle.setAttribute("cx", xPos);
    newCircle.setAttribute("cy", yPos);
    newCircle.setAttribute("id", id);
    newCircle.setAttribute("class", "perk-circle");
    svgBox.appendChild(newCircle);
    return newCircle;
}

function newPerkLabel (x, y, name, id) {
    var newLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    newLabel.setAttribute("font-size", "0.8em");
    newLabel.setAttribute("x", x);
    newLabel.setAttribute("y", y+25);
    newLabel.setAttribute('fill', '#000');
    newLabel.setAttribute("text-anchor", "middle");
    newLabel.setAttribute("id", id);
    newLabel.textContent = name;
    svgBox.appendChild(newLabel);
    return newLabel;
}
function newPerkLabelLine (x, name, parent) {
    var newLabel = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    newLabel.setAttribute("x", x);
    newLabel.setAttribute("dy", '1.2em');
    newLabel.setAttribute('fill', '#000');
    newLabel.setAttribute("text-anchor", "middle");
    newLabel.textContent = name;
    parent.appendChild(newLabel);
    return newLabel;
}

//CREATE SKILL TREES

function clearSkillTree(svgToClear) {
    while (svgToClear.lastChild) {
        svgToClear.removeChild(svgToClear.lastChild);
    }
}

function drawSkillTree() {
    clearSkillTree(svgBox);
    //Get SVG area
    let svgBoxRect = svgBox.getBoundingClientRect();
    
    //Run through each perk in skillTree
    for (let i = 0; i < activeSkillTree.perks.length; i++) {

        let perk  = activeSkillTree.perks[i];
        let curXPos = perk.xPos / 100 * svgBoxRect.width;
        let curYPos = perk.yPos / 100 * svgBoxRect.height;

        //Draw lines first, so circles draw on top
        //Only draw lines for 1 perk from each rank, we'll use the last as it's easier to filter

        if(perk.preReqs.length != 0) {
            //loop through required perks
            for (let j = 0; j < perk.preReqs.length; j++) {
                let preReqsNum = perk.preReqs[j];
                let preReqPerk = activeSkillTree.perks[preReqsNum]; //This is the required perk for current perk

                let preXPos = preReqPerk.xPos / 100 * svgBoxRect.width;
                let preYPos = preReqPerk.yPos / 100 * svgBoxRect.height;

                let newLine = newPerkLine(svgBox, curXPos, curYPos, preXPos, preYPos, 4);
                perk.lines.push(newLine);
            }
        }
    }

    for (let i = 0; i < activeSkillTree.perks.length; i++) {

        let perk  = activeSkillTree.perks[i];
        let curXPos = perk.xPos / 100 * svgBoxRect.width;
        let curYPos = perk.yPos / 100 * svgBoxRect.height;
        //Filter out previous ranks of perks, drawing circle for only final rank
        //We'll later check if previous ranks have been added when clicking on perk
        //and add the ranks one at a time.

        if (perk.chain == 0 || perk.rank == 1) {      
            let perkName = perk.name;
            let id = perkName.replace(/\s+/g, '') + '-circle';
            id = id.replace("<br>",'');
            newCircle = drawStar(curXPos, curYPos, id);
            newCircle.setAttribute("onclick", "perkClick(this,"+i+")");
            newCircle.setAttribute("onmouseenter", "perkMouseEnter("+i+")");
            newCircle.setAttribute("onmouseleave", "perkMouseExit()");
            perk.circle = newCircle;

            /*let newCircle = newPerkCircle(svgBox, 10, curXPos, curYPos, i, id);
            newCircle.setAttribute("onclick", "perkClick(this,"+i+")");
            newCircle.setAttribute("onmouseenter", "perkMouseEnter("+i+")");
            newCircle.setAttribute("onmouseleave", "perkMouseExit()");
            perk.circle = newCircle;*/
        }

        //Create perk labels
        let perkName = perk.name;
        let id = perkName.replace(/\s+/g, '') + '-label';
        id = id.replace("<br>",'');
        if (perk.chain == 0 || perk.rank == 1) {

            if (perkName.indexOf('<br>') != -1) {
                let perkNameLines = perkName.split('<br>');
                let newLabel = newPerkLabel(curXPos, curYPos, perkNameLines[0], id);
                perk.labels.push(newLabel);
                let parent = document.getElementById(id);
                let newLabelLine = newPerkLabelLine(curXPos, perkNameLines[1], parent);
                perk.labels.push(newLabelLine);
    
            } else {
                let newLabel = newPerkLabel(curXPos, curYPos, perkName, id); 
                perk.labels.push(newLabel);
            }
    
            //Add ranks to labels
            if (perk.chain != 0) {
                let maxRank = perk.chain;
                let rankText = "0/"+maxRank;
                let parent = document.getElementById(id);
                let newLabelLine = newPerkLabelLine(curXPos, rankText, parent); 
                perk.labels.push(newLabelLine);
            }
        }
        if (activeSkillTree.takenPerks.includes(perk)) {
            if (perk.chain == 0 || perk.rank == 1){ 
                takePerkCSS(perk);
            }
        }
    }
    updatePerkRankLabels();
    updateSkillLists();
    updateLevel();
}

function createSkillIcons() {
    for (i = 0; i < skillsIconsSVG.length; i++) {
        drawSkillIcons(skillsIconsSVG[i], i);
    }
}

function drawSkillIcons(skillsSvgBox, i) {
    //Get SVG area
    let svgBoxRect = skillsSvgBox.getBoundingClientRect();
    let skillTree = skillsList[i];


    //Run through each perk in skillTree
    for (let i = 0; i < skillTree.perks.length; i++) {

        let perk  = skillTree.perks[i];
        let curXPos = perk.xPos / 100 * svgBoxRect.width;
        let curYPos = perk.yPos / 100 * svgBoxRect.height;

        //Draw lines first, so circles draw on top
        //Only draw lines for 1 perk from each rank, we'll use the last as it's easier to filter

        if(perk.preReqs.length != 0) {
            //loop through required perks
            for (let j = 0; j < perk.preReqs.length; j++) {
                let preReqsNum = perk.preReqs[j];
                let preReqPerk = skillTree.perks[preReqsNum]; //This is the required perk for current perk

                let preXPos = preReqPerk.xPos / 100 * svgBoxRect.width;
                let preYPos = preReqPerk.yPos / 100 * svgBoxRect.height;

                let newLine = newPerkLine(skillsSvgBox, curXPos, curYPos, preXPos, preYPos, 2);
                perk.lines.push(newLine);
            }
        }
    }

    for (let p = 0; p < skillTree.perks.length; p++) {

        let perk  = skillTree.perks[p];
        let curXPos = perk.xPos / 100 * svgBoxRect.width;
        let curYPos = perk.yPos / 100 * svgBoxRect.height;
        //Filter out previous ranks of perks, drawing circle for only final rank
        //We'll later check if previous ranks have been added when clicking on perk
        //and add the ranks one at a time.

        if (perk.chain == 0 || perk.rank == 1) {      
            let perkName = perk.name;
            let id = perkName.replace(/\s+/g, '') + '-circle-skills';
            id = id.replace("<br>",'');
            let newCircle = newPerkCircle(skillsSvgBox, 3, curXPos, curYPos, p, id);
            perk.iconCircle = newCircle;
        }

        if (skillTree.takenPerks.includes(perk)) {
            if (perk.chain == 0 || perk.rank == 1){ 
                takePerkCSS(perk);
            }
        }
    }
}

function skillsClick(skillNum) {
    activeSkillTree = skillsList[skillNum];
    drawSkillTree();
}

function perkClick(pCircle, perkNum) {
    let clickedPerk = activeSkillTree.perks[perkNum];
    //check if perk is already taken
    if (pCircle.classList.contains('takenPerk')) {
        //check if perk is a chain
        if (clickedPerk.chain == 0) {
            removePerk(clickedPerk);
        }
        else { //perk is in chain
            //check if rank 2 is taken
            let perkRank2 = activeSkillTree.perks[perkNum+1];
            if (clickedPerk.chain == 2) {
                if (activeSkillTree.takenPerks.includes(perkRank2)) {
                    removePerkRank(perkRank2);
                    removePerk(clickedPerk);
                    let i = clickedPerk.labels.length - 1;
                    clickedPerk.labels[i].textContent = "0/" + perkRank2.chain;
                }

                else { //add rank 2
                    let i = clickedPerk.labels.length - 1;
                    clickedPerk.labels[i].textContent = perkRank2.rank + "/" + perkRank2.chain;
                    activeSkillTree.takenPerks.push(perkRank2);
                }
            }
            if (clickedPerk.chain == 3) { 
                let perkRank3 = activeSkillTree.perks[perkNum+2]
                //is rank 3 taken? then remove all ranks
                if (activeSkillTree.takenPerks.includes(perkRank3)) {
                    removePerkRank(perkRank3);
                    removePerkRank(perkRank2);
                    removePerk(clickedPerk);
                    let i = clickedPerk.labels.length - 1;
                    clickedPerk.labels[i].textContent = "0/" + perkRank2.chain;
                }

                //Rank 3 is not taken, is rank 2 taken?
                else if (activeSkillTree.takenPerks.includes(perkRank2)) {
                    //yes, add rank 3
                    let i = clickedPerk.labels.length - 1;
                    clickedPerk.labels[i].textContent = perkRank3.rank + "/" + perkRank3.chain;
                    activeSkillTree.takenPerks.push(perkRank3);
                } 
                //Rank 3 and 2 are not taken, so add rank 2
                else {
                    let i = clickedPerk.labels.length - 1;
                    clickedPerk.labels[i].textContent = perkRank2.rank + "/" + perkRank2.chain;
                    activeSkillTree.takenPerks.push(perkRank2);
                }
            };
            

        }
        //then, remove any perks dependent on this perk
    } else{
        //Check if required perk(s) taken
        //if yes, take new perk
        //if no, take required perk(s) then this one.
        let targetPerk = clickedPerk;

        if (targetPerk.preReqs.length != 0) { //perk has requirements
            //Special rule for perks that have OR requirements, rather than AND
            if( targetPerk.choiceNeeded != null) {
                let requirementMet = false;
                for (p = 0; p < targetPerk.preReqs.length; p++) {
                    if (activeSkillTree.takenPerks.includes(activeSkillTree.perks[targetPerk.preReqs[p]])){ requirementMet = true};
                }
                if (requirementMet == true) {
                    takePerk(targetPerk);
                } else {
                    let perk1Name = activeSkillTree.perks[targetPerk.preReqs[0]].name;
                    let perk2Name = activeSkillTree.perks[targetPerk.preReqs[1]].name;
                    perk1Name = perk1Name.replace("<br>",' '); perk2Name = perk2Name.replace("<br>",' ');

                    let alertContainer = document.getElementById("alert");
                    let alertText = document.getElementById("alert-box-text");
                    alertText.textContent= "This perk requires " + perk1Name + " or " + perk2Name + ". Please select one before taking this perk.";

                    alertContainer.style.display = "flex";
                }               
                
            }
            //special rule for perks that can't be taken at the same time as another perk 
            else if (targetPerk.thisOr != null) {
                if (checkExclusivity(targetPerk) == true) {
                    takeRequiredPerks(targetPerk);
                } else {
                    let perkName = targetPerk.name.replace("<br>",' ');
                    let otherPerkName = activeSkillTree.perks[targetPerk.thisOr[0]].name.replace("<br>",' ');

                    let alertContainer = document.getElementById("alert");
                    let alertText = document.getElementById("alert-box-text");
                    alertText.textContent= perkName +" cannot be taken as " + otherPerkName + " has already been taken.";

                    alertContainer.style.display = "flex";
                }
            }
            else {
                takeRequiredPerks(targetPerk);
            }
        
        } 
        else 
            { //take perk if it has no requirements
                if (checkExclusivity(targetPerk) == true) {
                    takePerk(targetPerk);
                }
                else {
                    let perkName = targetPerk.name.replace("<br>",' ');
                    let otherPerkName = activeSkillTree.perks[targetPerk.thisOr[0]].name.replace("<br>",' ');
                    let alertContainer = document.getElementById("alert");
                    let alertText = document.getElementById("alert-box-text");
                    alertText.textContent= perkName +" cannot be taken as " + otherPerkName + " has already been taken.";

                    alertContainer.style.display = "flex";
                }
                
            }
        }
    updateSkillLists();
    saveData();
    perkMouseEnter(perkNum);
}

function checkExclusivity(targetPerk) {
    let canTake = true;
    if (targetPerk.thisOr != null) {
        for (i = 0; i < targetPerk.thisOr.length; i++) {
            let perk = activeSkillTree.perks[targetPerk.thisOr[i]];
            if (activeSkillTree.takenPerks.includes(perk)) {
                canTake = false;
            }
        }
    }    
    return canTake;
}

function takeRequiredPerks(targetPerk) {
    let requiredPerks = [];
    //add required perks of target perk to requiredPerks array
    for (p = 0; p < targetPerk.preReqs.length; p++) {
        let perkToAdd = activeSkillTree.perks[targetPerk.preReqs[p]];
        requiredPerks.push(perkToAdd);
    }
    //loop through requiredPerks, adding to it as we go
    for (i = 0; i < requiredPerks.length; i++) {
        let perk = requiredPerks[i];
        //Get required perks of each perk in requiredPerks, and add them to requiredPerks if not already
        if (perk.preReqs.length != 0) {
            for (j = 0; j < perk.preReqs.length; j++) {

                let perkToAdd2 = activeSkillTree.perks[perk.preReqs[j]];

                if (!requiredPerks.includes(perkToAdd2)) 
                {
                    requiredPerks.push(perkToAdd2);
                }
            }
        }

        if (i > 50) { break } //failsafe to prevent infinite loop
    }
    for (r = 0; r < requiredPerks.length; r++) {
        takePerk(requiredPerks[r]);
    }

    takePerk(targetPerk);
}

function takePerk(perk) {
    if (!activeSkillTree.takenPerks.includes(perk)) {
        activeSkillTree.takenPerks.push(perk);
        takePerkCSS(perk);
    }
    updatePerkRankLabels();
}

function takePerkCSS(perk) {
    //no chain perks
    if (perk.chain == 0 || perk.rank == 1) {
        //update skill icon circle
        perk.iconCircle.classList.add("takenPerk")
        //update all perk lines
        for (l = 0; l < perk.lines.length; l++) {
            perk.lines[l].classList.add("takenPerkLine");
        }
        //check if perk is in active skill tree or not
        if (activeSkillTree.perks.includes(perk)) {
            //add taken class to circle
            perk.circle.classList.add("takenPerk");

            //update labels
            for (a = 0; a < perk.labels.length; a++) {
                perk.labels[a].classList.add('takenPerk');
            };

            if (perk.chain != 0 && perk.rank == 1) {
                let r = perk.labels.length - 1;
                perk.labels[r].textContent = perk.rank + "/" + perk.chain;
            };
        };
    };
}

function removePerk(perk) {
    removePerk2(perk);
    removeLoosePerks(activeSkillTree);
    updatePerkRankLabels();
}

function removePerk2(perk) {
    let skillTree = perk.skill;
    for (i = 0; i < skillTree.takenPerks.length; i++) {
        if (skillTree.takenPerks[i] == perk) {
            skillTree.takenPerks.splice(i, 1);
        }
    }

    if (skillTree == activeSkillTree) {
        perk.circle.classList.remove('takenPerk');
        for (j = 0; j < perk.labels.length; j++) {
            perk.labels[j].classList.remove('takenPerk');
            perk.labels[j].setAttribute("fill", "#000");
        }
    }
    
    perk.iconCircle.classList.remove('takenPerk');

    for (j = 0; j < perk.lines.length; j++) {
        perk.lines[j].classList.remove('takenPerkLine');
        perk.lines[j].setAttribute("stroke", "rgba(93, 67, 50, 0.25)");
    }
    
}

function removeLoosePerks(skill) {
    //Run through all taken perks of active skill list
    let perksToRemove = []
    for (h = 0; h < skill.takenPerks.length; h++){
        
        let requiredPerks = [];
        let targetPerk = skill.takenPerks[h];

        if (targetPerk.preReqs.length != 0) { //perk has requirements

                //add required perks of target perk to requiredPerks array
                for (p = 0; p < targetPerk.preReqs.length; p++) {
                    let perkToAdd = skill.perks[targetPerk.preReqs[p]];
                    requiredPerks.push(perkToAdd);
                }
                //loop through requiredPerks, adding to it as we go
                for (i = 0; i < requiredPerks.length; i++) {
                    let perk = requiredPerks[i];
                    //Get required perks of each perk in requiredPerks, and add them to requiredPerks if not already
                    if (perk.preReqs.length != 0) {
                        for (j = 0; j < perk.preReqs.length; j++) {

                            let perkToAdd2 = skill.perks[perk.preReqs[j]];

                            if (!requiredPerks.includes(perkToAdd2)) 
                            {
                                requiredPerks.push(perkToAdd2);
                            }
                        }
                    }

                    if (i > 50) { break } //failsafe to prevent infinite loop
                }
            for (r = 0; r < requiredPerks.length; r++) {
                if (!skill.takenPerks.includes(requiredPerks[r])) {
                    perksToRemove.push(targetPerk);
                }
            }        
        } 
    }

    perksToRemove.forEach(perkToRemove => {
        if(perkToRemove.chain == 0 || perkToRemove.rank == 1) {
            removePerk2(perkToRemove);
        } else {
            removePerkRank(perkToRemove);
        }

    });
}

function removePerkRank(perk) {
    let skillTree = perk.skill;
    for (i = 0; i < skillTree.takenPerks.length; i++) {
        if (skillTree.takenPerks[i] == perk) {
            skillTree.takenPerks.splice(i, 1);
        }
    }
}

function updatePerkRankLabels() {
    //for every perk in active skill tree
    for (i = 0; i < activeSkillTree.perks.length; i++) {
        let perk = activeSkillTree.perks[i];
        //if first rank in chain
        if (perk.rank == 1) {
            //count how many ranks are taken
            let r = 0;
            for (j = 0; j < perk.chainPerks.length; j++) {
                if (activeSkillTree.takenPerks.includes(perk.chainPerks[j])) {
                    r++;
                }
            }
            //update label
            let x = perk.labels.length - 1;
            perk.labels[x].textContent = r +"/"+perk.chain;
        }

    }
}

function customSkillLevel() {
    let levelDisplay = document.getElementById("skill-level-total");
    if (levelDisplay.value > 100) { levelDisplay.value = 100};
    activeSkillTree.customLevel = levelDisplay.value;
    updateSkillLists();
}

//UPDATE FUNCTIONS

function updateSkillLists() {
    for (i = 0; i < skillsList.length; i++) {
        let skill = skillsList[i];
        let highestSkillReq = 0;

        //Search through perks for the highest skill level required
        for (j = 0; j < skill.takenPerks.length; j++) {
            if (skill.takenPerks[j].skillReq > highestSkillReq) {
                highestSkillReq = skill.takenPerks[j].skillReq;
            }
        };   

        //Check if skill level required is higher than the base level
        if (highestSkillReq > skill.levelBase) {
            skill.levelTotal = highestSkillReq;
        } 
        else {
            skill.levelTotal = skill.levelBase; //if not, use base skill level
        };

        if (skill.customLevel < skill.levelTotal) {
            skill.customLevel = 0;
        };
    }

    updateActiveSkillInfo();
    updateLevel();
    updateSkillLevels();
}

function updateActiveSkillInfo() {
    let levelDisplay = document.getElementById("skill-level-total");
      levelDisplay.value = activeSkillTree.levelTotal;
    if (activeSkillTree.customLevel > activeSkillTree.levelTotal) {
        levelDisplay.value = activeSkillTree.customLevel;
    }


    let skillTitle = document.getElementById("skill-title");
    let skillName = activeSkillTree.name;

    if(skillName == "heavyarmor") {
        skillName = "heavy&nbsp;armor";
    }

    if(skillName == "onehanded") {
        skillName = "one&nbsp;handed";
    }

    if(skillName == "twohanded") {
        skillName = "two handed";
    }

    skillTitle.innerHTML = skillName;
}

function updateLevel() {
    let levelText = document.getElementById("build-info-level-value");

    let levelForPerks = 1;
    let levelForFeats = 0;
    let levelForSkillUps = 0; //skill increases are capped at 5 per level up by default
    let spentPerks = 0;

    let bonusPerks = 0;
    if (ogmah != 0) {
        bonusPerks = 7;
    }

    for (i = 0; i < skillsList.length; i++) {
        let skill = skillsList[i];

        spentPerks = spentPerks + skill.takenPerks.length;

        //check if levelups are enough for 5 skill-ups per level
        let skillLevel = skill.levelTotal; 
        if (skill.customLevel > skillLevel) {
            skillLevel = skill.customLevel;
        }

        if (settings.cap > 0) {
            let skillUps = skillLevel - skill.levelBase; 
            let levelForSkill = (skillUps / settings.cap) + 1;
            levelForSkill = Math.ceil(levelForSkill);
    
            if (levelForSkill > levelForSkillUps) {
                levelForSkillUps = levelForSkill;
            }
        }

        for (j = 0; j < skill.takenPerks.length; j++) {
            let thisPerk = skill.takenPerks[j]; 
            if (thisPerk.levelReq != null && thisPerk.levelReq > levelForFeats) {
                levelForFeats = thisPerk.levelReq;
            }
        }
    }

    if (spentPerks > 3) {
        levelForPerks = spentPerks - 2 - bonusPerks;
    }

    let levelForSP = calculateLevelFromSkillPoints();

    let level = 1;

    if (levelForPerks > levelForSP) {
        level = levelForPerks;
    } else {
        level = levelForSP;
    }
    if (levelForFeats > level) {
        level = levelForFeats;
    }
    if (levelForSkillUps > level) {
        level = levelForSkillUps;
    }

    buildLevel = level;
    levelText.textContent = " "+level;
    totalAttributePoints = level - 1;
    unspentPerks = (level + 2) + bonusPerks - spentPerks;
    unspentSP = levelToSkillPoints(level) - spentSP;
    
    let unspentPerksText = document.getElementById("unspent-perks-number");
    let unspentSPtext = document.getElementById("unspent-skillpoints-number");
    unspentPerksText.textContent = unspentPerks;
    unspentSPtext.textContent = unspentSP;


    updateAttributes();
}

function calculateSkillPointsNeeded() {
    let skillPoints = 0;

    for (j = 0; j < skillsList.length; j++) {
        let skillLevel = skillsList[j].levelTotal;
        // if user has input a custom level, we need to check which is higher
        if (skillLevel < skillsList[j].customLevel) {
            skillLevel = skillsList[j].customLevel;
        }

        let skillLevelBase = skillsList[j].levelBase;
    
        if (skillLevel != skillLevelBase) {
            for (i = skillLevelBase; i < skillLevel; i++) {
                if (i >= 75) { 
                    skillPoints += settings.costTo100;
                }
                else if (i >= 50) { 
                    skillPoints += settings.costTo75;
                }
                else if (i >= 25) { 
                    skillPoints += settings.costTo50;
                }
                else { 
                    skillPoints += settings.costTo25;
                };
            }
        }    
    }
    spentSP = skillPoints;
    return skillPoints;
}

function calculateLevelFromSkillPoints() {
    let skillPointsRequired = calculateSkillPointsNeeded(); 
    let level = 1;

    if (skillPointsRequired > 0) {
        level = 2;
        let skillPoints = 0;
    
        for (i = 0; skillPoints <= skillPointsRequired; i++) {
            skillPoints += 12 + (level*3);

            level++;
        }

        level--; //fix level being 1 more than needed
    }
    
    return level; 
}

function levelToSkillPoints(level) {
    let skillPoints = 0
    for (i = 2; i <= level; i++) {
        skillPoints += 12 + (i*3);
    };
    return skillPoints;
}

function increaseAttribute(i) {
    if (unspentAttributes != 0) {
        attributeIncreases[i]++;
        spentAttributes++;
        updateAttributes();
    }
}
function decreaseAttribute(i) {
    if (attributeIncreases[i] != 0) {
        attributeIncreases[i]--;
        spentAttributes--;
        updateAttributes();
    }
}

function updateAttributes() {
    unspentAttributes = totalAttributePoints - spentAttributes;
    let unspentAttributesText = document.getElementById("attribute-points-unspent");
    unspentAttributesText.textContent = unspentAttributes;

    let magickaTotal = document.getElementById("magicka-total");
    let healthTotal = document.getElementById("health-total");
    let staminaTotal = document.getElementById("stamina-total");

    let magickaBase = document.getElementById("magicka-base");
    let healthBase = document.getElementById("health-base");
    let staminaBase = document.getElementById("stamina-base");

    let attributeText = [magickaTotal, healthTotal, staminaTotal];
    let attributeBase = [magickaBase, healthBase, staminaBase];
	
	let professionAttributes = [0, 0, 0];
	professionAttributes[document.getElementById("profession-attribute").value]=10;
	
    for (i = 0; i < 3; i++) {
        attributeTotals[i] = race.baseAttributes[i] + (10 * attributeIncreases[i]) + race.bonusAttributes[i] + attributeModifiers[i] + professionAttributes[i];
        if(ogmah-1 == i) {
            attributeTotals[i] += 200;
        }
        attributeText[i].textContent = attributeTotals[i];

        attributeBase[i].textContent = "BASE: " + (race.baseAttributes[i] +(10 * attributeIncreases[i]) + professionAttributes[i]);
    }
    updateDerivedValues();
    saveData();
    attributesErrorCheck();

}

function attributesErrorCheck() {
    let buildCodeButton = document.getElementById("build-copy");
    let buildCodeText = document.getElementById("build-code");

    if (spentAttributes > totalAttributePoints) {
        buildCodeButton.textContent = "You have invalid attribute points, please correct this!";
        buildCodeText.textContent = "ERROR";
        buildCodeText.style.textAlign = "center";
    } else 
    {
        buildCodeButton.textContent = "Copy Build Link";
    }
}

function updateRace() {
    race = raceList[document.getElementById("races-selection").selectedIndex];

    
	updateProfession();
}

function updateProfession() {
	professionIndex = document.getElementById("profession-select").value;
    profession = professionList[professionIndex];
	
	if (professionIndex > 0)
	{
		toggleClassInput(true);
		document.getElementById("profession-name").value = profession.name;
		document.getElementById("profession-attribute").value = profession.additionalAttributes;
		document.getElementById("profession-skill-group").value = profession.skillgroup;
		let y=0;
		for(i = 0; i < skillsList.length; i++) {
			if (profession.additionalSkills[i] > 0)
			{
				professionSkills[y]=i;
				y++;
			}
		}
		document.getElementById("skill-choice-1").value = professionSkills[0];
		document.getElementById("skill-choice-2").value = professionSkills[1];
		document.getElementById("skill-choice-3").value = professionSkills[2];
		document.getElementById("skill-choice-4").value = professionSkills[3];
		document.getElementById("skill-choice-5").value = professionSkills[4];
		document.getElementById("skill-choice-6").value = professionSkills[5];
	}
	else
	{
		toggleClassInput(false);
		$(".skill-choice option").each(function(){
			$( this ).removeAttr('disabled');
		});
		$(".skill-choice").each(function(i,s){
			$(".skill-choice").not(s).find("option[value="+$(s).val()+"]").attr('disabled','disabled');
		});
	}
	   
	updateBaseSkillLevels();
    updateAttributes();
}

function updateStone() {
	//0 None
    //1 Apprentice
    //2 Atronach
    //3 Mage
    //4 Ritual
    //5 Lover
    //6 Shadow
    //7 Thief
    //8 Tower
    //9 Lady
    //10 Lord
    //11 Steed
    //12 Warrior
    //13 Serpent
	
    stoneIndex = document.getElementById("stone-select").value;
    attributeModifiers[0] = 0;
    if(stoneIndex == 2) {
        attributeModifiers[0] = 350;
    }

    if(stoneIndex == 3) {
        attributeModifiers[0] = 100;
    }

    if(stoneIndex == 11) {
        attributeModifiers[2] = 100;
    }
    updateDerivedValues();
    updateAttributes();
}

function updateOgmah() {
    ogmah = document.getElementById("ogmah-select").value;
    updateLevel();
}

function updateBaseSkillLevels() {
	professionSkillGroup = document.getElementById("profession-skill-group").value;
	professionSkills[0] = document.getElementById("skill-choice-1").value;
	professionSkills[1] = document.getElementById("skill-choice-2").value;
	professionSkills[2] = document.getElementById("skill-choice-3").value;
	professionSkills[3] = document.getElementById("skill-choice-4").value;
	professionSkills[4] = document.getElementById("skill-choice-5").value;
	professionSkills[5] = document.getElementById("skill-choice-6").value;
	let y=0;
	if (professionSkillGroup==0)
		y=12;
	else if (professionSkillGroup==1)
		y=0;
	else if (professionSkillGroup==2)
		y=6;
	let additionalSkills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for(i = 0; i < 6; i++) {
		additionalSkills[professionSkills[i]] +=5;
		additionalSkills[i+y]+=5;
	}
	for(i = 0; i < skillsList.length; i++) {
		skillsList[i].levelBase = race.baseSkills[i] + additionalSkills[i];
    }
	drawSkillTree();
	saveData();
}

function updateSkillLevels() {
    for (let i = 0; i < skillsList.length; i++) {
        let skillTree = skillsList[i];
        let skillLevel = skillsIconsLevel[i];
        let skillLabel = skillsIconLabels[i];
        skillLevel.textContent = skillTree.levelTotal;
        if (skillTree.customLevel > skillTree.levelTotal) {
            skillLevel.textContent = skillTree.customLevel;
        }

        if (skillTree.takenPerks.length > 0 || skillTree.customLevel > skillTree.levelBase) {
            skillLabel.classList.add("green-text");
        } else {
            skillLabel.classList.remove("green-text");
        }
    }
}

function saveData() {
  
    let takenPerks = [];
    let customLevels =[];

    //Translate perks into a string, which we can convert back to perks
    for (i = 0; i < skillsList.length; i++) { //for each skill tree
        //check for perks
        if (skillsList[i].takenPerks[0] != null) {
            let skillString = i; //start the string for each skillTree with the skilltree index number
            for (j = 0; j < skillsList[i].takenPerks.length; j++) {
                let perk = skillsList[i].takenPerks[j];
                let id = skillsList[i].perks.indexOf(perk);
                skillString += "p" +id; //seperate the perks with a 'p'
            }
            takenPerks.push(skillString);
        }

        //encode custom levels if needed
        if (skillsList[i].customLevel > skillsList[i].levelTotal) {
            let customeLevelString = i + "l" + skillsList[i].customLevel;
            customLevels.push(customeLevelString);
        }
    }

    let name = document.getElementById("build-name").value;
    let raceIndex = document.getElementById("races-selection").value;
    let stoneIndex = document.getElementById("stone-select").value;
    let ogmahIndex = document.getElementById("ogmah-select").value;
    let perksString = takenPerks.toString();
    perksString = perksString.replace(/,/g,'s'); //replace commas so we can split seperately
    if(perksString.length == 0) { perksString = 'no'};
    let customLevelsString = customLevels.toString();
    customLevelsString = customLevelsString.replace(/,/g,'s');
    if (customLevelsString.length == 0) { customLevelsString = "no"};
    let versionIndex = document.getElementById("version-select").value;
    let settingsString = "";
    if (versionIndex == 2) {
        settingsString = settings.costTo25 + "s" + settings.costTo50 + "s" + settings.costTo75 + "s" + settings.costTo100 + "s"
                         + settings.cap + "s" + settings.base + "s" + settings.mult;
    };
	//class data
	let professionIndex = document.getElementById("profession-select").value;
	let professionName = document.getElementById("profession-name").value;
    let professionAttributeIndex = document.getElementById("profession-attribute").value;
    let professionSkillGroupIndex = document.getElementById("profession-skill-group").value;
    professionSkills[0] = document.getElementById("skill-choice-1").value;
	professionSkills[1] = document.getElementById("skill-choice-2").value;
	professionSkills[2] = document.getElementById("skill-choice-3").value;
	professionSkills[3] = document.getElementById("skill-choice-4").value;
	professionSkills[4] = document.getElementById("skill-choice-5").value;
	professionSkills[5] = document.getElementById("skill-choice-6").value;
	
	

    let codeArray = [name, raceIndex, stoneIndex, attributeIncreases[0], attributeIncreases[1], attributeIncreases[2], perksString, customLevelsString, ogmahIndex, versionIndex, settingsString, professionIndex, professionName, professionAttributeIndex, professionSkillGroupIndex, professionSkills[0], professionSkills[1], professionSkills[2], professionSkills[3], professionSkills[4], professionSkills[5] ];
    let code = codeArray.toString();
    let codeEncoded = btoa(code);
    //remove padding '=' chars
    if(codeEncoded.indexOf("=") != -1){
        codeEncoded = codeEncoded.replace(/=/g,'');
    }

    //updateBuildCode
    let baseUrl = window.location.href.split('?')[0];
    let theURL = new URL(baseUrl);
    theURL.searchParams.set('b', codeEncoded);

    let buildCodeDiv = document.getElementById("build-code");
    buildCodeDiv.textContent = theURL;
}

function loadData() {
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('b')) {
        let code = urlParams.get('b');

        let decoded = atob(code);
    
        let values = decoded.split(',');
        let buildName = values[0];
        let buildRace = values[1];
        let buildStone = values[2];
        let magickaIncrease = values[3];
        let healthIncrease = values[4];
        let staminaIncrease = values[5];
        let ogmahIndex = values[8];   
        let versionIndex = values[9];
		
		//class data
		let professionIndex = values[11];
		let professionName = values[12];
		let professionAttributeIndex = values[13];
		let professionSkillGroupIndex = values[14];
		professionSkills[0] = values[15];
		professionSkills[1] = values[16];
		professionSkills[2] = values[17];
		professionSkills[3] = values[18];
		professionSkills[4] = values[19];
		professionSkills[5] = values[20];
		
        //Backwards compatibility: (defaults version to current serenity build)
        if (typeof versionIndex == "undefined") {
            versionIndex = 1;
        }
    
        document.getElementById("build-name").value = buildName;
        document.getElementById("races-selection").value = buildRace;
        document.getElementById("stone-select").value = buildStone;
        document.getElementById("ogmah-select").value = ogmahIndex;
        document.getElementById("version-select").value = versionIndex;
        attributeIncreases[0] = magickaIncrease;
        attributeIncreases[1] = healthIncrease;
        attributeIncreases[2] = staminaIncrease;
        
        spentAttributes = parseInt(attributeIncreases[0]) + parseInt(attributeIncreases[1]) + parseInt(attributeIncreases[2]);
        
        ogmah = ogmahIndex;
		
		
		//class data
		document.getElementById("profession-select").value = professionIndex;
		document.getElementById("profession-name").value = professionName;
		document.getElementById("profession-attribute").value = professionAttributeIndex;
		document.getElementById("profession-skill-group").value = professionSkillGroupIndex;
		document.getElementById("skill-choice-1").value = professionSkills[0];
		document.getElementById("skill-choice-2").value = professionSkills[1];
		document.getElementById("skill-choice-3").value = professionSkills[2];
		document.getElementById("skill-choice-4").value = professionSkills[3];
		document.getElementById("skill-choice-5").value = professionSkills[4];
		document.getElementById("skill-choice-6").value = professionSkills[5];
		
		
        //perks
        if(values[6] != 'no') {
            let buildPerks = values[6].split('s');
            for (i = 0; i < buildPerks.length; i++) {
                let perkArray = buildPerks[i].split('p');
                let skillID = perkArray[0];
                let skillTree = skillsList[skillID];
        
                for (j = 1; j < perkArray.length; j++) {
                    let takenPerk = skillTree.perks[perkArray[j]];
                    skillTree.takenPerks.push(takenPerk);
                    takePerkCSS(takenPerk);
                }
            }
        }
        //custom skill levels
        if (values[7] != 'no') {
            let skillsString = values[7].split('s'); //split the string into each skill tree
            for (s = 0; s < skillsString.length; s++) {
                let levelsArray = skillsString[s].split('l');
                let skillID = levelsArray[0];
                let skillLevel = levelsArray[1];
                skillsList[skillID].customLevel = skillLevel;
            };
        }
        //custom settings
        if (typeof values[10] != "undefined" && values[10].length > 0) {
            let settingsArray = values[10].split('s');
            settings.costTo25 = parseInt(settingsArray[0]);
            settings.costTo50 = parseInt(settingsArray[1]);
            settings.costTo75 = parseInt(settingsArray[2]);
            settings.costTo100 = parseInt(settingsArray[3]);
            settings.cap = parseInt(settingsArray[4]);
            settings.base = parseInt(settingsArray[5]);
            settings.mult = parseInt(settingsArray[6]);
        }

    }
    updateRace();
    drawSkillTree();
    setSettingsValues();
    updateVersion();
}

function copyBuildCode() {
    let buildCodeDiv = document.getElementById("build-code");
    let buildCodeButton = document.getElementById("build-copy");
    let buildCode = buildCodeDiv.textContent;

    if (spentAttributes > totalAttributePoints) {
        buildCodeButton.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
        setTimeout(function(){
            buildCodeButton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }, 1000);
    } else {
       
        navigator.clipboard.writeText(buildCode).then(function(){
            buildCodeButton.style.backgroundColor = "rgba(59, 170, 87, 0.8)";
            buildCodeButton.textContent = "Copied!";
            setTimeout(function(){
                buildCodeButton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                buildCodeButton.textContent = "Copy Build Code";
            }, 1000);
    
        }, function() {
            alert("Copy failed, try again or manually copy the build code");
        });
    }    
}

function perkMouseEnter(perkNum) {
    let perk = activeSkillTree.perks[perkNum];
    let circle = perk.circle;
    let rankIndex = 0;

    //we need to get the right perk. perk circles all link to the first perk in a chain.
    if (perk.chain != 0) {

        for (i=1; i < perk.chainPerks.length; i++) {
            if(activeSkillTree.takenPerks.includes(perk.chainPerks[i])) {
                rankIndex++;
            }
        }
        perk = perk.chainPerks[rankIndex];
    }

    let title = document.getElementById("perk-description-title");
    let body = document.getElementById("perk-description-body");
	let requirements = document.getElementById("perk-requirements");
    let nextTitle = document.getElementById("perk-description-rank-title");
    let nextBody = document.getElementById("perk-description-rank-body");
	let nextRequirements = document.getElementById("perk-requirements-rank");
    //to reset
    nextTitle.style.display = "none";
    nextBody.style.display = "none";
	nextRequirements.style.display = "none";
    
    //set text
	title.textContent = perk.name.replace('<br>', ' ');
	
    body.textContent = perk.description.replace('<br>', ' ');
	requirements.textContent = "";
	if (perk.levelReq) {
			requirements.textContent ="Level " + perk.levelReq.toString();	
	}
	if (perk.skillReq) {
		requirements.textContent =requirements.textContent + perk.skill.name + " " + perk.skillReq.toString();
	}

    //if perk is a chain, we need to set next rank text if needed

    if(perk.chain != 0) {
		title.textContent =perk.name.replace('<br>', ' ') + "(" + perk.rank + "/" + perk.chain + ")";

        let showNext = false;

        if (perk.rank == 1 && activeSkillTree.takenPerks.includes(perk)) { showNext = true}
        else if (perk.rank == 2 && perk.chain == 3) { showNext = true}


        if(showNext==true) {
            let nextPerk = activeSkillTree.perks[perkNum+rankIndex+1];    
            nextBody.textContent = nextPerk.description.replace('<br>', ' ');
			nextRequirements.textContent = "";
			if (nextPerk.levelReq) {
				nextRequirements.textContent ="Level " + nextPerk.levelReq.toString();	
			}
			if (nextPerk.skillReq) {
				nextRequirements.textContent =nextRequirements.textContent + nextPerk.skill.name + " " + nextPerk.skillReq.toString();
			}
			nextTitle.style.display = "block";
            nextBody.style.display = "block";
			nextRequirements.style.display = "block";
        }
    }

    //set description colour if perk is taken
    if (activeSkillTree.takenPerks.includes(perk)){
        title.classList.add("taken-perk-tooltip");
        body.classList.add("taken-perk-tooltip");
		requirements.classList.add("taken-perk-tooltip");
    } else {
        title.classList.remove("taken-perk-tooltip");
        body.classList.remove("taken-perk-tooltip");
		requirements.classList.remove("taken-perk-tooltip");
    }
    
    //show tooltip box    
    let rect = circle.getBoundingClientRect();
    let tooltipBox = document.getElementById("perk-description-box");
    tooltipBox.style.display = "block"

    //position tooltip box
    let boxHeight = tooltipBox.offsetHeight;
    let boxWidth = tooltipBox.offsetWidth;

    tooltipBox.style.left = (rect.left-(boxWidth/2)+15).toString() +"px";


    tooltipBox.style.top = (rect.top+50).toString() +"px";
}

function perkMouseExit() {
    let tooltipBox = document.getElementById("perk-description-box");
    let nextTitle = document.getElementById("perk-description-rank-title");
    let nextBody = document.getElementById("perk-description-rank-body");
	let nextRequirements = document.getElementById("perk-requirements-rank");
    tooltipBox.style.display = "none";
    nextTitle.style.display = "none";
    nextBody.style.display = "none";
	nextRequirements.style.display = "none";
}

function clearSkill() {
    let perksToRemove = [];
    activeSkillTree.takenPerks.forEach(perk => {
        perksToRemove.push(perk);
    });

    for (rp = 0; rp < perksToRemove.length; rp++) {
        
        if (perksToRemove[rp].chain == 0 || perksToRemove[rp].rank == 1) 
        {
            removePerk2(perksToRemove[rp]);
        }
        else {
            (removePerkRank(perksToRemove[rp])); 
        };
    }
    activeSkillTree.customLevel = 0;
    updateLevel();
    drawSkillTree();
    attributesErrorCheck();

}

function clearAllSkills(){
   /*let url = window.location.href.split('?')[0];
   window.location = url;*/
   let perksToRemove = [];

    skillsList.forEach(skill => {
        skill.customLevel = 0;
        skill.takenPerks.forEach(perk => {
        perksToRemove.push(perk); });
    });

    for (rp = 0; rp < perksToRemove.length; rp++) {
        
        if (perksToRemove[rp].chain == 0 || perksToRemove[rp].rank == 1) 
        {
            removePerk2(perksToRemove[rp]);
        }
        else {
            (removePerkRank(perksToRemove[rp])); 
        };
    }

    attributeIncreases = [0,0,0];
    spentAttributes = 0;
    drawSkillTree();
    updateSkillLists();
}

function closeAlert() {
    let alertDiv = document.getElementById("alert");
    alertDiv.style.display = "none";
}

//Custom Class 

function toggleClassInput(bool) {
	document.getElementById("profession-name").disabled = bool;
    document.getElementById("profession-attribute").disabled = bool;
    document.getElementById("profession-skill-group").disabled = bool;
    document.getElementById("skill-choice-1").disabled = bool;
	document.getElementById("skill-choice-2").disabled = bool;
	document.getElementById("skill-choice-3").disabled = bool;
	document.getElementById("skill-choice-4").disabled = bool;
	document.getElementById("skill-choice-5").disabled = bool;
	document.getElementById("skill-choice-6").disabled = bool;
}





//SSL SETTINGS

function updateVersion() {

    let versionIndex = document.getElementById("version-select").value;

    if(versionIndex == 1) { //v1.6
        settings.costTo25 = 3;
        settings.costTo50 = 5;
        settings.costTo75 = 8;
        settings.costTo100 = 13;
        settings.cap = 5;
        settings.base = 15;
        settings.mult = 3;

        setSettingsValues();
        toggleSettingsInput(true);
    }

    if(versionIndex == 2) { //v1.7
        settings.costTo25 = 3;
        settings.costTo50 = 7;
        settings.costTo75 = 13;
        settings.costTo100 = 25;
        settings.cap = 5;
        settings.base = 12;
        settings.mult = 3;

        setSettingsValues();
        toggleSettingsInput(true);

    }

    if(versionIndex == 0){ //custom
        toggleSettingsInput(false);
    }

    updateLevel();
}

function toggleSettingsInput(bool) {
    document.getElementById("costs-0").disabled = bool;
    document.getElementById("costs-25").disabled = bool;
    document.getElementById("costs-50").disabled = bool;
    document.getElementById("costs-75").disabled = bool;
    document.getElementById("settings-cap").disabled = bool;
    document.getElementById("settings-points-base").disabled = bool;
    document.getElementById("settings-points-mult").disabled = bool;
}

function setSettingsValues() {
    document.getElementById("costs-0").value = settings.costTo25;
    document.getElementById("costs-25").value = settings.costTo50;
    document.getElementById("costs-50").value = settings.costTo75;
    document.getElementById("costs-75").value = settings.costTo100;
    document.getElementById("settings-cap").value = settings.cap;
    document.getElementById("settings-points-base").value = settings.base;
    document.getElementById("settings-points-mult").value = settings.mult;
}

function updateSettings() {
    settings.costTo25 = parseInt(document.getElementById("costs-0").value);
    settings.costTo50 = parseInt(document.getElementById("costs-25").value);
    settings.costTo75 = parseInt(document.getElementById("costs-50").value);
    settings.costTo100 = parseInt(document.getElementById("costs-75").value);
    settings.cap = parseInt(document.getElementById("settings-cap").value);
    settings.base = parseInt(document.getElementById("settings-points-base").value);
    settings.mult = parseInt(document.getElementById("settings-points-mult").value);
    updateLevel();
}


window.addEventListener('resize', drawSkillTree);

updateVersion();
addChainArrays();
drawSkillTree();
createSkillIcons();
updateRace();
loadData();
updateSkillLevels();


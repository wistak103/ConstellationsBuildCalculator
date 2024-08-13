{
  Export perk data
}
  unit wistakExportPerkDataToBuildCalculator;

//const

var
	slPerks, slPositionsX, slPositionsY, slPerkData, slSkillTrees: TStringList;
	i, j: Integer;
	StartingPerk, perktree, perk, node, group, element, f: IInterface;
	bethFile: boolean;
	skill: string;
    xGrid, yGrid, maxXGrid, maxYGrid, xPos, yPos, gridScaleX, gridScaleY, index, chainLen, chainRank: Integer;
    hnam, vnam: real;


function populatePerkList(perk: IInterface; Left: Integer; Top: Integer): Integer;
var
	nextPerk: IInterface;
begin
	perk := WinningOverride(perk);
	slPerks.AddObject(Name(perk), perk);
	slPositionsX.Add(Left);
	slPositionsY.Add(Top);
	nextPerk := LinksTo(ElementByPath(perk, 'NNAM'));
	if Assigned(nextPerk) then populatePerkList(nextPerk, Left, Top);
end;





//=========================================================================
// Perk data
function PerkData(perk: IInterface; perkNumber: Integer): Integer;
var
	fullPerkName, perkName, perkDesc, reqSkillLevel, reqPerks, chain: string;
	nextPerk, conditions, conditionData : IInterface;
	slReqPerks: TStringList;
	reqPerksOr : boolean;
begin
	slReqPerks := TStringList.Create;
	slReqPerks.Sorted := True;
	slReqPerks.Duplicates := dupIgnore;
	slReqPerks.Add(-1);
	reqPerksOr := 0;
	reqSkillLevel := 0;
	chainLen := 0;
	chainRank := 0;
	perk := WinningOverride(perk);
	
	
	//fullPerkName with ID etc.
	fullPerkName := Name(perk);
	
	
	//Perk Name
	perkName := GetEditValue(ElementByPath(perk, 'FULL'));
	
	
	//Perk Description
	perkDesc := GetEditValue(ElementByPath(perk, 'DESC'));
	perkDesc := StringReplace(StringReplace(perkDesc, #10, ' ', [rfReplaceAll]), #13, ' ', [rfReplaceAll]);
	perkDesc := StringReplace(perkDesc,'"', '\"', [rfReplaceAll]);
	
	//conditions
	conditions := ElementByPath(perk,'Conditions');
	for i := 0 to ElementCount(conditions)-1 do begin
		conditionData := ElementByPath(ElementByIndex(conditions,i),'CTDA');
		//for j := 0 to ElementCount(conditionData)-1 do AddMessage(Name(ElementByIndex(conditionData,j))+' '+GetEditValue(ElementByIndex(conditionData,j)));
		if SameText(GetEditValue(ElementByPath(conditionData,'Function')),'GetBaseActorValue') then reqSkillLevel := GetEditValue(ElementByPath(conditionData,'Comparison Value'));
		if SameText(GetEditValue(ElementByPath(conditionData,'Function')),'HasPerk') then begin
			slReqPerks.Add(slPerks.IndexOf(Name(WinningOverride(LinksTo(ElementByPath(conditionData,'Parameter #1'))))));
			//AddMessage('Requires perk #'+ IntToStr(slPerks.IndexOf(Name(WinningOverride(LinksTo(ElementByPath(conditionData,'Parameter #1')))))) + ': ' + Name(WinningOverride(LinksTo(ElementByPath(conditionData,'Parameter #1')))));
			//perks that require one of perks instead of all of them:
			if SameText(GetEditValue(ElementByPath(conditionData,'Function')),'HasPerk') and SameText(GetEditValue(ElementByPath(conditionData,'Type')),'10010000') and not SameText(GetEditValue(ElementByPath(conditionData,'Parameter #1')),fullPerkName) then reqPerksOr :=true;
		end;
	end;
	slReqPerks.Delete(slReqPerks.IndexOf(-1));
	reqPerks := slReqPerks.DelimitedText;
	
	
	//chains
	for i := 0 to slPerks.count -1 do begin
		//AddMessage(GetEditValue(ElementByPath(ObjectToElement(slPerks.Objects[i]), 'FULL')));
		if SameText(GetEditValue(ElementByPath(ObjectToElement(slPerks.Objects[i]), 'FULL')),perkName) then begin
			chainLen := chainLen + 1;
			if i=perkNumber then chainRank := chainLen;
		end;
	end;
	
	if chainLen>1 then chain := IntToStr(chainLen) + ',  rank: ' + IntToStr(chainRank) + ','
	else chain := '0,';
	
	
	
	slPerkData.Add('	//' + IntToStr(perkNumber));
	slPerkData.Add('	{');
	slPerkData.Add('		name: "' + perkName + '", skill: ' + skill + ', skillReq: ' + IntToStr(reqSkillLevel+0) + ',');
	slPerkData.Add('		 xPos: ' + slPositionsX[perkNumber] + ', yPos: ' + slPositionsY[perkNumber] + ', preReqs: [' + reqPerks + '], chain: ' + chain);
	slPerkData.Add('		 description: "' + perkDesc + '",');
	
	//perks with choice of requirements
	if reqPerksOr then slPerkData.Add('		 labels: [], lines: [], chainPerks: [], choiceNeeded: true')
	else slPerkData.Add('		 labels: [], lines: [], chainPerks: []');
	
	slPerkData.Add('	},');
end;


function SkillTree(e: IInterface): Integer;
var
	Left, Top: Integer;
begin
	slPerks := TStringList.Create;
	slPositionsX := TStringList.Create;
	slPositionsY := TStringList.Create;

	e := WinningOverride(e);
	
	
	
	perktree := ElementByPath(e, 'Perk Tree');
	

	maxXGrid := 0;
	maxYGrid := 0;
	for i := 1 to ElementCount(perktree) - 1 do begin
		node := ElementByIndex(perktree, i);
		xGrid := GetEditValue(ElementByPath(node, 'XNAM'));
		xGrid := xGrid + Trunc(GetEditValue(ElementByPath(node, 'HNAM')));
		if (xGrid > maxXGrid) then maxXGrid := xGrid;
		yGrid := GetEditValue(ElementByPath(node, 'YNAM'));
		yGrid := yGrid + Trunc(GetEditValue(ElementByPath(node, 'VNAM')));
		if (yGrid > maxYGrid) then maxYGrid := yGrid;
	end;
	gridScaleX := (100 / (maxXGrid+2));
	gridScaleY := (100 / (maxYGrid+2));
	//AddMessage('gridScale: x;y'+IntToStr(gridScaleX) + '; ' + IntToStr(gridScaleY));
	for i := 1 to ElementCount(perktree) - 1 do 
	begin
		node := ElementByIndex(perktree, i);
		xGrid := maxXGrid - GetEditValue(ElementByPath(node, 'XNAM'));
		yGrid := maxYGrid - GetEditValue(ElementByPath(node, 'YNAM'));
		hnam := GetEditValue(ElementByPath(node, 'HNAM'));
		vnam := GetEditValue(ElementByPath(node, 'VNAM'));
		xPos := Round(hnam * gridScaleX);
		yPos := Round(vnam * gridScaleY);
		//AddMessage(GetEditValue(ElementByPath(node, 'PNAM')) + '  ::  ('+IntToStr(xGrid)+'.'+IntToStr(xPos)+', '+IntToStr(yGrid)+'.'+IntToStr(yPos)+')');
		Left := Round(((xGrid + 1) * gridScaleX - xPos));
		Top := Round((((yGrid + 1) * gridScaleY) - yPos));
		//AddMessage(GetEditValue(ElementByPath(node, 'PNAM')) + '  ::  ('+IntToStr(Left)+', '+IntToStr(Top)+')');
		populatePerkList(LinksTo(ElementByPath(node, 'PNAM')),Left, Top);
	end;

	for i := 0 to slPerks.count -1 do
	begin
		PerkData(ObjectToElement(slPerks.Objects[i]), i);
	end;
	
	slPerks.Clear();
	slPerks.Free();
	slPositionsX.Clear();
	slPositionsX.Free();
	slPositionsY.Clear();
	slPositionsY.Free();
end;


//=========================================================================
// Initialize variables and stringlists
function Initialize: Integer;
var
	e: IInterface;
	skillslist: string;
begin
	// create stringlists
	slPerkData := TStringList.Create;
	slSkillTrees := TStringList.Create;
	skillslist := 'let skillsList = [';
	
	slSkillTrees.Add('0000044C'); //One-handed
	slSkillTrees.Add('0000044D'); //Two-handed
	slSkillTrees.Add('0000044E'); //Archery
	slSkillTrees.Add('0000044F'); //Block
	slSkillTrees.Add('00000450'); //Smithing
	slSkillTrees.Add('00000451'); //Heavy Armor
	slSkillTrees.Add('00000452'); //Light Armor
	slSkillTrees.Add('00000453'); //Pickpocket
	slSkillTrees.Add('00000454'); //Lockpicking
	slSkillTrees.Add('00000455'); //Sneak
	slSkillTrees.Add('00000456'); //Alchemy
	slSkillTrees.Add('00000457'); //Speech
	slSkillTrees.Add('00000458'); //Alteration
	slSkillTrees.Add('00000459'); //Conjuration
	slSkillTrees.Add('0000045A'); //Destruction
	slSkillTrees.Add('0000045B'); //Illusion
	slSkillTrees.Add('0000045C'); //Restoration
	slSkillTrees.Add('0000045D'); //Enchanting


	//
	slPerkData.Add('class SkillTree {');
	slPerkData.Add('    constructor(name, id) {');
	slPerkData.Add('		this.name = name;');
	slPerkData.Add('        this.id = id;');
	slPerkData.Add('        this.levelBase;');
	slPerkData.Add('        this.levelTotal;');
	slPerkData.Add('        this.customLevel = 0;');
	slPerkData.Add('        this.perks = [];');
	slPerkData.Add('        this.takenPerks = [];');
	slPerkData.Add('    }');
	slPerkData.Add('}');
	
	
	
	for i := 0 to slSkillTrees.count -1 do
	begin
		e := RecordByFormID(FileByLoadOrder(0),slSkillTrees[i],true);
		e := WinningOverride(e);
		skill := GetEditValue(ElementByPath(e, 'FULL'));
		skill := StringReplace(StringReplace(skill, '-', '', [rfReplaceAll]), ' ', '', [rfReplaceAll]);
	
		AddMessage('Processing ' + skill);
		slPerkData.Add('let ' + skill +' = new SkillTree("' + skill + '", ' + IntToStr(i) + ');');
		slPerkData.Add(skill + '.perks = [');
		SkillTree(e);
		
		slPerkData.Add('];');
		
		skillslist := skillslist + skill + ', ';		
	end;
	skillslist := LeftStr(skillslist,Length(skillslist)-2);
	skillslist := skillslist + '];';
	slPerkData.Add(skillslist);
end;


function Finalize: integer;
begin
  slPerkData.SaveToFile('!!!perksData.js');
  slPerkData.Free;
end;

end.
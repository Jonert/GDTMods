var FutureMod = {};
(function () {
	/* Compatibility check */
	var compatibilityCheck = function(data){
		for (var i = 0; i < ModSupport.availableMods.length; i++) {
			var mod = ModSupport.availableMods[i];
			if(mod.url == "https://github.com/Turntablelover/Game-Dev-Tycoon-Mod" && mod.active){
				var div = $("body");
				div.append('<div id="ErrorContainer" class="windowBorder smallWindow" style="overflow:auto;display:none;"> <div id="cheatmodtop" class="windowTitle smallerWindowTitle">Compatibility Problem</div>');
				div = $("#ErrorContainer");
				div.append('<div id="error" style="margin-left:50px;width: 400px;" >Expansion Pack Mod is <span style="color:red;">NOT</span> compatible with VENOMOUS mod.</br></br> To continue using Expansion Pack Mod Please disable VENOMOUS mod in the mods menu and restart your Game Dev Tycoon</div>');
				div.append('<div id="mainmenubutton" class="selectorButton whiteButton" onclick="UI.toggleMainMenu()" style="display:inline-block;position: relative;margin-left:50px;width: 350px;" >Main Menu</div>');
				div.gdDialog({popout: !0,close: 0})
			}
		}
	};
	
	FutureMod.initCompatibilityChecks = function(){
		if(GDT.compatibilityCheckActive === 'undefined' || GDT.compatibilityCheckActive !== null){
			GDT.on(GDT.eventKeys.saves.loading, compatibilityCheck);
			GDT.on(GDT.eventKeys.saves.saving, compatibilityCheck);
			GDT.compatibilityCheckActive = true;
		}
	};
	/*  */
	
	/* Update Checker */
	var UpdateCheck = function (data) {
		for (var i = 0; i < ModSupport.availableMods.length; i++) {
			var mod = ModSupport.availableMods[i];
			if(mod.url == "https://github.com/SlasherCrasher1/GDTMods" && mod.version > "0.1.0" && mod.active) {
				var div = $("body");
				div.append('<div id="UpdateContainer" class="windowBorder smallWindow" style="overflow:auto;display:none;"> <div id="cheatmodtop" class="windowTitle smallerWindowTitle">Update Is Now Available!</div>');
				div = $("#UpdateContainer");
				div.append('<div id="update" style="margin-left:50px;width: 400px;" >A new update <span style="color:red;">for</span> Game Dev Tycoon: Platforms, Events, and Topics OH MY is now available.</br></br> Please update to 1.7.3 at https://github.com/Turntablelover/Game-Dev-Tycoon-Mod </div>');
				div.append('<div id="mainmenubutton" class="selectorButton whiteButton" onclick="UI.toggleMainMenu()" style="display:inline-block;position: relative;margin-left:50px;width: 350px;" >Main Menu</div>');
				div.gdDialog({popout: !0,close: 0})
			}
		}
	};
	
	FutureMod.initUpdateChecks = function () {
		if (GDT.updateCheckActive === 'undefined' || GDT.updateCheckActive !== null) {
			GDT.on(GDT.eventKeys.saves.loading, UpdateCheck);
			GDT.on(GDT.eventKeys.saves.saving, UpdateCheck);
			GDT.updateCheckActive = true;
		}
	};
	
	/* Game Extensions */
	var evKey = GDT.eventKeys.gameplay;
	
    FutureMod.addGameExtentions = function () {
        var findMe = document.getElementById("gameLengthSelection");
        var appendMe = document.createElement("option");		
        appendMe.text = "60 Years (long)";
        appendMe.value = "2";
        findMe.appendChild(appendMe);
		
		appendMe = document.createElement("option");
        appendMe.text = "90 Years (super long)";
        appendMe.value = "3";
        findMe.appendChild(appendMe);
		
		appendMe = document.createElement("option");
        appendMe.text = "102 Years (really long)";
        appendMe.value = "3.4";
        findMe.appendChild(appendMe);
		
		appendMe = document.createElement("option");
        appendMe.text = "168 Years (Old Person Long)";
        appendMe.value = "5.6";
        findMe.appendChild(appendMe);
    };
	
	/* Topics (Future Plans) */
	FutureMod.addTopic = function () {
		GDT.addTopics([
		{
		    id: "Alternate World",
		    name: "Alternate World".localize("game topic"),
		    genreWeightings: [0.7, 1, 0.9, 1, 0.8, 0.8],
			audienceWeightings: [0.7, 0.9, 1]
		}]);
	};
	/*  */
	
	/* Platforms */
	
	/* Void */
	FutureMod.addPlatformVoidOne = function () {
		var icon = './mods/FuturisticalTech/source/img/VoidOne.png';
		GDT.addPlatform(
			{
				id: 'VoidOne',
				name: 'Void One',
				company: 'Merizon Mobile',
				startAmount: 0.351,
				unitsSold: 0.534,
				/* y/m/w */
				marketKeyPoints: [{date: "5/2/2",amount: 0.215}, {date: "6/4/3",amount: 0.478}, {date: "7/1/4",amount: 0.738}],
				licencePrize: 2500,
				published: '5/1/3',
				platformRetireDate: '10/1/3',
				developmentCosts: 15000,
				/* Action, Adventure, RPG, Simulation, Strategy, Casual */
				genreWeightings: [1, 0.6, 0.8, 0.9, 1.0, 1.0],
				/* Young, Everyone, Mature */
				audienceWeightings: [0.8, 0.9, 0.6],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '21555884-0000-0000-0001-SLASHER',
						date: '4/12/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Merizon Mobile a new hardware manufacturer has announced a brand new phone called the Void One. The Void One comes with a new advanced operating system called Void OS. Even though the new platform is a bit expensive, you get value for your money. Merizon Mobile said that the Void One will become available {0}".localize().format(General.getETADescription('4/12/3', '5/1/3')),
								image: icon
							});
						}
					}
				]
			});
	};
	
	/*  */
	
	/* Events (Future Plans)*/
	
	/*  */
	
	/* Researches */
	FutureMod.addResearch = function () {
		/* Graphic items */
		
		/*  */
		
		/* Sound items */
		
		/*  */
		
		/* A.I. items */
		
		/*  */
		
		/* Gameplay */
		
		/*  */
		
		/* Engine items */
		
		/*  */
		
		/* Story/Quests */
		
		/*  */
		
		/* Dialogues items */
		
		/*  */
		
		/* World Design items */
		
		/*  */
		
		/* Level Design items */
		
		/*  */
	};
	/*  */
	
	/*  */
}) ();
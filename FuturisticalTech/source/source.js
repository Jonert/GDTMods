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
		if(GDT.compatibilityCheckActive == 'undefined' || GDT.compatibilityCheckActive == null){
			GDT.on(GDT.eventKeys.saves.loading, compatibilityCheck);
			GDT.on(GDT.eventKeys.saves.saving, compatibilityCheck);
			GDT.compatibilityCheckActive = true;
		}
	};
	/*  */
	
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
	
	/* Topics */
	FutureMod.addTopic = function () {
		GDT.addTopics([
		{
		    id: "Teleporting",
		    name: "Teleporter".localize("game topic"),
		    genreWeightings: [0.8, 0.7, 0.9, 1, 0.7, 0.7],
			audienceWeightings: [0.8, 0.8, 0.7]
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
				platformRetireDate: '7/1/3',
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
	FutureMod.addPlatformVosCall = function () {
		var icon = './mods/FutureisticalTech/source/img/VosCall.png'
		GDT.addPlatform(
			{
				id: 'VosCall',
				name: 'Vos Call',
				company: 'Vint',
				startAmount: 0.4,
				unitsSold: 0.435,
				licencePrize: 4000,
				published: '6/3/2'
				platformRetireDate: '8/3/2'
				developmentCosts: 15000,
				/* Action, Adventure, RPG, Simulation, Strategy, Casual */
				genreWeightings: [1, 0.6, 0.8, 0.9, 1.0, 1.0],
				/* Young, Everyone, Mature */
				audienceWeightings: [0.8, 0.9, 0.6],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '21555884-0000-0000-0002-SLASHER',
						date: '6/2/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Vint a new hardware manufacturer has announced they are going to be competing against Merizon. They say they will lead the world to innovative ideas and discoveries, with their new Vos Call Phone! It's has all the latest technological advancement capabilities.".localize().format(General.getETADescription('6/2/2', '6/3/2')),
								image: icon
							});
						}
					}
				]
			}
			);
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
			GDT.addResearchItem(
			{
				id: "4D Engine",
				name: "4D Engine".localized(),
				v: 12
				canResearch: function(company) {
					return false;
				},
				category: "Engine",
				categoryDispayName: "Engine".localize();
				consolePart: true,
				techLevel: 7,
				showXPGain: true
			});
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
	
	/* Lab Research */
	
	/*  */
	
	/*  */
}) ();
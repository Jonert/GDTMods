var FutureMod = {};
(function () {	
	/* Game Extensions */
	// Thanks to http://www.w3schools.com/jsref/dom_obj_document.asp && http://www.w3schools.com/jsref/dom_obj_all.asp for a nice documentation on Props. & Methods.
		
	var eK_GP = GDT.eventKeys.gameplay
	
	FutureMod.addGameExtentions() {
		var gameLength = document.getElementById("gameLengthSelection");
		var gameOriginal30 = document.gameLength.childNodes.item(0);
		var gameOriginal35 = document.gameLength.childNodes.item(1);
		var gameOriginal42 = document.gameLength.childNodes.item(2);
		
		var gameExtend15 = document.createElement("option");
		gameExtend15.text = "15 Years (HyperSpeed)";
		gameExtend15.value = "0.5";
		gameLength.appendChild(gameExtend15);
		
		var gameExtend30 = document.createElement("option");
		gameExtend30.text = "30 Years (Extreme Fast-Paced)";
		gameExtend30.value = "1";
		gameLength.replaceChild(gameExtend30, gameOriginal30);
		
		var gameExtend45 = document.createElement("option");
		gameExtend45.text = "45 Years (Fast-Paced)"
		gameExtend45.value = "1.5"
		gameLength.replaceChild(gameExtend45, gameOriginal35);
		
		var gameExtend60 = document.createElement("option");
		gameExtend60.text = "60 Years (Recommended)"
		gameExtend60.value = "2";
		gameLength.replaceChild(gameExtend60, gameOriginal42);
	}
	
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
		var icon = './mods/FuturisticalTech/source/img/merizon.png';
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
		var icon = './mods/FutureisticalTech/source/img/vintLogo.png';
		GDT.addPlatform(
			{
				id: 'VosCall',
				name: 'Vos Call',
				company: 'Vint',
				startAmount: 0.4,
				unitsSold: 0.435,
				licencePrize: 4000,
				published: '6/3/2',
				platformRetireDate: '8/3/2',
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
				v: 12,
				canResearch: function(company) {
					return LevelCalculator.getMissionLevel('3D Engine')> 2;
				},
				category: "Engine",
				categoryDispayName: "Engine".localize(),
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
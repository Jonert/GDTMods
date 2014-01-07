var FutureMod = {};
(function () {
	/* Compatibility check */
	var compatibilityCheck = function(data){
		for (var i = 0; i < ModSupport.availableMods.length; i++) {
			var mod = ModSupport.availableMods[i];
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
								text: "Today, Merizon Mobile a new hardware manufacturer has announced a brand new phone called the Void One. The Void One comes with a new advanced operating system called Void OS. Even though the new platform is a bit expensive, you get value for your money. Merizon Mobile said that the Void One will become available {0}".localize().format(General.getETADescription('4/12/2', '5/1/3')),
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
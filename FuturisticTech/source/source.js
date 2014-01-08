var FutureMod = {};
(function () {
	// Thanks to http://www.w3schools.com/jsref/dom_obj_document.asp && http://www.w3schools.com/jsref/dom_obj_all.asp for a nice documentation on Props. & Methods.
	
	var ExpansionAddon = false
	
	/* Addon Checker */
	var addonCheck = function(data){
		for (var i = 0; i < ModSupport.availableMods.length; i++) {
			var mod = ModSupport.availableMods[i];
			if(mod.url == "https://github.com/DzjengisKhan/GDT-Expansion-Pack" && mod.active){
				ExpansionAddon = true
			}
		}
	};

	FutureMod.initAddonCheck = function(){
		if(GDT.addonCheckActive == 'undefined' || GDT.addonCheckActive == null){
			GDT.on(GDT.eventKeys.saves.loading, addonCheck);
			GDT.on(GDT.eventKeys.saves.saving, addonCheck);
			GDT.addonCheckActive = true;
		}
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
	var voidOSupdates = false;
	
	FutureMod.addMerizonPlatforms = function () {
		var icon = './mods/FuturisticalTech/source/img/merizon.png';
		GDT.addPlatform(
			{
				id: 'VoidOne',
				name: 'Void One',
				company: 'Merizon Mobile',
				startAmount: 0.025,
				unitsSold: 0.053,
				/* y/m/w */
				marketKeyPoints: [{date: "5/2/2",amount: 0.032}, {date: "6/4/3",amount: 0.038}, {date: "6/12/4",amount: 0.045}],
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
			
		GDT.addPlatform(
			{
				id: 'VoidPro',
				name: 'Void Pro',
				company: 'Merizon Mobile',
				startAmount: 0.100,
				unitsSold: 0.347,
				/* y/m/w */
				marketKeyPoints: [{date: "7/8/2",amount: 0.215}, {date: "8/10/3",amount: 0.478}, {date: "9/6/4",amount: 0.738}],
				licencePrize: 4000,
				published: '7/7/3',
				platformRetireDate: '9/7/3',
				developmentCosts: 18750,
				/* Action, Adventure, RPG, Simulation, Strategy, Casual */
				genreWeightings: [1, 0.6, 0.8, 0.9, 1.0, 1.0],
				/* Young, Everyone, Mature */
				audienceWeightings: [0.7, 0.8, 0.8],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '21555884-0000-0000-0002-SLASHER',
						date: '7/5/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Merizon Mobile a new hardware manufacturer has announced a brand new phone called the Void Pro. The Void Pro comes with a ton of updates to the Void OS. Even though the new platform is a bit expensive, you get value for your money. Merizon Mobile said that the Void Pro will become available {0}".localize().format(General.getETADescription('7/5/3', '7/7/3')),
								image: icon
							});
						}
					},
					
					{
						id: '21555884-0000-0000-0003-SLASHER',
						date: '8/10/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Merizon Mobile is inovating technology once again! Yes, they've made a server to apply updates to their phones. So, no more visits to the store to update your phone. {0}".localize(),
								image: icon,
							});
						voidOSupdates = true
						}
					}
				]
			});
	}
	
	
	/* Vos */
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
						id: '21555884-0000-0000-0010-SLASHER',
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
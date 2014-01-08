var FutureMod = {};
(function () {
	// Thanks to http://www.w3schools.com/jsref/dom_obj_document.asp && http://www.w3schools.com/jsref/dom_obj_all.asp for a nice documentation on Props. & Methods.
	
	
	
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
var FutureMod = {};
(function () {
	/* Variables */
	
		var voidOSupdates = false
	
	/*  */

	
	/* Platforms */
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
					}
					
					{
						id: '21555884-0000-0000-0003-SLASHER',
						date: '8/10/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Merizon Mobile is inovating technology once again! Yes, they've made a server to apply updates to their phones. So, no more visits to the store to update your phone. {0}".localize(),
								voidOSupdates = true
							});
						}
					}
				]
			});
	}
	
	FutureMod.addMerizonResearch = function () {
		GDT.addResearchItem(
		{
			id: "VoidCompat",
			name: "VoidOS Compatibility".localize(),
			v: 1,
			canResearch: function (company) {
				return
	}
}
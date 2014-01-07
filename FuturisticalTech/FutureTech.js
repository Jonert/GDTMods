(function () {
	var ready = function () {
	/* Random Features */
		FutureMod.initCompatibilityChecks();
		FutureMod.addGameExtentions();
	
	/* Adds topics to the game */
		FutureMod.addTopic();
		
	/* Adds platforms to the game */
		FutureMod.addPlatformVoidOne();
		FutureMod.addPlatformVosCall();
		
	/* Adds researches to the game */
		FutureMod.addResearch();
		
	};
	
	var error = function () {
	};
	
	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/FuturisticalTech/source/source.js'
	], ready, error);
})();
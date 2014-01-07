(function () {
	var ready = function () {
	/* Adds platforms to the game */
		FutureMod.addPlatformVoid1();
		
	/* Adds researches to the game */
		FutureMod.addResearch();
		
	};
	
	var error = function () {
	};
	
	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/FutureMod/source/source.js'
	], ready, error);
})();
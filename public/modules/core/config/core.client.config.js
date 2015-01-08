'use strict';

// Configuring the Core module
angular.module('core').run(['Menus',
	function(Menus) {
		// Add MEAN.js -info to the topbar
		Menus.addMenuItem('topbar', 'MEAN.js', 'meanjs', 'item', '/meanjs');
	}
]);
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// SCRIPT

	// BOTTOM BEFORE CLOUSURE
	var init = function() {
		console.log('cornerstone API works');
		// myFunctions();
	};
	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	cornerstoneAPI.init();

});
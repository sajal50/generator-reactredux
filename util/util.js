'use strict';
module.exports = {

	capitalizeFirstLetter : function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	fixPathForCapitalizeLetter: function (string) {

		let arrayOfPath = string.split('/');
		arrayOfPath[arrayOfPath.length-1] =  arrayOfPath[arrayOfPath.length-1].charAt(0).toUpperCase() + arrayOfPath[arrayOfPath.length-1].slice(1);
		return arrayOfPath.join('/');
	},
	generatePathForCotainersComponent : function (path) {
		path = 'components/' + path;
		let prepend = '';
		for (var i = path.split('/').length; i >= 1; i--) {
			prepend += '../'
		}
		path = prepend+path;
		return path;
		
	}


};
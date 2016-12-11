'use strict';
module.exports = {

	capitalizeFirstLetter : function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	fixComponentPathForCapitalizeLetter (string) {

		let arrayOfPath = string.split('/');
		arrayOfPath[arrayOfPath.length-1] =  arrayOfPath[arrayOfPath.length-1].charAt(0).toUpperCase() + arrayOfPath[arrayOfPath.length-1].slice(1);
		return arrayOfPath.join('/');
	}


};
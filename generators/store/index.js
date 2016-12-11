'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.Base.extend({

  writing : function () {

    this.fs.copy(
        
        this.templatePath('_store/_store.js'),
        this.destinationPath('app/store/store.js')
      );


  }

});

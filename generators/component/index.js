'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require ('../../util/util.js');

module.exports = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.option('stateless');
    
  },

  prompting : function () {


    var done = this.async();
    this.prompt({

        type: 'input',
        name: 'componentNamePath',
        message: 'Enter the component (./components/) ',
        default : this.appname

    }).then ( (answers) => {

        this.props = answers;
        done();

    });
   

  },

  writing : function () {
  	let componentNamePath = util.fixComponentPathForCapitalizeLetter(this.props.componentNamePath);
  	let componentName = componentNamePath.split('/').pop() + 'Component';
  	if (this.option('stateless')) {

  		this.fs.copyTpl(
        
	        this.templatePath('_stateless/_component.js'),
	        this.destinationPath(`app/components/${componentNamePath}/${componentName}.js`), {
	          componentName: componentName
	        }
      	);


  	} else {

  		this.fs.copyTpl(
        
	        this.templatePath('_stateful/_component.js'),
	        this.destinationPath(`app/components/${componentNamePath}/${componentName}.js`), {
	          componentName: componentName
	        }
	     );

  	}

    this.fs.copy(
        
        this.templatePath('_assets/_component.scss'),
        this.destinationPath(`app/components/${componentNamePath}/assets/${componentName}.scss`), {
          componentName: componentName
        }
      );


  }

});

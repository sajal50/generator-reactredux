'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require ('../../util/util.js');

module.exports = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('containerNamePathArgument', {type:String, required: false});
    this.option('stateless');
    
  },

  prompting : function () {


    var done = this.async();

    if (this.containerNamePathArgument) {
      this.props = {containerNamePath: this.containerNamePathArgument}
      done();

    } else {
      this.prompt({

        type: 'input',
        name: 'containerNamePath',
        message: 'Enter the container (./containers/) ',
        default : this.appname

      }).then ( (answers) => {

          this.props = answers;
          done();

      });


    }
    
   

  },

  writing : function () {
  	let containerNamePath = util.fixPathForCapitalizeLetter(this.props.containerNamePath)+'Container';
  	let componentPathInTemplate = util.generatePathForCotainersComponent(containerNamePath);
  	let componentName = util.fixPathForCapitalizeLetter(this.props.containerNamePath).split('/').pop() + 'Component';
    let containerName = containerNamePath.split('/').pop();
    this.fs.copyTpl(
        
        this.templatePath('_container.js'),
        this.destinationPath(`app/containers/${containerNamePath}/${containerName}.js`), {
          componentName: componentName,
          componentPathInTemplate: componentPathInTemplate

        }
    );
    this.log(util.fixPathForCapitalizeLetter(this.props.containerNamePath));
    this.composeWith('reactredux:component',{
        args : [this.props.containerNamePath]
    });


  }

});

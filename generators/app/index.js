'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.Base.extend({

  prompting : function () {
    var done = this.async();
    
    this.prompt({

      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname

    }).then ( (answers) => {
      this.props = answers;
      done();

    });

  },

  writing : {

    config: function () {

      this.fs.copyTpl(
        
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );

      this.fs.copy(
        
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );

    },

    app : function () {

      this.fs.copyTpl(
        
        this.templatePath('_public/_index.html'),
        this.destinationPath('public/index.html'), {
          name: this.props.name
        }
      );



      this.fs.copy(
        
        this.templatePath('_app/_app.js'),
        this.destinationPath('app/app.js')
      );
      
      this.composeWith('reactredux:reducer',{
        options: {
          "top" : true
        }
      });
      this.composeWith('reactredux:store');


      this.fs.copy(
        
        this.templatePath('gitignore_template'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        
        this.templatePath('_public/gitignore_template'),
        this.destinationPath('public/.gitignore')
      );


    },
    install: function() {
      
      this.installDependencies();
    
    }


  },

});

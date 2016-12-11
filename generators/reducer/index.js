'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.option('top');
    
  },

  prompting : function () {


    var done = this.async();
    let flagTop = this.options.top;

    if (flagTop) {
      this.props = {reducerNamePath : 'topReducer'};
      done();

    } else {

      this.prompt({

        type: 'input',
        name: 'reducerNamePath',
        message: 'Enter the reducer (./reducers/) ',
        default : this.appname

      }).then ( (answers) => {

        this.props = answers;
        done();

      });


    }
    
    
   

  },

  writing : function () {

    this.fs.copyTpl(
        
        this.templatePath('_atomic/_reducer.js'),
        this.destinationPath(`app/reducers/${this.props.reducerNamePath}.js`), {
          reducerName: this.props.reducerNamePath.split('/').pop()
        }
      );


  }

});

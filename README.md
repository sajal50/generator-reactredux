# generator-reactredux

## Installation

First, install [Yeoman](http://yeoman.io) and generator-reactredux using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-reactredux
```

Then generate your new project. First go inside the folder where you would want the project to be set up, and then run:

```bash
yo reactredux
```
Follow the onscreen instructions. At then end, you would get a project structure as follows - 
```
app
│   └───store
│       │   store.js
│   └───reducers
│       │   topReducer.js
│   app.js

└───public
│   index.html

webpack.config.js
package.json

```
## Component

To create a new React component 
```
yo reactredux:component
```
Follow the onscreen instructions. This will create a necessary assets folder with a stylesheet file already included. For stateless component add `--stateless`.

## Container

To create a new React container 
```
yo reactredux:container
```
Follow the onscreen instructions. This will also create a corresponding component.

## Reducer

To create a new Redux reducer
```
yo reactredux:reducer
```
Follow the onscreen instructions.


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Sajal Khandelwal]()
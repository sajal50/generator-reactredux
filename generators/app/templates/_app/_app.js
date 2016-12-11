import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store  from './store/store.js';

ReactDOM.render(

	<Provider store = {store}>
		<div>

			Create something awesome.

		</div>

	</Provider>




	,document.getElementById('app'));
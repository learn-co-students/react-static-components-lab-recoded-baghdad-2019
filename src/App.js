import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import { EinsteinQuoteComponent } from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent></CatComponent>
				<EinsteinQuoteComponent></EinsteinQuoteComponent>
				<MouseComponent></MouseComponent>
			</div>
		);
	}
}

export default App;

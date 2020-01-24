import React from 'react';
import { connect } from 'react-redux';
import Weather from './components/Weather';
import Nope from './components/Nope';
import Yup from './components/Yup';
import './App.css';

const mapStateToProps = state => {
	console.log('yo', state);
	return {
		nope: state.nope,
		name: state.person.name
	};
};

function App(props) {
	return (
		<div className='App'>
			<Nope />

			<Weather />
			<Yup />
		</div>
	);
}

export default connect(mapStateToProps, {})(App);

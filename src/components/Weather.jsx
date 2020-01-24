import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from './../actions';

const mapStateToProps = state => {
	console.log('yo', state);
	return {
		gender: state.person.gender,
		picture: state.person.picture,
		location: state.person.location,
		name: state.person.name
	};
};

const Weather = props => {
	return (
		<div id='container'>
			<h1>Be my friend?</h1>
			<div id='card'>
				<img src={props.picture} alt={props.gender} />

				<h2>{props.name}</h2>
				<h3>{props.location}</h3>
				<h3>{props.gender}</h3>
			</div>
			{console.log('hello from component')}
			<button id='another' onClick={props.getWeather}></button>
			<span>Another One!</span>
		</div>
	);
};

export default connect(mapStateToProps, { getWeather })(Weather);

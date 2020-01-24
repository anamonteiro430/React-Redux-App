import React from 'react';
import { connect } from 'react-redux';
import { gofornope } from './../actions';

const mapStateToProps = state => {
	console.log('yo', state);
	return {
		nope: state.nope,
		name: state.person.name
	};
};

const Nope = props => {
	return (
		<div id='nopes'>
			<h1>NOPES</h1>
			<h2>
				<br />
				{props.nope}
			</h2>

			<button className='no' onClick={() => props.gofornope(props.name)}>
				NOPE!
			</button>
		</div>
	);
};

export default connect(mapStateToProps, { gofornope })(Nope);

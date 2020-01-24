import React from 'react';
import { connect } from 'react-redux';
import { goforyup } from './../actions';

const mapStateToProps = state => {
	console.log('yo', state);
	return {
		yup: state.yup,
		name: state.person.name
	};
};

const Nope = props => {
	return (
		<div id='nopes'>
			<h1>YUP</h1>
			<h2>
				<br />
				{props.yup}
			</h2>

			<button className='yes' onClick={() => props.goforyup(props.name)}>
				YUS
			</button>
		</div>
	);
};

export default connect(mapStateToProps, { goforyup })(Nope);

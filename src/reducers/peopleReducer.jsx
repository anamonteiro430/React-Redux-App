import {
	FETCH_WEATHER_START,
	FETCH_WEATHER_SUCCESS,
	FETCH_WEATHER_FAILURE
} from '../actions';

export const initialState = {
	isLoading: false,
	nope: [],
	yup: [],
	person: {
		name: 'kittie',
		gender: 'kittie',
		picture:
			'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80'
	},
	error: false
};

export const peopleReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_WEATHER_START:
			console.log('loading');
			return {
				...state,
				isLoading: true
			};
		case FETCH_WEATHER_SUCCESS:
			console.log('here', action.payload);
			return {
				...state,
				isLoading: false,
				person: {
					name: action.payload.name.first + action.payload.name.last,
					gender: action.payload.gender,
					picture: action.payload.picture.large,
					location: `${action.payload.location.state} - ${action.payload.location.country}`
				}
			};
		case FETCH_WEATHER_FAILURE:
			console.log('failure');
			return {
				...state,
				error: action.payload
			};
		case 'YUP':
			return {
				...state,
				yup: [...state.yup, `${action.payload}, `]
			};
		case 'NOPE':
			console.log('NOPE', action.payload);
			return {
				...state,
				nope: [...state.nope, `${action.payload}, `]
			};
		default:
			return state;
	}
};

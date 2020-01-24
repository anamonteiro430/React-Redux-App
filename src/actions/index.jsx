import axios from 'axios';

export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const getWeather = () => dispatch => {
	dispatch({ type: FETCH_WEATHER_START });
	axios
		.get(`https://randomuser.me/api`)
		.then(res => dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data.results[0] }))
		.catch(err => dispatch({ type: FETCH_WEATHER_FAILURE, payload: err }));
};

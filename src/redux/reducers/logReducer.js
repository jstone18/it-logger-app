import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "../actions/types";

const INITIAL_STATE = {
	logs: null,
	currrent: null,
	loading: false,
	error: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case LOGS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

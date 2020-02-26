import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT
} from "../actions/types";

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
		case ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false
			};
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter(log => log.id !== action.payload),
				loading: false
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
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

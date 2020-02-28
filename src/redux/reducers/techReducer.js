import { GET_TECHS, SET_LOADING } from "../actions/types";

const INITIAL_STATE = {
	techs: null,
	loading: false,
	error: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};

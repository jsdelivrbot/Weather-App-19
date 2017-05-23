import{ FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// DO NOT MANIPULATE THE ARRAY
			// return state.concat([action.payload.data]);
			return [ action.payload.data, ...state ];
			break;
	}
	return state;
}

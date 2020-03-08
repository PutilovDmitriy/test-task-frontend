import { ADD_WALKING, DELITE_WALKING } from '../action';
import {
  FETCH_WALKINGS_BEGIN,
  FETCH_WALKINGS_SUCCESS,
  FETCH_WALKINGS_FAILURE
} from '../action/fetchAction';

const initialState = {
  walks: [],
  loading: false,
  error: null
};

export default function walkings(state = initialState, action) {
  switch(action.type) {
    case FETCH_WALKINGS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_WALKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        walks: action.walkings
      };

    case FETCH_WALKINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        walks: []
      };
      case ADD_WALKING:     
        return Object.assign({}, { walks: state.walks.concat(action.walking), loading: state.loading, error: state.error})
      case DELITE_WALKING:
        let id = () => {for(let i = 0; i < state.walks.length; i++) {
          if(state.walks[i].id === action.id) {
            return i;
          }
        }};
        return Object.assign({}, { walks: [].concat(state.walks.slice(id, 1), state.walks.slice(id+1)), loading: state.loading, error: state.error})        
    default:
      return state;
  }
}

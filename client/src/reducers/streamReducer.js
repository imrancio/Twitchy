import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // mapKeys maps API list to object - id attr is key for each list object
      // allows easy manipulation with ES6
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      // ES6 syntax - ... gets all key/value pairs out of object
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      // ES6 syntax - copy object with new key/value pair
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      // ES6 syntax - Redux always gets new state object
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // payload is stream id to be deleted, omit returns new object
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

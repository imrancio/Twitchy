import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// asynchronous action creator for redux-thunk
export const createStream = formValues => async dispatch => {
  streams.post("/streams", formValues);
};

import { GET_EMAILS,GET_EMAILS_ERROR } from "../slices/email/actionTypes";

const initialState = [];

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAILS: {
      state = action.secretSauce.list;
      return state;
    }
    case GET_EMAILS_ERROR: {
        return ['No Emails Found'];
      }
    default: {
      return state;
    }
  }
};

export default emailReducer;



import { MAKE_SANDWICH,APOLOGIZE } from "../slices/sandwich/actionTypes";

const initialState = [];

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_SANDWICH: {
      state = action.secretSauce.list;
      return state;
    }
    case APOLOGIZE: {
        return ['No Emails Found'];
      }
    default: {
      return state;
    }
  }
};

export default emailReducer;



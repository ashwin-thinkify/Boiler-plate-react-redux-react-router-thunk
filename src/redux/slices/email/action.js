// import {fetchSecretSauce} from '../../services/food.services';
import api from '../../../utils/api'

function makeASandwich(forPerson, secretSauce) {
    return {
      type: 'GET_EMAILS',
      forPerson,
      secretSauce
    }
  }
  
  function GET_EMAILS_ERROR(fromPerson, toPerson, error) {
    return {
      type: 'GET_EMAILS_ERROR',
      fromPerson,
      toPerson,
      error
    }
  }


export function makeASandwichWithSecretSauce(forPerson) {
    // We can invert control here by returning a function - the "thunk".
    // When this function is passed to `dispatch`, the thunk middleware will intercept it,
    // and call it with `dispatch` and `getState` as arguments.
    // This gives the thunk function the ability to run some logic, and still interact with the store.
    return async function saveNewTodoThunk(dispatch, getState) {
        // ✅ Now we can use the text value and send it to the server
        try {
            const emails = await api.get("/");
            dispatch(makeASandwich(forPerson, emails.data));
        } catch (error) {
            dispatch(GET_EMAILS_ERROR('The Sandwich Shop', forPerson, error))
        }
      }
    }
import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

export const ACTION_TYPES = {
  ALL_BOOKS: 'getAllBooks',
  GET_BOOK: 'getbook',
  RESET: 'reset'
};

const initialState = {
  loading: false,
  errorMessage: null,
  updateSuccess: false,
  updateFailure: false,
};

export type BookStoreState = Readonly<typeof initialState>;

// Reducer
export default (state: BookStoreState = initialState, action): BookStoreState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.ALL_BOOKS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.ALL_BOOKS):
      return {
        ...state,
        loading: false,
        updateSuccess: false,
        updateFailure: true,
      };
    case SUCCESS(ACTION_TYPES.ALL_BOOKS):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
        updateFailure: false,
      };
    case REQUEST(ACTION_TYPES.GET_BOOK):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_BOOK):
      return {
        ...state,
        loading: false,
        updateSuccess: false,
        updateFailure: true,
      };
    case SUCCESS(ACTION_TYPES.GET_BOOK):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
        updateFailure: false,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Actions
export const apiUrl = 'api/bookstore';

export const printDebug: (msg: any) => void = msg => {
  /* eslint-disable no-console */
  console.log(msg);
  /* eslint-enable no-console */
}

export const getAllBooks: (searchdata: any) => void = searchdata => async dispatch => {
  printDebug('reducer.getAllBooks');

  await dispatch({
    type: ACTION_TYPES.ALL_BOOKS,
    payload: axios.post(apiUrl + "/" + ACTION_TYPES.ALL_BOOKS , searchdata),
    meta: {
      successMessage: '<strong>Settings saved!</strong>',
    },
  });
};

export const getBookById: (bookid: any) => void = bookid => async dispatch => {
  printDebug('reducer.getBookById');

  await dispatch({
    type: ACTION_TYPES.GET_BOOK,
    payload: axios.post(apiUrl, bookid),
    meta: {
      successMessage: '<strong>Settings saved!</strong>',
    },
  });

};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});

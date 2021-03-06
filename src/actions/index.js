export const EMAIL = 'email';
export const REQUEST = 'REQUEST';
export const RES_SUCCESS = 'RES_SUCCESS';
export const RES_FAILED = 'RES_FAILED';
export const ADD = 'ADD';
export const TOTAL = 'TOTAL';
export const REMOVE = 'REMOVE';

export const request = () => ({
  type: REQUEST,
});

export const actionEmail = (value) => ({
  type: EMAIL,
  payload: {
    value,
  },
});

export const sumTotal = (payload) => ({
  type: TOTAL,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD,
  payload,
});

export const requestSucess = (payload) => ({
  type: RES_SUCCESS,
  payload,
});

export const requestError = (payload) => ({
  type: RES_FAILED,
  payload,
});

export const buttonRemove = (payload) => ({
  type: REMOVE,
  payload,
});

export const apiCurrency = () => async (dispatch) => {
  dispatch(request);
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(requestSucess(data));
  } catch (error) {
    dispatch(requestError(error));
  }
};

import {
  PAYMENT_LIST_FAIL,
  PAYMENT_LIST_REQUEST,
  PAYMENT_LIST_SUCCESS,
} from "../constants/paymentConstants";

export const paymentsListReducer = (state = { payments: [] }, action) => {
  switch (action.type) {
    case PAYMENT_LIST_REQUEST:
      return { loading: true };
    case PAYMENT_LIST_SUCCESS:
      return {
        loading: false,
        payments: action.payload,
      };
    case PAYMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

import axios from "axios";
import {
  PAYMENT_LIST_FAIL,
  PAYMENT_LIST_REQUEST,
  PAYMENT_LIST_SUCCESS,
} from "../constants/paymentConstants";

export const listPayments = () => async (dispatch) => {
  try {
    dispatch({
      type: PAYMENT_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:3001/payments`);

    dispatch({
      type: PAYMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PAYMENT_LIST_FAIL,
      payload: error.response,
    });
  }
};

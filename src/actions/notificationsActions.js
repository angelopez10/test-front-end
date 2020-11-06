import axios from "axios";
import {
  NOTIFICATIONS_LIST_FAIL,
  NOTIFICATIONS_LIST_REQUEST,
  NOTIFICATIONS_LIST_SUCCESS,
} from "../constants/notificationsConstants";

export const listNotifications = () => async (dispatch) => {
  try {
    dispatch({
      type: NOTIFICATIONS_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:3001/notifications`);

    dispatch({
      type: NOTIFICATIONS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTIFICATIONS_LIST_FAIL,
      payload: error.response,
    });
  }
};

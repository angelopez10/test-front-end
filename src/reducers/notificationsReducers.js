import {
  NOTIFICATIONS_LIST_FAIL,
  NOTIFICATIONS_LIST_REQUEST,
  NOTIFICATIONS_LIST_SUCCESS,
} from "../constants/notificationsConstants";

export const notificationsListReducer = (
  state = { notifications: [], date: {} },
  action
) => {
  switch (action.type) {
    case NOTIFICATIONS_LIST_REQUEST:
      return { loading: true };
    case NOTIFICATIONS_LIST_SUCCESS:
      return {
        loading: false,
        notifications: action.payload,
        date: action.date,
      };
    case NOTIFICATIONS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  hotelDetailsReducer,
  hotelListReducer,
} from "./reducers/hotelReducers";
import { notificationsListReducer } from "./reducers/notificationsReducers";
import { paymentsListReducer } from "./reducers/paymentReducers";

const reducer = combineReducers({
  hotelsList: hotelListReducer,
  hotelDetails: hotelDetailsReducer,
  notificationsList: notificationsListReducer,
  paymentsList: paymentsListReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

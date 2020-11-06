import axios from "axios";
import {
  HOTEL_DETAILS_FAIL,
  HOTEL_DETAILS_REQUEST,
  HOTEL_DETAILS_SUCCESS,
  HOTEL_LIST_FAIL,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
} from "../constants/hotelConstants";

export const getHotelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: HOTEL_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:3001/hotels`);

    const result = data.find((hotel) => hotel.id === id);

    dispatch({
      type: HOTEL_DETAILS_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: HOTEL_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const listHotels = () => async (dispatch) => {
  try {
    dispatch({
      type: HOTEL_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:3001/hotels`);

    dispatch({
      type: HOTEL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOTEL_LIST_FAIL,
      payload: error.response,
    });
  }
};

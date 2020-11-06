import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listHotels } from "../actions/hotelActions";

const HotelList = () => {
  const dispatch = useDispatch();

  const hotelsList = useSelector((state) => state.hotelsList);
  const { loading, hotels } = hotelsList;

  useEffect(() => {
    dispatch(listHotels());
  }, []);

  return (
    <div className="row flex-dir-r w96Porc flex-wrap mb30">
      {loading ? <h2>Loading...</h2> : <></>}
      {hotels &&
        hotels.map((hotel) => (
          <>
            <div
              key={hotel.id}
              className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-2 wMin150 hMin150 m2px mt10 bcWhite"
            >
              <h2 className="textsize-1 fs-sbold cWhite">{hotel.name}</h2>
              <a href="#" className="btn bcPurple">
                Reservar
              </a>
            </div>
          </>
        ))}
    </div>
  );
};

export default HotelList;

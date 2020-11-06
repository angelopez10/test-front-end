import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listHotels } from "../actions/hotelActions";
import { Card } from "../styles/Card";
import { StyledButton } from "../styles/StyledButton";
import { Title } from "../styles/Title";

const Hotels = () => {
  const dispatch = useDispatch();

  const hotelsList = useSelector((state) => state.hotelsList);
  const { loading, hotels } = hotelsList;

  useEffect(() => {
    dispatch(listHotels());
  }, []);

  return (
    <div>
      <Title>Hoteles</Title>
      {hotels &&
        hotels.map((hotel) => (
          <>
            <Card>
              <h4 className="textsize-2 fs-regular cBlack">{hotel.name}</h4>
              <StyledButton>Más Información</StyledButton>
            </Card>
          </>
        ))}
    </div>
  );
};

export default Hotels;

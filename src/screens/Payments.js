import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPayments } from "../actions/paymentActions";
import { Card } from "../styles/Card";
import { StyledButton } from "../styles/StyledButton";
import { Title } from "../styles/Title";

const Payments = () => {
  const dispatch = useDispatch();

  const paymentsList = useSelector((state) => state.paymentsList);
  const { loading, payments } = paymentsList;

  useEffect(() => {
    dispatch(listPayments());
  }, []);
  return (
    <div>
      <Title>Pagos Realizados</Title>
      {payments &&
        payments.map((payment) => (
          <>
            <Card secondary>
              <Title className="textsize-2 fs-regular cBlack">
                ID: {payment.idReservation}
              </Title>
              <h4 className="textsize-2 fs-regular cBlack">
                Precio: {payment.price}
              </h4>
              <h4 className="textsize-2 fs-regular cBlack">
                Método de Pago: {payment.Payments}
              </h4>
              <StyledButton>Más Información</StyledButton>
            </Card>
          </>
        ))}
    </div>
  );
};

export default Payments;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNotifications } from "../actions/notificationsActions";
import { Card } from "../styles/Card";
import { StyledButton } from "../styles/StyledButton";
import { Title } from "../styles/Title";

const Notifications = () => {
  const dispatch = useDispatch();

  const notificationsList = useSelector((state) => state.notificationsList);
  const { loading, notifications } = notificationsList;

  useEffect(() => {
    dispatch(listNotifications());
  }, []);
  return (
    <div>
      <Title>Notificaciones</Title>
      {notifications &&
        notifications.map((notification) => (
          <>
            <Card>
              <Title className="textsize-2 fs-regular cBlack">
                {notification.fromUser.name}
              </Title>
              <h4 className="textsize-2 fs-regular cBlack">
                {notification.content}
              </h4>
              <h4 className="textsize-2 fs-regular cBlack">
                {notification.date}
              </h4>
              <StyledButton>Más Información</StyledButton>
            </Card>
          </>
        ))}
    </div>
  );
};

export default Notifications;

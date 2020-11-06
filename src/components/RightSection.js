import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNotifications } from "../actions/notificationsActions";

const RightSection = () => {
  const dispatch = useDispatch();

  const notificationsList = useSelector((state) => state.notificationsList);
  const { loading, notifications } = notificationsList;

  useEffect(() => {
    dispatch(listNotifications());
  }, []);
  return (
    <div>
      <div className="sectionRight mb10">
        <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>
        {notifications &&
          notifications.map((notification) => (
            <>
              <div className="notification mb30 mt10">
                <div className="notif-left flex-display flexa-jcsb">
                  {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                  <h4 className="textsize-3">Mayo</h4>
                </div>
                <div className="notif-right">
                  <h4 className="mt4 textsize-2 fs-regular cBlue">
                    {notification.fromUser.name}
                  </h4>
                  <p className="mt4 textsize-3 cGray">{notification.content}</p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default RightSection;

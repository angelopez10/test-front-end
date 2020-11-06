import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
        <div>
          <h2>Dashboard</h2>
        </div>
        <div>
          <Link className="mr2em" to="/hotels">
            <ion-icon className="icoGray" name="search-outline"></ion-icon>
          </Link>
          <Link className="mr2em" to="/notifications">
            <ion-icon className="icoGray" name="mail-unread-outline"></ion-icon>
          </Link>
          <Link className="mr2em" href="#">
            <ion-icon className="icoGray" name="settings-outline"></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="flex-display flex-dir-r card p10 w96Porc mt10 bcWhite flexa-jcsb">
        <div className="bloque bl mb30 flex-display flex-dir-r">
          <div className="notif-left ">
            <Link to="/notifications">
              <ion-icon
                className="cPurple icoSize3m"
                style={{ fontSize: "3em" }}
                name="mail-open-outline"
              ></ion-icon>
            </Link>
          </div>
          <div className="notif-right">
            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">
              Notificaciones
            </h4>
            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">
              ver detalle
            </h4>
          </div>
        </div>
        <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
          <div className="notif-left ">
            <Link to="/hotels">
              <ion-icon
                className="cPurple  icoSize3m"
                style={{ fontSize: "3em" }}
                name="bed-outline"
              ></ion-icon>
            </Link>
          </div>
          <div className="notif-right">
            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Hoteles</h4>
            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">
              ver listado
            </h4>
          </div>
        </div>
        <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
          <div className="notif-left ">
            <Link to="/payments">
              <ion-icon
                className="cPurple icoSize3m"
                style={{ fontSize: "3em" }}
                name="card-outline"
              ></ion-icon>
            </Link>
          </div>
          <div className="notif-right">
            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">
              Pagos recibidos
            </h4>
            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">
              is simply dum{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

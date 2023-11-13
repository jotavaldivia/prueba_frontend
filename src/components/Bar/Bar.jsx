import React from "react";
import s from "./Bar.module.css";
import user from "../../assets/icons/user.png";
import trunk from "../../assets/icons/trunk.png";
import bag from "../../assets/icons/bag.png";

const Bar = () => {
  return (
    <div className={s.bar_container}>
      <div className={s.bar_container__elements}>
        <div className={s.container__text}>
          <h3>15% Off EN TODO CON EL CÓDIGO: xx15off</h3>
        </div>
        <div className={s.container_icons}>
          <img src={user} width={25} height={25} alt="icono del usuario" />
          <p>Iniciar Sesion </p>
          <img src={trunk} width={23} height={15} alt="icono del usuario" />
          <p>Seguimiento </p>
          <img src={bag} width={25} height={25} alt="icono del usuario" />
          <p>Tiendas </p>
        </div>
      </div>
    </div>
  );
};

export default Bar;

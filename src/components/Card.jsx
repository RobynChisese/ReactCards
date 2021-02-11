import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className={Card.name}>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
      <p>
        E-mail: <a href={props.email}>{props.email}</a>
      </p>
      <p>Telefon: {props.tel}</p>
    </div>
  );
}
export default Card;

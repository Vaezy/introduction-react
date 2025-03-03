import React from "react";

export const TacosCard = ({ name, price, description, stock, imgSrc }) => {
  return (
    <article>
      <img src={imgSrc} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Prix : {price}€</p>
      <p>Stock : {stock}</p>
    </article>
  );
};

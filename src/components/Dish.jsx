import React from "react";

export const Dish = ({ name, price, description, stock, imgSrc }) => {
  return (
    <article>
      <img src={imgSrc} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </article>
  );
};

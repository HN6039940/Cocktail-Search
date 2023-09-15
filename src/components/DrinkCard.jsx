import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard.js";

const DrinkCard = ({ drink }) => {
  const { id, name, image, info, glass } = drink;
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link
          to={`/cocktail/${id}?name=${name}`}
          className="btn btn-primary btn-details btn"
        >
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

export default DrinkCard;

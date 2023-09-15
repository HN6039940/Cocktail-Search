import React from "react";
import DrinkCard from "./DrinkCard";
import Wrapper from "../assets/wrappers/CocktailList.js";

const DrinkList = ({ drinks }) => {
  if (!drinks)
    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Drink not found</h4>
      </div>
    );
  const formateDrinks = drinks.map((drink) => {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      info: drink.strAlcoholic,
      glass: drink.strGlass,
    };
  });
  return (
    <Wrapper>
      {formateDrinks.map((drink) => {
        return <DrinkCard drink={drink} key={drink.id}></DrinkCard>;
      })}
    </Wrapper>
  );
};

export default DrinkList;

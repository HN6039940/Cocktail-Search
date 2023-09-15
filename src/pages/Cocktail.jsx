import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
const lookupCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id: cocktailId } = params;
  return cocktailId;
};

const Cocktail = () => {
  const id = useLoaderData();
  const response = useQuery({
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const result = await axios.get(`${lookupCocktailUrl}${id}`);
      return result.data;
    },
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 2,
  });

  if (response.isLoading)
    return <div className="loading" style={{ margin: "20vh auto" }}></div>;

  const {
    idDrink,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = response.data.drinks[0];

  const cocktailData = response.data.drinks[0];
  const ingredients = Object.keys(cocktailData)
    .filter(
      (key) => key.startsWith("strIngredient") && cocktailData[key] !== null
    )
    .map((key) => cocktailData[key]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>{" "}
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>{" "}
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.join(", ").slice(0, -1)}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;

import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DrinkList from "../components/DrinkList";
import SearchForm from "../components/SearchForm";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async (data) => {
  const url = new URL(data.request.url);
  const searchTerm = url.searchParams.get("name") || "";
  return { searchTerm };
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
    staleTime: 1000 * 60 * 1,
    cacheTime: 1000 * 60 * 2,
  });

  return (
    <section>
      <SearchForm searchTerm={searchTerm} />

      {isLoading ? (
        <div className="loading" style={{ margin: "20vh auto" }}></div>
      ) : (
        <DrinkList drinks={drinks} />
      )}
    </section>
  );
};

export default Landing;

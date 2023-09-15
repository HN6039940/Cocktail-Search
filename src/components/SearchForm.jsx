import React from "react";
import Wrapper from "../assets/wrappers/SearchForm.js";
import { Form, useNavigation } from "react-router-dom";
const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form action="" className="form">
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          placeholder="Search for a cocktail"
          required
          disabled={isSubmit}
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn btn-primary btn-block">
          {isSubmit ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;

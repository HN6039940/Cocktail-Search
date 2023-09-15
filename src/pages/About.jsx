import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/AboutPage";
const About = () => {
  return (
    <Wrapper>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quasi,
          soluta itaque amet ex dignissimos veniam ipsam ipsum facere, corrupti
          aliquid esse consequuntur necessitatibus nihil earum cum doloremque
          maxime similique.
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </Wrapper>
  );
};

export default About;

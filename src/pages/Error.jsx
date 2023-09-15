import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import ErrorImg from "../assets/svgs/not-found.svg";
import BadRequestImg from "../assets/svgs/undraw_cancel_re_pkdm.svg";
const Error = () => {
  const error = useRouteError();

  if (error?.status === 400) {
    return (
      <Wrapper>
        <div className="error-container">
          <img
            src={BadRequestImg}
            alt="not found img"
            style={{ height: "50vh", marginTop: "2rem" }}
          />
          <h3>Bad Request, please check your request and try again</h3>
          <p>You may have mistyped the address or the page may have moved.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }

  if (error?.status === 404) {
    return (
      <Wrapper>
        <div className="error-container">
          <img src={ErrorImg} alt="not found img" />
          <h3>Sorry, the page you tried cannot be found</h3>
          <p>You may have mistyped the address or the page may have moved.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>
          Sorry, something went wrong. Please try again later or contact us.
        </h3>
        <Link to="/">
          <h3 style={{ marginTop: "2rem", fontWeight: 700 }}>Back Home</h3>
        </Link>
      </div>
      ;
    </Wrapper>
  );
};

export default Error;

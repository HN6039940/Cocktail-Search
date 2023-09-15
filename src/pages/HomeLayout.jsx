import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <section>
      <Navbar />
      <section className="page">
        {navigation.state === "loading" ? (
          <div className="loading" style={{ margin: "20vh auto" }}></div>
        ) : (
          <Outlet context={"hello"} />
        )}
      </section>
    </section>
  );
};

export default HomeLayout;

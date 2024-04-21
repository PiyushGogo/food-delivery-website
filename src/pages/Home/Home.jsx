import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [cat, setcat] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={cat} setCategory={setcat} />
      <FoodDisplay category={cat} />
    </div>
  );
};

export default Home;
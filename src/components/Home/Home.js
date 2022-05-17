import React from "react";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <div class="card  text-white ">
        <img src="/assets/bg.jpg" class="card-img" alt="..." height="550px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h2 class="card-title display-2 fw-bold  mb-0">
              New Fasion Arrivals
            </h2>
            <p class="card-text lead fs-2">CHECK OUT ALL TRANDS</p>
          </div>
        </div>
      </div>
      <Products/>
    </>
  );
};

export default Home;

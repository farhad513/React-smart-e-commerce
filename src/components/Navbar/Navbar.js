import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold f-4" href="#">
            FA COLLECTION
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a className="btn btn-outline-dark me-1">
                <i href="/login" className="fa fa-sign-in pe-1"></i>
                Login
              </a>
              <a className="btn btn-outline-dark me-1 ms-2">
                <i href="/logout" className="fa fa-sign-out pe-1"></i>
                Log Out
              </a>
              <a className="btn btn-outline-dark me-1 ms-2">
                <i href="/cart" className="fa fa-cart-plus pe-1"></i>
                Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

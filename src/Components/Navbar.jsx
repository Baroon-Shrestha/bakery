import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="contianer mx-auto py-3">
          <div className="flex items-center justify-around">
            <div>Cakes</div>
            <div className="flex items-center gap-x-4">
              <Link to="/">
                <div>Home</div>
              </Link>
              <Link to="/about">
                <div>About Us</div>
              </Link>
              <Link to="/products">
                <div>Our Products</div>
              </Link>
              <Link to="/contact">
                <div>Contact Us</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

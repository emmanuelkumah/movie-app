import React from "react";
import "../css/Hero.css";
import "../css/hover.css";
import { FiChevronsRight } from "react-icons/fi";
function Hero() {
  return (
    <header className="container">
      <section>
        <h2>Excitement Anywhere, Anytime</h2>
        <h4>Experience Amazing Way to Watch Movies</h4>
        <button className="hero__btn hvr-bob">
          Get Started <FiChevronsRight />
        </button>
      </section>
    </header>
  );
}

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
import halfPantHero from "../../assets/images/glasses-g37aa4d598_1920.jpg";
import coolHero from "../../assets/images/model-ge5233aa11_1920.jpg";
import gunMan from "../../assets/images/men-g70eb3714a_1920.jpg";
import schoolGirl from "../../assets/images/woman-2564660_1280 (2).jpg";
import yellowWoman from "../../assets/images/woman-g379eaa764_1920.jpg";
import kimonoWoman from "../../assets/images/woman-gb480f30f1_1920.jpg";

const Catagories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={halfPantHero} alt="r1" />
          <button>
            <Link className="link" to="/products/1" />
          </button>
        </div>
        <div className="row">
          <img src={coolHero} alt="r2" />
          <button>
            <Link className="link" to="/products/1" />
            New Season
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={kimonoWoman} alt="r3" />
          <button>
            <Link className="link" to="/products/1" />
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={schoolGirl} alt="r4" />
              <button>
                <Link className="link" to="/products/1" />
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={yellowWoman} alt="r5" />
              <button>
                <Link className="link" to="/products/1" />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={gunMan} alt="r6" />
          <button>
            <Link className="link" to="/products/1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catagories;

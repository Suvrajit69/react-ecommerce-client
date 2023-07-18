import React from "react";
import "./products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  // console.log(data);
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter(item => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterProducts">
          <h2>Product Categories</h2>
          {data.map((item) => (
            <div className="inputFilter" key={item.id}>
              <input
                type="checkbox"
                id="1"
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
          <div className="inputFilter">
            <h2>Filter by price</h2>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterProducts">
          <div>
            <h2>Sort by</h2>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("sort[0]=price:asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div>
            <input
              type="radio"
              id="dsc"
              value="dsc"
              name="price"
              onChange={(e) => setSort("sort[0]=price:desc")}
            />
            <label htmlFor="dsc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;

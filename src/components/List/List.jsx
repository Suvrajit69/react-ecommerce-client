import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filter][categories][id]=${catId}${subCats.map(
      item =>`&[filters][sub_categories][id]=${item}`
    )}&[filters][price][$lt]=${maxPrice}&${sort}`
  );
console.log(data)
  return (
    <div className="list">
      {error
        ? "Something went wrong"
        : loading
        ? "loading"
        : data.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;

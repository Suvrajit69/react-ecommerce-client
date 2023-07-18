import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <section className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          officia atque fuga optio sequi. Odio sint amet neque. Aut velit
          expedita ea eligendi! Exercitationem perspiciatis libero ea?
          Voluptate, ratione vero.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;

import "./Product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartReducer";

const Product = () => {
  const id = parseInt(useParams().id);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][id][$eq]=${id}`
  );
  const dispatch = useDispatch()
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data[0]?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data[0]?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data[0]?.attributes?.[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data[0]?.attributes?.title}</h1>
            <p>
              {data[0]?.attributes?.desc}
            </p>
            <span className="price">{data[0]?.attributes?.price}</span>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
              id: data[0].id,
              title: data[0].attributes.title,
              price: data[0].attributes.price,
              img: data[0].attributes.img.data.attributes.url,
              quantity
            }))}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon />
                ADD TO FAVORITE
              </div>
              <div className="item">
                <BalanceIcon />
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

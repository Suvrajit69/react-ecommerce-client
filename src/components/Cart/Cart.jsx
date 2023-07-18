import React from "react";
import "./Cart.scss";
import  DeleteOutlinedIcon  from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Redux/CartReducer";
import{makeRequest} from "../../makeRequest"
import {loadStripe} from "@stripe/stripe-js"

const Cart = () => {
  const products = useSelector(state=> state.cart.products)

  const totalPrice =()=>{
    let total = 0;
    products?.forEach((item)=>(total += item.quantity * item.price))
    return total.toFixed()
  }

  const dispatch = useDispatch()
const stripePromise = loadStripe("pk_test_51NUP8jSHDltnyOvaZtJw122tNBcIE1kaVKDOlmw8oIPOrHezL5ma8DV4ruN63pDiQO830nVNzcEUm9m6R7C43cUE004dypxvuX")

  const handlePayment= async ()=>{
    try {
      const stripe = await stripePromise;
      const response = await makeRequest.post("/orders",{
        products,
      }) 
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
            <img src={import.meta.env.VITE_API_UPLOAD_URL + item.img} alt="" />
            <div className="details">
                <h2>{item.title}</h2>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">
                    {item.quantity} x $ {item.price}
                </div>
            </div>
            <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span className="totalPrice">{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

export default Cart;

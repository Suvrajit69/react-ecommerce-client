import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.scss'
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  const products = useSelector(state=> state.cart.products)

  return (
    <nav>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/women">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/men">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/kids">Kids</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">JITSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/products/kids">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/products/kids">About</Link>
          </div>
          <div className="item">
            <Link to="/products/kids">Contact</Link>
          </div>
          <div className="item">
            <Link to="/products/kids">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <AccountCircleIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <AddShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </nav>
  );
};

export default Navbar;

import React from 'react'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getProducts } from '../Redux/productSlice'
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { openModal } from '../Redux/modelSlice';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { useState } from 'react';
const Navbar = () => {
    const dispatch = useDispatch();
    const [showList, setShowList] = useState(false);
    // const cartItems = useSelector((state) => state.products);
    // const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Get total quantity of items in the cart
    const cartItems = useSelector((state) => state.products.cartItems);

    // Calculate total quantity in cart
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const handleCategoryClick = (categoryId) => {
        dispatch(getProducts(categoryId));
      };
     
      const userdata = useSelector((state) => state.auth.user);
      console.log(userdata,"usjldlk")

      const toggleList = () => {
        setShowList(!showList);
      };
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-white border-bottom border-2 border-bottom-gray">
 <div className="container">
    <a className="navbar-brand" href="#">Shopi</a>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
    <ul class="navbar-nav mr-auto profile-item">
      <li class="nav-item active">
      <Link className="nav-link" to="/main/product"  onClick={() => handleCategoryClick(null)}>All</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/main/clothes"  onClick={() => handleCategoryClick(1)}>Clothes</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/main/electronic"  onClick={() => handleCategoryClick(2)}>Electronics</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/main/furniture"  onClick={() => handleCategoryClick(3)}>Furnitures</Link>
       
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/main/toys"  onClick={() => handleCategoryClick(4)}>Toys</Link>
      </li>
    </ul>
    <ul className="navbar-nav mr-auto profile-item-next">
    <li className="nav-item profile-item-2">
      <Link className="nav-link" onClick={toggleList}><FaCircleUser /></Link>
      </li>
      <li className="nav-item profile-item-1">
        <a className="nav-link" href="#">{userdata?.email}</a>
      </li>
      <li className="nav-item  profile-item-1">
      
        <Link className="nav-link" to="/main/myorders">My Orders</Link>
      </li>
      <li className="nav-item  profile-item-1" >
       
        <Link className="nav-link" to="/main/myaccount">My Accounts</Link>
      </li>
      <li className="nav-item profile-item-1" >
      <a
        className="nav-link"
        onClick={(e) => {
          e.preventDefault(); 
          dispatch(openModal());
        }}
      >
        <HiMiniShoppingCart size={25} style={{ cursor: 'pointer' }} />
        {cartItemCount > 0 && (
                    <span className="cart-count badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                      {cartItemCount}
                    </span>
                  )}
        {/* <span>{cartItemCount} items</span>  */}
      </a>
    </li>
    {showList && (
        <div id="list-example" className="list-group d-sm-none d-md-none d-lg-none">
           <a className="list-group-item list-group-item-action profil-email" href="#">{userdata?.email}</a>
          <Link className="list-group-item list-group-item-action" to="/main/myorders">My Orders</Link>
       
          <Link className="list-group-item list-group-item-action" to="/main/myaccount">My Accounts</Link>
          <a
        className="list-group-item list-group-item-action"
        onClick={(e) => {
          e.preventDefault(); 
          dispatch(openModal());
        }}
      >
        <HiMiniShoppingCart size={25} style={{ cursor: 'pointer' }} />
        {cartItemCount > 0 && (
                    <span className="cart-count badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                      {cartItemCount}
                    </span>
                  )}
        {/* <span>{cartItemCount} items</span>  */}
      </a>
        </div>
      )}
    </ul>
  </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
import React from 'react'
import "./Footer_Cart.css"
import { Navbar } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi';


export default function Footer_Cart() {
  return (
    <div className='footer-cart-main'>
     <div className='footer-cart-nav'>
      <div className='product-sell'>Product Sell</div>
      <div className='footer-cart-nav-right'>
      <div><BiSearch className="search-icon"/><input type="text" placeholder="search" /></div>
      <select name="Last 30 days" id="Last-30-days">
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 30 days">Last 30 days</option>
            </select>
      </div>
     </div>

        <div className='footer-cart-mid-first'> 
         <div className='footer-cart-mid-first-left'>
            Product Name
         </div>
         <div className='footer-cart-mid-first-right'>
            <p>Stock</p>
            <p>Price</p>
            <p>Total Sales</p>
         </div>
         </div>

         <div className='footer-cart-mid-second'> 
         <div className='footer-cart-mid-second-left'>
            <div className='modern-img-div'><img src="modern.jpg"/></div>
            <div className='modern-img-div-text'>Abstract 3D<p>Fitpeo Tech Private Limited</p></div>
            
         </div>
         <div className='footer-cart-mid-second-right'>
            <p>32 in stock</p>
            <p>$ 45.99</p>
            <p>20</p>
         </div>
         </div>

         <div className='footer-cart-mid-third'> 
         <div className='footer-cart-mid-third-left'>
            <div className='graphic-img-div'><img src="graphic.jpg"/></div>
            <div className='graphic-img-div-text'>Abstract 3D<p>Fitpeo Tech Private Limited</p></div>
            
         </div>
         <div className='footer-cart-mid-third-right'>
            <p>32 in stock</p>
            <p>$ 45.99</p>
            <p>20</p>
         </div>
         </div>

    </div>
  )
}

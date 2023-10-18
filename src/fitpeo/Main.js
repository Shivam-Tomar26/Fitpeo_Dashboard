import { Navbar } from "react-bootstrap";
import "./Main.css";
import Cart from "./Cart";
import Mid_Cart from "./Mid_Cart";
import { BiSearch } from 'react-icons/bi';
import { MdCurrencyExchange } from 'react-icons/md';
import {CgNotes } from 'react-icons/cg';
import {MdOutlineAccountBalanceWallet } from 'react-icons/md';
import {FaBagShopping } from 'react-icons/fa6';

import Footer_Cart from "./Footer_Cart";


function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <div className="dashboard">
          <span>@Dashboard</span>
        </div>
        <div className="dashboard-list">
          <div className="list-dashboard">Dashboard</div>
          <div className="list">Product</div>
          <div className="list">Customers</div>
          <div className="list">Income</div>
          <div className="list">Promote</div>
          <div className="list">Help</div>
        </div>

        <div className="dashboard-footer">
            <div className="dashboard-footer-content">
                <div className="img-div"><img src="logo192.png"/></div>
                <div className="dashboard-footer-content-text"><span>shivam</span>
                <p>Product Manager</p></div>
                </div>
        </div>
      </div>

      <div className="main-right">
        <Navbar className="nav">
          <div className="nav-div">
            <span>Hello <b>Fitpeo Tech Private Limited</b></span>
            <div><BiSearch className="search-icon"/><input type="text" placeholder="search" /></div>
          </div>
        </Navbar>

        <div className="cart-div">
          <Cart  logo = {MdCurrencyExchange}  title={"Earning"} amount={"$198k"} per={"37.8%"} month={"This month"} clr = {"#84c4b0"} perClr={"green"}/>
          <Cart logo = {CgNotes} title={"Orders"} amount={"$2.4k"} per={"2%"} month={"This month"} clr={"#b296d9"} perClr={"red"}/>
          <Cart  logo = {MdOutlineAccountBalanceWallet}  title={"Balance"} amount={"$2.4k"} per={"2%"} month={"This month"} clr={"#88b7e3"} perClr={"red"}/>
          <Cart logo = {FaBagShopping} title={"Total Sales"} amount={"$89k"} per={"11%"} month={"This week"} clr={"#e092b4"} perClr={"green"}/>
        </div>

        <div className="mid-div">
          <Mid_Cart />
        </div>

      <div className="footer-div">
       <Footer_Cart/>
      </div>
      
      </div>


    </div>
  );
}

export default Main;

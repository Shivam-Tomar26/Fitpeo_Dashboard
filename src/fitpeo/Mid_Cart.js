import React from "react";
import "./Mid_Cart.css"
import Overview_Bar from "./Overview_Bar";
import { MdCurrencyExchange } from 'react-icons/md';

export default function Mid_Cart() {
  return (
    <div className="mid-cart">
      <div className="overview">
        <div className="overview-nav">
          <span>
            <b>Overview</b>
            <p>Monthly Earning</p>
          </span>
            <select name="Quantity" id="Quantity">
              <option value="Quantity">Quantity</option>
              <option value="Quantity">Quantity</option>
              <option value="Quantity">Quantity</option>
              <option value="Quantity">Quantity</option>
            </select>
        </div>
 
        <div className="overview-div">
            <Overview_Bar height = {"60"} day={"jan"}/>
            <Overview_Bar height = {"40"} day={"Feb"}/>
            <Overview_Bar height = {"100"} day={"Mar"}/>
            <Overview_Bar height = {"70"} day={"Apr"}/>
            <Overview_Bar height = {"80"} day={"May"}/>
            <Overview_Bar height = {"30"} day={"Jun"}/>
            <Overview_Bar height = {"80"} day={"Jul"}/>
            <Overview_Bar height = {"100"} clr = {"purple"} day={"Aug"}/>
            <Overview_Bar height = {"90"} day={"Sep"}/>
            <Overview_Bar height = {"70"} day={"Oct"}/>
            <Overview_Bar height = {"60"} day={"Nov"}/>
            <Overview_Bar height = {"70"}  day = {"Dec"}/>
        </div>
      </div>


      <div className="customer">
      <div className="customer-header"> <h6>Customer</h6>
      <p>Customer that buy products</p></div>
      <div className="customer-footer">
        <div className="inside-customer-footer">
          <span><b>65%</b></span><br/>
          <span className="customer-footer-text">Total New</span>
          <span className="customer-footer-text">Customers</span>
        </div>
      </div>
      </div>
    </div>
  );
}

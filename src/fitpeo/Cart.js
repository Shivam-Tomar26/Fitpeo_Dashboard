import "./Cart.css"
import React from 'react'
import Card from 'react-bootstrap/Card';
// import { MdCurrencyExchange } from 'react-icons/md';
// import { BiSearch } from 'react-icons/bi';



export default function Cart(props) {
  // const {BiSearch} = props.logo;
  console.log(props.logo);
  console.log(props.title);
  console.log(props.amount);
  console.log(props.per);
  console.log(props.month);
  return (
    <div className='cart'>
      <div className='cart-body'>
        <div className='cart-img'><props.logo className="img" style={{backgroundColor:props.clr}}/> </div>
        <div className='cart-text'> 
        <span className="earning">{props.title}</span>
        <span><b>{props.amount}</b></span>
        <span className="month"><span style={{color:props.perClr}}>{props.per}</span>{props.month}</span>
        </div>
      </div>
    </div>
  );
}

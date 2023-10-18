import React from 'react'
import "./Overview_Bar.css"
export default function Overview_Bar(props) {
  const {height, clr,day}  = props;
  const actual_Height = 100-height;
  return (
    <div className='overview-bar'>
      <div   className='outer-bar' style={{ backgroundColor:props.clr}}>
        <div style={{height:`${actual_Height}%`}} className='inner-bar'></div>
      </div>
      
    <div className="footer"> {day}</div>
    </div>
  )
}

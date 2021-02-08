import React, { useEffect } from "react";

const Disp = (props) =>{
    return(
    <div className='w-50'>
    <div className='w-50'>
      <div >
      <img src={`./assets/${props.imag}`} alt="Missing" />
      </div>
      <div className='text-white font-thin'>{props.name}</div>
    </div>
    </div>);
}

export default Disp;
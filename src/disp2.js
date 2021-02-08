import React from "react";

const Disp2 = (props) =>{
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

export default Disp2;
import React, {useState,useEffect, Suspense} from "react";
import back from "./assets/Back.png";
import search from "./assets/search.png";
import data from './api/CONTENTLISTINGPAGE-PAGE1.json';
import data2 from './api/CONTENTLISTINGPAGE-PAGE2.json';
import data3 from './api/CONTENTLISTINGPAGE-PAGE3.json';
import Disp from './display';
const Disp1 = React.lazy(() => import('./disp1'));
const Disp2 = React.lazy(() => import('./disp2'));
//  const Disp = React.lazy(()=>import('./display'));
//import 
const Head = () =>{
  const [state, setState] = useState(false);
  const [input, setInput] = useState('');
 const[contents,setContents] = useState({})
  const onClickHandler=()=>{
    setState(!state);
  }
  const onChange = (e) => {
    setInput(e.target.value);
};

useEffect(()=>{  
   setContents(data);
  },[])

const cont = 'content-items';
    return(
      <div> 
      <div className='sticky top-0 left-0'>
      <div className='bg-header-pattern h-36 relative top-0'>
      <div className='text-white absolute inset-y-20 left-0'>
      <img src={back} className='w-5 h-5 float-left mr-5'/>
        <h3 className='float-right'>{data.page.title}</h3>
      </div>
    </div>
       
    <div className='float-right text-white absolute inset-y-20 right-0'>
    {
      state === true?<div  className='w-64 mb-30 float-left'>
        <input type="text" onChange={onChange} placeholder='Movie Name' name="searchTxt" className='float-right rounded text-black w-25'/>
      <button type='submit' className='border-solid border-1 border-red hover:border-gray-500'>Search</button></div>:null
    }
    <button onClick={onClickHandler} className='w-5 mr-3'><img src={search}/></button>
    
    </div>
      </div>
   
    <div><div className='flex flex-row flex-wrap justify-left space-x-5 space-y-4 bg-black'>
            {data.page['content-items'].content.map((element,i) => { console.log(element['poster-image']);
                     
          return(<Disp key={i} name={element.name} imag={element['poster-image']}/>)
       
        
      })} </div>
      </div>
      {(data2)?
      
       <div><div className='flex flex-row flex-wrap justify-left space-x-5 space-y-4 bg-black'>
       {data2.page['content-items'].content.map((element,i) => { console.log(element['poster-image']);
                
     return(<Suspense fallback={<div>Loading...</div>}>
     <Disp1 key={i} name={element.name} imag={element['poster-image']}/>
     </Suspense>)})}</div></div>:null}
     {(data3)?
      
      <div><div className='flex flex-row flex-wrap justify-left space-x-5 space-y-4 bg-black'>
      {data3.page['content-items'].content.map((element,i) => { console.log(element['poster-image']);
               
    return(<Suspense fallback={<div>Loading...</div>}>
    <Disp2 key={i} name={element.name} imag={element['poster-image']}/>
    </Suspense>)})}</div></div>:null}
      </div>)
}

export default Head;
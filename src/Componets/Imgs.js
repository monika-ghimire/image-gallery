import React from 'react'
import  '../styles/imgsStyles.css';
import {selectImgesList} from '../store/reducer'
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import ImageShow from '../page/ImageShow';
export default function Imgs() {
   
    const imgsList = useSelector(selectImgesList);

    const [imgHover,setImgHover]=useState(false)
    console.log(imgHover);
    // const  IsImgHover=()=>
    // {
    //     setImgHover(true)
    //     console.log(imgHover);
    // }
  return (
   <>
   <h1>This is Images List</h1>
   <ul class='imgsList' >
   {imgsList.map((x)=>(    
        <li > 
        <h2 >{x.w}</h2></li>

))}
    </ul>
    <div>
        <ImageShow  para={"helloe"}/>
    </div>

   </>
  )
}

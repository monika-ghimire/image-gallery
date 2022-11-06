import "./App.css";
import React, { useState } from "react";
import OneImages from "./assetes/OneImages.png";
import SecImages from "./assetes/SecImages.png";
import ThrImages from "./assetes/ThrImages.png";

function App() {
  const [imges, setImages] = useState();

  const imgList = [
    { img: OneImages, id: 0 },
    { img: SecImages, id: 1 },
    { img: ThrImages, id: 2 },
  ];

  const showOnImage = (id) => {
    for (let i = 0; i < imgList.length; i++) {
      if (imgList[i].id == id) {
        console.log(imgList[i].img);
        setImages(imgList[i].img);
        break;
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 imgHolder">
            {imgList.map((x) => (
              // <button onClick={y=>showOnImage(x.id)}>{x.img}</button>

              <img src={x.img} alt="sorry" onClick={(y) => showOnImage(x.id)} />
            ))}
          </div>

          <div className="col-8 ">
          <div className="right-clicked-imgs">
        <img src={imges} alt="sorry" />
      </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import Image from "../../../assets/img.png"
const Slide = () => {
  const [currentValue, setCurrentValue] = useState(0);
  let value = 0;
  const ImageSlide = useRef();
  const images = [
    {
      id: 0,
      src: "https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_1280.jpg",
    },
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2023/03/21/04/09/mountain-7866362_1280.jpg",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2023/04/23/09/40/bird-7945398_640.jpg",
    },
  ];

//   setInterval(() => {
//     setCurrentValue(currentValue + 1);

//   }, 3000);

//     useEffect(() => {
      
//         if(currentValue > images.length){
//             console.log('parroou');
//         }
//         else{
    
//             console.log('continua')
//         }
      
//     }, [currentValue])
    

  return (
    <>
      <div style={{ position: "relative" }}>
        <img id="imageSlide" width={512} src={Image} ref={ImageSlide} alt="" />
        <div style={{ position: "absolute", left: "0", bottom: "0" }}>
          <span style={{ color: "red" }}>{ currentValue > images.length ? 'ddddd': images[currentValue].id + 1 + "/" + images.length}</span>
        </div>
      </div>
    </>
  );
};

export default Slide;

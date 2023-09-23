import React,{useEffect,useRef,useState} from "react";

// const LazyLoadImage = ({ src, alt }) => {
//     const imgRef = useRef(null);
//     const [width, setWidth] = useState(null);
//     const [height, setHeight] = useState(null);
  
//     useEffect(() => {
//       if (imgRef.current) {
//         const imgElement = imgRef.current;
  
//         imgElement.onload = () => {
//           setWidth(imgElement.width);
//           setHeight(imgElement.height);
//         };
//       }
//     }, []);
  
//     return <img ref={imgRef} src={src} alt={alt} width={width} height={height} />;
//   };
  
//   export default LazyLoadImage;
  
  
  
  
  
  
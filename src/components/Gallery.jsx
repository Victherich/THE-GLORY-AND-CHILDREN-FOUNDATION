// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import Swal from "sweetalert2";
// import { FaTimes } from "react-icons/fa";

// // Sample Image Imports (Replace with your actual images)
// import img1 from "../Images/im1.jpeg";
// import img2 from "../Images/im3.jpeg";
// import img3 from "../Images/im4.jpeg";
// import img4 from "../Images/im6.jpeg";
// import img5 from "../Images/launch.jpeg";
// import img6 from "../Images/election.jpeg";

// // Background Animation
// const floating = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(15px); }
//   100% { transform: translateY(0px); }
// `;

// // Styled Components
// const GalleryWrapper = styled.div`
//   position: relative;
//   background: #f9f9f9;
//   padding: 80px 20px;
//   text-align: center;
//   overflow: hidden;
// `;

// // Artistic Background Objects
// const BackgroundObject = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 200px;
//   background: rgba(0, 0, 255, 0.1);
//   border-radius: 50%;
//   top: ${(props) => props.top || "10%"};
//   left: ${(props) => props.left || "10%"};
//   animation: ${floating} 5s infinite ease-in-out;
//   z-index: -1;
// `;

// const ForegroundBrush = styled.div`
//   position: absolute;
//   width: 400px;
//   height: 200px;
//   background: url("https://www.transparenttextures.com/patterns/brush-strokes.png");
//   opacity: 0.2;
//   top: ${(props) => props.top || "60%"};
//   right: ${(props) => props.right || "20%"};
//   z-index: -1;
// `;

// // Title
// const GalleryTitle = styled.h1`
//   font-size: 48px;
//   font-weight: bold;
//   text-transform: uppercase;
//   color: rgba(0, 0, 255, 0.8);
//   margin-bottom: 20px;
// `;

// // Masonry Grid
// const GalleryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 15px;
//   max-width: 1200px;
//   margin: auto;
// `;

// // Gallery Item
// const GalleryItem = styled.div`
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

//   &:hover img {
//     transform: scale(1.1);
//     filter: brightness(80%);
//   }
// `;

// const GalleryImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.4s ease, filter 0.4s ease;
// `;

// // Lightbox Overlay
// const LightboxOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.9);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 999;
// `;

// const LightboxContent = styled.div`
//   position: relative;
//   max-width: 80%;
//   max-height: 80%;
// `;

// const LightboxImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: -30px;
//   right: -30px;
//   background: white;
//   color: black;
//   border: none;
//   padding: 8px;
//   font-size: 20px;
//   cursor: pointer;
//   border-radius: 50%;
//   transition: 0.3s;

//   &:hover {
//     background: red;
//     color: white;
//   }
// `;

// const images = [img1, img2, img3, img4, img5, img6];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (imgSrc) => {
//     setSelectedImage(imgSrc);
//   };

//   return (
//     <GalleryWrapper>
//       {/* Artistic Background Elements */}
//       <BackgroundObject top="10%" left="5%" />
//       <BackgroundObject top="40%" left="80%" />
//       <ForegroundBrush top="70%" right="10%" />

//       <GalleryTitle>Our Artistic Gallery</GalleryTitle>

//       {/* Image Grid */}
//       <GalleryGrid>
//         {images.map((img, index) => (
//           <GalleryItem key={index} onClick={() => handleImageClick(img)}>
//             <GalleryImage src={img} alt={`Gallery Image ${index + 1}`} />
//           </GalleryItem>
//         ))}
//       </GalleryGrid>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <LightboxOverlay onClick={() => setSelectedImage(null)}>
//           <LightboxContent>
//             <LightboxImage src={selectedImage} alt="Enlarged Image" />
//             <CloseButton onClick={() => setSelectedImage(null)}>
//               <FaTimes />
//             </CloseButton>
//           </LightboxContent>
//         </LightboxOverlay>
//       )}
//     </GalleryWrapper>
//   );
// };

// export default Gallery;























// ##################################################################################################333333333333
// import React, { useState } from "react";
// import styled, { keyframes, css } from "styled-components";
// import { FaTimes } from "react-icons/fa";

// // Image Imports
// import img1 from "../Images/im1.jpeg";
// import img2 from "../Images/im3.jpeg";
// import img3 from "../Images/im4.jpeg";
// import img4 from "../Images/im6.jpeg";
// import img5 from "../Images/launch.jpeg";
// import img6 from "../Images/election.jpeg";

// // Floating Animation
// const floating = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(15px) rotate(5deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `;

// // Background Animation
// const rotate = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// // Styled Components
// const GalleryWrapper = styled.div`
//   position: relative;
//   background: linear-gradient(135deg, #ece9e6, #ffffff);
//   padding: 80px 20px;
//   text-align: center;
//   overflow: hidden;
// `;

// // Artistic Background Elements
// const FloatingShape = styled.div`
//   position: absolute;
//   width: ${(props) => props.size || "150px"};
//   height: ${(props) => props.size || "150px"};
//   background: ${(props) => props.bgColor || "rgba(255, 0, 0, 0.2)"};
//   border-radius: ${(props) => (props.circle ? "50%" : "10px")};
//   top: ${(props) => props.top || "10%"};
//   left: ${(props) => props.left || "10%"};
//   animation: ${floating} ${(props) => props.duration || "6s"} infinite ease-in-out;
//   z-index: -1;
//   filter: blur(10px);
// `;

// const RotatingElement = styled.div`
//   position: absolute;
//   width: 100px;
//   height: 100px;
//   border: 4px solid rgba(0, 0, 255, 0.3);
//   border-radius: 50%;
//   top: 20%;
//   right: 15%;
//   animation: ${rotate} 10s linear infinite;
//   z-index: -1;
// `;

// // Title
// const GalleryTitle = styled.h1`
//   font-size: 48px;
//   font-weight: bold;
//   text-transform: uppercase;
//   color: rgba(0, 0, 255, 0.8);
//   margin-bottom: 40px;
//   letter-spacing: 3px;
// `;

// // Irregular Grid Layout
// const GalleryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-auto-rows: 200px;
//   gap: 20px;
//   max-width: 1200px;
//   margin: auto;
// `;

// // Different Image Sizes
// const GalleryItem = styled.div`
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: ${(props) => props.border || "10px"};
//   box-shadow: 5px 5px 15px rgba(0, 0,255, 0.3);
//   grid-column: ${(props) => props.columnSpan || "span 1"};
//   grid-row: ${(props) => props.rowSpan || "span 1"};

//   &:hover img {
//     transform: scale(1.1);
//     filter: brightness(80%);
//   }
// `;

// const GalleryImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.4s ease, filter 0.4s ease;
//   border-radius: ${(props) => props.border || "10px"};
// `;

// // Lightbox Modal
// const LightboxOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 255, 0.9);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 999;
// `;

// const LightboxContent = styled.div`
//   position: relative;
//   max-width: 80%;
//   max-height: 80%;
// `;

// const LightboxImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: -30px;
//   right: -30px;
//   background: white;
//   color: black;
//   border: none;
//   padding: 8px;
//   font-size: 20px;
//   cursor: pointer;
//   border-radius: 50%;
//   transition: 0.3s;

//   &:hover {
//     background: red;
//     color: white;
//   }
// `;

// const images = [
//   { src: img1, columnSpan: "span 2", rowSpan: "span 1", border: "20px" },
//   { src: img2, columnSpan: "span 1", rowSpan: "span 2", border: "30px" },
//   { src: img3, columnSpan: "span 1", rowSpan: "span 1", border: "10px" },
//   { src: img4, columnSpan: "span 1", rowSpan: "span 1", border: "15px" },
//   { src: img5, columnSpan: "span 2", rowSpan: "span 1", border: "20px" },
//   { src: img6, columnSpan: "span 1", rowSpan: "span 2", border: "25px" },
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (imgSrc) => {
//     setSelectedImage(imgSrc);
//   };

//   return (
//     <GalleryWrapper>
//       {/* Floating Artistic Elements */}
//       <FloatingShape top="5%" left="5%" size="180px" bgColor="rgba(255, 0, 0, 0.3)" circle />
//       <FloatingShape top="80%" left="80%" size="200px" bgColor="rgba(0, 255, 255, 0.2)" />
//       <RotatingElement />

//       <GalleryTitle>Our Irregular Artistic Gallery</GalleryTitle>

//       {/* Irregular Image Grid */}
//       <GalleryGrid>
//         {images.map((img, index) => (
//           <GalleryItem
//             key={index}
//             columnSpan={img.columnSpan}
//             rowSpan={img.rowSpan}
//             border={img.border}
//             onClick={() => handleImageClick(img.src)}
//           >
//             <GalleryImage src={img.src} alt={`Gallery Image ${index + 1}`} border={img.border} />
//           </GalleryItem>
//         ))}
//       </GalleryGrid>

//       {/* Lightbox */}
//       {selectedImage && (
//         <LightboxOverlay onClick={() => setSelectedImage(null)}>
//           <LightboxContent>
//             <LightboxImage src={selectedImage} alt="Enlarged Image" />
//             <CloseButton onClick={() => setSelectedImage(null)}>
//               <FaTimes />
//             </CloseButton>
//           </LightboxContent>
//         </LightboxOverlay>
//       )}
//     </GalleryWrapper>
//   );
// };

// export default Gallery;







import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";

// Image Imports
import im3 from '../Images2/im3.jpeg';
import im4 from '../Images2/im4.jpeg';
import im5 from '../Images2/im5.jpeg';
import im6 from '../Images2/im6.jpeg';
import im7 from '../Images2/im7.jpeg';
import im8 from '../Images2/im8.jpeg';
import im9 from '../Images2/im9.jpeg';
import im10 from '../Images2/im10.jpeg';
import im11 from '../Images2/im11.jpeg';
import im12 from '../Images2/im12.jpeg';
import im13 from '../Images2/im13.jpeg';
import im14 from '../Images2/im14.jpeg';
import im15 from '../Images2/im15.jpeg';
import im16 from '../Images2/im16.jpeg';
import im17 from '../Images2/im17.jpeg';
import im18 from '../Images2/im18.jpeg';
import im19 from '../Images2/im19.jpeg';
import im20 from '../Images2/im20.jpeg';
import im21 from '../Images2/im21.jpeg';
import im22 from '../Images2/im22.jpeg';
import im23 from '../Images2/im23.jpeg';
import im24 from '../Images2/im24.jpeg';
import im25 from '../Images2/im25.jpeg';
import im26 from '../Images2/im26.jpeg';
import im27 from '../Images2/im27.jpeg';
// import im28 from '../Images2/im28.jpeg';
import Hero4 from "./Hero4";
import VideoGallery from "./VideoGallery";
import VideoGallery2 from "./VideoGallery2";

// Floating Animation
const floating = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
  50% { transform: translateY(20px) rotate(10deg); opacity: 1; }
  100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
`;

// Background Animation
const rotate = keyframes`
  0% { transform: rotate(0deg); opacity: 0.5; }
  100% { transform: rotate(360deg); opacity: 0.7; }
`;

// Styled Components
const GalleryWrapper = styled.div`
  position: relative;
//   background: linear-gradient(135deg, #ece9e6, #ffffff);
background:rgba(0,0,255,0.1);
  padding: 50px 0px;
  text-align: center;
  overflow: hidden;

  @media(max-width:768px){
    padding-top:10px;
  }
`;

// Floating Artistic Backgrounds
const FloatingShape = styled.div`
  position: absolute;
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "150px"};
  background: ${(props) => props.bgColor || "rgba(255, 0, 0, 0.3)"};
  border-radius: ${(props) => (props.circle ? "50%" : "20%")};
  top: "50%";
  left: ${(props) => props.left || "10%"};
  animation: ${floating} ${(props) => props.duration || "6s"} infinite ease-in-out;
  z-index: 2;
  filter: blur(5px);
  opacity: 0.8;
`;

const RotatingElement = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 6px solid rgba(0, 0, 255, 0.3);
  border-radius: 50%;
  top: 50%;
  right: 15%;
  animation: ${rotate} 15s linear infinite;
  z-index: 1;
`;

// Title
const GalleryTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(0, 0, 255, 0.8);
  margin-bottom: 40px;
  letter-spacing: 3px;
`;

// Irregular Grid Layout
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 220px;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
`;

// Image Frame & Hover Effects
// const GalleryItem = styled.div`
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: ${(props) => props.border || "10px"};
//   box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
//   grid-column: ${(props) => props.columnSpan || "span 1"};
//   grid-row: ${(props) => props.rowSpan || "span 1"};
// //   border: 6px solid rgba(0, 0, 255, 0.5); /* 🔵 Blue Frame */

//   &:hover img {
//     transform: scale(1.1);
//     filter: brightness(80%);
//   }
// `;

// const GalleryItem = styled.div`
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: ${(props) => props.border || "10px"};
//   box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
//   grid-column: ${(props) => props.columnSpan || "span 1"};
//   grid-row: ${(props) => props.rowSpan || "span 1"};
//   border: ${(props) => props.border || "10px"} solid rgba(0,0,255,0.5); /* 🔵 Fixed Blue Border */
  
//   &:hover img {
//     transform: scale(1.1);
//     filter: brightness(80%);
//   }
// `;

const GalleryItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${(props) => props.border || "10px"};
  border: ${(props) => props.border || "10px"} solid #000050; /* 🔵 Single Blue Border */
  grid-column: ${(props) => props.columnSpan || "span 1"};
  grid-row: ${(props) => props.rowSpan || "span 1"};

  &:hover img {
    transform: scale(1.1);
    filter: brightness(80%);
  }
`;



const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
//   border-radius: ${(props) => props.border || "10px"};
`;

// Lightbox Modal
const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow:scroll;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
  width:80%;
  height:80%;
`;

const LightboxImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 45%;
  background: white;
  color: black;
  border: none;
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    background: red;
    color: white;
  }
`;

const images = [
  { src: im3, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
  { src: im4, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2:"1px" },
  { src: im5, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2:"1px" },
  { src: im6, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2:"1px" },
  { src: im7, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2:"1px" },
  { src: im8, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2:"1px" },
  { src: im9, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
  { src: im10, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2:"1px" },
  { src: im11, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2:"1px" },
  { src: im12, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2:"1px" },
  { src: im13, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2:"1px" },
  { src: im14, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2:"1px" },

    { src: im15, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
  { src: im16, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2:"1px" },
  { src: im17, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2:"1px" },
  { src: im18, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2:"1px" },
  { src: im19, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2:"1px" },
  { src: im20, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2:"1px" },

      { src: im21, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
  { src: im22, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2:"1px" },
  { src: im23, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2:"1px" },
  { src: im24, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2:"1px" },
  { src: im25, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2:"1px" },
  { src: im26, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2:"1px" },

        { src: im27, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  return (
    <GalleryWrapper>
        <Hero4/>
        <VideoGallery2/>
      {/* Floating Artistic Elements */}
      <FloatingShape top="5%" left="5%" size="180px" bgColor="rgba(255, 0, 0, 0.4)" circle />
      <FloatingShape top="80%" left="80%" size="200px" bgColor="rgba(0, 255, 255, 0.3)" />
      <RotatingElement />

      <GalleryTitle></GalleryTitle>
      <p style={{fontStyle:"italic", marginBottom:"20px", fontWeight:"bold", color:"rgba(0,0,255,0.7)"}}>(Click image to expand)</p>

      {/* Irregular Image Grid */}
      <GalleryGrid>
        {images.map((img, index) => (
          <GalleryItem
            key={index}
            columnSpan={img.columnSpan}
            rowSpan={img.rowSpan}
            border={img.border}
            onClick={() => handleImageClick(img.src)}
          >
            <GalleryImage src={img.src} alt={`Gallery Image ${index + 1}`} border={img.border2} />
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* Lightbox */}
      {selectedImage && (
        <LightboxOverlay
        //  onClick={() => setSelectedImage(null)}
         >
          <LightboxContent>
            <LightboxImage src={selectedImage} alt="Enlarged Image" />
            <CloseButton onClick={() => setSelectedImage(null)}>
              <FaTimes /> Close
            </CloseButton>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;

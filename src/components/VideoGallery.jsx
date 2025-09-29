

// import React, { useRef, useEffect } from "react";
// import styled from "styled-components";
// // import video1 from "../videos/m3.mp4";
// // import video2 from "../videos/m2.mp4";

// const VideoSection = styled.section`
//   padding: 60px 0px;
// //   background: #f0f4f8;
// background: rgba(255, 192, 203, 0.473);
//   display: flex;
//   gap: 30px;
//   justify-content: center;
//   align-items: center;
//   // flex-wrap: wrap;
//   flex-direction:column;
// `;

// const VideoSection2 = styled.section`
//   padding: 20px 20px;
// //   background: #f0f4f8;
// // background: rgba(255, 192, 203, 0.473);
//   display: flex;
//   gap: 30px;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   width:100%;
// `;

// const VideoBox = styled.div`
//   position: relative;
//   flex: 1;
//   max-width: 500px;
//   min-width: 200px;
// //   height:250px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//   border-radius: 12px;
//   overflow: hidden;
//   background: #000;
// `;

// const StyledVideo = styled.video`
//   width: 100%;
//   height: auto;
//   display: block;
//   object-fit:cover;
// `;

// const OverlayText = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: rgba(0, 0, 0, 0.6);
//   color: #fff;
//   padding: 8px 14px;
//   border-radius: 6px;
//   font-size: 1rem;
//   font-weight: 500;
//   z-index: 2;
//   font-style:italic;
//   pointer-events: none;
//   text-align:center;
// `;


// const VideoGallery = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.5;
//     }
//   }, []);

//   return (
//     <VideoSection>
// <h2 style={{color:"rgba(255, 0, 43,0.7)"}}>More Highlights</h2>
//      <VideoSection2>
//          <VideoBox>
//         {/* <OverlayText>Making Impacts</OverlayText> */}
//         {/* <StyledVideo src={video1} controls autoPlay muted loop /> */}
//         <StyledVideo src="/videos/m3.mp4" controls autoPlay muted loop />
//       </VideoBox>

//       <VideoBox>
//         {/* <OverlayText>Making Impacts</OverlayText> */}
//         {/* <StyledVideo src={video2} controls autoPlay muted loop /> */}
//         <StyledVideo src="/videos/m2.mp4" controls autoPlay muted loop />
//       </VideoBox>
//      </VideoSection2>
//     </VideoSection>
//   );
// };

// export default VideoGallery;




import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const VideoSection = styled.section`
  padding: 60px 0px;
  background: rgba(255, 192, 203, 0.473);
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const VideoSection2 = styled.section`
  padding: 20px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
`;

const VideoBox = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
  min-width: 280px;
  aspect-ratio: 16 / 9; /* ✅ ensures proper video height */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  background: #000;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* ✅ keeps video scaled properly */
  display: block;
`;

// const OverlayText = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: rgba(0, 0, 0, 0.6);
//   color: #fff;
//   padding: 8px 14px;
//   border-radius: 6px;
//   font-size: 1rem;
//   font-weight: 500;
//   z-index: 2;
//   font-style: italic;
//   pointer-events: none;
//   text-align: center;
// `;

const VideoGallery = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <VideoSection>
      <h2 style={{ color: "rgba(255, 0, 43,0.7)" }}>More Highlights</h2>
      <VideoSection2>
        <VideoBox>
          {/* <StyledVideo
            src="/videos/m3.mp4"
            controls
            autoPlay
            muted
            loop
          /> */}
          <StyledVideo controls autoPlay muted loop>
  <source src="/videos/m3.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</StyledVideo>

        </VideoBox>

        <VideoBox>
          <StyledVideo
            src="/videos/m2.mp4"
            controls
            autoPlay
            muted
            loop
          />
        </VideoBox>
      </VideoSection2>
    </VideoSection>
  );
};

export default VideoGallery;

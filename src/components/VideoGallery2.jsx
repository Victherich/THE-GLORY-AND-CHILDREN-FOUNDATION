import React from "react";
import styled from "styled-components";
import im28 from "../Images2/im28.mp4";
import im29 from "../Images2/im29.mp4";
import im30 from "../Images2/im30.mp4";
import im31 from "../Images2/im31.mp4";
import im32 from "../Images2/im32.mp4";

// Theme colors
const themeBlue = "#1e3a8a";
const themeWhite = "#ffffff";

// Section container
const Section = styled.section`
  background-color: ${themeBlue};
  color: ${themeWhite};
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
`;

const VideoCard = styled.div`
  background: ${themeWhite};
  color: ${themeBlue};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.25);
  }
`;

// Enforce 16:9 aspect ratio for videos
const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height:300px;
  padding-top: 56.25%; /* 16:9 ratio */
  background: #000;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position:top;
  border-bottom: 3px solid ${themeBlue};
`;

const VideoTitle = styled.h3`
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
`;

const videos = [
  { title: "Community Outreach", url: im29 },
  { title: "Empowering Change", url: im31 },
  { title: "Our Mission in Action", url: im30 },
  { title: "Inspiring Hope", url: im32 },
  { title: "Together We Rise", url: im28 },
];


export default function VideoGallery2() {
  return (
    <Section>
      <Title>Our Stories in Motion</Title>
      <VideoGrid>
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <VideoWrapper>
              <StyledVideo controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </StyledVideo>
            </VideoWrapper>
            <VideoTitle>{video.title}</VideoTitle>
          </VideoCard>
        ))}
      </VideoGrid>
    </Section>
  );
}

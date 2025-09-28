
import React from "react";
import styled from "styled-components";
import im28 from "../Images2/im28.mp4";
import im29 from "../Images2/im29.mp4";
import im30 from '../Images2/im30.mp4';
import im31 from "../Images2/im31.mp4";
import im32 from '../Images2/im32.mp4'

// Colors
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

  @media(max-width:320px){
  padding:4rem 0rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
`;

const VideoCard = styled.div`
  background: ${themeWhite};
  color: ${themeBlue};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.5rem;
`;

const VideoTitle = styled.h3`
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

// Example video data
const videos = [

      {
    title: "Community Outreach",
    url: im29,
  },

   {
    title: "Community Outreach",
    url: im31,
  },

       {
    title: "Our Mission in Action",
    url: im30,
  },
    {
    title: "Our Mission in Action",
    url: im32,
  },
  {
    title: "Our Mission in Action",
    url: im28,
  },


];

export default function VideoGallery() {
  return (
    <Section>
      <Title>Our Stories in Motion</Title>
      <VideoGrid>
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <VideoWrapper>
              <Iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
            <VideoTitle>{video.title}</VideoTitle>
          </VideoCard>
        ))}
      </VideoGrid>
    </Section>
  );
}

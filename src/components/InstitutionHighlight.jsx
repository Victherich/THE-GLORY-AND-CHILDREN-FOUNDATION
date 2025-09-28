
import React from "react";
import styled from "styled-components";
import AN from '../Images2/AN.jpeg'

// Colors
const themeBlue = "#1e3a8a";
const themeWhite = "#ffffff";

// Section container
const Section = styled.section`
  background-color: #e4e6eeff;
  color: ${themeWhite};
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  background: ${themeWhite};
  color: ${themeBlue};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 320px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

const TextContent = styled.div`
  padding: 2rem;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color:green;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color:green;
`;

export default function InstitutionHighlight() {
  return (
    <Section>
      <ContentWrapper>
        <Image
          src={AN}
          alt="Institution"
        />
        <TextContent>
          <Title>ANAGKAZO</Title>
          <Description>
            ANAGKAZO is a platform where young people prayer for growth. It all originated from a small group called MIDNIGHT CRY . God gave a revelation  to change the name to ANAGKAZO , which means "compelling power." WE focus on prayer, specifically from Monday to Friday between 1:00 AM and 1:30 AM, as led by the Spirit.  God is doing mighty miracles among us.. 
Thank You Jesus 🙏
          </Description>
        </TextContent>
      </ContentWrapper>
    </Section>
  );
}


import React from "react";
import styled from "styled-components";

// Colors
const themeBlue = "#1e3a8a";
const themeWhite = "#ffffff";

// Container for the section
const Section = styled.section`
  background-color: ${themeBlue};
  color: ${themeWhite};
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
`;

// Grid for names
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;

const Card = styled.div`
  background: ${themeWhite};
  color: ${themeBlue};
  padding: 0.5rem;
  border-radius: 1rem;
  font-weight: 600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width:200px;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Data example
const partners = [
  "Mr Dele Nicholas",
  "Segun Tosin Nicholas",
  "Glory Foundation Trust",
  "Esther Robinson Ebholo",
  "Esther Esom",
  "Victor Ndu",
];

export default function PartnersSection() {
  return (
    <Section>
      <Title>Our Partners & Volunteers</Title>
      <Subtitle>
        Together, we rise. These incredible people and organizations stand with
        us in building brighter futures and spreading hope.
      </Subtitle>
      <Grid>
        {partners.map((name, index) => (
          <Card key={index}>{name}</Card>
        ))}
      </Grid>
    </Section>
  );
}

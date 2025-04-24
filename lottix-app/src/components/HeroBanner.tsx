import React from "react";
import styled from 'styled-components';

interface HeroBannerProps {
  onClick: ()=>void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ onClick }) => {
  return (
    <HeroBannerContainer>
      <Heading>Win Concert Tickets</Heading>
      <Heading>For Just $3</Heading>
      <Description>Enter our lottery for a chance to see your favorite artists live!</Description>
      <SearchButton onClick={onClick}>Search Events</SearchButton>
    </HeroBannerContainer>
  );
};

export default HeroBanner;

const HeroBannerContainer = styled.div`
  background-color: #1A237E;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  text-align: center;
  color: white;
`;

const Heading = styled.h2`
  font-size: 4.5rem;
  font-weight: bold;
  margin: 0 0;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const SearchButton = styled.button`
  background-color: #E10098;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #C31884;
  }
`;
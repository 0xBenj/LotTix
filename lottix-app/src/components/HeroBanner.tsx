import React from "react";
import styled from 'styled-components';

interface HeroBannerProps {}

const HeroBanner: React.FC<HeroBannerProps> = () => {
  return (
    <HeroBannerContainer>
      <MainHeading>Win Concert Tickets</MainHeading>
      <SubHeading>For Just $3</SubHeading>
      <Description>Enter our lottery for a chance to see your favorite artists live!</Description>
      <SearchButton>Search Events</SearchButton>
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
  padding: 3rem;
  text-align: center;
  color: white;
`;

const MainHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubHeading = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  background-color: #E10098;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #C31884;
  }
`;
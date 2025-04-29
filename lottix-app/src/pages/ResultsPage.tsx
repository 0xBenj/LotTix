import React from "react";
import styled from 'styled-components';
import { ConcertEvent, concertEvents } from "../data/concertData";

interface WinnerModalProps {
  c: ConcertEvent;
}

const testEvent = concertEvents[3]

const ResultsPage: React.FC<WinnerModalProps> = ( {c = testEvent } ) => {
  return (
    <ModalContainer>
      <ConfettiBanner>
        <ConfettiCircle>
          <ConfetttiIcon />
        </ConfettiCircle>
      </ConfettiBanner>
      <Title>Congratulations!</Title>
      <Subtitle>You Won The Lottery!</Subtitle>
      <ConcertImage />
      <ConcertTitle>{c.artistName} • {c.concertName}</ConcertTitle>
    </ModalContainer>
  );
};

export default ResultsPage;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  margin-top: 100px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  position: relative;
  border: 3px solid #e91e9e;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ConfettiBanner = styled.div`
  background-color: #ffe6f2;
  width: 100%;
  padding: 1rem 0;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const ConfettiCircle = styled.div`
  background-color: #ffb6d9;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #e91e9e;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
`;

const ConcertImage = styled.div`
  background-color: #121633;
  height: 120px;
  border-radius: 8px;
  margin: 2rem;
  margin-bottom: 1rem;
`;

const ConcertTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const ConfetttiIcon = styled.div`
  &:before {
    font-size: 40px;
    border-radius: 50% / 50%;
    padding: 2px;
    content: "🎉";
  }
`;
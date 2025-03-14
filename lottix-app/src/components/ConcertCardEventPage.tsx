import React from "react";
import styled from "styled-components";

type ConcertCardProps = {
  id: number;
  name: string;
  artist: string;
  date: string;
  time: string;
  genre?: string;
  venue: string;
  city: string;
  state?: string;
  country: string;
  capacity?: number;
  ticketPrice: number;
  lotteryEntryPrice: number | "Free";
  maxEntriesPerUser?: number;
  lotteryDeadline: string;
  winnersAnnounced?: string;
  imageUrl: string;
  description?: string;
  onEnterClick: () => void;
};

const ConcertCard: React.FC<ConcertCardProps> = ({
  name,
  artist,
  date,
  time,
  venue,
  city,
  state,
  country,
  lotteryEntryPrice,
  winnersAnnounced,
  imageUrl,
}) => {
  const location = state ? `${city}, ${state}` : city;
  const formattedEntryPrice = typeof lotteryEntryPrice === 'number' ? `$${lotteryEntryPrice}` : lotteryEntryPrice;
  const spotsRemaining = "150 of 500"; // Example data
  const currentOdds = "1:93"; // Example data

  return (
    <CardContainer>
      <ImageSection imageUrl={imageUrl} />
      <ContentSection>
        <ArtistName>{artist}</ArtistName>
        <TourName>{name}</TourName>
        <HotBadge>HOT!</HotBadge>
        
        <DetailRow>
          <IconContainer>🗓️</IconContainer>
          <div>{date} • {time}</div>
        </DetailRow>
        
        <DetailRow>
          <IconContainer>📍</IconContainer>
          <div>{venue}</div>
        </DetailRow>
        
        <DetailRow>
          <IconContainer>🏙️</IconContainer>
          <div>{location}, {country}</div>
        </DetailRow>
        
        <LotterySection>
          <LotteryTitle>Lottery Details</LotteryTitle>
          
          <DetailItem>
            <DetailLabel>Entry Fee:</DetailLabel>
            <DetailValue>{formattedEntryPrice}</DetailValue>
          </DetailItem>
          
          <DetailItem>
            <DetailLabel>Spots Remaining:</DetailLabel>
            <DetailValue>{spotsRemaining}</DetailValue>
          </DetailItem>
          
          <DetailItem>
            <DetailLabel>Current Odds:</DetailLabel>
            <DetailValue>{currentOdds}</DetailValue>
          </DetailItem>
          
          <DetailItem>
            <DetailLabel>Results:</DetailLabel>
            <HighlightedValue>{winnersAnnounced}</HighlightedValue>
          </DetailItem>
        </LotterySection>
      </ContentSection>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  height: 450px;
  width: 600px;
  display: flex;
  font-family: Arial, sans-serif;
  max-width: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ImageSection = styled.div<{ imageUrl: string }>`
  width: 120%;
  background-color: #111827;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const ContentSection = styled.div`
  width: 60%;
  padding: 10px;
  background-color: white;
  font-size: 0.9em;
  color: rgb(134, 134, 134);
  margin: 5px 0;
`;

const ArtistName = styled.h1`
  margin: 0 0 4px 0;
  font-size: 24px;
  font-weight: bold;
  color: #111827;
`;

const TourName = styled.p`
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #4B5563;
`;

const HotBadge = styled.div`
  display: inline-block;
  background-color: #EC4899;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const IconContainer = styled.div`
  width: 20px;
  margin-right: 8px;
  color: #9CA3AF;
`;

const LotterySection = styled.div`
  background-color: #F9FAFB;
  border-radius: 8px;
  padding: 16px;
`;

const LotteryTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: bold;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DetailLabel = styled.div`
  color: #4B5563;
`;

const DetailValue = styled.div`
  font-weight: bold;
`;

const HighlightedValue = styled(DetailValue)`
  color: #EC4899;
`;

const EnterButton = styled.button`
  background-color: #EC4899;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  margin-top: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #DB2777;
  }
`;

export default ConcertCard;

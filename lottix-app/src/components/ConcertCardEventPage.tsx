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
  const location = state ? `${city}, ${state}` : `${city}, ${country}`;
  const formattedEntryPrice = typeof lotteryEntryPrice === 'number' ? `$${lotteryEntryPrice}` : lotteryEntryPrice;
  const spotsRemaining = "150 of 500"; // Example data
  const currentOdds = "1:93"; // Example data

  return (
    <CardContainer>
      <ImageSection imageUrl={imageUrl} />
      <ContentSection>
        <HeaderSection>
          <ArtistName>{artist}</ArtistName>
          <TourName>{name}</TourName>
          <HotBadge>HOT!</HotBadge>
        </HeaderSection>
        
        <DetailRow>
          <CalendarIcon />
          <DetailText>{date} • {time}</DetailText>
        </DetailRow>
        
        <DetailRow>
          <LocationIcon />
          <DetailText>{venue}</DetailText>
        </DetailRow>
        
        <DetailRow>
          <CityIcon />
          <DetailText>{location}</DetailText>
        </DetailRow>
        
        <LotterySection>
          <LotteryTitle>Lottery Details</LotteryTitle>
          <LotteryDetailsCard>
            <LotteryDetailsGrid>
              <DetailLabel>Entry Fee:</DetailLabel>
              <DetailValue>{formattedEntryPrice}</DetailValue>
              
              <DetailLabel>Spots Remaining:</DetailLabel>
              <DetailValue>{spotsRemaining}</DetailValue>
              
              <DetailLabel>Current Odds:</DetailLabel>
              <DetailValue>{currentOdds}</DetailValue>
            </LotteryDetailsGrid>
            
            <ResultsRow>
              <DetailLabel>Results:</DetailLabel>
              <HighlightedValue>{winnersAnnounced}</HighlightedValue>
            </ResultsRow>
          </LotteryDetailsCard>
        </LotterySection>
      </ContentSection>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  display: flex;
  max-width: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: left;
`;

const ImageSection = styled.div<{ imageUrl: string }>`
  width: 40%;
  background-color: #111827;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const ContentSection = styled.div`
  width: 60%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  margin-bottom: 16px;
`;

const ArtistName = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #111827;
`;

const TourName = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #4B5563;
`;

const HotBadge = styled.div`
  display: inline-block;
  background-color: #EC4899;
  color: white;
  padding: 2px 10px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 4px;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #6B7280;
`;

const DetailText = styled.div`
  margin-left: 8px;
`;

const CalendarIcon = styled.div`
  &:before {
    content: "🗓️";
    font-size: 14px;
    color: #9CA3AF;
  }
`;

const LocationIcon = styled.div`
  &:before {
    content: "📍";
    font-size: 14px;
    color: #9CA3AF;
  }
`;

const CityIcon = styled.div`
  &:before {
    content: "🏙️";
    font-size: 14px;
    color: #9CA3AF;
  }
`;

const LotterySection = styled.div`
  background-color: #F9FAFB;
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
`;

const LotteryTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #4B5563;
`;

const LotteryDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4px 16px;
  margin-bottom: 12px;
  font-size: 13px;
  margin: 3px
`;

const DetailLabel = styled.div`
  color: #4B5563;
`;

const DetailValue = styled.div`
  font-weight: bold;
  color: #111827;
  text-align: left;
`;

const ResultsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  border-left: 3px solid #9CA3AF;
  font-size: 13px;
`;

const HighlightedValue = styled.div`
  font-weight: bold;
  color: #EC4899;
`;

const LotteryDetailsCard = styled.div`
  display: flex;
`

export default ConcertCard;
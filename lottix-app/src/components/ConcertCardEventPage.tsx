import React from "react";
import styled from "styled-components";

// Example usage
/*        
<ConcertCardEventPage
  id={1}
  name="World's Hottest Tour"
  artist="Bad Bunny"
  date="2025-07-15"
  time="8:00 PM"
  venue="Madison Square Garden"
  city="New York"
  state="NY"
  country="USA"
  lotteryEntryPrice={3}
  winnersAnnounced="2025-07-01"
  imageUrl="https://dummyimage.com/400x400/000000/FFFFFF&text=demo"
/> 
*/

type ConcertCardProps = {
  id: number;
  name: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state?: string;
  country: string;
  lotteryEntryPrice: number | "Free";
  winnersAnnounced: string;
  imageUrl: string;
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
              <PriceValue>{formattedEntryPrice}</PriceValue>
              
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
const SECTION_SIZE = "370px";

const CardContainer = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: left;
`;

const ImageSection = styled.div<{ imageUrl: string }>`
  width: ${SECTION_SIZE};
  height: ${SECTION_SIZE};
  flex-shrink: 0; // Prevents shrinking
  background-color: #111827;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const ContentSection = styled.div`
  width: ${SECTION_SIZE};
  height: ${SECTION_SIZE};
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
  color: #12172D;
`;

const HeaderSection = styled.div`
  margin-bottom: 16px;
`;

const ArtistName = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const TourName = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
`;

const HotBadge = styled.div`
  display: inline-block;
  background-color: #E10098;
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
`;

const DetailText = styled.div`
  margin-left: 8px;
`;

const StyledIcon = styled.div`
  &:before {
    font-size: 12px;
    background: #F2E6FF;
    border-radius: 50% / 50%;
    padding: 2px
  }
`

const CalendarIcon = styled(StyledIcon)`
  &:before {
    content: "🗓️";
  }
`;

const LocationIcon = styled(StyledIcon)`
  &:before {
    content: "📍";
  }
`;

const CityIcon = styled(StyledIcon)`
  &:before {
    content: "🏙️";
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
`;

const LotteryDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4px 16px;
  margin-bottom: 12px;
  font-size: 13px;
  margin: 3px
`;

const DetailLabel = styled.div``;

const PriceValue = styled.div`
  font-weight: bold;
  color: #6610F2;
`

const DetailValue = styled.div`
  font-weight: bold;
`;

const ResultsRow = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  border-left: 3px solid #ECEEEF;
  font-size: 13px;
`;

const HighlightedValue = styled.div`
  font-weight: bold;
  color: #E10098;
`;

const LotteryDetailsCard = styled.div`
  display: flex;
`

export default ConcertCard;
import React from 'react';
import styled from 'styled-components';

type LotteryStatus = 'active' | 'results soon';

interface LotteryEntryProps {
  artist: string;
  tourName: string;
  tourDate: string;
  venue: string;
  city: string;
  state: string;
  entryDate: string;
  currentOdds: string;
  resultsCountdown: string;
  status: LotteryStatus;
}

interface Props {
  entries: LotteryEntryProps[];
}

const LotteryEntryCard: React.FC<LotteryEntryProps> = ({
  artist,
  tourName,
  tourDate,
  venue,
  city,
  state,
  entryDate,
  currentOdds,
  resultsCountdown,
  status,
}) => {
  return (
    <Card>
      <Image src="https://i.ytimg.com/vi/d846WI05ySU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGBMgWSh_MA8=&rs=AOn4CLBmNZpKqvRQRUB5phQfzmDNBU73gg" alt="Concert" />      
      <CardContent>
        <LeftSection>
          <Title>{artist}</Title>
          <Text>{tourName} • {new Date(tourDate).toLocaleDateString()}</Text>
          <Text>{venue} • {city}, {state}</Text>
          <StatusPill status={status}>{status === 'active' ? 'Active' : 'Results Soon'}</StatusPill>
        </LeftSection>
        <RightSection>
          <Meta>Entry Date: {new Date(entryDate).toLocaleDateString()}</Meta>
          <Meta>Current Odds: {currentOdds}</Meta>
          <Meta>
            Results In:{' '}
            <span className={status === 'results soon' ? 'highlight' : ''}>{resultsCountdown}</span>
          </Meta>
        </RightSection>
      </CardContent>
    </Card>
  );
};

const ActiveLotteryEntries: React.FC<Props> = ({ entries }) => {
  return (
    <Section>
      <Heading>Your Active Lottery Entries</Heading>
      {entries.map((entry, idx) => (
        <LotteryEntryCard key={idx} {...entry} />
      ))}
    </Section>
  );
};

export default ActiveLotteryEntries;

// Styled Components
const Section = styled.div`
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #12172D;
  margin-bottom: 32px;
`;

const Card = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

const Image = styled.img`
  width: 20%;
  min-height: 120px;
  object-fit: cover;
  border-radius: 12px;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;
`;

const RightSection = styled.div`
  text-align: right;
  font-size: 14px;
  color: #444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  align-items: flex-start;
  padding-right: 100px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #12172D;
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #555;
  margin: 2px 0;
`;

const Meta = styled.p`
  margin: 0;
`;

const StatusPill = styled.span<{ status: LotteryStatus }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  background-color: ${({ status }) => (status === 'active' ? '#ede9fe' : '#fde2f3')};
  color: ${({ status }) => (status === 'active' ? '#6b46c1' : '#e10098')};
`;
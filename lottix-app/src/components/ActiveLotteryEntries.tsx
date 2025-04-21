import React from 'react';
import styled from 'styled-components';
import type { ConcertEvent } from '../data/concertData.ts';
import type { User } from '../data/userData.ts';

function calculateOdds(userEntries: number, maxEntries: number): string {
  if (maxEntries === 0) return "N/A";
  const odds = (userEntries / maxEntries) * 100;
  return `${odds.toFixed(2)}%`;
}

function getTimeUntilDeadline(lotteryDeadline: string): string {
  const now = new Date();
  const deadline = new Date(lotteryDeadline);
  const diffMs = deadline.getTime() - now.getTime();

  if (diffMs <= 0) return "results available";

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);

  if (diffDays > 0) return ` ${diffDays} day${diffDays !== 1 ? "s" : ""}`;
  if (diffHours > 0) return ` ${diffHours} hour${diffHours !== 1 ? "s" : ""}`;
  return ` ${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""}`;
}

interface LotteryEntryCardProps {
  concert: ConcertEvent;
  userEntries: number;
}

interface ActiveLotteryEntriesProps {
  user: User;
  concertEvents: ConcertEvent[];
}

const LotteryEntryCard: React.FC<LotteryEntryCardProps> = ({ concert, userEntries }) => {
  return (
    <Card>
      <Image src={concert.concertImageUrl} alt={`${concert.artistName} concert poster`} />
      <CardContent>
        <LeftSection>
          <Title>{concert.artistName}</Title>
          <Text>{concert.tourName} • {new Date(concert.concertDate).toLocaleDateString()}</Text>
          <Text>{concert.venueName} • {concert.city}, {concert.state}, {concert.country}</Text>
        </LeftSection>
        <RightSection>
          <Meta>Current Odds: {calculateOdds(userEntries, concert.maxEntries)}</Meta>
          <Meta>Results in: {getTimeUntilDeadline(concert.lotteryDeadline)}</Meta>
        </RightSection>
      </CardContent>
    </Card>
  );
};

const ActiveLotteryEntries: React.FC<ActiveLotteryEntriesProps> = ({ user, concertEvents }) => {
  const activeEntries = user.entries
    .map(entry => {
      const concert = concertEvents.find(c => c.concertID === entry.concertID);
      return concert ? { concert, userEntries: entry.numberOfEntries } : null;
    })
    .filter(Boolean) as { concert: ConcertEvent; userEntries: number }[];

  return (
    <Section>
      <Heading>Your Active Lottery Entries</Heading>
      {activeEntries.map(({ concert, userEntries }) => (
        <LotteryEntryCard key={concert.concertID} concert={concert} userEntries={userEntries} />
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
import React from 'react';
import ConcertCard from '../components/ConcertCard';
import { BackButton, EnterButton, ShareButton, EventDescription, LotterySteps } from '../components/ButtonsAndDescriptions';

const LandingPage: React.FC = () => {
  const handleEnter = () => alert('Entered raffle!');
  const handleShare = () => alert('Shared!');
  const handleBack = () => alert('Going back!');

  return (
    <div style={{ padding: '20px' }}>
      {/* Card grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <ConcertCard
          concertID={1}
          concertName="Summer Jam 2025"
          artistName="The Weeknd"
          concertDate="2025-07-15"
          concertTime="8:00 PM"
          venueName="Madison Square Garden"
          city="New York"
          state="NY"
          country="USA"
          ticketPrice={120}
          entryPrice={10}
          lotteryDeadline="2025-06-30"
          concertImageUrl="https://muzikercdn.com/uploads/products/4372/437220/main_a680a23e.jpg"
          onEnterClick={() => alert('Lottery entered!')}
        />
        <ConcertCard
          concertID={2}
          concertName="Rock Fest 2025"
          artistName="Foo Fighters"
          concertDate="2025-08-10"
          concertTime="7:00 PM"
          venueName="Staples Center"
          city="Los Angeles"
          state="CA"
          country="USA"
          ticketPrice={95}
          entryPrice="Free"
          lotteryDeadline="2025-07-25"
          concertImageUrl="https://example.com/concert2.jpg"
          onEnterClick={() => alert('Lottery entered!')}
        />
      </div>

      {/* Event Description */}
      <EventDescription
        content="Bad Bunny brings his electrifying World's Hottest Tour to Madison Square Garden! Experience the global Latin music phenomenon live as he performs his biggest hits from 'Un Verano Sin Ti' and more. Don't miss this unforgettable night of reggaeton, trap, and Latin urban music!"
      />

      {/* Lottery Steps */}
      <LotterySteps
        steps={[
          'Enter the lottery for just $3',
          'We randomly select winners',
          'Winners have 24 hours to claim their ticket',
          'Enjoy the show and share the moment!'
        ]}
      />

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginTop: '32px' }}>
        <BackButton onClick={handleBack} />
        <EnterButton onClick={handleEnter} entryPrice={3} />
        <ShareButton onClick={handleShare} />
      </div>
    </div>
 
  );
  };
  
  export default LandingPage;
import React from 'react';
import ConcertCard from '../components/ConcertCard';
import { BackButton, EnterButton, ShareButton, EventDescription, LotterySteps } from '../components/ButtonsAndDescriptions';
import HeroBanner from '../components/HeroBanner.tsx'

const LandingPage: React.FC = () => {
  const handleEnter = () => alert('Entered raffle!');
  const handleShare = () => alert('Shared!');
  const handleBack = () => alert('Going back!');

  return (
    <div style={{ background: 'red', width: '100vw'}}>
      <HeroBanner />
      <div style={{ padding: '20px' }}>
        {/* Card grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <ConcertCard
            id={1}
            name="Summer Jam 2025"
            artist="The Weeknd"
            date="2025-07-15"
            time="8:00 PM"
            venue="Madison Square Garden"
            city="New York"
            state="NY"
            country="USA"
            ticketPrice={120}
            lotteryEntryPrice={10}
            lotteryDeadline="2025-06-30"
            winnersAnnounced="2025-07-01"
            imageUrl="https://muzikercdn.com/uploads/products/4372/437220/main_a680a23e.jpg"
            onEnterClick={() => alert('Lottery entered!')}
          />
          <ConcertCard
            id={2}
            name="Rock Fest 2025"
            artist="Foo Fighters"
            date="2025-08-10"
            time="7:00 PM"
            venue="Staples Center"
            city="Los Angeles"
            state="CA"
            country="USA"
            ticketPrice={95}
            lotteryEntryPrice="Free"
            lotteryDeadline="2025-07-25"
            winnersAnnounced="2025-07-27"
            imageUrl="https://example.com/concert2.jpg"
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
    </div>
  );
  };
  
  export default LandingPage;
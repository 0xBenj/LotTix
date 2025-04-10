import React from 'react';
import ConcertCard from '../components/ConcertCard';


const LandingPage: React.FC = () => {
    return (
      <div style={{ display: 'flex', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
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
    );
  };
  
  export default LandingPage;
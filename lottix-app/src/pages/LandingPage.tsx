import React from 'react';
import ConcertCard from '../components/ConcertCard';
import { BackButton, EnterButton, ShareButton, EventDescription, LotterySteps } from '../components/ButtonsAndDescriptions';
import HeroBanner from '../components/HeroBanner.tsx'
import DetailedConcertCard from '../components/DetailedConcertCard'; 
import { concertEvents } from '../data/concertData';

const LandingPage: React.FC = () => {
  const handleEnter = () => alert('Entered raffle!');
  const handleShare = () => alert('Shared!');
  const handleBack = () => alert('Going back!');

  return (
   <div>
    <HeroBanner onClick={()=> alert("clicked")}/>
    <div style={{ padding: '20px' }}>
      {/* Card grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        
        <DetailedConcertCard c={concertEvents[0]} />
        <ConcertCard
          concert={{
          concertID:1,
          tourName:"Summer Jam 2025",
          concertName:"The Weeknd- Hits",
          artistName:"The Weeknd",
          concertDate:"2025-07-15",
          concertTime:"8:00 PM",
          venueName:"Madison Square Garden",
          concertDescription: "this is a concert description",
          city:"New York",
          state:"NY",
          country:"USA",
          ticketPrice:120,
          entryPrice:10,
          lotteryDeadline:"2025-06-30",
          concertImageUrl:"https://muzikercdn.com/uploads/products/4372/437220/main_a680a23e.jpg",
          maxEntries: 300,
          entriesSold: 5,
          lotteryWinner: "pending",
          }}
          onEnterClick={() => alert('Lottery entered!')}
        />
        <ConcertCard
          concert={{
          concertID:2,
          tourName:"Rock Fest 2025",
          concertName:"Foo Fum",
          artistName:"Foo Fighters",
          concertDate:"2025-08-10",
          concertTime:"7:00 PM",
          venueName:"Staples Center",
          concertDescription: "this is a concert description",
          city:"Los Angeles",
          state:"CA",
          country:"USA",
          ticketPrice:95,
          entryPrice:"Free",
          lotteryDeadline:"2025-07-25",
          concertImageUrl:"https://cdn.prod.website-files.com/655e0fa544c67c1ee5ce01c7/655e0fa544c67c1ee5ce0f7b_how-to-start-a-band-and-get-booked-og.jpeg",
          maxEntries: 300,
          entriesSold:5,
          lotteryWinner:"pending",
          }}
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
    </div>
  );
  };
  
  export default LandingPage;
import React from 'react';
import ConcertCardEventPage from '../components/ConcertCardEventPage';

const LandingPage: React.FC = () => {
   return (
     <>
       <ConcertCardEventPage
         id={1}
         name="Bad Bunny"
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
         imageUrl="https://dummyimage.com/500x500/cccccc/000000&text=Placeholder"
         onEnterClick={() => alert('Lottery entered!')}
       />
     </>
   );
 };
 
 export default LandingPage;
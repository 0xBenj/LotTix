import React from 'react';
import ConcertCardEventPage from '../components/ConcertCardEventPage';

const LandingPage: React.FC = () => {
   return (
     <>
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
     </>
   );
 };
 
 export default LandingPage;
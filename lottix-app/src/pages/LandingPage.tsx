import React from 'react';
import ConcertCard from '../components/ConcertCard';
import { MultiStepProgress, SpinnerLoader, ProgressBar } from '../components/Loaders';

const LandingPage: React.FC = () => {
    return (
      <div>
        {/* Loader Testing Section */}
        <div className="mb-10 p-6 bg-gray-50 rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-8">Loader Components Test</h1>
          
          <div className="space-y-16">
            {/* MultiStepProgress */}
            <MultiStepProgress 
              currentStep={3} 
              totalSteps={5} 
              stepLabels={['Select', 'Pay', 'Wait', 'Win', 'Attend']} 
            />
            
            {/* SpinnerLoader - Updated to show spinners with labels */}
            <div className="flex justify-center space-x-12">
              <SpinnerLoader size="small" color="#4F46E5" label="Small" showLabel={true} />
              <SpinnerLoader size="medium" color="#7C3AED" label="Medium" showLabel={true} />
              <SpinnerLoader size="large" color="#EC4899" label="Large" showLabel={true} />
            </div>
            
            {/* ProgressBar */}
            <ProgressBar 
              progress={65} 
              currentEntries={1250} 
              maxEntries={2000} 
              color="#7C3AED" 
            />
          </div>
        </div>
        
        {/* Concert Cards Section - Existing Code */}
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
      </div>
    );
  };
  
  export default LandingPage;
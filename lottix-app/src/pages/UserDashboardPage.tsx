import React, { useState } from 'react';
import { DashboardNav, RecentWinners, WinnerEntryProps } from '../components/DashboardAndRecentWinners';
import { concertEvents } from '../data/concertData'; // make sure this is imported

const UserDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Active Entries');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const winners: WinnerEntryProps[] = concertEvents
    .filter(event => event.lotteryWinner !== 'Pending')
    .map(event => ({
      artist: event.artistName,
      city: event.city,
      winnerName: event.lotteryWinner,
      winnerAnnounced: event.lotteryDeadline,
    }))
    .sort((a, b) => new Date(b.winnerAnnounced).getTime() - new Date(a.winnerAnnounced).getTime()) // sort descending (most recent first)
    .slice(0, 3); // pick only the top 3
    

  return (
    <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Intro Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1>🎟️ User Dashboard Page 🎟️</h1>
        <p>Welcome to the User Dashboard page!</p>
      </div>

      {/* Tabs */}
      <DashboardNav activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'Active Entries' && (
        <div style={placeholderStyle}>
            <h3>🎫 Your active lottery entries will appear here soon!</h3>
        </div>
      )}

      {activeTab === 'Winning History' && (
        <div style={placeholderStyle}>
          <h3>🏆 Winning history coming soon!</h3>
        </div>
      )}

      {activeTab === 'Profile Settings' && (
        <div style={placeholderStyle}>
          <h3>⚙️ Profile settings coming soon!</h3>
        </div>
      )}

      {activeTab === 'Notifications' && (
        <div style={placeholderStyle}>
          <h3>🔔 Notifications coming soon!</h3>
        </div>
      )}

      {/* Recent Winners */}
      <RecentWinners winners={winners} />
    </div>
  );
};

export default UserDashboardPage;

// Inline styles
const placeholderStyle: React.CSSProperties = {
  backgroundColor: '#F9F9FB',
  padding: '32px',
  borderRadius: '12px',
  textAlign: 'center',
  marginBottom: '32px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
};
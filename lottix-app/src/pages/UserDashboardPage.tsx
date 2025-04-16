import React, { useState } from 'react';
import { DashboardNav, RecentWinners, WinnerEntryProps } from '../components/DashboardAndRecentWinners';
// import ActiveLotteryEntries from '../components/ActiveLotteryEntries'; // leave this commented for now

const UserDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Active Entries');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const winners: WinnerEntryProps[] = [
    {
      artist: 'Taylor Swift',
      city: 'NYC',
      winnerName: 'Alex W.',
      winnerAnnounced: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    },
    {
      artist: 'Bad Bunny',
      city: 'Miami',
      winnerName: 'Maria L.',
      winnerAnnounced: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
    },
    {
      artist: 'BTS',
      city: 'LA',
      winnerName: 'David K.',
      winnerAnnounced: new Date(Date.now() - 8 * 3600 * 1000).toISOString(),
    },
  ];

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
import React from 'react';
import styled from 'styled-components';

// ========== Types ==========
export type WinnerEntryProps = {
  artist: string;
  city: string;
  winnerName: string;
  winnerAnnounced: string; // ISO string
};

// ========== Utility ==========
const getTimeAgo = (isoDate: string): string => {
  const announced = new Date(isoDate);
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - announced.getTime()) / 1000);
  const hours = Math.floor(secondsAgo / 3600);
  if (hours === 0) return 'Just now';
  if (hours === 1) return '1 hour ago';
  return `${hours} hours ago`;
};

// ========== Dashboard Nav ==========
type DashboardNavProps = {
    activeTab: string;
    onTabChange: (tab: string) => void;
  };
  
  const tabs = ['Active Entries', 'Winning History', 'Profile Settings', 'Notifications'];
  
   const DashboardNav: React.FC<DashboardNavProps> = ({ activeTab, onTabChange }) => {
    return (
      <NavWrapper>
        <TabRow>
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabRow>
      </NavWrapper>
    );
  };
  

// ========== Recent Winners ==========
 const RecentWinners: React.FC<{ winners: WinnerEntryProps[] }> = ({ winners }) => {
  return (
    <Section>
      <SubTitle>Recent Winners</SubTitle>
      <WinnerRow>
        {winners.map((w, i) => (
          <WinnerCard key={i}>
            <WinnerName>{w.winnerName} won</WinnerName>
            <WinnerInfo>
              {w.artist} - {w.city}
            </WinnerInfo>
            <WinnerTime>{getTimeAgo(w.winnerAnnounced)}</WinnerTime>
          </WinnerCard>
        ))}
      </WinnerRow>
    </Section>
  );
};

// ========== Styled Components ==========
const Section = styled.div`
  margin-bottom: 32px;
`;

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const TabRow = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
`;

const TabButton = styled.button<{ active: boolean }>`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? '700' : '500')};
  color: ${({ active }) => (active ? '#6610F2' : '#6B7280')};
  background-color: ${({ active }) => (active ? 'rgba(102, 16, 242, 0.1)' : 'transparent')};
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const SubTitle = styled.h2`
  font-family: 'Epilogue', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;



const WinnerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const WinnerCard = styled.div`
  background-color: #f9f9fb;
  padding: 16px;
  border-radius: 12px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const WinnerName = styled.p`
  font-weight: 600;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
`;

const WinnerInfo = styled.p`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  margin-top: 4px;
`;

const WinnerTime = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
  font-family: 'Poppins', sans-serif;
`;

// ========== Export Components ==========
export { DashboardNav, RecentWinners };
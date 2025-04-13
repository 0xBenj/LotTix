import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { concertEvents, ConcertEvent } from '../data/concertData';
import ConcertCard from '../components/ConcertCard';

const SearchForEventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [artist, setArtist] = useState('');
  const [sortBy, setSortBy] = useState('Date: Soonest');
  const [filteredEvents, setFilteredEvents] = useState<ConcertEvent[]>([]);
  
  useEffect(() => {
    setFilteredEvents(concertEvents);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter events based on search criteria
    const filtered = concertEvents.filter(event => {
      const matchLocation = location === '' || 
        event.location.toLowerCase().includes(location.toLowerCase());
      
      // For date, we'll need to compare with formatted date from the picker
      const matchDate = date === '' || 
        (date && event.date.toLowerCase().includes(formatDate(date)));
      
      const matchArtist = artist === '' || 
        event.artist.toLowerCase().includes(artist.toLowerCase()) || 
        event.venue.toLowerCase().includes(artist.toLowerCase()) ||
        event.tourName.toLowerCase().includes(artist.toLowerCase());
      
      return matchLocation && matchDate && matchArtist;
    });
    
    setFilteredEvents(filtered);
  };

  // Helper function to format date from ISO to readable format
  const formatDate = (isoDate: string): string => {
    if (!isoDate) return '';
    
    const date = new Date(isoDate);
    const month = date.toLocaleString('default', { month: 'short' });
    return `${month} ${date.getDate()}`;
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    
    const sortedEvents = [...filteredEvents];
    
    switch(value) {
      case 'Date: Soonest':
        sortedEvents.sort((a, b) => a.date.localeCompare(b.date));
        break;
      case 'Price: Low to High':
        sortedEvents.sort((a, b) => a.entryPrice - b.entryPrice);
        break;
      case 'Odds: Best':
        sortedEvents.sort((a, b) => {
          const oddsA = parseInt(a.odds.split(':')[1]);
          const oddsB = parseInt(b.odds.split(':')[1]);
          return oddsA - oddsB;
        });
        break;
    }
    
    setFilteredEvents(sortedEvents);
  };

  const handleEnterClick = (_eventId: number): void => {
    // Uncomment when event details page is ready
    // navigate(`/event-details/${eventId}`);
    navigate(`/event-details/`);

  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Search For Events</h1>
      
      {/* Search Form */}
      <div style={styles.searchForm}>
        <form onSubmit={handleSearch}>
          <div style={styles.searchFormRow}>
            <div style={styles.searchFormField}>
              <label style={styles.label}>City/Zip Code</label>
              <input 
                type="text" 
                placeholder="Enter location..." 
                style={styles.input}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div style={styles.searchFormField}>
              <label style={styles.label}>Date</label>
              <input 
                type="date" 
                style={styles.dateInput}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div style={styles.searchFormField}>
              <label style={styles.label}>Artist, Event, or Venue</label>
              <input 
                type="text" 
                placeholder="Type to search..." 
                style={styles.input}
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </div>
            <div style={styles.searchButtonContainer}>
              <button 
                type="submit" 
                style={styles.searchButton}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      
      {/* Results Header */}
      <div style={styles.resultsHeader}>
        <h2 style={styles.resultsCount}>{filteredEvents.length} Events Found</h2>
        <div style={styles.sortContainer}>
          <span>Sort by:</span>
          <select 
            style={styles.sortSelect}
            value={sortBy}
            onChange={handleSortChange}
          >
            <option>Date: Soonest</option>
            <option>Price: Low to High</option>
            <option>Odds: Best</option>
          </select>
        </div>
      </div>
      
      {/* Events Grid using ConcertCard component */}
      <div style={styles.eventsGrid}>
        {filteredEvents.map((event) => (
          <div key={event.id} style={styles.cardWrapper}>
            <ConcertCard
              id={event.id}
              name={event.tourName}
              artist={event.artist}
              date={new Date().toISOString()} // Convert event.date to ISO string in a real app
              time={event.date.split(',')[0]} // Using part of the date as time for demo
              venue={event.venue}
              city={event.location}
              country="USA" // Default value as it's required
              ticketPrice={event.entryPrice * 30} // Estimated full price
              lotteryEntryPrice={event.isFree ? 'Free' : event.entryPrice}
              imageUrl={event.image}
              lotteryDeadline={new Date().toISOString()} // Placeholder
              onEnterClick={() => handleEnterClick(event.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px',
    fontFamily: 'Poppins, sans-serif',
    color: '#12172D',
    boxSizing: 'border-box' as const, // Include padding in width calculation
    width: '100%', // Ensure it takes the full available width
  },
  pageTitle: {
    fontFamily: 'Epilogue, sans-serif',
    fontSize: '36px',
    fontWeight: 700,
    textAlign: 'center' as const,
    marginBottom: '32px',
  },
  searchForm: {
    backgroundColor: 'white',
    border: '1px solid #e5e5e5',
    borderRadius: '12px',
    padding: '30px 20px', // Reduced side padding for smaller screens
    marginBottom: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    width: '100%', // Ensure it doesn't exceed container width
    boxSizing: 'border-box' as const, // Include padding in width calculation
    overflow: 'hidden', // Prevent content from overflowing
  },
  searchFormRow: {
    display: 'flex',
    gap: '20px', // Reduced from 40px to prevent overflow
    rowGap: '25px',
    alignItems: 'flex-end',
    flexWrap: 'wrap' as const,
    width: '100%', // Ensure row takes full width
  },
  searchFormField: {
    flex: '1 1 200px', // Grow, shrink, and base width
    minWidth: '150px', // Reduced from 200px to fit better on small screens
    maxWidth: '100%', // Prevent overflow
    marginBottom: '5px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 600,
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '14px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontSize: '16px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
    boxSizing: 'border-box' as const, // Include padding in width calculation
  },
  dateInput: {
    width: '100%',
    padding: '13px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontSize: '16px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box' as const, // Include padding in width calculation
  },
  searchButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: '5px', // Ensure the button has the same spacing when wrapped
    flex: '0 0 auto', // Don't grow or shrink; use only the space needed
  },
  searchButton: {
    backgroundColor: '#6610F2',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.1s',
    boxShadow: '0 2px 8px rgba(102, 16, 242, 0.3)',
    height: '50px',
    marginBottom: '5px',
    whiteSpace: 'nowrap' as const,
  },
  resultsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap' as const,
    padding: '0 5px',
  },
  resultsCount: {
    fontSize: '24px',
    fontWeight: 700,
    margin: 0,
    color: '#12172D',
  },
  sortContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '15px',
  },
  sortSelect: {
    padding: '10px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 500,
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: '#f8f8f8',
  },
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
};

export default SearchForEventsPage;
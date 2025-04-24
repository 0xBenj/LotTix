import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConcertCard from '../components/ConcertCard';
import { ConcertEvent, concertEvents } from '../data/concertData';

const SearchForEventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [artist, setArtist] = useState('');
  const [sortBy, setSortBy] = useState('Date: Soonest');
  
  // Use the concert events from the data file
  const [filteredEvents, setFilteredEvents] = useState<ConcertEvent[]>(concertEvents);

  // Helper function to format a UTC date string to a local date string in YYYY-MM-DD format
  const formatToLocalDateString = (utcDateString: string): string => {
    const date = new Date(utcDateString);
    return date.toLocaleDateString('en-CA'); // en-CA gives YYYY-MM-DD format
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = concertEvents.filter(event => {
      const locationMatch = !location || 
        event.city.toLowerCase().includes(location.toLowerCase()) ||
        (event.state && event.state.toLowerCase().includes(location.toLowerCase())) ||
        event.country.toLowerCase().includes(location.toLowerCase());
      
      // Convert event date to local date string for comparison
      let dateMatch = true;
      if (date) {
        const localEventDate = formatToLocalDateString(event.concertDate);
        dateMatch = localEventDate === date;
      }
      
      const artistMatch = !artist || 
        event.artistName.toLowerCase().includes(artist.toLowerCase()) ||
        event.concertName.toLowerCase().includes(artist.toLowerCase()) ||
        event.venueName.toLowerCase().includes(artist.toLowerCase());
      
      return locationMatch && dateMatch && artistMatch;
    });
    
    setFilteredEvents(filtered);
    // Apply sorting right after filtering
    applySorting(filtered, sortBy);
  };

  // New helper function to apply sorting to events
  const applySorting = (events: ConcertEvent[], sortType: string) => {
    const sortedEvents = [...events];
    
    switch(sortType) {
      case 'Date: Soonest':
        sortedEvents.sort((a, b) => new Date(a.concertDate).getTime() - new Date(b.concertDate).getTime());
        break;
      case 'Price: Low to High':
        sortedEvents.sort((a, b) => {
          const priceA = typeof a.entryPrice === 'string' ? 0 : a.entryPrice;
          const priceB = typeof b.entryPrice === 'string' ? 0 : b.entryPrice;
          return priceA - priceB;
        });
        break;
      case 'Odds: Best':
        // Sort by ratio of entries sold to max entries (smaller ratio = better odds)
        sortedEvents.sort((a, b) => 
          (a.entriesSold / a.maxEntries) - (b.entriesSold / b.maxEntries)
        );
        break;
    }
    
    setFilteredEvents(sortedEvents);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    applySorting(filteredEvents, value);
  };

  // Initialize with sorted data
  useEffect(() => {
    applySorting(concertEvents, sortBy);
  }, []);

  const handleEnterClick = (eventId: number): void => {
    navigate(`/event-details/${eventId}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Search For Events</h1>
      
      {/* Search Form */}
      <div style={styles.searchForm}>
        <form onSubmit={handleSearch}>
          <div style={styles.searchFormRow}>
            <div style={styles.searchFormField}>
              <label style={styles.label}>City/State/Country</label>
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
          <div key={event.concertID} style={styles.cardWrapper}>
            <ConcertCard
              concert={event}
              onEnterClick={() => handleEnterClick(event.concertID)}
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
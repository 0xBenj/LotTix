import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConcertCard from '../components/ConcertCard';

// Define the event interface that matches ConcertCard props
interface MockEvent {
  id: number;
  name: string;
  artist: string;
  date: string; // ISO date string
  time: string;
  genre?: string;
  venue: string;
  city: string;
  state?: string;
  country: string;
  capacity?: number;
  ticketPrice: number;
  lotteryEntryPrice: number | 'Free';
  maxEntriesPerUser?: number;
  lotteryDeadline: string; // ISO date string
  winnersAnnounced?: string; // ISO date string
  imageUrl: string;
  description?: string;
}

const SearchForEventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [artist, setArtist] = useState('');
  const [sortBy, setSortBy] = useState('Date: Soonest');
  const [filteredEvents, setFilteredEvents] = useState<MockEvent[]>([]);
  
  // Mock Events data directly in the component
  const mockEvents: MockEvent[] = [
    {
      id: 1,
      name: "The Big Steppers Tour",
      artist: "Kendrick Lamar",
      date: "2025-07-29T19:00:00Z",
      time: "7:00 PM",
      genre: "Hip-Hop/Rap",
      venue: "United Center",
      city: "Chicago",
      state: "IL",
      country: "USA",
      capacity: 23500,
      ticketPrice: 89.99,
      lotteryEntryPrice: 3,
      maxEntriesPerUser: 2,
      lotteryDeadline: "2025-07-15T23:59:59Z",
      winnersAnnounced: "2025-07-20T12:00:00Z",
      imageUrl: "https://dummyimage.com/400x200/000/fff&text=Kendrick+Lamar",
      description: "Kendrick Lamar's highly anticipated tour featuring tracks from his latest album."
    },
    {
      id: 2,
      name: "Future Nostalgia Tour",
      artist: "Dua Lipa",
      date: "2025-08-02T20:00:00Z",
      time: "8:00 PM",
      genre: "Pop",
      venue: "FTX Arena",
      city: "Miami",
      state: "FL",
      country: "USA",
      capacity: 19600,
      ticketPrice: 75.50,
      lotteryEntryPrice: 3,
      lotteryDeadline: "2025-07-25T23:59:59Z",
      winnersAnnounced: "2025-07-28T12:00:00Z",
      imageUrl: "https://dummyimage.com/400x200/000/fff&text=Dua+Lipa",
      description: "An electrifying performance featuring hits from the Future Nostalgia album."
    },
    {
      id: 3,
      name: "After Hours Tour",
      artist: "The Weeknd",
      date: "2025-08-05T19:30:00Z",
      time: "7:30 PM",
      genre: "R&B/Soul",
      venue: "SoFi Stadium",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      capacity: 70240,
      ticketPrice: 95.00,
      lotteryEntryPrice: 'Free',
      maxEntriesPerUser: 1,
      lotteryDeadline: "2025-07-22T23:59:59Z",
      imageUrl: "https://dummyimage.com/400x200/000/fff&text=The+Weeknd",
      description: "Experience The Weeknd's chart-topping hits live in concert."
    },
    {
      id: 4,
      name: "World Tour",
      artist: "BTS",
      date: "2025-08-15T18:00:00Z",
      time: "6:00 PM",
      genre: "K-Pop",
      venue: "MetLife Stadium",
      city: "New York",
      state: "NY",
      country: "USA",
      capacity: 82500,
      ticketPrice: 120.00,
      lotteryEntryPrice: 3,
      maxEntriesPerUser: 3,
      lotteryDeadline: "2025-08-01T23:59:59Z",
      winnersAnnounced: "2025-08-05T12:00:00Z",
      imageUrl: "https://dummyimage.com/400x200/000/fff&text=BTS",
      description: "The global phenomenon BTS returns to the US for their biggest tour yet."
    },
    {
      id: 5,
      name: "GUTS World Tour",
      artist: "Olivia Rodrigo",
      date: "2025-08-18T19:00:00Z",
      time: "7:00 PM",
      genre: "Pop/Rock",
      venue: "TD Garden",
      city: "Boston",
      state: "MA",
      country: "USA",
      capacity: 19580,
      ticketPrice: 65.00,
      lotteryEntryPrice: 3,
      lotteryDeadline: "2025-08-04T23:59:59Z",
      winnersAnnounced: "2025-08-08T12:00:00Z",
      imageUrl: "https://dummyimage.com/400x200/000/fff&text=Olivia+Rodrigo",
      description: "Olivia Rodrigo brings her chart-topping album GUTS to life on stage."
    },
    {
      id: 6,
      name: "Chromatica Ball",
      artist: "Lady Gaga",
      date: "2025-08-24T20:30:00Z",
      time: "8:30 PM",
      genre: "Pop",
      venue: "Chase Center",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      capacity: 18064,
      ticketPrice: 85.50,
      lotteryEntryPrice: 3,
      maxEntriesPerUser: 2,
      lotteryDeadline: "2025-08-10T23:59:59Z",
      winnersAnnounced: "2025-08-15T12:00:00Z",
      imageUrl: "https://dummyimage.com/400x200/000/fff&text=Lady+Gaga",
      description: "A visually stunning performance celebrating Lady Gaga's Chromatica album."
    }
  ];
  
  useEffect(() => {
    setFilteredEvents(mockEvents);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter events based on search criteria
    const filtered = mockEvents.filter(event => {
      const matchLocation = location === '' || 
        event.city.toLowerCase().includes(location.toLowerCase()) ||
        event.state?.toLowerCase().includes(location.toLowerCase()) ||
        event.country.toLowerCase().includes(location.toLowerCase());
      
      // For date, we'll need to compare with formatted date from the picker
      const matchDate = date === '' || 
        (date && new Date(event.date).toDateString().includes(formatDate(date)));
      
      const matchArtist = artist === '' || 
        event.artist.toLowerCase().includes(artist.toLowerCase()) || 
        event.venue.toLowerCase().includes(artist.toLowerCase()) ||
        event.name.toLowerCase().includes(artist.toLowerCase());
      
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
        sortedEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'Price: Low to High':
        sortedEvents.sort((a, b) => {
          const priceA = typeof a.lotteryEntryPrice === 'string' ? 0 : a.lotteryEntryPrice;
          const priceB = typeof b.lotteryEntryPrice === 'string' ? 0 : b.lotteryEntryPrice;
          return priceA - priceB;
        });
        break;
      case 'Odds: Best':
        // This would require odds data, for now just sort by capacity (smaller = better odds)
        sortedEvents.sort((a, b) => (a.capacity || 0) - (b.capacity || 0));
        break;
    }
    
    setFilteredEvents(sortedEvents);
  };

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
          <div key={event.id} style={styles.cardWrapper}>
            <ConcertCard
              id={event.id}
              name={event.name}
              artist={event.artist}
              date={event.date}
              time={event.time}
              genre={event.genre}
              venue={event.venue}
              city={event.city}
              state={event.state}
              country={event.country}
              capacity={event.capacity}
              ticketPrice={event.ticketPrice}
              lotteryEntryPrice={event.lotteryEntryPrice}
              maxEntriesPerUser={event.maxEntriesPerUser}
              lotteryDeadline={event.lotteryDeadline}
              winnersAnnounced={event.winnersAnnounced}
              imageUrl={event.imageUrl}
              description={event.description}
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
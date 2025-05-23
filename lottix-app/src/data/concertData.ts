export interface ConcertEvent {
  // Concert Details
  concertID: number;
  concertName: string;
  artistName: string;
  tourName: string;
  concertDate: string; // ISO date format
  concertTime: string;
  concertImageUrl: string;
  concertDescription: string;
  
  // Location Information
  venueName: string;
  city: string;
  state: string;
  country: string;
  
  // Ticket & Lottery Information
  ticketPrice: number;
  entryPrice: number | 'Free';
  maxEntries: number;
  entriesSold: number;
  lotteryDeadline: string; // ISO date format
  lotteryWinner: string;
}
  
export const concertEvents: ConcertEvent[] = [
  {
    concertID: 1,
    concertName: "The Big Steppers Tour - Chicago",
    artistName: "Kendrick Lamar",
    tourName: "The Big Steppers Tour",
    concertDate: "2025-07-29T00:00:00Z",
    concertTime: "7:00 PM",
    concertImageUrl: "https://dummyimage.com/400x200/000/fff&text=Kendrick+Lamar",
    concertDescription: "Kendrick Lamar brings his Grammy-winning album to Chicago for an unforgettable night of hip-hop mastery.",
    venueName: "United Center",
    city: "Chicago",
    state: "IL",
    country: "USA",
    ticketPrice: 150,
    entryPrice: 3,
    maxEntries: 500,
    entriesSold: 285,
    lotteryDeadline: "2025-07-15T23:59:59Z",
    lotteryWinner: "Pending"
  },
  {
    concertID: 2,
    concertName: "Future Nostalgia Miami Night",
    artistName: "Dua Lipa",
    tourName: "Future Nostalgia Tour",
    concertDate: "2025-08-02T00:00:00Z",
    concertTime: "8:00 PM",
    concertImageUrl: "https://dummyimage.com/400x200/000/fff&text=Dua+Lipa",
    concertDescription: "Join pop sensation Dua Lipa for an electrifying performance featuring hits from her Future Nostalgia album.",
    venueName: "FTX Arena",
    city: "Miami",
    state: "FL",
    country: "USA",
    ticketPrice: 190,
    entryPrice: 3,
    maxEntries: 600,
    entriesSold: 292,
    lotteryDeadline: "2025-07-20T23:59:59Z",
    lotteryWinner: "Pending"
  },
  {
    concertID: 3,
    concertName: "After Hours Experience LA",
    artistName: "The Weeknd",
    tourName: "After Hours Tour",
    concertDate: "2025-08-05T00:00:00Z",
    concertTime: "8:30 PM",
    concertImageUrl: "https://dummyimage.com/400x200/000/fff&text=The+Weeknd",
    concertDescription: "Experience The Weeknd's chart-topping hits in an immersive audiovisual spectacle.",
    venueName: "SoFi Stadium",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    ticketPrice: 95,
    entryPrice: 'Free',
    maxEntries: 400,
    entriesSold: 220,
    lotteryDeadline: "2025-07-25T23:59:59Z",
    lotteryWinner: "Pending"
  },
  {
    concertID: 4,
    concertName: "BTS World Tour - NYC",
    artistName: "BTS",
    tourName: "World Tour",
    concertDate: "2025-08-15T00:00:00Z",
    concertTime: "6:30 PM",
    concertImageUrl: "https://dummyimage.com/400x200/000/fff&text=BTS",
    concertDescription: "Global phenomenon BTS returns to New York for a spectacular performance showcasing their biggest hits.",
    venueName: "MetLife Stadium",
    city: "New York",
    state: "NY",
    country: "USA",
    ticketPrice: 250,
    entryPrice: 3,
    maxEntries: 800,
    entriesSold: 705,
    lotteryDeadline: "2025-08-01T23:59:59Z",
    lotteryWinner: "Alex Johnson"
  },
  {
    concertID: 5,
    concertName: "GUTS World Tour - Boston",
    artistName: "Olivia Rodrigo",
    tourName: "GUTS World Tour",
    concertDate: "2025-08-18T00:00:00Z",
    concertTime: "7:30 PM",
    concertImageUrl: "https://dummyimage.com/400x200/000/fff&text=Olivia+Rodrigo",
    concertDescription: "Olivia Rodrigo brings her raw emotion and powerful vocals to Boston in support of her acclaimed GUTS album.",
    venueName: "TD Garden",
    city: "Boston",
    state: "MA",
    country: "USA",
    ticketPrice: 150,
    entryPrice: 3,
    maxEntries: 500,
    entriesSold: 372,
    lotteryDeadline: "2025-08-05T23:59:59Z",
    lotteryWinner: "Pending"
  },
  {
    concertID: 6,
    concertName: "Chromatica Ball SF",
    artistName: "Lady Gaga",
    tourName: "Chromatica Ball",
    concertDate: "2025-08-24T00:00:00Z",
    concertTime: "9:00 PM",
    concertImageUrl: "https://dummyimage.com/400x200/000/fff&text=Lady+Gaga",
    concertDescription: "A visually stunning theatrical performance celebrating Lady Gaga's Chromatica album with elaborate costumes and choreography.",
    venueName: "Chase Center",
    city: "San Francisco",
    state: "CA",
    country: "USA",
    ticketPrice: 305,
    entryPrice: 3,
    maxEntries: 550,
    entriesSold: 375,
    lotteryDeadline: "2025-08-10T23:59:59Z",
    lotteryWinner: "Pending"
  }
];

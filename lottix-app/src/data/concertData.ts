export interface ConcertEvent {
    id: number;
    artist: string;
    tourName: string;
    location: string;
    venue: string;
    date: string;
    spotsLeft: number;
    odds: string;
    image: string;
    entryPrice: number;
    isFree: boolean;
  }
  
  export const concertEvents: ConcertEvent[] = [
    {
      id: 1,
      artist: "Kendrick Lamar",
      tourName: "The Big Steppers Tour",
      location: "Chicago",
      venue: "United Center",
      date: "July 29, 2025",
      spotsLeft: 215,
      odds: "1:56",
      image: "https://dummyimage.com/400x200/000/fff&text=Kendrick+Lamar",
      entryPrice: 3,
      isFree: false
    },
    {
      id: 2,
      artist: "Dua Lipa",
      tourName: "Future Nostalgia Tour",
      location: "Miami",
      venue: "FTX Arena",
      date: "Aug 2, 2025",
      spotsLeft: 308,
      odds: "1:41",
      image: "https://dummyimage.com/400x200/000/fff&text=Dua+Lipa",
      entryPrice: 3,
      isFree: false
    },
    {
      id: 3,
      artist: "The Weeknd",
      tourName: "After Hours Tour",
      location: "Los Angeles",
      venue: "SoFi Stadium",
      date: "Aug 5, 2025",
      spotsLeft: 180,
      odds: "1:110",
      image: "https://dummyimage.com/400x200/000/fff&text=The+Weeknd",
      entryPrice: 0,
      isFree: true
    },
    {
      id: 4,
      artist: "BTS",
      tourName: "World Tour",
      location: "New York",
      venue: "MetLife Stadium",
      date: "Aug 15, 2025",
      spotsLeft: 95,
      odds: "1:205",
      image: "https://dummyimage.com/400x200/000/fff&text=BTS",
      entryPrice: 3,
      isFree: false
    },
    {
      id: 5,
      artist: "Olivia Rodrigo",
      tourName: "GUTS World Tour",
      location: "Boston",
      venue: "TD Garden",
      date: "Aug 18, 2025",
      spotsLeft: 128,
      odds: "1:87",
      image: "https://dummyimage.com/400x200/000/fff&text=Olivia+Rodrigo",
      entryPrice: 3,
      isFree: false
    },
    {
      id: 6,
      artist: "Lady Gaga",
      tourName: "Chromatica Ball",
      location: "San Francisco",
      venue: "Chase Center",
      date: "Aug 24, 2025",
      spotsLeft: 175,
      odds: "1:68",
      image: "https://dummyimage.com/400x200/000/fff&text=Lady+Gaga",
      entryPrice: 3,
      isFree: false
    }
  ];

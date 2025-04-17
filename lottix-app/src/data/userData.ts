export interface LotteryEntry {
  concertID: number;
  numberOfEntries: number;
}

export interface User {
  // User Identity
  userId: string;
  userName: string;
  userEmail: string;
  userPassword: string; // In a real app, this would never be stored in plain text
  
  // Lottery Participation
  entries: LotteryEntry[];
  wonLotteries: number[]; // List of concert IDs that the user won
}

export const currentUser: User = {
  userId: "usr_12345",
  userName: "Alex Johnson",
  userEmail: "alex.johnson@example.com",
  userPassword: "Password123!", // Never store passwords like this in a real app
  
  entries: [
    {
      concertID: 1,
      numberOfEntries: 2
    },
    {
      concertID: 3,
      numberOfEntries: 1
    },
    {
      concertID: 6,
      numberOfEntries: 3
    }
  ],
  
  wonLotteries: [4]
};

export const mockUsers: User[] = [
  currentUser,
  {
    userId: "usr_67890",
    userName: "Jamie Smith",
    userEmail: "jamie.smith@example.com",
    userPassword: "SecurePass456!",
    
    entries: [
      {
        concertID: 2,
        numberOfEntries: 1
      },
      {
        concertID: 5,
        numberOfEntries: 2
      }
    ],
    
    wonLotteries: []
  },
  {
    userId: "usr_24680",
    userName: "Taylor Rivera",
    userEmail: "taylor.rivera@example.com",
    userPassword: "Concert2025!",
    
    entries: [
      {
        concertID: 1,
        numberOfEntries: 3
      },
      {
        concertID: 3,
        numberOfEntries: 2
      }
    ],
    
    wonLotteries: [5]
  },
  {
    userId: "usr_13579",
    userName: "Jordan Wong",
    userEmail: "jordan.wong@example.com",
    userPassword: "MusicFan789!",
    
    entries: [
      {
        concertID: 6,
        numberOfEntries: 1
      }
    ],
    
    wonLotteries: [2]
  },
  {
    userId: "usr_97531",
    userName: "Morgan Lee",
    userEmail: "morgan.lee@example.com",
    userPassword: "LotteryLuck2025!",
    
    entries: [
      {
        concertID: 4,
        numberOfEntries: 5
      },
      {
        concertID: 2,
        numberOfEntries: 2
      }
    ],
    
    wonLotteries: [6]
  }
];

import React from 'react';
import styled from 'styled-components';

type ConcertCardProps = {
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
  onEnterClick: () => void;
};

const ConcertCard: React.FC<ConcertCardProps> = ({
  name,
  artist,
  date,
  time,
  venue,
  city,
  state,
  country,
  ticketPrice,
  lotteryEntryPrice,
  imageUrl,
  onEnterClick,
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={imageUrl} alt={`${name} poster`} className="card-image" />
        <div className="card-details">
          <p className="text-title">{name}</p>
          <p className="text-body">
            {artist} • {venue}, {city}{state ? `, ${state}` : ''}, {country}
          </p>
          <p className="text-body">
            {new Date(date).toLocaleDateString()} at {time}
          </p>
          <p className="text-body">
            Ticket: ${ticketPrice} | Lottery: {lotteryEntryPrice === 'Free' ? 'Free' : `$${lotteryEntryPrice}`}
          </p>
        </div>
        <button className="card-button" onClick={onEnterClick}>
          {lotteryEntryPrice === 'Free' ? 'Enter for Free' : `Enter for $${lotteryEntryPrice}`}
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 220px;
    height: 300px;
    border-radius: 20px;
    background: #ffffff;
    position: relative;
    padding: 1.2rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
  }

  .card-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
  }

  .card-details {
    color: black;
    padding-top: 0.3rem;
    display: grid;
    gap: 0.1em;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 80%;
    border-radius: 1rem;
    border: none;
    background-color: #6610F2;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
    cursor: pointer;
  }

  .text-title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 2px
  }

  .text-body {
    font-size: 0.9em;
    color: rgb(134, 134, 134);
    margin: 5px 0;
  }

  .card:hover {
    border-color: #1A237E;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

export default ConcertCard;

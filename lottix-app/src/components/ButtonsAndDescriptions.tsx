import React from 'react';
/**
 * ========================================
 * BUTTONS COMPONENT
 * ========================================
 * Renders Enter, Share, and Back buttons with styling
 */
const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        padding: '12px 24px',
        fontSize: '18px',
        fontWeight: 500,
        borderRadius: '8px',
        cursor: 'pointer',
        minWidth: '140px',
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      ← Back
    </button>
  );
  
const EnterButton: React.FC<{ onClick: () => void; entryPrice: number }> = ({ onClick, entryPrice }) => (
    <button
      onClick={onClick}
      style={{
        padding: '12px 24px',
        fontSize: '18px',
        fontWeight: 500,
        borderRadius: '8px',
        cursor: 'pointer',
        minWidth: '140px',
        backgroundColor: '#6610F2',
        color: 'white',
        border: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      Enter for ${entryPrice}
    </button>
  );
  
 const ShareButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        padding: '12px 24px',
        fontSize: '18px',
        fontWeight: 500,
        borderRadius: '8px',
        cursor: 'pointer',
        minWidth: '140px',
        backgroundColor: '#E10098',
        color: 'white',
        border: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      Share
    </button>
  );
  


/**
 * ========================================
 * EVENT DESCRIPTION COMPONENT
 * ========================================
 */
type EventDescriptionProps = {
  title?: string;
  content: string;
};

const EventDescription: React.FC<EventDescriptionProps> = ({ title = "Event Description", content }) => {
    return (
      <div style={descriptionStyle}>
        <h2 style={headerStyle}>{title}</h2>
        <p style={paragraphStyle}>{content}</p>
      </div>
    );
  };


/**
 * ========================================
 * LOTTERY STEPS COMPONENT
 * ========================================
 */
type LotteryStepsProps = {
    title?: string;
    steps: string[];
  };

  const LotterySteps: React.FC<LotteryStepsProps> = ({
    title = 'How Our Lottery Works',
    steps,
  }) => {
    return (
      <div style={descriptionStyle}>
        <h2 style={headerStyle}>{title}</h2>
        <div style={{ marginTop: '12px' }}>
          {steps.map((step, index) => (
            <div key={index} style={stepRowStyle}>
              <span style={stepNumberStyle}>{index + 1}.</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };


// Styles
const descriptionStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    marginTop: '32px',
  };
  
  const headerStyle: React.CSSProperties = {
    fontFamily: 'Epilogue, sans-serif',
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.25,
    color: '#12172D',
    marginBottom: '12px',
  };
  
  const paragraphStyle: React.CSSProperties = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    lineHeight: 1.5,
    color: '#12172D',
  };
  
  const stepRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '8px',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    color: '#12172D',
    lineHeight: 1.5,
  };
  
  const stepNumberStyle: React.CSSProperties = {
    fontWeight: 600,
    minWidth: '20px',
    textAlign: 'right',
  };


export { BackButton, EnterButton, ShareButton, EventDescription, LotterySteps };
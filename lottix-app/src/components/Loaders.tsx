import React from 'react';
import PropTypes from 'prop-types';

/**
 * ========================================
 * MULTI-STEP PROGRESS COMPONENT
 * ========================================
 * Displays a multi-step progress indicator with connected circles
 */
const MultiStepProgress = ({
  currentStep = 1,
  totalSteps = 5,
  stepLabels = ['Select', 'Pay', 'Wait', 'Win', 'Attend'],
  showPercentage = true,
  className = '',
  darkMode = false
}) => {
  // Calculate progress percentage
  const progressPercentage = Math.round((currentStep - 1) / (totalSteps - 1) * 100);
  
  // Text colors based on dark mode
  const textColor = darkMode ? 'white' : '#12172D';
  const secondaryTextColor = darkMode ? '#A0AEC0' : '#6B7280';
  
  // Background colors
  const trackBgColor = darkMode ? '#2D3748' : '#E0E7FF';
  const fillBgColor = '#6610F2'; // Primary purple always
  const currentStepColor = '#E10098'; // Pink always
  const completedStepColor = '#6610F2'; // Purple always
  const incompleteStepBorder = darkMode ? 'white' : '#1A237E';
  const incompleteStepText = darkMode ? 'white' : '#1A237E';
  const statusBgColor = darkMode ? '#2D3748' : '#F3F4F6';

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 ${className}`} style={{ color: textColor }}>
      <h2 className="text-center text-lg font-semibold mb-6" style={{ color: textColor }}>
        Multi-Step Progress
      </h2>

      {/* Progress Track - Explicit horizontal container */}
      <div className="relative" style={{ height: '150px' }}>
        {/* Background Track */}
        <div 
          className="absolute" 
          style={{ 
            top: '35px', 
            left: '10%', 
            right: '10%', 
            height: '4px', 
            backgroundColor: trackBgColor,
            zIndex: 1
          }} 
        />
        
        {/* Progress Fill */}
        <div 
          className="absolute" 
          style={{ 
            top: '35px', 
            left: '10%', 
            width: `${progressPercentage}%`, 
            height: '4px', 
            backgroundColor: fillBgColor,
            zIndex: 2
          }} 
        />

        {/* Steps - Forcing horizontal layout */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            padding: '0 10%',
            position: 'relative',
            zIndex: 3
          }}
        >
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const isIncomplete = stepNumber > currentStep;
            
            return (
              <div 
                key={stepNumber} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  width: '60px'
                }}
              >
                {/* Step Circle */}
                <div 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: isCurrent ? '48px' : '40px',
                    height: isCurrent ? '48px' : '40px',
                    borderRadius: '50%',
                    color: 'white',
                    backgroundColor: isCompleted ? completedStepColor : (isCurrent ? currentStepColor : 'transparent'),
                    border: isIncomplete ? `2px solid ${incompleteStepBorder}` : 'none',
                    fontWeight: '600',
                    fontSize: isCurrent ? '18px' : '16px',
                    marginBottom: '15px'
                  }}
                >
                  <span style={{ color: isIncomplete ? incompleteStepText : 'white' }}>{stepNumber}</span>
                </div>
                
                {/* Step Label */}
                <div 
                  style={{ 
                    marginTop: '5px',
                    textAlign: 'center',
                    fontWeight: isCurrent ? '600' : '400',
                    color: isIncomplete ? secondaryTextColor : textColor,
                    fontSize: '14px'
                  }}
                >
                  {stepLabels[index] || `Step ${stepNumber}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Indicator */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <div 
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: statusBgColor,
            borderRadius: '9999px',
            fontSize: '14px',
            color: textColor
          }}
        >
          Step {currentStep} of {totalSteps}
          {showPercentage && ` (${progressPercentage}% Complete)`}
        </div>
      </div>
    </div>
  );
};

MultiStepProgress.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
  stepLabels: PropTypes.arrayOf(PropTypes.string),
  showPercentage: PropTypes.bool,
  className: PropTypes.string,
  darkMode: PropTypes.bool
};
/**
 * ========================================
 * SPINNER LOADER COMPONENT
 * ========================================
 * Displays a spinning loader animation
 */
const SpinnerLoader = ({
    size = 'medium',
    color = '#6610F2',
    label = 'Loading...',
    showLabel = true,
    className = '',
    darkMode = false
  }) => {
    // Size mappings
    const sizeMap = {
      small: 24,
      medium: 40,
      large: 64
    };
  
    // Fix TypeScript error with type assertion
    const spinnerSize = sizeMap[size as keyof typeof sizeMap] || sizeMap.medium;
    const borderWidth = spinnerSize * 0.1; // 10% of size for border width
    
    // Colors based on dark mode
    const textColor = darkMode ? 'white' : '#6B7280';
    
    return (
      <div 
        className={`flex flex-col items-center justify-center ${className}`}
        style={{ margin: '30px 0' }}
      >
        {/* Title (optional) */}
        <h2 
          className="text-center text-lg font-semibold mb-4" 
          style={{ color: darkMode ? 'white' : '#12172D' }}
        >
          Spinner Loader
        </h2>
        
        {/* Simple arc spinner above the label - this is the main change */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div 
            style={{ 
              width: `${spinnerSize}px`,
              height: `${spinnerSize}px`,
              border: `${borderWidth}px solid transparent`,
              borderTopColor: color,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: showLabel ? '12px' : '0'
            }}
          />
          
          {/* Label placed below the spinner */}
          {showLabel && (
            <div 
              className="text-sm"
              style={{ color: textColor }}
            >
              {label}
            </div>
          )}
        </div>
        
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  };
/**
 * ========================================
 * PROGRESS BAR COMPONENT
 * ========================================
 * Displays a horizontal progress bar with percentage and/or count
 */
const ProgressBar = ({
  progress = 0,
  currentEntries = 0,
  maxEntries = 0,
  showPercentage = true,
  showCount = true,
  color = '#6610F2',
  className = '',
  darkMode = false
}) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  
  // Format the numbers with commas
  const formattedCurrent = currentEntries.toLocaleString();
  const formattedMax = maxEntries.toLocaleString();
  
  // Colors based on dark mode
  const textColor = darkMode ? 'white' : '#12172D';
  const secondaryTextColor = darkMode ? '#A0AEC0' : '#6B7280';
  const trackBgColor = darkMode ? '#2D3748' : '#E0E7FF';

  return (
    <div 
      className={`flex flex-col items-center w-full max-w-xl mx-auto px-4 ${className}`}
      style={{ margin: '30px 0' }}
    >
      {/* Title */}
      <h2 
        className="text-center text-lg font-semibold mb-4" 
        style={{ color: textColor }}
      >
        Progress Bar
      </h2>
      
      {/* Progress Bar */}
      <div 
        style={{ 
          width: '100%', 
          height: '20px', 
          backgroundColor: trackBgColor,
          borderRadius: '9999px',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{ 
            height: '100%',
            width: `${normalizedProgress}%`,
            backgroundColor: color,
            borderRadius: '9999px',
            transition: 'width 0.5s ease-out'
          }}
        />
      </div>
      
      {/* Progress Information */}
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {showPercentage && (
          <div style={{ fontSize: '16px', fontWeight: '500', color: textColor }}>{normalizedProgress}%</div>
        )}
        
        {showCount && maxEntries > 0 && (
          <div style={{ fontSize: '14px', color: secondaryTextColor, marginTop: '4px' }}>
            {formattedCurrent} / {formattedMax} entries
          </div>
        )}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
  currentEntries: PropTypes.number,
  maxEntries: PropTypes.number,
  showPercentage: PropTypes.bool,
  showCount: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  darkMode: PropTypes.bool
};

// Export all components
export { MultiStepProgress, SpinnerLoader, ProgressBar };
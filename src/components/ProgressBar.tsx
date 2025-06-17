import React from 'react';

interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  currentQuestion, 
  totalQuestions 
}) => {
  return (
    <div style={{ 
      marginBottom: '20px',
      padding: '0 20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <span style={{ fontSize: '14px', color: '#666' }}>
          進捗
        </span>
        <span style={{ fontSize: '14px', color: '#666' }}>
          {currentQuestion} / {totalQuestions}
        </span>
      </div>
      
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#4CAF50',
            borderRadius: '4px',
            transition: 'width 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};
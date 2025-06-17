import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  currentAnswer: string | number | null;
  onAnswerChange: (answer: string | number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  onAnswerChange,
  questionNumber,
  totalQuestions
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basic': return '#4CAF50';
      case 'standard': return '#FF9800';
      case 'advanced': return '#F44336';
      default: return '#999';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'basic': return '基本';
      case 'standard': return '標準';
      case 'advanced': return '発展';
      default: return '';
    }
  };

  const renderAnswerInput = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div>
            {question.options?.map((option, index) => (
              <label key={index} style={{
                display: 'block',
                margin: '10px 0',
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                backgroundColor: currentAnswer === index ? '#e3f2fd' : 'white',
                borderColor: currentAnswer === index ? '#2196F3' : '#ddd'
              }}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={currentAnswer === index}
                  onChange={() => onAnswerChange(index)}
                  style={{ marginRight: '10px' }}
                />
                {option}
              </label>
            ))}
          </div>
        );

      case 'fill-in-blank':
        return (
          <input
            type="text"
            value={currentAnswer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="答えを入力してください"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '6px',
              marginTop: '10px'
            }}
          />
        );

      case 'true-false':
        return (
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              border: '2px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: currentAnswer === 1 ? '#e8f5e8' : 'white',
              borderColor: currentAnswer === 1 ? '#4CAF50' : '#ddd'
            }}>
              <input
                type="radio"
                name={`question-${question.id}`}
                checked={currentAnswer === 1}
                onChange={() => onAnswerChange(1)}
                style={{ marginRight: '8px' }}
              />
              正しい
            </label>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              border: '2px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: currentAnswer === 0 ? '#ffe8e8' : 'white',
              borderColor: currentAnswer === 0 ? '#F44336' : '#ddd'
            }}>
              <input
                type="radio"
                name={`question-${question.id}`}
                checked={currentAnswer === 0}
                onChange={() => onAnswerChange(0)}
                style={{ marginRight: '8px' }}
              />
              間違い
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div>
          <span style={{
            backgroundColor: getDifficultyColor(question.difficulty),
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            marginRight: '10px'
          }}>
            {getDifficultyText(question.difficulty)}
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            {question.category} - {question.subcategory}
          </span>
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          問題 {questionNumber} / {totalQuestions}
        </div>
      </div>

      <div style={{ 
        fontSize: '18px', 
        fontWeight: 'bold', 
        marginBottom: '20px',
        lineHeight: '1.5'
      }}>
        {question.question}
      </div>

      {renderAnswerInput()}

      <div style={{ 
        marginTop: '20px', 
        textAlign: 'right',
        fontSize: '14px',
        color: '#666'
      }}>
        配点: {question.points}点
      </div>
    </div>
  );
};
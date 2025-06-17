import React, { useState } from 'react';

interface QuizSetupProps {
  onStartQuiz: (options: {
    category?: string;
    difficulty?: string;
    questionCount?: number;
  }) => void;
}

export const QuizSetup: React.FC<QuizSetupProps> = ({ onStartQuiz }) => {
  const [category, setCategory] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<number>(5);

  const handleStart = () => {
    onStartQuiz({
      category: category || undefined,
      difficulty: difficulty || undefined,
      questionCount
    });
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '30px',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        marginBottom: '30px',
        color: '#333',
        fontSize: '28px'
      }}>
        中学受験 社会科問題
      </h1>

      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '20px' }}>
          クイズ設定
        </h2>

        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 'bold'
          }}>
            分野を選択:
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '6px'
            }}
          >
            <option value="">すべての分野</option>
            <option value="地理">地理</option>
            <option value="歴史">歴史</option>
            <option value="公民">公民</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 'bold'
          }}>
            難易度を選択:
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '6px'
            }}
          >
            <option value="">すべての難易度</option>
            <option value="basic">基本</option>
            <option value="standard">標準</option>
            <option value="advanced">発展</option>
          </select>
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 'bold'
          }}>
            問題数: {questionCount}問
          </label>
          <input
            type="range"
            min="3"
            max="10"
            value={questionCount}
            onChange={(e) => setQuestionCount(parseInt(e.target.value))}
            style={{ width: '100%' }}
          />
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#666',
            marginTop: '5px'
          }}>
            <span>3問</span>
            <span>10問</span>
          </div>
        </div>

        <button
          onClick={handleStart}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '8px',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          クイズを開始する
        </button>
      </div>

      <div style={{ 
        fontSize: '14px', 
        color: '#666',
        lineHeight: '1.5'
      }}>
        小学6年生向けの中学受験対策問題です。<br />
        地理・歴史・公民の各分野から出題されます。
      </div>
    </div>
  );
};
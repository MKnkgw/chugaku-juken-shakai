import React, { useState } from 'react';
import { QuizResult as QuizResultType, Question } from '../types';

interface QuizResultProps {
  result: QuizResultType;
  questions: Question[];
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, questions, onRestart }) => {
  const [showOnlyIncorrect, setShowOnlyIncorrect] = useState(false);
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return '#4CAF50';
    if (percentage >= 60) return '#FF9800';
    return '#F44336';
  };

  const getAnswerText = (question: Question, answer: string | number | null) => {
    if (answer === null) return '未回答';
    
    if (question.type === 'multiple-choice' && question.options) {
      return question.options[answer as number];
    }
    
    if (question.type === 'true-false') {
      return answer === 1 ? '正しい' : '間違い';
    }
    
    return String(answer);
  };

  const getStudyTip = (question: Question) => {
    switch (question.category) {
      case '地理':
        if (question.subcategory === '日本の地形') {
          return '地図帳で実際の位置を確認し、標高や特徴を覚えましょう。';
        }
        if (question.subcategory === '日本の気候') {
          return '海流の名前と性質（暖流・寒流）をセットで覚えましょう。';
        }
        if (question.subcategory === '世界の国々') {
          return '世界地図で位置を確認し、面積や人口などの特徴も一緒に覚えましょう。';
        }
        return '地図を使って位置関係を確認しながら学習しましょう。';
      
      case '歴史':
        if (question.subcategory === '古代') {
          return '時代背景と人物の関係を整理し、年代順に覚えましょう。';
        }
        if (question.subcategory === '平安時代') {
          return '語呂合わせを活用して年代を覚え、その時代の特徴も一緒に学習しましょう。';
        }
        if (question.subcategory === '戦国時代') {
          return '戦いの原因と結果、その後の歴史への影響も含めて理解しましょう。';
        }
        return '年代と出来事、人物の関係を整理して覚えましょう。';
      
      case '公民':
        if (question.subcategory === '日本国憲法') {
          return '憲法の条文と実際の制度の関係を理解しましょう。';
        }
        if (question.subcategory === '政治制度') {
          return '制度の仕組みと実際の運用方法を具体例と一緒に覚えましょう。';
        }
        return '制度の目的と仕組みを関連付けて理解しましょう。';
      
      default:
        return '関連する内容もまとめて復習し、知識を整理しましょう。';
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px'
      }}>
        <h2>クイズ結果</h2>
        <div style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          color: getScoreColor(result.percentage),
          margin: '10px 0'
        }}>
          {result.score}/{result.maxScore}
        </div>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>
          正答率: {result.percentage}%
        </div>
        <div style={{ fontSize: '18px' }}>
          {result.correctAnswers}/{result.totalQuestions} 問正解
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h3>詳細結果</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setShowOnlyIncorrect(false)}
              style={{
                backgroundColor: !showOnlyIncorrect ? '#2196F3' : '#e0e0e0',
                color: !showOnlyIncorrect ? 'white' : '#666',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              すべて表示
            </button>
            <button
              onClick={() => setShowOnlyIncorrect(true)}
              style={{
                backgroundColor: showOnlyIncorrect ? '#F44336' : '#e0e0e0',
                color: showOnlyIncorrect ? 'white' : '#666',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              不正解のみ表示
            </button>
          </div>
        </div>
        
        {showOnlyIncorrect && (
          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '6px',
            padding: '10px',
            marginBottom: '15px',
            fontSize: '14px'
          }}>
            💡 <strong>復習ポイント:</strong> 不正解だった問題の解説をしっかり読んで、理解を深めましょう。
          </div>
        )}
        
        {result.results
          .filter(resultItem => showOnlyIncorrect ? !resultItem.isCorrect : true)
          .map((resultItem) => {
            const question = questions.find(q => q.id === resultItem.questionId);
            if (!question) return null;
            const originalIndex = result.results.findIndex(r => r.questionId === resultItem.questionId);

          return (
            <div key={resultItem.questionId} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              margin: '10px 0',
              padding: '15px',
              backgroundColor: resultItem.isCorrect ? '#e8f5e8' : '#ffe8e8'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '10px' 
              }}>
                <span style={{ 
                  backgroundColor: resultItem.isCorrect ? '#4CAF50' : '#F44336',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  marginRight: '10px'
                }}>
                  {resultItem.isCorrect ? '正解' : '不正解'}
                </span>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  問題 {originalIndex + 1} - {question.category} ({question.difficulty})
                </span>
              </div>
              
              <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                {question.question}
              </div>
              
              <div style={{ marginBottom: '5px' }}>
                <strong>あなたの回答:</strong> {getAnswerText(question, resultItem.userAnswer)}
              </div>
              
              <div style={{ marginBottom: '10px' }}>
                <strong>正解:</strong> {getAnswerText(question, resultItem.correctAnswer)}
              </div>
              
              <div style={{ 
                backgroundColor: resultItem.isCorrect ? '#f0f8f0' : '#fff8f0', 
                padding: '10px', 
                borderRadius: '4px',
                fontSize: '14px',
                border: resultItem.isCorrect ? '1px solid #d4edda' : '1px solid #ffeaa7'
              }}>
                <strong>解説:</strong> {question.explanation}
                {!resultItem.isCorrect && (
                  <div style={{ 
                    marginTop: '8px',
                    padding: '8px',
                    backgroundColor: '#ffe6e6',
                    borderRadius: '4px',
                    fontSize: '13px'
                  }}>
                    <strong>🔍 復習のコツ:</strong> {getStudyTip(question)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onRestart}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          もう一度挑戦する
        </button>
      </div>
    </div>
  );
};
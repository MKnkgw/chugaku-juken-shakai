import { useState } from 'react';
import { useQuiz } from './hooks/useQuiz';
import { QuizSetup } from './components/QuizSetup';
import { QuestionCard } from './components/QuestionCard';
import { QuizResult } from './components/QuizResult';
import { ProgressBar } from './components/ProgressBar';
import { QuizResult as QuizResultType, Question } from './types';

function App() {
  const {
    currentSession,
    currentQuestionIndex,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    getCurrentQuestion,
    isLastQuestion,
    isFirstQuestion,
    progress
  } = useQuiz();

  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null);
  const [completedQuestions, setCompletedQuestions] = useState<Question[]>([]);

  const handleStartQuiz = (options: {
    category?: string;
    difficulty?: string;
    questionCount?: number;
  }) => {
    setQuizResult(null);
    startQuiz(options);
  };

  const handleFinishQuiz = () => {
    if (currentSession) {
      setCompletedQuestions(currentSession.questions);
    }
    const result = finishQuiz();
    if (result) {
      setQuizResult(result);
    }
  };

  const handleRestart = () => {
    setQuizResult(null);
    setCompletedQuestions([]);
  };

  const currentQuestion = getCurrentQuestion();

  if (quizResult) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
        <QuizResult
          result={quizResult}
          questions={completedQuestions}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  if (!currentSession || !currentQuestion) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
        <QuizSetup onStartQuiz={handleStartQuiz} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <ProgressBar
        progress={progress}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={currentSession.questions.length}
      />

      <QuestionCard
        question={currentQuestion}
        currentAnswer={currentSession.answers[currentQuestionIndex]}
        onAnswerChange={answerQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={currentSession.questions.length}
      />

      <div style={{
        maxWidth: '600px',
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={previousQuestion}
          disabled={isFirstQuestion}
          style={{
            backgroundColor: isFirstQuestion ? '#ccc' : '#757575',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: isFirstQuestion ? 'not-allowed' : 'pointer'
          }}
        >
          前の問題
        </button>

        <div style={{ fontSize: '14px', color: '#666' }}>
          {currentSession.answers[currentQuestionIndex] !== null ? 
            '回答済み' : '未回答'
          }
        </div>

        {isLastQuestion ? (
          <button
            onClick={handleFinishQuiz}
            style={{
              backgroundColor: '#F44336',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            結果を見る
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            次の問題
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
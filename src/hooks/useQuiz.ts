import { useState, useCallback } from 'react';
import { Question, QuizSession, QuizResult } from '../types';
import { questionBank } from '../data/questions';

export const useQuiz = () => {
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startQuiz = useCallback((options: {
    category?: string;
    difficulty?: string;
    questionCount?: number;
  } = {}) => {
    let filteredQuestions = [...questionBank];

    if (options.category) {
      filteredQuestions = filteredQuestions.filter(q => q.category === options.category);
    }
    
    if (options.difficulty) {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === options.difficulty);
    }

    const questionCount = Math.min(options.questionCount || 10, filteredQuestions.length);
    const selectedQuestions = filteredQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount);

    const session: QuizSession = {
      id: Date.now().toString(),
      questions: selectedQuestions,
      answers: new Array(selectedQuestions.length).fill(null),
      startTime: new Date(),
      maxScore: selectedQuestions.reduce((sum, q) => sum + q.points, 0)
    };

    setCurrentSession(session);
    setCurrentQuestionIndex(0);
  }, []);

  const answerQuestion = useCallback((answer: string | number) => {
    if (!currentSession) return;

    const updatedAnswers = [...currentSession.answers];
    updatedAnswers[currentQuestionIndex] = answer;

    setCurrentSession({
      ...currentSession,
      answers: updatedAnswers
    });
  }, [currentSession, currentQuestionIndex]);

  const nextQuestion = useCallback(() => {
    if (!currentSession) return;
    
    if (currentQuestionIndex < currentSession.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [currentSession, currentQuestionIndex]);

  const previousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex]);

  const finishQuiz = useCallback((): QuizResult | null => {
    if (!currentSession) return null;

    const results = currentSession.questions.map((question, index) => {
      const userAnswer = currentSession.answers[index];
      const correctAnswer = question.answer;
      const isCorrect = userAnswer === correctAnswer;

      return {
        questionId: question.id,
        isCorrect,
        userAnswer,
        correctAnswer
      };
    });

    const score = results.reduce((sum, result, index) => {
      return sum + (result.isCorrect ? currentSession.questions[index].points : 0);
    }, 0);

    const correctAnswers = results.filter(r => r.isCorrect).length;

    const quizResult: QuizResult = {
      sessionId: currentSession.id,
      score,
      maxScore: currentSession.maxScore,
      percentage: Math.round((score / currentSession.maxScore) * 100),
      correctAnswers,
      totalQuestions: currentSession.questions.length,
      results
    };

    setCurrentSession(null);
    setCurrentQuestionIndex(0);

    return quizResult;
  }, [currentSession]);

  const getCurrentQuestion = useCallback((): Question | null => {
    if (!currentSession) return null;
    return currentSession.questions[currentQuestionIndex] || null;
  }, [currentSession, currentQuestionIndex]);

  const isLastQuestion = currentSession ? currentQuestionIndex === currentSession.questions.length - 1 : false;
  const isFirstQuestion = currentQuestionIndex === 0;
  const progress = currentSession ? ((currentQuestionIndex + 1) / currentSession.questions.length) * 100 : 0;

  return {
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
  };
};
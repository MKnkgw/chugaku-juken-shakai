export interface Question {
  id: string;
  category: string;
  subcategory: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  question: string;
  type: 'multiple-choice' | 'fill-in-blank' | 'true-false';
  options?: string[];
  answer: string | number;
  explanation: string;
  points: number;
}

export interface QuizSession {
  id: string;
  questions: Question[];
  answers: (string | number | null)[];
  startTime: Date;
  endTime?: Date;
  score?: number;
  maxScore: number;
}

export interface QuizResult {
  sessionId: string;
  score: number;
  maxScore: number;
  percentage: number;
  correctAnswers: number;
  totalQuestions: number;
  results: {
    questionId: string;
    isCorrect: boolean;
    userAnswer: string | number | null;
    correctAnswer: string | number;
  }[];
}
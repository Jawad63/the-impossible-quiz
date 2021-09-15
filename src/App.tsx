import React, { useState } from 'react';
import { fetchQuizQestions } from './API';
// Components : 
import QuestionCard from './components/QuestionCard';
// Types:
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQestions(TOTAL_QUESTIONS, Difficulty.EASY ))

  // we will make the API call with this: 
  const startTrivia = async () => {

  }

  // this function will be triggered when a user selects an answer: 
  // We are specifiying the event by telling it it'll come from HTML 
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  // this function will be triggered when the user clicks for the next Question:
  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>Quiz App:</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p className="questions">Loading Questions ...</p>
      {/*  
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question} 
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
          
      /> */}

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
  
}

export default App;

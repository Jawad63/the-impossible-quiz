import React, { useState } from 'react';
import { fetchQuizQestions } from './API';
// Components : 
import QuestionCard from './components/QuestionCard';
// Types:
import { Difficulty } from './API';

import { data } from './quizData';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);



  // here goes code for setting array in useState(): 
  
  const [arrayData, setArrayData] = useState(data); // setting default value.

  const handleArrayData = () => {
    
  };






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
          question={questions[number].question} 
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
        />
        
      */}

      {/* Mapping over array of data:  */}
      {arrayData.map((stuff, index) => (
        // Setting "index" as key because Q&A&N can be repeated, It will be better if you assign uniqe id as key:
        <li key={index}>
          <span>question: {stuff.question}</span>
          <span>answer: {stuff.answer}</span>
          <span>number: {stuff.number}</span>
        </li>
      ))}



      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
  
}

export default App;

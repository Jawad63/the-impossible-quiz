import React, { useState } from 'react';
// Components : 
import QuestionCard from './components/QuestionCard';


import { data } from './quizData';

const App = () => {

  const [count, setCount] = useState(0);

  const handleArrayData = () => {

  }

  // TODO: enjoy your evening :  


  // this function will be triggered when the user clicks for the next Question:
  const nextQuestion = () => {
    if (count < 4) {
      setCount(count + 1);
    }
    else if (count >= 4){
      setCount(0);
    }
    return;
  }


  return (
    <div className="App">
      <h1>Quiz App:</h1>
      <p className="score">Score:</p>
      <p className="questions">Loading Questions ...</p>

      <QuestionCard
        question={data[count].question}
        answers={data[count].answer}
        questionNr={data[count].number}
      />

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
  
}

export default App;

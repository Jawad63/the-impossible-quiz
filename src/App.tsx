import React, { useState } from 'react';
// Components : 
import QuestionCard from './components/QuestionCard';

import { data } from './quizData';

  // TODO: Have to create validation for answers.
  // TODO: When pressed on 'next question' the input field should be empty again.
  // TODO: Have multiple questions and one correct answer to them. 
  // TODO: When pressed on the wrong option it should point out the correct one with color green and the one user choose in color red. 
  // TODO: Add basic styling to the app. 



const App = () => {

  const [count, setCount] = useState(0);





  const checkAnswer = () => {
  }



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
      <button onClick={checkAnswer}>Check</button>
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

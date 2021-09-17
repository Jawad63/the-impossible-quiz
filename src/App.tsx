import React, { useState } from 'react';
// Components : 
import QuestionCard from './components/QuestionCard';

import { data } from './quizData';

  // TODO: Have to create validation for answers.
  // TODO: When pressed on 'next question' the input field should be empty again.
  // TODO: Add checkboxes with each option.
  // TODO: Have multiple questions and one correct answer to them. 
  // TODO: When pressed on the wrong option it should point out the correct one with color green and the one user choose in color red. 
  // TODO: Add basic styling to the app. 



const App = () => {

  const [count, setCount] = useState(0);



  // this function will be triggered when the user clicks for the next Question:
  const nextQuestion = () => {
    if (count < 9) {
      setCount(count + 1);
    }
    else if (count >= 9){
      setCount(0);
    }
    return;
  }


  return (
    <div className="App">
      <h1>Quiz App:</h1>
      <p className="score">Score:</p>

      <QuestionCard
        question={data[count].question}
        options={data[count].option}
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

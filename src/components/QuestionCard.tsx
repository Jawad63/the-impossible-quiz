import React, { useState } from 'react';

// creating props for this component: 
type Props = {
   question: string;
   options: string[];
   answers: any;
   questionNr: number;
}



const checkAnswer = () => {
   const user = document.getElementById("userInput") as HTMLInputElement;
   const userGuess = user.value;
   console.log(userGuess);
}

const QuestionCard: React.FC<Props> = ({
   question,
   options,
   answers,
   questionNr


}) => {
   return (
      <div>
         {/* This will indicate on which question the user is on: */}
         <p>
            {questionNr}
         </p>

         <p className="question">
             {question} 
         </p>

         <div>
            {options.map((option, index) => (
               <li>{option}</li>
            ))}
         </div>


         <p className="answers">
            <input type="text" id="userInput"/>
         </p>

         <button onClick={checkAnswer}>Check</button>


      </div>
   )
};

export default QuestionCard;


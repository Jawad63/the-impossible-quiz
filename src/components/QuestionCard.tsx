import { count } from 'console';
import React, { useState } from 'react';


   // creating props for this component: 
   type Props = {
      question: string;
      options: string[];
      answers: any;
      questionNr: number;
      setScore: any;
   }

   const QuestionCard: React.FC<Props> = ({
      question,
      options,
      answers,
      questionNr,
      setScore


}) => {

   const [guessAnswer, setGuessAnswer] = useState("");

   const checkAnswer = () => {

      if (guessAnswer.toLowerCase() === answers.toLowerCase()) {
         setScore(1);
         alert("you got the right answer");
      } else {
         setScore(-1);
         alert("try again :(")
      }
   }

   const setAnswer = (event:any) => {
      setGuessAnswer(event.target.value);
   }
      

   return (
      <div>
         <p className="question">
             {question} 
         </p>

         <div onChange={setAnswer}>
            {options.map((option, index) => (
               <li key={index}><input type="radio" name="answer" value={option}/>{option}</li>
            ))}
         </div>
         
         {/* 
         <p className="answers">
            <input type="text" id="userInput"/>
         </p>
         */}

         <button onClick={checkAnswer}>Check</button> 

      </div>
   )
};

export default QuestionCard;


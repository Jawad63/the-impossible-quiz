import React from "react";
import { formatWithOptions } from "util";

// creating props for this component: 
type Props = {
   question: string;
   options: string[];
   answers: string;
   questionNr: number;


}

const checkAnswer = () => {
   alert("grateful for help :)")
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
            
            {/* 
            {answers.map((answer:string, index:any) => (
               <li>{answer}</li>
               
            ))}
            */}   

            <input type="text" />
         </p>

         <button onClick={checkAnswer}>Check</button>


      </div>
   )
};

export default QuestionCard;

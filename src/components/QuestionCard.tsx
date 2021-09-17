import React from "react";

// creating props for this component: 
type Props = {
   question: string;
   answers: string;
   questionNr: number;
}

const QuestionCard: React.FC<Props> = ({
   question,
   answers,
   questionNr
}) => {
   return (
      <div>
         {/* This will indicate on which question the user is on: */}
         <p className="number">
             {questionNr} 
         </p>

         <p className="question">
             {question} 
         </p>

         
         <div>
            <input />
            <p></p>
         </div>
      </div>
   )
};

export default QuestionCard;

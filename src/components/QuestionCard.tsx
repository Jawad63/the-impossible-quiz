import React from "react";

// creating props for this component: 
type Props = {
   question: string;
   answers: string[];
   callback: any;
   userAnswer: any;
   questionNr: number;
   totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
   question,
   answers,
   callback,
   userAnswer,
   questionNr,
   totalQuestions
}) => (
   <div>
      {/* This will indicate on which question the user is on: */}
      <p className="number">
         Question: {questionNr} / {totalQuestions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />
      
      <div>
         {answers.map(answer => (
            <div>
               <button disabled={userAnswer} onClick={callback}></button>
               <span dangerouslySetInnerHTML={{__html: answer}} />
            </div>
         ))}
      </div>
   </div>
);

export default QuestionCard;

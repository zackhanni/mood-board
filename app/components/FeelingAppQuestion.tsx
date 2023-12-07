import React from "react";
import FeelingQuestionData from "./FeelingQuestionData";
import FeelingAppButton from "./FeelingAppButton";

export default function FeelingAppQuestion() {
  return (
    <div>
      <h2 className="text-4xl font-bold my-8 sm:w-[640px]">
        {FeelingQuestionData.answers[answerOneIndex].questionTwo.question}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {FeelingQuestionData.answers[answerOneIndex].questionTwo.answers.map(
          (answer, index) => {
            return (
              <FeelingAppButton
                key={answer.label}
                onClick={props.onClickButton}
                label={answer.label}
              />
            );
          }
        )}
        <FeelingAppButton onClick={props.onClickBack} label="Go Back" />
      </div>
    </div>
  );
}

//
//
//

//   <FeelingAppQuestion
//     onClickBack={() => goToQuestionTwo(0)}
//     onClickButton={() => goToQuestionThree(index)}
//   />

//
//
//

// import React from "react";
// import FeelingAppButton from "./FeelingAppButton";

// interface QuestionProps {
//   questionData: any;
//   currentQuestion: number;
//   onAnswerSelected: (index: number) => void;
// }

// const FeelingAppQuestion: React.FC<QuestionProps> = ({
//   questionData,
//   currentQuestion,
//   onAnswerSelected,
// }) => {
//   const question = questionData[currentQuestion];

//   return (
//     <div>
//       <h2>{question.question}</h2>
//       <div>
//         {question.answers.map((answer, index) => (
//           <FeelingAppButton
//             key={answer.label}
//             onClick={() => onAnswerSelected(index)}
//             text={answer.label}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeelingAppQuestion;

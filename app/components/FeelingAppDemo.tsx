import { useState } from "react";
import FeelingQuestionData from "./FeelingQuestionData";
import FeelingAppDemoButton from "./FeelingAppDemoButton";

export default function FeelingAppDemo() {
  const [isQuestionTwo, setIsQuestionTwo] = useState(false);
  const [isQuestionThree, setIsQuestionThree] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answerOneIndex, setAnswerOneIndex] = useState(0);
  const [answerTwoIndex, setAnswerTwoIndex] = useState(0);

  const goToQuestionTwo = (index: number) => {
    setAnswerOneIndex(index);
    setIsQuestionTwo(!isQuestionTwo);
  };

  const goToQuestionThree = (index: number) => {
    setAnswerTwoIndex(index);
    setIsQuestionTwo(!isQuestionTwo);
    setIsQuestionThree(!isQuestionThree);
  };

  const showTheResults = () => {
    setShowResults(!showResults);
    setIsQuestionTwo(!isQuestionTwo);
    setIsQuestionThree(!isQuestionThree);
  };

  //   results page
  if (showResults) {
    return (
      <div>
        <h2>This is the results page</h2>
        <p>Blah Blah Blah</p>
        <FeelingAppDemoButton onClick={showTheResults} label="Go Back" />
      </div>
    );
  }

  //   question three
  if (isQuestionThree) {
    return (
      <div>
        <h2>
          {
            FeelingQuestionData.answers[answerOneIndex].questionTwo.answers[
              answerTwoIndex
            ].questionThree.question
          }
        </h2>
        <div>
          {FeelingQuestionData.answers[answerOneIndex].questionTwo.answers[
            answerTwoIndex
          ].questionThree.answers.map((answer) => {
            return (
              <FeelingAppDemoButton
                key={answer.label}
                onClick={showTheResults}
                label={answer.label}
              />
            );
          })}

          <FeelingAppDemoButton
            onClick={() => goToQuestionThree(0)}
            label="Go Back"
          />
        </div>
      </div>
    );
  }

  //   question two
  if (isQuestionTwo) {
    return (
      <div>
        <h2>
          {FeelingQuestionData.answers[answerOneIndex].questionTwo.question}
        </h2>
        <div>
          {FeelingQuestionData.answers[answerOneIndex].questionTwo.answers.map(
            (answer, index) => {
              return (
                <FeelingAppDemoButton
                  key={answer.label}
                  onClick={() => goToQuestionThree(index)}
                  label={answer.label}
                />
              );
            }
          )}
          <FeelingAppDemoButton
            onClick={() => goToQuestionTwo(0)}
            label="Go Back"
          />
        </div>
      </div>
    );
  }

  //   question one
  return (
    <div className="">
      <h2 className="text-4xl font-bold">{FeelingQuestionData.question}</h2>
      <div>
        {FeelingQuestionData.answers.map((answer, index) => {
          return (
            <FeelingAppDemoButton
              key={answer.label}
              onClick={() => goToQuestionTwo(index)}
              label={answer.label}
            />
          );
        })}
      </div>
    </div>
  );
}

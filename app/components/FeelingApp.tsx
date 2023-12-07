import { useState } from "react";
import FeelingQuestionData from "./FeelingQuestionData";
import FeelingAppButton from "./FeelingAppButton";
import { Greeting } from "./Greeting";

export default function FeelingApp() {
  const [isQuestionTwo, setIsQuestionTwo] = useState(false);
  const [isQuestionThree, setIsQuestionThree] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answerOneIndex, setAnswerOneIndex] = useState(0);
  const [answerTwoIndex, setAnswerTwoIndex] = useState(0);

  const username = window.sessionStorage.getItem("username");

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
        <h2 className="text-4xl font-bold my-8">This is the results page</h2>
        <p>Blah Blah Blah.. results results</p>
        <FeelingAppButton onClick={showTheResults} text="Go Back" />
      </div>
    );
  }

  //   question three
  if (isQuestionThree) {
    return (
      <div className="w-[100%]">
        <h2 className="text-4xl font-bold my-8">
          {
            FeelingQuestionData.answers[answerOneIndex].questionTwo.answers[
              answerTwoIndex
            ].questionThree.question
          }
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {FeelingQuestionData.answers[answerOneIndex].questionTwo.answers[
            answerTwoIndex
          ].questionThree.answers.map((answer) => {
            return (
              <FeelingAppButton
                key={answer.label}
                onClick={showTheResults}
                text={answer.label}
              />
            );
          })}

          <FeelingAppButton
            onClick={() => goToQuestionThree(0)}
            text="Go Back"
          />
        </div>
      </div>
    );
  }

  //   question two
  if (isQuestionTwo) {
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
                  onClick={() => goToQuestionThree(index)}
                  text={answer.label}
                />
              );
            }
          )}
          <FeelingAppButton onClick={() => goToQuestionTwo(0)} text="Go Back" />
        </div>
      </div>
    );
  }

  //   question one
  return (
    <div className="">
      <p className="text-5xl font-bold mb-4 sm:w-[640px]">
        <Greeting /> {username}.
      </p>
      <h2 className="text-4xl font-bold mb-8 sm:w-[640px]">
        {FeelingQuestionData.question}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {FeelingQuestionData.answers.map((answer, index) => {
          return (
            <FeelingAppButton
              key={answer.label}
              onClick={() => goToQuestionTwo(index)}
              text={answer.label}
            />
          );
        })}
      </div>
    </div>
  );
}

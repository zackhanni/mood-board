"use client";

import { useState } from "react";
import FeelingQuestionData from "./FeelingQuestionData";
import FeelingAppButton from "./FeelingAppButton";
import { Greeting } from "./Greeting";
import { useSession } from "next-auth/react";

export default function FeelingApp() {
  const [isQuestionTwo, setIsQuestionTwo] = useState(false);
  const [isQuestionThree, setIsQuestionThree] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answerOneIndex, setAnswerOneIndex] = useState(0);
  const [answerTwoIndex, setAnswerTwoIndex] = useState(0);
  // user answers
  const [feeling, setFeeling] = useState("");
  const [thoughts, setThoughts] = useState("");

  // get name of user
  const { data: session } = useSession();
  const username = session?.user?.name || "friend";

  const goToQuestionTwo = (index: number) => {
    setAnswerOneIndex(index);
    setIsQuestionTwo(!isQuestionTwo);
  };

  const goToQuestionThree = (index: number) => {
    setAnswerTwoIndex(index);
    setIsQuestionTwo(!isQuestionTwo);
    setIsQuestionThree(!isQuestionThree);
  };

  const saveResults = (feeling: string) => {
    console.log(feeling);
  };

  const finishMentalCheckIn = async (e) => {
    e.preventDefault();
    try {
      // await saveToDatabase(thoughts);
    } catch (error) {
      console.error("Error saving to database: ", error);
    }
  };

  //   results page
  if (showResults) {
    return (
      <div>
        <h2 className="text-4xl font-bold my-8">Results</h2>
        <p>Okay {username},</p>
        <p>
          Right now you&apos;re feeling{" "}
          <span className="underline">{feeling}</span>
        </p>
        {thoughts !== "" ? <p>Because - &quot;{thoughts}&quot;</p> : ""}
        <FeelingAppButton
          onClick={() => setShowResults(false)}
          text="Go Back"
        />
        <FeelingAppButton onClick={finishMentalCheckIn} text="Confirm" />
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
                onClick={() => setFeeling(answer.label)}
                text={answer.label}
              />
            );
          })}

          <FeelingAppButton
            onClick={() => goToQuestionThree(0)}
            text="Go Back"
          />

          <form
            className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
            onSubmit={() => setShowResults(true)}
          >
            <textarea
              name="thoughts"
              rows={4}
              cols={50}
              placeholder="Write down a little about what happened..."
              className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
            />

            <button
              type="submit"
              className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
            >
              Submit Answers
            </button>
          </form>
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
        <Greeting /> <br />
        {username}.
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

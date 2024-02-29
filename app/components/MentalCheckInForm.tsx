"use client";

import { useState } from "react";
import FeelingQuestionData from "./FeelingQuestionData";
import FeelingAppButton from "./FeelingAppButton";
import { Greeting } from "./Greeting";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import axios from "axios";
import MentalCheckInFormQuestion from "./MentalCheckInFormQuestion";

export default function MentalCheckInForm() {
  const [isQuestionTwo, setIsQuestionTwo] = useState(false);
  const [isQuestionThree, setIsQuestionThree] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answerOneIndex, setAnswerOneIndex] = useState(0);
  const [answerTwoIndex, setAnswerTwoIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [selectedAnswerLabel, setSelectedAnswerLabel] = useState("");
  // user answers
  const [feeling, setFeeling] = useState("");
  const [thoughts, setThoughts] = useState("");

  // get name of user
  const { status, data: session } = useSession();
  const username = session?.user?.name || "friend";
  const email = session?.user?.email || "Unknown Email";

  const goToQuestionTwo = (index: number) => {
    setAnswerOneIndex(index);
    setIsQuestionTwo(!isQuestionTwo);
  };

  const goToQuestionThree = (index: number) => {
    setAnswerTwoIndex(index);
    setIsQuestionTwo(!isQuestionTwo);
    setIsQuestionThree(!isQuestionThree);
  };

  // const prisma = new PrismaClient();
  const router = useRouter();

  const finishMentalCheckIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newEntry = {
        feeling: feeling,
        thoughts: thoughts,
        createdAt: new Date(),
        email: email,
      };
      const response = await axios.post("/api/auth/makeEntry", newEntry);

      console.log("New entry created: ", newEntry);
      router.push("/history");
    } catch (error) {
      console.error("Error saving to database: ", error);
    }
  };

  //   results page
  if (showResults) {
    return (
      <div className="5%] sm:w-auto sm:max-w-screen-sm">
        <h2 className="text-2xl font-bold pb-8">Check in summary</h2>

        {status === "authenticated" && (
          <>
            <p className="pb-2">Okay {username},</p>
          </>
        )}

        <p className="">
          Right now you&apos;re feeling{" "}
          <span className="underline">{feeling}</span>
        </p>
        {thoughts !== "" ? (
          <p className="max-w-sm">Because - &quot;{thoughts}&quot;</p>
        ) : (
          ""
        )}

        <div className="grid sm:grid-cols-2 gap-3 pt-3">
          <FeelingAppButton
            onClick={() => setShowResults(false)}
            text="Go Back"
          />

          {status === "authenticated" ? (
            <FeelingAppButton
              onClick={finishMentalCheckIn}
              text="Save Answer"
            />
          ) : (
            <p>
              You need to log in to save the results and track them over time
            </p>
          )}
        </div>
      </div>
    );
  }

  //   question three
  if (isQuestionThree) {
    return (
      <MentalCheckInFormQuestion
        question={
          FeelingQuestionData.answers[answerOneIndex].questionTwo.answers[
            answerTwoIndex
          ].questionThree.question
        }
        answers={
          <>
            {FeelingQuestionData.answers[answerOneIndex].questionTwo.answers[
              answerTwoIndex
            ].questionThree.answers.map((answer) => {
              return (
                <FeelingAppButton
                  key={answer.label}
                  onClick={() => {
                    setFeeling(answer.label);
                    setSelectedAnswerLabel(answer.label);
                  }}
                  text={answer.label}
                  color={backgroundColor}
                  bgColor={`bg-${backgroundColor}`}
                  bgToggle={answer.label === selectedAnswerLabel}
                />
              );
            })}
            <FeelingAppButton
              onClick={() => goToQuestionThree(0)}
              text="Go Back"
            />
            <form
              className="text-black flex flex-col"
              onSubmit={() => setShowResults(true)}
            >
              <textarea
                name="thoughts"
                rows={4}
                // cols={50}
                // placeholder="Write down a little about what happened..."
                className="px-1 py-1 mb-3 border-4 border-black rounded-md text-xs"
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
              />

              <button
                type="submit"
                className="px-3 py-2 font-bold rounded border-solid border-4 border-black hover:bg-black hover:text-white hover:underline hover:-translate-y-1"
              >
                Continue
              </button>
            </form>
          </>
        }
      />
    );
  }

  //   question two
  if (isQuestionTwo) {
    return (
      <MentalCheckInFormQuestion
        question={
          FeelingQuestionData.answers[answerOneIndex].questionTwo.question
        }
        answers={
          <>
            {FeelingQuestionData.answers[
              answerOneIndex
            ].questionTwo.answers.map((answer, index) => {
              return (
                <FeelingAppButton
                  key={answer.label}
                  onClick={() => goToQuestionThree(index)}
                  text={answer.label}
                  color={backgroundColor}
                />
              );
            })}
            <FeelingAppButton
              onClick={() => goToQuestionTwo(0)}
              text="Go Back"
            />
          </>
        }
      />
    );
  }

  //   question one
  return (
    <MentalCheckInFormQuestion
      question={FeelingQuestionData.question}
      answers={FeelingQuestionData.answers.map((answer, index) => {
        return (
          <FeelingAppButton
            key={answer.label}
            onClick={() => {
              goToQuestionTwo(index);
              setBackgroundColor(answer.color);
            }}
            text={answer.label}
            color={answer.color}
          />
        );
      })}
    />
  );
}

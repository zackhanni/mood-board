"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Calendar from "./Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FeelingQuestionData from "./FeelingQuestionData";

type Entry = {
  id: string;
  feeling: string;
  thoughts?: string;
  createdAt: Date;
};

export default function HistoryEntries() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/auth/getEntries", {
          params: {
            email: userEmail,
          },
        });
        setEntries(response.data.entries);
      } catch (error) {
        console.error("Failed to fetch entries:", error);
      }
    };
    fetchData();
  }, [userEmail]);

  let yellowWords: string[] = [];
  let FeelQ2AnswersYellow = FeelingQuestionData.answers[0].questionTwo.answers;
  for (let i = 0; i < FeelQ2AnswersYellow.length; i++) {
    for (
      let j = 0;
      j < FeelQ2AnswersYellow[i].questionThree.answers.length;
      j++
    ) {
      yellowWords.push(FeelQ2AnswersYellow[i].questionThree.answers[j].label);
    }
  }

  let blueWords: string[] = [];
  let FeelQ2AnswersBlue = FeelingQuestionData.answers[1].questionTwo.answers;
  for (let i = 0; i < FeelQ2AnswersBlue.length; i++) {
    for (
      let j = 0;
      j < FeelQ2AnswersBlue[i].questionThree.answers.length;
      j++
    ) {
      blueWords.push(FeelQ2AnswersBlue[i].questionThree.answers[j].label);
    }
  }

  let redWords: string[] = [];
  let FeelQ2AnswersRed = FeelingQuestionData.answers[2].questionTwo.answers;
  for (let i = 0; i < FeelQ2AnswersRed.length; i++) {
    for (let j = 0; j < FeelQ2AnswersRed[i].questionThree.answers.length; j++) {
      redWords.push(FeelQ2AnswersRed[i].questionThree.answers[j].label);
    }
  }

  // const redWords = FeelingQuestionData.answers[1].questionTwo.answers[i]

  const feelingColorHash: Map<string, string[]> = new Map([
    ["rgb(254  240  138)", yellowWords], // yellow-200
    ["rgb(59,  130,  246)", blueWords], // blue-500
    ["rgb(239,  68,  68)", redWords], // red-500
  ]);

  // createdAt property of Entry type is expecting string but receiving Data object. this converts it
  // const formattedEntries = entries.map((entry) => ({
  //   ...entry,
  //   createdAt: entry.createdAt.toISOString(),
  // }));

  return (
    <section className="sm:max-w-screen-sm mx-auto max-w-[95%]">
      {/* <Calendar data={entries} /> */}
      <div>
        {entries.length > 0 ? (
          entries.toReversed().map((entry) => {
            return (
              <div
                key={entry.id}
                className="grid gap-3 border-2 border-gray-200 m-2 p-4 rounded-md grid-cols-1 sm:grid-cols-2"
              >
                <div className="">
                  <div className="flex items-center">
                    <p className="font-bold pr-2">{entry.feeling}</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        color: Array.from(feelingColorHash.entries()).find(
                          ([color, feelings]) =>
                            feelings.includes(entry.feeling)
                        )?.[0],
                      }}
                    />
                  </div>

                  <div className="text-xs">
                    {new Date(entry.createdAt).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>

                {entry.thoughts && (
                  <div className="flex flex-col text-xs">
                    <p>
                      Your <span className="underline">thoughts</span>:
                    </p>
                    <p className="text-black/60 bg-gray-200 p-1">
                      {entry.thoughts}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="py-16">no entries yet or unable to fetch entries</p>
        )}
      </div>
    </section>
  );
}

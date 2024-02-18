import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClipboard,
  faEyeSlash,
  faCalendarDays,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import Link from "next/link";

export default function HomeSection1() {
  const data = [
    {
      title: "Comprehensive Emotion Education",
      content:
        "Comprehensive learning experiences with detailed information on a wide range of emotions. Delve into more complex and nuanced feelings.",
      icon: <FontAwesomeIcon size="xl" icon={faHeart} />,
    },
    {
      title: "Interactive Learning Modules",
      content:
        "Engaging and interactive learning modules that cater to different learning styles. Utilize quizzes, games, and real-life scenarios.",
      icon: <FontAwesomeIcon size="xl" icon={faPenToSquare} />,
    },
    {
      title: "Personalized Emotion Tracking",
      content:
        "Customizable emotion tracking allows users to log and analyze their emotions over time. Identify patterns, triggers, and progress in managing emotions effectively.",
      icon: <FontAwesomeIcon size="xl" icon={faUser} />,
    },
    {
      title: "Goal-Oriented Progress Tracking",
      content:
        "Set emotional well-being goals. Track progress, celebrate achievements, and see areas that may need improvement.",
      icon: <FontAwesomeIcon size="xl" icon={faCalendarDays} />,
    },
    {
      title: "Expert Guidance and Resources",
      content:
        "Expert insights, articles, and resources on emotional well-being. Psychologists, therapists, and mental health professionals provide reliable information and tips on managing and understanding emotions.",
      icon: <FontAwesomeIcon size="xl" icon={faClipboard} />,
    },
    {
      title: "Data Encryption",
      content:
        "All data transmitted between your device and our servers is encrypted using industry-standard protocols. This means that even if intercepted, the information remains unreadable to unauthorized parties.",
      icon: <FontAwesomeIcon size="xl" icon={faEyeSlash} />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#6C63FF] bg-fixed to-white py-16">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-center text-3xl">Why Mood Board?</h2>
        <p className="text-sm max-w-[500px] text-center mx-auto pt-2 pb-8">
          Our user-friendly interface, accessibility across devices, and any
          unique features set our web app apart from others in the market.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 place-items-start gap-4 z-10 mx-auto max-w-screen-md">
          {data.map((item) => {
            return (
              <li
                key={item.title}
                className="bg-white/50 p-4 rounded-xl text-xs backdrop-blur-md "
              >
                <div className="text-center">{item.icon}</div>

                <h3 className="py-1 text-base leading-5 pt-2 font-medium">
                  {item.title}
                </h3>

                <p className="">{item.content}</p>
                <Link href="/">
                  <p className="text-[#6C63FF] pt-2 hover:underline">
                    Learn More
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

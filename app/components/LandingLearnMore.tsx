"use client";

import { useState } from "react";

export default function LandingLearnMore() {
  const [showItem, setShowItem] = useState(false);

  const accordionData = [
    {
      title: "What is Mood Board?",
      content:
        "Mood Board was designed to help people learn more about their emotions. There are so many complex emotions out there and knowing more about them will also help you learn about yourself.",
    },
    { title: "How does it help?", content: "this is more content" },
    { title: "Is it FREE?", content: "this is the most content" },
  ];

  return (
    <section className="max-w-sm mx-auto ">
      <div className="flex flex-col justify-center">
        {accordionData.map((item) => {
          return (
            <div
              key={item.title}
              className="bg-black/10 space-y-4 duration-300"
            >
              <h2
                onClick={() => setShowItem(!showItem)}
                className="hover:underline"
              >
                {item.title}
              </h2>
              <p className={`${showItem ? "block" : "hidden"}`}>
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

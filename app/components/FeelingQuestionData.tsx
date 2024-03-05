// array for questions and feelings
const FeelingQuestionData = {
  question: "How are you feeling right now?",
  answers: [
    {
      label: "Happy",
      color: "yellow-100",
      questionTwo: {
        question:
          "You feel happy. It's wonderful to hear that. Can you be more specific?",
        answers: [
          {
            label: "Playful",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Aroused" }, { label: "Cheeky" }],
            },
          },
          {
            label: "Content",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Free" }, { label: "Joyful" }],
            },
          },
          {
            label: "Interested",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Curious" }, { label: "Inquisitive" }],
            },
          },
          {
            label: "Proud",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Successful" }, { label: "Confident" }],
            },
          },
          {
            label: "Accepted",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Respected" }, { label: "Valued" }],
            },
          },
          {
            label: "Powerful",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Courageous" }, { label: "Creative" }],
            },
          },
          {
            label: "Peaceful",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Loving" }, { label: "Thankful" }],
            },
          },
          {
            label: "Trusting",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Sensitive" }, { label: "Intimate" }],
            },
          },
          {
            label: "Optimistic",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Hopeful" }, { label: "Inspired" }],
            },
          },
        ],
      },
    },
    {
      label: "Sad",
      color: "blue-100",
      questionTwo: {
        question:
          "You feel sad. Remember that it is not permanent. Let's find a more specific description.",
        answers: [
          {
            label: "Lonely",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Isolated" }, { label: "Abandoned" }],
            },
          },
          {
            label: "Vulnerable",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Victimized" }, { label: "Fragile" }],
            },
          },
          {
            label: "Despair",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Grief" }, { label: "Powerless" }],
            },
          },
          {
            label: "Guilty",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Ashamed" }, { label: "remorseful" }],
            },
          },
          {
            label: "Depressed",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Empty" }, { label: "Inferior" }],
            },
          },
          {
            label: "Hurt",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Disappointed" }, { label: "Embarrassed" }],
            },
          },
        ],
      },
    },
    {
      label: "Angry",
      color: "red-100",
      questionTwo: {
        question:
          "You feel angry. Take a deep breath. Let's find a more specific description.",
        answers: [
          {
            label: "Let down",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Betrayed" }, { label: "Resentful" }],
            },
          },
          {
            label: "Humiliated",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Disrespectful" }, { label: "Ridiculed" }],
            },
          },
          {
            label: "Bitter",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Indignant" }, { label: "Violated" }],
            },
          },
          {
            label: "Mad",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Furious" }, { label: "Jealous" }],
            },
          },
          {
            label: "Aggressive",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Provoked" }, { label: "Hostile" }],
            },
          },
          {
            label: "Frustrated",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Infuriated" }, { label: "Annoyed" }],
            },
          },
          {
            label: "Distant",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Withdrawn" }, { label: "Numb" }],
            },
          },
          {
            label: "Critical",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Skeptical" }, { label: "Dismissive" }],
            },
          },
        ],
      },
    },
    {
      label: "Fearful",
      color: "orange-300",
      questionTwo: {
        question:
          "You feel fearful. Take a deep breath. Let;s get more specific.",
        answers: [
          {
            label: "Scared",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Helpless" }, { label: "Frightened" }],
            },
          },
          {
            label: "Anxious",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Overwhelmed" }, { label: "Worried" }],
            },
          },
          {
            label: "Insecure",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Inadequate" }, { label: "Inferior" }],
            },
          },
          {
            label: "Weak",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Worthless" }, { label: "Insignificant" }],
            },
          },
          {
            label: "Rejected",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Excluded" }, { label: "Persecuted" }],
            },
          },
          {
            label: "Threatened",
            questionThree: {
              question:
                "This is question 3. There are many like it but this one is mine.",
              answers: [{ label: "Nervous" }, { label: "Exposed" }],
            },
          },
        ],
      },
    },
  ],
};

export default FeelingQuestionData;

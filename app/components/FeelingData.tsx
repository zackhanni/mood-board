// array for questions and feelings
const FeelingData = [
  {
    id: 1,
    question: "How are you feeling?",
    answers: [
      {
        label: "Happy",
        nextQuestionId: 2,
      },
      {
        label: "Sad",
        nextQuestionId: 3,
      },
      {
        label: "Angry",
        nextQuestionId: 4,
      },
    ],
  },
  {
    id: 2,
    question:
      "You feel happy. It's wonderful to hear that. Can you be more specific?",
    answers: [
      {
        label: "Playful",
        nextQuestionId: 20,
      },
      {
        label: "Content",
        nextQuestionId: 20,
      },
      {
        label: "Interested",
        nextQuestionId: 20,
      },
      {
        label: "Proud",
        nextQuestionId: 20,
      },
      {
        label: "Accepted",
        nextQuestionId: 20,
      },
      {
        label: "Powerful",
        nextQuestionId: 20,
      },
      {
        label: "Peaceful",
        nextQuestionId: 20,
      },
      {
        label: "Trusting",
        nextQuestionId: 20,
      },
      {
        label: "Optimistic",
        nextQuestionId: 20,
      },
    ],
  },
  {
    id: 3,
    question:
      "You feel sad. Remember that it is not perminant. Let's find a more specific description.",
    answers: [
      {
        label: "Lonely",
        nextQuestionId: 30,
      },
      {
        label: "Vulnerable",
        nextQuestionId: 30,
      },
      {
        label: "Despair",
        nextQuestionId: 30,
      },
      {
        label: "Guilty",
        nextQuestionId: 30,
      },
      {
        label: "Depressed",
        nextQuestionId: 30,
      },
      {
        label: "Hurt",
        nextQuestionId: 30,
      },
    ],
  },
  {
    id: 4,
    question:
      "You feel angry. Take a deep breath. Let's find a more specific description.",
    answers: [
      {
        label: "Let down",
        nextQuestionId: 40,
      },
      {
        label: "Humiliated",
        nextQuestionId: 40,
      },
      {
        label: "Bitter",
        nextQuestionId: 40,
      },
      {
        label: "Mad",
        nextQuestionId: 40,
      },
      {
        label: "Aggressive",
        nextQuestionId: 40,
      },
      {
        label: "Frusterated",
        nextQuestionId: 40,
      },
      {
        label: "Distant",
        nextQuestionId: 40,
      },
      {
        label: "Critical",
        nextQuestionId: 40,
      },
    ],
  },
  {
    id: 20,
    question:
      "Happy. Once I can develop this app further, there will be more information here!",
    answers: [
      {
        label: "Restart",
        nextQuestionId: -1,
      },
    ],
  },
  {
    id: 30,
    question:
      "Sad. Once I can develop this app further, there will be more information here!",
    answers: [
      {
        label: "Restart",
        nextQuestionId: -1,
      },
    ],
  },
  {
    id: 40,
    question:
      "Angry. Once I can develop this app further, there will be more information here!",
    answers: [
      {
        label: "Restart",
        nextQuestionId: -1,
      },
    ],
  },
];

export default FeelingData;

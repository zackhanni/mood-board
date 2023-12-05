type FeelingQuestion = {
  question: string;
};

const FeelingQuestion: React.FC<FeelingQuestion> = ({ question }) => {
  return <h3>{question}</h3>;
};

export default FeelingQuestion;

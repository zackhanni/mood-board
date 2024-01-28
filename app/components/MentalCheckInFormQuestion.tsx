import { Greeting } from "./Greeting";
import { useSession } from "next-auth/react";

interface MentalCheckInFormQuestionProps {
  question: string;
  answers: JSX.Element | JSX.Element[];
}

export default function MentalCheckInFormQuestion(
  props: MentalCheckInFormQuestionProps
) {
  const { data: session } = useSession();
  const username = session?.user?.name || "friend";

  return (
    <div className="w-[95%] sm:w-auto sm:max-w-screen-sm">
      {/* if its the first question, greet the user */}
      {/* {props.answers && (
        <p className="mb-4">
          <Greeting /> {username}.
        </p>
      )} */}

      <h2 className="text-2xl font-bold mb-8 max-w-sm">{props.question}</h2>
      <div className="grid sm:grid-cols-2 gap-3">{props.answers}</div>
    </div>
  );
}

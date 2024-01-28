interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export default function FeelingAppButton(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="px-3 py-2 font-bold rounded border-solid border-4 border-black hover:bg-yellow-100 shadow-md hover:shadow-2xl active:bg-yellow-100 hover:-translate-y-1 hover:underline"
    >
      {props.text}
    </button>
  );
}

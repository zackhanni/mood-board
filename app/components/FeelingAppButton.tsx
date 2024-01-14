interface ButtonProps {
  onClick: () => void;
  text: string;
}

export default function FeelingAppButton(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="px-4 py-2 flex w-full md:max-w-screen-sm font-bold rounded border-solid border-4 border-black hover:bg-yellow-100 items-center justify-center text-xl shadow-md hover:shadow-2xl active:bg-yellow-100"
    >
      {props.text}
    </button>
  );
}

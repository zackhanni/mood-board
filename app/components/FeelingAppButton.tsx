interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color?: string;
}

export default function FeelingAppButton(props: ButtonProps) {
  console.log("Color prop:", props.color);
  let hoverClass = props.color
    ? `hover:bg-${props.color}`
    : "hover:bg-yellow-100";

  return (
    <button
      onClick={props.onClick}
      className={`px-3 py-2 font-bold rounded border-solid border-4 border-black ${hoverClass} shadow-md hover:shadow-2xl active:bg-yellow-100 hover:-translate-y-1 hover:underline`}
    >
      {props.text}
    </button>
  );
}

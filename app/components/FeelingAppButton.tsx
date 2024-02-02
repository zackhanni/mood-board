interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color?: string;
}

export default function FeelingAppButton(props: ButtonProps) {
  const colorMap = {
    "yellow-100": "hover:bg-yellow-100",
    "blue-100": "hover:bg-blue-100",
    "red-100": "hover:bg-red-100",
  };

  let hoverColor;
  if (props.color && colorMap[props.color]) {
    hoverColor = colorMap[props.color];
  } else {
    hoverColor = "";
  }

  return (
    <button
      onClick={props.onClick}
      className={`px-3 py-2 font-bold rounded border-solid border-4 border-black ${hoverColor} shadow-md hover:shadow-2xl hover:-translate-y-1 hover:underline duration-300`}
    >
      {props.text}
    </button>
  );
}

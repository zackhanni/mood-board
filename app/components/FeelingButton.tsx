type FeelingButton = {
  feeling: string;
  onClick: () => void;
};

const FeelingButton: React.FC<FeelingButton> = ({ feeling, onClick }) => {
  return (
    <button className="feeling-btn" onClick={onClick}>
      {feeling}
    </button>
  );
};

export default FeelingButton;

import HistoryEntries from "../components/HistoryEntries";

export default function History() {
  return (
    <>
      <div className="mt-24 sm:max-w-screen-md mx-auto max-w-[95%]">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center">
            Your Mood Board History
          </h1>
          <p className="text-center">Track your past mental check ins</p>
        </div>
        <HistoryEntries />
      </div>
    </>
  );
}

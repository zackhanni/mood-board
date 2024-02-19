import HistoryEntries from "../components/HistoryEntries";
import Image from "next/image";

export default function History() {
  return (
    <>
      <section className="my-16 sm:max-w-screen-md mx-auto max-w-[95%] space-y-2">
        <h1 className="text-4xl text-center">Your Mood Board History</h1>
        <p className="text-center">Track your past mental check ins</p>
        <Image
          src="/booking.svg"
          width={300}
          height={300}
          alt="History calendar"
          className="mx-auto pt-8"
        />
      </section>
      <HistoryEntries />
    </>
  );
}

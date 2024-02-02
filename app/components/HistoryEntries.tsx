import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Calendar from "./Calendar";

type Entry = {
  id: string;
  feeling: string;
  thoughts?: string;
  createdAt: Date;
};

export default function HistoryEntries() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/auth/getEntries", {
          params: {
            email: userEmail,
          },
        });
        setEntries(response.data.entries);
      } catch (error) {
        console.error("Failed to fetch entries:", error);
      }
    };

    fetchData();
  }, [userEmail]);

  return (
    <>
      <Calendar data={entries} />
      <div>
        {entries.length > 0 ? (
          entries.toReversed().map((entry) => {
            return (
              <div
                key={entry.id}
                className="grid gap-3 border-4 border-black m-2 p-4 rounded-md grid-cols-1 md:grid-cols-2"
              >
                <div className="">
                  <p>
                    You were feeling{" "}
                    <span className="font-bold">{entry.feeling} </span> on
                  </p>
                  <p>
                    {new Date(entry.createdAt).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                {entry.thoughts && (
                  <p>
                    Your <span className="underline">thoughts</span>:
                    <br />
                    {entry.thoughts}
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <p className="py-16">no entries yet or unable to fetch entries</p>
        )}
      </div>
    </>
  );
}

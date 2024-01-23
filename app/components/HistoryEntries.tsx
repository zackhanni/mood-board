import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

type Entry = {
  id: string;
  feeling: string;
  thoughts: string;
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
    <div id="user-history-data">
      {entries.length > 0 ? (
        entries.map((entry) => {
          return (
            <div key={entry.id} className="flex flex-row">
              {/* <p>{entry.createdAt}</p> */}
              <p>{entry.feeling}</p>
              <p>{entry.thoughts}</p>
            </div>
          );
        })
      ) : (
        <p className="py-16">no entries yet or unable to fetch entries</p>
      )}
    </div>
  );
}

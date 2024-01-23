import { useEffect, useState } from "react";
import axios from "axios";

type Entry = {
  id: string;
  createdAt: Date;
  feeling: string;
  thoughts: string;
};

export default function HistoryEntries() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get("/api/entries");
        setEntries(response.data);
      } catch (error) {
        console.error("Failed to fetch entries:", error);
      }
    };

    fetchEntries();
  }, []);

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

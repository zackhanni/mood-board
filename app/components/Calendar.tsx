export default function Calendar(props) {
  const date = new Date();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() + 1; // JavaScript counts months from 0 to 11
  const daysThisMonth = new Date(thisYear, thisMonth, 0).getDate();

  const firstDayOfMonth = new Date(thisYear, thisMonth - 1, 1);
  const firstWeekDayThisMonth = firstDayOfMonth.getDay();

  let calArray = [];

  for (let i = 0; i < firstWeekDayThisMonth; i++) {
    calArray.push(null);
  }
  for (let i = 1; i <= daysThisMonth; i++) {
    let date = new Date(thisYear, thisMonth - 1, i);
    calArray.push(date);
  }

  const feelingColors = {
    Valued: "bg-yellow-100",
    Numb: "bg-blue-100",
    angry: "bg-red-100",
  };

  // make a key value pair of dates and feelings in the data array
  let dateFeelingArray = props.data.reduce((accumulator, entry) => {
    let formattedDate = new Date(entry.createdAt).toISOString().split("T")[0];
    accumulator[formattedDate] = entry.feeling;
    return accumulator;
  }, {});

  return (
    <section className="">
      <h2 className="pl-3">A review of this month</h2>
      <p>{JSON.stringify(dateFeelingArray)}</p>
      <div className="grid grid-cols-7 gap-1 p-3">
        {calArray.map((day, index) => {
          // get the list of entries
          // put them together with a date and feeling pair
          //check if the year is the same year, if so, check if month is same month, if so, check if day is same day, if so, change background color of that day

          return (
            <div
              key={index}
              id={day ? day.toISOString().split("T")[0] : ""}
              className={`border-2 border-black p-2 
              
              ${
                day
                  ? feelingColors[
                      dateFeelingArray[day.toISOString().split("T")[0]] || ""
                    ]
                  : ""
              }
   `}
            >
              {day ? day.getDate() : ""}
            </div>
          );
        })}
      </div>
    </section>
  );
}

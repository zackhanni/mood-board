export default function Calendar() {
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

  return (
    <section className="">
      <h2 className="pl-3">A review of this month</h2>
      <div className="grid grid-cols-7 gap-1 p-3">
        {calArray.map((day, index) => {
          return (
            <div key={index} className={`border-2 border-black p-2 `}>
              {day ? day.getDate() : ""}
            </div>
          );
        })}
      </div>
    </section>
  );
}

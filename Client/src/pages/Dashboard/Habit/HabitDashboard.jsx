import { useState, useEffect } from 'react'
import { TitleChanger } from '../../../utils/TitleChanger'
import HeatMap from '../../../components/Dashboard/Habit/Charts/HeatMap'
import CurrentStreakCard from '../../../components/Dashboard/Habit/Charts/CurrentStreakCard'
import GoalProgressCard from '../../../components/Dashboard/Habit/Charts/GoalProgressCard'
import HabitScoreCard from '../../../components/Dashboard/Habit/Charts/HabitScoreCard'
import HabitSummaryCard from '../../../components/Dashboard/Habit/Charts/HabitSummaryCard'

function HabitDashboard() {
  TitleChanger("Progress Pulse | Habit Dashboard")

  // Format Date Function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = String(date.getFullYear()).slice(2);
    return `${day}-${month}-${year}`;
  };

  function formatDateLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // add 1 because month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed

  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const startDate = formatDateLocal(startOfMonth);
  const endDate = formatDateLocal(endOfMonth);

  // 🔹 Set in state
  const [fromDate, setFromDate] = useState(startDate);
  const [toDate, setToDate] = useState(endDate);

  const resetFilters = () => {
    setFromDate(startDate);
    setToDate(endDate);
    // Optionally re-fetch or show all data
  };

  return (
    <>
      {/* Sticky Heading */}
      <div className="sticky top-[-20px] z-30 bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {/* <UserCheck size={26} /> */}
            Habit Dashboard
          </h1>

          {/* Right: From/To Date Pickers */}
          <div className="flex items-center gap-4 ml-auto">
            {/* FROM DATE PICKER */}
            <div className="dropdown dropdown-end floating-label">
              <div
                tabIndex={0}
                role="button"
                className="input text-xs w-25"
              >
                {formatDate(fromDate) || "-- / --- / --"}
              </div>
              <span>From Date</span>
              <div className="dropdown-content z-[999] bg-base-100 rounded-box shadow-sm p-2">
                <calendar-date
                  class="cally"
                  onchange={(e) =>
                    setFromDate(e.target.value)
                  }
                >
                  <svg
                    aria-label="Previous"
                    className="fill-current size-4"
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                  </svg>
                  <svg
                    aria-label="Next"
                    className="fill-current size-4"
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                  </svg>
                  <calendar-month></calendar-month>
                </calendar-date>
              </div>
            </div>
            -

            {/* TO DATE PICKER */}
            <div className="dropdown dropdown-end floating-label">
              <div
                tabIndex={0}
                role="button"
                className="input text-xs w-25"
              >
                {formatDate(toDate) || "-- / --- / --"}
              </div>
              <span>To Date</span>
              <div className="dropdown-content z-[999] bg-base-100 rounded-box shadow-sm p-2">
                <calendar-date
                  class="cally"
                  onchange={(e) =>
                    setToDate(e.target.value)
                  }
                >
                  <svg
                    aria-label="Previous"
                    className="fill-current size-4"
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                  </svg>
                  <svg
                    aria-label="Next"
                    className="fill-current size-4"
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                  </svg>
                  <calendar-month></calendar-month>
                </calendar-date>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="join">
              <button className=" join-item btn btn-soft btn-sm btn-success">
                Filter
              </button>
              <button className="join-item btn btn-sm btn-soft" onClick={resetFilters}>
                Reset
              </button>
            </div>

          </div>



        </div>
      </div>



      <div className="w-full h-full overflow-y-auto overflow-x-hidden p-6 bg-base-200">

        {/* Overview Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-3"><HabitSummaryCard /></div>
            <div className="col-span-3"><CurrentStreakCard /></div>
            <div className="col-span-3"><GoalProgressCard /></div>
            <div className="col-span-3"><HabitScoreCard /></div>
          </div>
        </section>

        {/* Insights Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">📊 Habit Insights</h2>
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-4 row-span-2 bg-base-100 rounded-2xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">📅 Daily Tracker</h3>
              <div className="h-72 flex items-center justify-center text-gray-500">Coming Soon</div>
            </div>

            <div className="col-span-4 row-span-2 bg-base-100 rounded-2xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">🧠 Category Stats</h3>
              <div className="h-72 flex items-center justify-center text-gray-500">Coming Soon</div>
            </div>

            <div className="col-span-4 row-span-2 bg-base-100 rounded-2xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">📈 Habit Trends</h3>
              <div className="h-72 flex items-center justify-center text-gray-500">Coming Soon</div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">📊 Visualizations</h2>
          <div className="bg-base-100 rounded-2xl shadow-md p-6">
            <div className="tabs tabs-lifted">

              <input type="radio" name="chart-tabs" id="tab1" className="tab" defaultChecked />
              <label htmlFor="tab1" className="tab tab-bordered">Heatmap</label>
              <div className="tab-content mt-4">
                <HeatMap />
              </div>

              <input type="radio" name="chart-tabs" id="tab2" className="tab" />
              <label htmlFor="tab2" className="tab tab-bordered">Bar Chart</label>
              <div className="tab-content mt-4">
                <HeatMap />
              </div>

            </div>
          </div>
        </section>

        {/* Log Section */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">📋 Habit Logs</h2>
          <div className="bg-base-100 rounded-2xl shadow-md p-4 min-h-[300px]">
            <div className="h-full flex items-center justify-center text-gray-500">Table or logs coming soon</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HabitDashboard

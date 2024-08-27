import logo from "./logo.svg";
import "./App.css";
import { useCallback, useRef } from "react";
import moment from "moment";
import 'moment/locale/te';

function App() {

  moment.locale("te");

  let yearRef = useRef();
  let monthRef = useRef();
  let dayRef = useRef();
  let dateRef = useRef();
  let handleSubmit = () => {
    let year = parseInt(yearRef.current.value);
    let month = parseInt(monthRef.current.value) - 1;
    let day = parseInt(dayRef.current.value);

    if (month < 0 || month > 11) {
      alert("Invalid month! Please enter a value between 1 and 12.");
      return;
    }

    dateRef.current = new Date(year, month, day);

    console.log("User-Entered Date:", dateRef.current);
    let oldDate = new Date();
    console.log("current date and time", oldDate);
  };

  return (
    <div className="App">
      <div>
        <input ref={yearRef} type="number" placeholder="Year (e.g., 2024)" />
        <input ref={monthRef} type="number" placeholder="Month (1-12)" />
        <input ref={dayRef} type="number" placeholder="Day (1-31)" />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <label>Batch Start Date</label>
        <input
          type="date"
          onChange={(e) => {
            let batchStartDate = new Date(e.target.value);

            let courseDuration = 120 * 24 * 60 * 60 * 1000;

            let courseEndDateInMS = batchStartDate.getTime() + courseDuration;

            let batchEndDate = new Date(courseEndDateInMS);
            console.log(batchStartDate);
            console.log(batchEndDate);

            console.log("using moment");
            console.log(
              moment(batchStartDate).format("MMMMM Do YYYY,h:mm:ss a")
            );
            console.log(moment(batchEndDate).format("MMMMM Do YYYY,h:mm:ss a"));

            console.log(moment(batchStartDate).add(120, "days").calendar());
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;

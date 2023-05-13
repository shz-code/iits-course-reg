import moment from "moment/moment";
import Countdown from "react-countdown";
import { useDispatch } from "react-redux";
import { setFinished } from "../features/submitValidation/submitValidationSlice";

const Counter = ({ deadline }) => {
  const dispatch = useDispatch();

  const deadlineTimestamp = moment(Date.parse(deadline));
  const currentTimestamp = moment(Date.now());
  // const timeDiff = currentTimestamp.diff(deadlineTimestamp);
  const timeDiff = deadlineTimestamp.diff(currentTimestamp);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "Time's up";
    } else {
      // Render a countdown
      let content = "";
      if (days) {
        content += `${days} `;
        if (days > 1) content += "days ";
        else content += "day ";
      }
      if (hours) {
        content += `${hours} `;
        if (hours > 1) content += "hours ";
        else content += "hour ";
      }
      if (minutes) {
        content += `${minutes} `;
        if (minutes > 1) content += "minutes ";
        else content += "minute ";
      }
      if (seconds) {
        content += `${seconds} `;
        if (seconds > 1) content += "seconds ";
        else content += "second ";
      }
      return <span>{content} left</span>;
    }
  };

  const handleComplete = () => {
    dispatch(setFinished());
  };

  return (
    <div tabIndex="0" aria-label="Deadline">
      {" "}
      <Countdown
        date={Date.now() + timeDiff}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default Counter;

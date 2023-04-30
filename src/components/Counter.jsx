import moment from "moment/moment";
import Countdown from "react-countdown";

const Counter = ({ deadline }) => {
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
        content += `${days} days `;
      }
      if (hours) {
        content += `${hours} hours `;
      }
      if (minutes) {
        content += `${minutes} minutes `;
      }
      if (seconds) {
        content += `${seconds} seconds `;
      }
      return <span>{content} left</span>;
    }
  };

  const handleComplete = () => {
    console.log("hi");
  };

  return (
    <div>
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

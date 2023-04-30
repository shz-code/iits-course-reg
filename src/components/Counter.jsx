import Countdown from "react-countdown";

const Counter = () => {
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

  return (
    <div>
      {" "}
      <Countdown date={Date.now() + 500000} renderer={renderer} />
    </div>
  );
};

export default Counter;

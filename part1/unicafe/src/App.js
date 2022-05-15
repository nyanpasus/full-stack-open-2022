import { useState } from "react";

const Button = (props) => (
  <>
    <button onClick={props.handleClick}>{props.text}</button>
  </>
);

const StatisticLine = ({ text, value }) => {
  let symbol = "positive" === text ? "%" : null;
  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>
            {value}
            {symbol}
          </td>
        </tr>
      </tbody>
    </>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.counter;
  if (good + neutral + bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine
          text="average"
          value={(good + bad * -1) / (good + neutral + bad)}
        />
        <StatisticLine
          text="positive"
          value={(good / (good + neutral + bad)) * 100}
        />
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counter = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <h1>statistics</h1>
      <Statistics counter={counter} />
    </>
  );
};

export default App;

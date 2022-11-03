import { useState } from 'react';

import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickBtn = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
    }
    return;
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }

    const totalPositiveFeedback = (good / countTotalFeedback()) * 100;
    return Math.round(totalPositiveFeedback);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleClickBtn}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

// import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
// import Section from "components/Section/Section"
// import Statistics from "components/Statistics/Statistics"
// import Notification from "components/Notification/Notification";

// export class App extends Component {

//  state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//  };

//   handleClickBtn = event => {
//      const { name } = event.target;
//     this.setState((prevState) => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad
//   };

//   countPositiveFeedbackPercentage = () => {

//     if (this.countTotalFeedback() === 0) {
//       return 0;
//     }

//     const totalPositiveFeedback =
//       (this.state.good / this.countTotalFeedback()) * 100;
//     return Math.round(totalPositiveFeedback);

//   };

// render() {
//    const { good, neutral, bad } = this.state
//   return (
//     <div>
//       <Section title="Please leave feedback">

//         <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.handleClickBtn}>
//         </FeedbackOptions>

//         </Section>

//         <Section title="Statistics">
//         {this.countTotalFeedback() > 0 ?
//           (<Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}>
//           </Statistics>) : (
//                <Notification message="There is no feedback"/>
//           )}

//         </Section>
//     </div>

//   );
// };
// };

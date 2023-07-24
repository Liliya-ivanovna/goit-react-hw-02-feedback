import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from './Statistics';
import SectionTitle from './SectionTitle';
import Notification from '../components/Notificatios/Notifications';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClick = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  percentageFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    return (
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.state} onClick={this.onClick} />
        {this.totalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            total={this.totalFeedback()}
            positivePercentage={this.percentageFeedback()}
            stateOptions={this.state}
          />
        )}
      </SectionTitle>
    );
  }
}

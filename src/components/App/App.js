import { Component } from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import SectionTitle from "../SectionTitle";
import Notification from "../Notification";
import { Wrapper } from "../Wrapper/Wrapper.styles";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[`${evt.target.name}`] + 1,
    }));
  };

  countTotalFeedback = arr => {
    return arr.reduce((sum, current) => sum + current, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) /
        this.countTotalFeedback(Object.values(this.state)),
    );
    return `${percent}%`;
  };

  getStatistic() {
    if (this.countTotalFeedback(Object.values(this.state)) === 0) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Wrapper>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>

        <SectionTitle title="Statistic">
          {this.getStatistic() ? (
            <Statistics
              stateObj={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </Wrapper>
    );
  }
}

export default App;

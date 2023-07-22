import { Component } from "react";
import  FeedbackOptions  from "FeedbackOptions";
import Statistics from "./Statistics"
import SectionTitle from "./SectionTitle";

export class App  extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClick=option=>
  this.setState(prevState=>({[option]: prevState[option]+1})); 

render(){
  return( <SectionTitle title="Please leave feedback">
   
    <FeedbackOptions onLeaveFeedback={this.state} onClick={this.onClick}/>
   
    <Statistics feedbackOptions={this.state}/>
    
</SectionTitle>);
}
};
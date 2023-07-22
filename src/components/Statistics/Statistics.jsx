import PropTypes from "prop-types";
import SectionTitle from "components/SectionTitle";
import Notification from "../Notificatios/Notifications";
import {Wrapper} from "./Statistics.styled"

const Statistics=({feedbackOptions})=>{
    const {good,neutral,bad} = feedbackOptions;
    const countTotalFeedback = ()=>{return good+neutral+bad};
    const countPositiveFeedbackPercentage=()=>{return countTotalFeedback()===0 ? 0 : Math.round((good/countTotalFeedback())*100)}
    return(<SectionTitle title="Statistics">
        {countTotalFeedback() === 0 ? (<Notification message="There is no feedback"/>) :
    (<Wrapper><span>Good:{good}</span>
    <span>Neutral:{neutral}</span>
    <span>Bad:{bad}</span>
    <span>Total:{ countTotalFeedback()}</span>
    <span>Positive feedback:{countPositiveFeedbackPercentage()}%</span></Wrapper>)}
    </SectionTitle>
    )}
Statistics.propTypes={
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
    feedbackOptions: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
}
export default Statistics;
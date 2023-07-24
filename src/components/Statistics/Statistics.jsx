import PropTypes from "prop-types";
import SectionTitle from "components/SectionTitle";
import {Wrapper} from "./Statistics.styled";

const Statistics=({total, positivePercentage,stateOptions})=>{
   const {good,neutral,bad} = stateOptions;

return(<SectionTitle title="Statistics">
    <Wrapper><span>Good:{good}</span>
    <span>Neutral:{neutral}</span>
    <span>Bad:{bad}</span>
    <span>Total:{total}</span>
    <span>Positive feedback:{positivePercentage}%</span></Wrapper>
    </SectionTitle>
    )}
Statistics.propTypes={
    total:PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired,
    stateOptions: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
}
export default Statistics;
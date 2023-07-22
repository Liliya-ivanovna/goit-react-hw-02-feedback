import PropTypes from 'prop-types';
import { Button , Wrapper} from './Feedback.styled';

const FeedbackOptions=({onClick,onLeaveFeedback})=> {
    return (
        <Wrapper>
          {Object.keys(onLeaveFeedback).map((key, i) => {
            return (
              <Button key={i} onClick={() => onClick(key)}>
                {key}
              </Button>
            );
          })}
        </Wrapper>
      );
    };
    FeedbackOptions.propTypes={
        onClick: PropTypes.func.isRequired,
        feedbackOptions: PropTypes.shape({
            good: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
        }),
    };
    export default FeedbackOptions;
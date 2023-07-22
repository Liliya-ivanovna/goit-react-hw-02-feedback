import PropTypes from 'prop-types';
import { Span} from "./Notifications.styled"


const Notification = ({message})=>{
    return(<Span>{message}</Span>)
};
export default Notification;
 
Notification.propTypes={
    message: PropTypes.string.isRequired
};
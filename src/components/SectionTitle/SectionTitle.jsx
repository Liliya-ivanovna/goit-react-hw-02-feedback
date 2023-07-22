import { Wrapper,Title } from "./SectionTitle.styled";
import PropTypes from 'prop-types';

const SectionTitle= ({title,children})=>{
return(<Wrapper><Title>{title}</Title>{children}</Wrapper>)};
export default SectionTitle;
 
SectionTitle.propTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.any,
}
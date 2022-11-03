import PropTypes from 'prop-types';
import { Sections, LeaveFeedback } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Sections>
      <LeaveFeedback>{title}</LeaveFeedback>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;

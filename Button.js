import PropTypes from 'prop-types';
import './Button.css'; // Assuming you move button-specific styles here

export default function Button({ link, text }) {
  return (
    <a href={link} className="button-link">
      {text}
    </a>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};



import PropTypes from 'prop-types';

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5 opacity-75">{subtitle}</p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Heading;
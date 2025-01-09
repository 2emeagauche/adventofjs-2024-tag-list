import PropTypes from "prop-types"

const Tag = ({ text, selfRemove }) => {
  return (
    <div className="tagBlock">
      <span>{text}</span>
      <button onClick={selfRemove}>X</button>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
  selfRemove: PropTypes.func,
}

export default Tag;

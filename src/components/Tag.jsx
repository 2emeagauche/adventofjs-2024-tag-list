const Tag = ({ text, selfRemove }) => {
  return (
    <div className="tagBlock">
      <span>{text}</span>
      <button onClick={selfRemove}>X</button>
    </div>
  );
};

export default Tag;

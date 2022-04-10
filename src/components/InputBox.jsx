const InputBox = (props) => {
  const { type, name, value, handleChange, error } = props;
  const text = name.replace(name[0], name[0].toUpperCase());
  return (
    <div className="input-box">
      <label className="input-label" htmlFor={name}>
        {text}
        {error && <span className="error">{error}</span>}
      </label>
      <input
        className="input"
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;

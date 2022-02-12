import React from "react";

function Input({
  type,
  id,
  changeHandler,
  label,
  name,
  value,
  style,
  placeholder,
}) {
  return (
    <div className="input-row">
      <input
        className={style}
        name={name}
        value={value}
        type={type}
        id={id}
        required
        onChange={changeHandler}
        autoComplete="one-time-code"
        placeholder={placeholder}
      />
      <label className="label" htmlFor={id}>
        <span className="label__name">{label}</span>
      </label>
    </div>
  );
}

export default Input;

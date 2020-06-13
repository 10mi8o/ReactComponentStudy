import React, { useState } from "react";

const RadioButton = () => {
  const [val, setVal] = useState("cat");
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <label htmlFor="cat">
        <input
          id="cat"
          type="radio"
          value="cat"
          onChange={handleChange}
          checked={val === "cat"}
        />
        猫派
      </label>
      <label htmlFor="dog">
        <input
          id="dog"
          type="radio"
          value="dog"
          onChange={handleChange}
          checked={val === "dog"}
        />
        犬派
      </label>
      <p>{val}派です</p>
    </>
  );
};

export default RadioButton;
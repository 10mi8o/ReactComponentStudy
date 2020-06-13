import React, { useState } from "react";

const SelectBox = () => {
  const [val, setVal] = useState("react");
  const handleChange = (e) => setVal(e.target.value);

  return (
    <>
      <select name="" id="" value={val} onChange={handleChange}>
        <option value="react">React</option>
        <option value="vue">Vue.js</option>
        <option value="angular">Angular</option>
      </select>
      <p>{val}を選択しました</p>
    </>
  );
};

export default SelectBox;
import React, { useState } from "react";


const CheckBox = () => {
  const [val, setVal] = useState(["js"]);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (val.includes(e.target.value)) {
      setVal(val.filter((item) => item !== e.target.value));
      console.log(val);
    } else {
      setVal([...val, e.target.value]);
      console.log(val)
    }
  };

  return (
    <>
      <label htmlFor="">
        <input
          type="checkbox"
          value="js"
          onChange={handleChange}
          checked={val.includes("js")}
        />
        JS
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          value="php"
          onChange={handleChange}
          checked={val.includes("php")}
        />
        PHP
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          value="go"
          onChange={handleChange}
          checked={val.includes("go")}
        />
        GO
      </label>
    </>
  );
};

export default CheckBox;
import React, { useState, useEffect } from "react";

const RadioButtonCustom = () => {
  const [val, setVal] = useState("js");
  const [text, setText] = useState("Freeword");
  const [hiddenFlag, setHiddenFlag] = useState(true);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const inputText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (val === "other") {
      setHiddenFlag(false);
    }
  });

  return (
    <>
      <label htmlFor="">
        <input
          type="radio"
          value="js"
          onChange={handleChange}
          checked={val === "js"}
        />
        JS
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="python"
          onChange={handleChange}
          checked={val === "python"}
        />
        Python
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="php"
          onChange={handleChange}
          checked={val === "php"}
        />
        PHP
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="other"
          onChange={handleChange}
          checked={val === "other"}
        />
        その他
      </label>

      <p>回答{val !== "other" ? val : text}が好き</p>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        hidden={hiddenFlag}
        onChange={inputText}
      ></textarea>
    </>
  );
};

export default RadioButtonCustom;
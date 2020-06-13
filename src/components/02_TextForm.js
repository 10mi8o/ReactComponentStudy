import React, {useState} from "react"

const Form = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Hello, {name}</h1>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <textarea cols="30" rows="10" onChange={handleChange}></textarea>
      </div>
    </>
  );
};

export default Form;
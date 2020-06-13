import React, { useState } from "react";

const Tab = ({ onChange }) => {
  return (
    <ul>
      <li onClick={() => onChange(1)}>React</li>
      <li onClick={() => onChange(2)}>Vue.js</li>
      <li onClick={() => onChange(3)}>Angular</li>
    </ul>
  );
};

const TabComponent = () => {
  const [tab, setTab] = useState(1);
  const handleChange = (val) => {
    setTab(val);
  };

  return (
    <>
      <Tab onChange={handleChange} />

      <div hidden={tab !== 1}>
        A JavaScript library for building user interfaces
      </div>
      <div hidden={tab !== 2}>The Progressive JavaScript Framework</div>
      <div hidden={tab !== 3}>One framework. Mobile &amp; desktop.</div>
    </>
  );
};

export default TabComponent;
import React, { useState } from "react";

const gifIds = [
  "10dU7AN7xsi1I4",
  "tBxyh2hbwMiqc",
  "ICOgUNjpvO0PC",
  "33OrjzUFwkwEg",
  "MCfhrrNN1goH6",
  "rwCX06Y5XpbLG",
];

const getGifId = () => {
  const max = gifIds.length;
  const index = Math.floor(Math.random() * Math.floor(max));
  console.log(index);
  return gifIds[index];
};

const Gif = ({ id }) => {
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return <img src={src} alt="hoge" />;
};

const RandomGif = () => {
  const [gifId, setGifId] = useState("10dU7AN7xsi1I4");

  const handleClick = () => {
    setGifId(getGifId());
  };

  return (
    <>
      <p>
        <button onClick={handleClick}>play</button>
        <Gif id={gifId} />
      </p>
    </>
  );
};

export default RandomGif;

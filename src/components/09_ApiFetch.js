import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);

  const handlerClicked = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  useEffect(() => {
    // ** fetchメソッドを使用するケース
    // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPosts(data);
    //   });

    // 使用したAPIサーバー https://jsonplaceholder.typicode.com/
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      });
  }, [clicked]);

  return (
    <>
      <p>{posts.title}</p>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handlerClicked}>GetID</button>
    </>
  );
};

export default ApiFetch;

import React, { useEffect, useState } from "react";

function Getcomments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <>
      {data.map((item) => (
        <li key={item.id}>{item.body}</li>
      ))}
    </>
  );
}

export default Getcomments;

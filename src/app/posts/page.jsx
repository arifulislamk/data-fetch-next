import React from "react";
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};
const postpage = async () => {
  const posts = await getData();
  console.log(posts);
  return (
    <div className="">
      <h2>All Posts</h2>
      <div className=" grid grid-cols-4 gap-3">
        {posts.slice(0,20).map(({title, body,id}) => (
          <div key={id} className=" border-2 border-cyan-950 p-5">
            <h3> Title: {title}</h3>
            <p> Description: {body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default postpage;

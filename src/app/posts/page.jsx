import Link from "next/link";
import React from "react";
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = res.json();
  return data;
};
export const metadata = {
  title: "Post",
  description: "super powerful next app",
  keywords: ['post', 'post-next-app']
};

const postpage = async () => {
  const posts = await getData();
  console.log(posts);
  return (
    <div className="">
      <h2>All Posts</h2>
      <div className=" grid grid-cols-4 gap-3">
        {posts.slice(0,20).map(({title, body,id}) => (
          <div key={id} className=" border-2 border-cyan-400 p-5">
            <h3> Title: {title}</h3>
            <p> Description: {body}</p>
            <button className=" bg-cyan-500 rounded-md px-4 py-2"><Link href={`posts/${id}`}> See Details</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default postpage;

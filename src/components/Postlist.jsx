import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { AppContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingState from "./LoadingState";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        //console.log(post)
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}
export default PostList;

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

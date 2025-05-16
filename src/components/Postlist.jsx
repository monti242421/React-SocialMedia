import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { AppContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingState from "./LoadingState";

function PostList() {
  const { postList, fetching } = useContext(AppContext);

  return (
    <>
      {fetching && <LoadingState></LoadingState>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching &&
        postList.map((post) => (
          //console.log(post)
          <Post key={post.id} post={post}></Post>
        ))}
    </>
  );
}
export default PostList;

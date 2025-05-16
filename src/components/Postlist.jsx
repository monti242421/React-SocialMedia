import { useContext } from "react";
import Post from "./Post";
import { AppContext } from "../store/post-list-store";

function PostList() {
  const { postList } = useContext(AppContext);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}
export default PostList;

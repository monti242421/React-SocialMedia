import { createContext, useReducer, useState, useEffect } from "react";
import PostList from "../components/Postlist";

export const AppContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type == "DELETEPOST") {
    newPostList = currentPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type == "ADDPOST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type == "GETALLPOSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (Post) => {
    dispatchPostList({
      type: "ADDPOST",
      payload: Post,
    });
  };
  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETEPOST",
      payload: { postId: postid },
    });
  };

  const getInitialPosts = (posts) => {
    dispatchPostList({
      type: "GETALLPOSTS",
      payload: { posts },
    });
  };

  return (
    <AppContext.Provider
      value={{ postList, addPost, deletePost, getInitialPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default PostListProvider;

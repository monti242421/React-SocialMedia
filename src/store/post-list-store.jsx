import { createContext, useReducer, useState, useEffect } from "react";
import PostList from "../components/Postlist";

export const AppContext = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
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
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        getInitialPosts(data.posts);
        setfetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{ postList, addPost, fetching, deletePost, getInitialPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default PostListProvider;

import { createContext, useReducer } from "react";
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
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Default_Post_List
  );
  const addPost = (
    userIdElement,
    titleElement,
    bodyElement,
    reactionsElement,
    tagsElement
  ) => {
    dispatchPostList({
      type: "ADDPOST",
      payload: {
        id: Date.now(),
        userId: userIdElement,
        title: titleElement,
        body: bodyElement,
        reactions: reactionsElement,
        tags: tagsElement,
      },
    });
  };
  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETEPOST",
      payload: { postId: postid },
    });
  };
  return (
    <AppContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </AppContext.Provider>
  );
};
export default PostListProvider;

const Default_Post_List = [
  {
    id: "1",
    title: " Going to mumbai",
    body: "whatsup guts",
    reactions: 2,
    userId: "user-3",
    tags: ["vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: " Going to delhii",
    body: "whatsup delhi guts",
    reactions: 6,
    userId: "user-2",
    tags: ["vacations", "Delhi", "Enjoying"],
  },
];

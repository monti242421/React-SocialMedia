import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./routes/App.jsx";
import CreatePost, { createPostAction } from "./components/createPost.jsx";
import PostList, { postLoader } from "./components/Postlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <PostList></PostList>,
        loader: postLoader,
      },
      {
        path: "/createPost",
        element: <CreatePost></CreatePost>,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

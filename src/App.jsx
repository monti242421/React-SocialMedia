import "./App.css";
import AppHeader from "./components/AppHeader";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/createPost";
import PostList from "./components/Postlist";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("CreatePost");
  return (
    <PostListProvider>
      <div className="app-container row">
        <Sidebar
          className="col-4"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="col-8">
          <AppHeader></AppHeader>
          {selectedTab == "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

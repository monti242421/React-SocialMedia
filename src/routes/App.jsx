import "./App.css";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CreatePost from "../components/createPost";
import PostList from "../components/Postlist";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
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
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

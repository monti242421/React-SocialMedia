import { useContext, useRef } from "react";
import { AppContext } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

function CreatePost() {
  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User id Here
        </label>
        <input
          type="text"
          className="form-control"
          name="userId"
          id="UserId"
          placeholder=" Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          placeholder=" How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postcontent" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          className="form-control"
          name="body"
          id="postcontent"
          placeholder=" Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          name="reactions"
          id="reactions"
          placeholder=" how many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          name="tags"
          id="tags"
          placeholder=" enter your tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
}
export default CreatePost;

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

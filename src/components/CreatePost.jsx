import { useContext, useRef } from "react";
import { AppContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(AppContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const HandleOnSubmit = (event) => {
    event.preventDefault();
    addPost(
      userIdElement.current.value,
      titleElement.current.value,
      bodyElement.current.value,
      reactionsElement.current.value,
      tagsElement.current.value.split(" ")
    );
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="createPost" onSubmit={HandleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User id Here
        </label>
        <input
          type="text"
          className="form-control"
          ref={userIdElement}
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
          ref={titleElement}
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
          ref={bodyElement}
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
          ref={reactionsElement}
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
          ref={tagsElement}
          id="tags"
          placeholder=" enter your tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default CreatePost;

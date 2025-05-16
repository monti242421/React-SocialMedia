import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AppContext } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(AppContext);
  return (
    <div className="row ">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card postcard">
          <div className="card-body">
            <h5 className="card-title">
              {post.title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(post.id)}
              >
                <AiFillDelete />
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tags) => (
              <span className="badge text-bg-info tags">{tags}</span>
            ))}

            <div className="alert alert-primary reactions" role="alert">
              This post has been reacted by {post.reactions.likes} people
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

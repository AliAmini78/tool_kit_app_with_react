import "./PostCard.scss";
import { Link } from "react-router-dom";
const PostCard = ({ post }) => {
  return (
    <div className="card">
      <div className="body">
        <h4>{post.title}</h4>
        <p>
            {post.description}
        </p>
      </div>
      <div className="footer">
        <span>view : {post.view}</span>
        <Link to={`/post/${post.id}`}>more</Link>
      </div>
    </div>
  );
};

export default PostCard;

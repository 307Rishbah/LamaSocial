import "./centerbar.css";
import Post from "../post/Post";
import Share from "../share/Share";
import { useSelector } from "react-redux";

export default function Feed({ posts, username }) {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === userInfo.username) && <Share />}

        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

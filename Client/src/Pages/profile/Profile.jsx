import "./profile.css";
import Topbar from "../../Components/topbar/Topbar";
import Leftbar from "../../Components/left/Leftbar";
import ProfileRight from "../../Components/profileRight/ProfileRight";
import Centerbar from "../../Components/center/Centerbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { username } = useParams();
  const { users } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  const user = users.find((prsn) => prsn.username === username);
  const userPost = posts.filter((post) => post.userId === user._id);

  return (
    <div>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Centerbar posts={userPost} username={username} />
            <ProfileRight user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

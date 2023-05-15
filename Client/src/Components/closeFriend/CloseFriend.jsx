import { img_url } from "../../utilities/ImgUrl";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="leftbarFriend">
      <img
        src={img_url + user.profilePicture}
        alt=""
        className="leftbarfriendImg"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}

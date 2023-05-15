import "./profileRight.css";
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchAllFriends,
  followUser,
  unfollowUser,
} from "../../redux/userAction";

export default function ProfileRight({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { userInfo } = useSelector((state) => state.auth);
  const { friends } = useSelector((state) => state.user);
  const currentUser = useSelector((state) =>
    state.user.users.find((user) => user._id === userInfo._id)
  );

  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFriends(user._id));
  }, [dispatch, user]);

  const handleClick = () => {
    if (followed) {
      dispatch(
        unfollowUser({
          userId: userInfo._id,
          otherUserId: user._id,
        })
      );
    } else {
      dispatch(
        followUser({
          userId: userInfo._id,
          otherUserId: user._id,
        })
      );
    }
    setFollowed(!followed);
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user.username !== userInfo.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends === [] ? (
            <h3>No friends ...</h3>
          ) : (
            friends.map((friend) => (
              <Link
                key={friend.username}
                to={"/profile/" + friend.username}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <div className="rightbarFollowing">
                  <img
                    src={
                      friend.profilePicture
                        ? friend.profilePicture
                        : PF + "person/noAvatar.png"
                    }
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">
                    {friend.username}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

import "./leftbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Feed</span>
          </li>
          <li className="leftbarListItem">
            <ChatIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Videos</span>
          </li>
          <li className="leftbarListItem">
            <GroupIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Groups</span>
          </li>
          <li className="leftbarListItem">
            <BookmarkIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutlineIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutlineIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <EventIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Events</span>
          </li>
          <li className="leftbarListItem">
            <SchoolIcon className="leftbarIcon" />
            <span className="leftbarListItemtext">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">show more</button>
        <hr className="leftbarHr" />
        <ul className="leftbarfriendList">
          {Users.map((user) => {
            return <CloseFriend key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}

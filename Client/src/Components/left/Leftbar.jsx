import "./leftbar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemtext">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarListItemtext">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarListItemtext">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemtext">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemtext">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemtext">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemtext">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemtext">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
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

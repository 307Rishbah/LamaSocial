import "./home.css";
import Topbar from "../../Components/topbar/Topbar";
import Leftbar from "../../Components/left/Leftbar";
import Centerbar from "../../Components/center/Centerbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPost } from "../../redux/postAction";
import { HomeRight } from "../../Components/homeRight/HomeRight";
import { fetchUser } from "../../redux/userAction";

export default function Home() {
  const { userInfo, userToken } = useSelector((state) => state.auth);
  const { isLoading, posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPost());
    dispatch(fetchUser(userInfo._id));
  }, [dispatch, userInfo._id, userToken]);
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        {isLoading ? <h2>loading Posts ...</h2> : <Centerbar posts={posts} />}
        <HomeRight />
      </div>
    </>
  );
}

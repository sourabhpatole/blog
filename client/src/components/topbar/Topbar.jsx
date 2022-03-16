import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toplistitem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplistitem" onClick={handlelogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={user.profilePic} alt="" />
        ) : (
          <ul className="topList">
            <li className="toplistitem">
              <Link className="link" to="/login" style={{ margin: "20px" }}>
                LOGIN
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

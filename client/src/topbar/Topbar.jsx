import "./topbar.css";
export default function Topbar() {
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
          <li className="toplistitem">HOME</li>
          <li className="toplistitem">ABOUT</li>
          <li className="toplistitem">CONTACT</li>
          <li className="toplistitem">WRITE</li>
          <li className="toplistitem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

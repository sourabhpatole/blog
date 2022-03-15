import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm">MERN</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Header;

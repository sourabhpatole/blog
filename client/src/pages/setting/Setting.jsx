import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitile">
          <span className="settingUpdateTitle">Update Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Display Photo</label>
          <div className="settingDP">
            <img
              src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingDPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sourabh" />
          <label>Email</label>
          <input type="email" placeholder="sourabh@outlook.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSub">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;

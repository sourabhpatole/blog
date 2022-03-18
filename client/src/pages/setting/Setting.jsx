import axios from "axios";
import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./setting.css";
const Setting = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);

  const PF = "http://localhost:5000/images/";
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateduser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateduser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updateduser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitile">
          <span className="settingUpdateTitle">Update Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm" onSubmit={handlesubmit}>
          <label>Display Photo</label>
          <div className="settingDP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingDPIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingSub" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "gray", textAlign: "center", margin: "20px" }}
            >
              Profile Updated Successfully
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;

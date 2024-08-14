import { DriveFolderUploadOutlined } from "@mui/icons-material";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import "./new.scss";
import { useState } from "react";

function New({ inputs, title }) {
  const[file, setFile] = useState("");
  console.log(file)
  return (
    <div className="new">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
            // if there is a file create new objet image else show camera img
              src={file ? URL.createObjectURL(file): "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTdQ0ra7S-RibQhYh29B11td8QQ1wr3hYoA&s"}
              alt="camera"
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label> {input.label} </label>
                    <input type={input.typ} placeholder={input.placeholder} />
                  </div>
                );
              })}

              <button className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;

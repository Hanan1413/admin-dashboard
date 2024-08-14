import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/SideBar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/List";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />

      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">EditBtn</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://th.bing.com/th/id/OIP.65cr4DZsNGAvYWUr6Rg5qQHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7"
                alt="user"
                className="itemImg"
              />
            </div>
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>

              <div className="deatailItem">
                <div className="itemKey">Email:</div>
                <div className="itemValue">Hanan@gmil.com</div>
              </div>

              <div className="deatailItem">
                <div className="itemKey">Phone:</div>
                <div className="itemValue">+123 565 555</div>
              </div>
              <div className="deatailItem">
                <div className="itemKey">Address:</div>
                <div className="itemValue">Riyadh, Olaya </div>
              </div>
              <div className="deatailItem">
                <div className="itemKey">Country:</div>
                <div className="itemValue">Saudi Arabia, Olaya </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="User spendng (last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions </h1>
 
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;

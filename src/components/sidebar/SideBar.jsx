import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Hananadmin</span>
      </div>
      <hr />

      <div className="center">
        <ul className="icons">
          <p className="title"> MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title"> LISTS</p>

          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreRoundedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ChecklistRoundedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartRoundedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneRoundedIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <MedicalInformationRoundedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyRoundedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USERS</p>

          <li>
            <AccountCircleRoundedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className="icon" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p >color Options</p>
        
        <div className="colorOption">

        </div>
        <div className="colorOption">
          
          </div>
          <div className="colorOption">
          
          </div>
      </div>
    </div>
  );
};

export default SideBar;

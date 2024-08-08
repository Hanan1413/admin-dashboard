import "./navbar.scss";
import SearchOutlinedICon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import { ListOutlined } from "@mui/icons-material";
import avatar from '../../assets/avatar.jpg';


const Navbar = () => {
  return (
  <div className="navbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search...." />
        <SearchOutlinedICon />
        
      </div>
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon  className="icon"/>
        </div>
        <div className="item">
          <DarkModeOutlinedIcon  className="icon" />
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <NotificationsIcon className="icon "/>
          <div  className="counter">1</div>

        </div>

        <div className="item">
          <ChatBubbleOutlineIcon  className="icon"/>
          <div  className="counter">1</div>
        </div>
      

        <div className="item">
          <ListOutlined className="icon" />
        </div>
        <div>
          <img src={avatar} alt="avatar"   className="avatar"/>
        </div>
      </div>
    </div>
    
    </div>
  )
};

export default Navbar;

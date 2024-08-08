import './home.scss';
import SideBar from '../../components/sidebar/SideBar';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='home' >
      <SideBar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  )
}

export default Home

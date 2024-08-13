import './list.scss'
import Navbar from "../../components/navbar/Navbar";
import SideBar from '../../components/sidebar/SideBar';
import Datatable from '../../components/datatable/Datatable';

const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List

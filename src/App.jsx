import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="login" element={<Login />}> </Route>
      <Route path="users">
       <Route index element={<List />}></Route>
       <Route path=":userId" element={<Single />}> </Route>
       <Route path="new" element={<New />}> </Route>
      </Route>

      <Route path="products">
       <Route index element={<List />}></Route>
       <Route path=":productId" element={<Single />}> </Route>
       <Route path="new" element={<New />}> </Route>
      </Route>


      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

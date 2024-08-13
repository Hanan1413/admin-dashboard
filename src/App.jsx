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
       <Route index element={<List />} />
       <Route path=":userId" element={<Single />} /> 
       <Route path="new" element={<New />} /> 
      </Route>

      <Route path="products">
       <Route index element={<List />} />
       <Route path=":productId" element={<Single />} />
       <Route path="new" element={<New />} /> 
      </Route>


      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

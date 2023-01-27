
import { Routes,  Route, Navigate} from "react-router-dom";
import AddAnnounce from "./Views/AddAnnounce";
import Home from "./Views/Home";
import Search from "./Views/Search";


function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/search" element = {<Search/>}/>
      <Route path="/add" element = {<AddAnnounce/>}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}

export default App;

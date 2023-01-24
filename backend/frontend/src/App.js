import {NavBar, Footer} from "./components";
import { navbarData, footerData } from "./const/const";

function App() {
  return (
    <div className="App">
      <NavBar data={navbarData}/>
      <Footer data={footerData}/>
    </div>
  );
}

export default App;

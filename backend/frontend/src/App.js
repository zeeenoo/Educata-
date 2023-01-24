import {NavBar, Footer, Card} from "./components";
import { navbarData, footerData, cardData } from "./const/const";

function App() {
  return (
    <div className="App">
      <NavBar data={navbarData}/>
      <Card data={cardData}/>
      <Footer data={footerData}/>
    </div>
  );
}

export default App;

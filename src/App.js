import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Allroutes } from "./Routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App;

import "./App.css";
import NavigationBar from "./components/Navigationbar.js";
import Welcomebar from "./components/Welcomebar.js";
import Navbar from "./components/Navigationbar/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <NavigationBar />
      <Welcomebar />
    </div>
  );
}

export default App;

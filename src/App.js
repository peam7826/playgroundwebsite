import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navigationbar.js';
import Welcomebar from './components/Welcomebar.js';
import Personaldetails from './components/Personaldetails.js';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Welcomebar />
        <Personaldetails />
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navigationbar.js';
import Welcomebar from './components/Welcomebar.js';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Welcomebar />
    </div>
  );
}

export default App;
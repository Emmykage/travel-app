import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Popular from './components/popular/Popular';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Popular/>
    </div>
  );
}

export default App;

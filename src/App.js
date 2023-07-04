import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Popular from './components/popular/Popular';
import Offer from "./components/offers/Offer"
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Popular/>
      <Offer/>
      <About/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/Home/Home';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
    </div>
  );
}

export default App;

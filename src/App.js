import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {Route, Routes, Link} from "react-router-dom"
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

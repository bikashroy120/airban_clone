
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (

    <BrowserRouter>
      <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

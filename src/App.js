import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavbarBootstrap from "./layouts/NavbarBootstrap";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<NavbarBootstrap /> }>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='*' element={ <Navigate replace to="/" />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

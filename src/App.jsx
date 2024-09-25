import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/NavBar";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contacts from "./pages/Contact";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col bg-[#9bf3f0]">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import './App.css';
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Auth from "./components/pages/Auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="signup" element={<SignUp />}></Route>
                </Route>
            </Routes>
            <div className="bg-black">
                <hr className="mx-auto w-3/4 text-g-yellow" />
            </div>
            <Footer />
        </div>
    );
}

export default App;

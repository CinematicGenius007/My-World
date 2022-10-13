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
import Settings from "./components/auth/Settings";
import {useEffect, useState} from "react";
import Edit from "./components/auth/Edit";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth] = useState({
        user: null
    });
    useEffect(() => console.log(auth), [auth]);
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar auth={auth} />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login onAuth={setAuth} />}></Route>
                    <Route path="signup" element={<SignUp />}></Route>
                    <Route path="settings" element={<Settings user={auth.user} />}></Route>
                    <Route path="edit" element={<Edit user={auth.user} onModify={setAuth} />}></Route>
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

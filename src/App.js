import './App.css';
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";

function App() {


    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

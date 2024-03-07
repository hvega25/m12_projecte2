import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Error from './components/Error'
import Salas from "./components/Salas";
import Home from "./components/Home"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/error" element={<Error/>}/>
            </Routes>
            <Routes>
                <Route path="/salas" element={< Salas/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;

import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Error from './components/Error'
import Salas from "./components/Salas";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/error" element={<Error/>}/>
            </Routes>
            <Routes>
                <Route path="/Salas" element={< Salas/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;

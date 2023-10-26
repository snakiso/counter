import React, {useState} from 'react';
import './App.css';
import {Box} from "./components/box/Box";

function App() {
    const [mode, setMode] = useState(false)


    return (
        <div className="App">
            <Box/>
        </div>
    );
}

export default App;

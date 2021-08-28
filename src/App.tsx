import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            {[1, 2, 3, 5, 6, 7, 8, 9, 10].map((key) => (
                <div key={key}>
                    Matematika: <input type="range" />
                </div>
            ))}
        </div>
    );
}

export default App;

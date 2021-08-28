import React from 'react';
import './App.css';
import { SCHOOLS, SUBJECTS } from './data';

function App() {
    const [preferences, setPreferences] = React.useState<
        Partial<Record<keyof typeof SUBJECTS, number>>
    >({});

    return (
        <div className="App" style={{ display: 'flex' }}>
            <div>
                {Object.entries(SUBJECTS).map(([key, name]) => (
                    <div key={key}>
                        {name}
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            onChange={(event) => {
                                setPreferences({
                                    [key]: parseFloat(event.target.value),
                                });
                            }}
                        />
                    </div>
                ))}
            </div>

            <div>
                {Object.keys(SCHOOLS).map((key) => (
                    <div
                        key={key}
                        onClick={() => {
                            // alert(123);
                        }}
                    >
                        Skola {key}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

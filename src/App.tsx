import React from 'react';
import './App.css';
import { SCHOOLS, SUBJECTS } from './data';

export function App() {
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
                            min={-1}
                            max={1}
                            step={0.01}
                            defaultValue={0}
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
                {Object.entries(SCHOOLS)
                    .map(([key, school]) => ({
                        key,
                        school,
                        match: Object.entries(school.subjects).reduce(
                            (match, [subjectKey, credits]) =>
                                match +
                                ((preferences as any)[subjectKey] || 0) *
                                    credits,
                            0,
                        ),
                    }))
                    .sort(({ match: a }, { match: b }) => (a < b ? 1 : -1))
                    .map(({ key, school, match }) => (
                        <div
                            key={key}
                            onClick={() => {
                                // alert(match);
                            }}
                        >
                            {school.title}
                        </div>
                    ))}
            </div>
        </div>
    );
}

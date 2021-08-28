import React from 'react';
import './App.css';
import { COURSES } from './data/courses';
import { FACULTIES } from './data/faculties';

export function App() {
    const [preferences, setPreferences] = React.useState<
        Partial<Record<keyof typeof COURSES, number>>
    >({});

    return (
        <div className="App" style={{ display: 'flex' }}>
            <div>
                {Object.entries(COURSES).map(([key, courseName]) => (
                    <div key={key}>
                        <div
                            style={{
                                display: 'inline-block',
                                textAlign: 'left',
                                width: 400,
                            }}
                        >
                            {courseName} <i>({key})</i>
                        </div>
                        <input
                            type="range"
                            min={-1}
                            max={1}
                            step={0.01}
                            defaultValue={0}
                            onChange={(event) => {
                                setPreferences({
                                    ...preferences,
                                    [key]: parseFloat(event.target.value),
                                });
                            }}
                        />
                    </div>
                ))}
            </div>

            <div style={{ position: 'fixed', right: 10, textAlign: 'left' }}>
                {Object.entries(FACULTIES)
                    .map(([key, faculty]) => ({
                        key,
                        faculty,
                        match: Object.entries(faculty.courses).reduce(
                            (match, [subjectKey, credits]) =>
                                match +
                                ((preferences as any)[subjectKey] || 0) *
                                    credits,
                            0,
                        ),
                    }))
                    .sort(({ match: a }, { match: b }) => {
                        if (a < b) {
                            return 1;
                        } else if (a > b) {
                            return -1;
                        } else {
                            return Math.random() > 0.5 ? 1 : -1;
                        }
                    })
                    .map(({ key, faculty, match }, i) => (
                        <div
                            key={key}
                            onClick={() => {
                                // alert(match);
                            }}
                        >
                            {i + 1}) {faculty.name}{' '}
                            {match === 0 ? (
                                ''
                            ) : (
                                <i>({Math.round(match * 10)})</i>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}

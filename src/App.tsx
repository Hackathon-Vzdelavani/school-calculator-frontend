import { debounce } from 'lodash';
import React from 'react';
import './App.css';
import { SmileRange } from './components/SmileRange';
import { COURSES } from './data/courses';
import { FACULTIES } from './data/faculties';

export function App() {
    const [preferences, setPreferences] = React.useState<
        Partial<Record<keyof typeof COURSES, number>>
    >({});

    const setPreference = debounce(
        ({ key, value }: { key: string; value: number }) => {
            setPreferences({
                ...preferences,
                [key]: value,
            });
        },
        100,
    );

    return (
        <div className="App" style={{ display: 'flex' }}>
            <div>
                {Object.entries(COURSES).map(([key, courseName]) => (
                    <div
                        key={key}
                        style={{
                            display: 'block',
                            height: 50,
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-block',
                                textAlign: 'right',
                                marginRight: 20,
                                width: 400,
                            }}
                        >
                            {courseName} <i>({key})</i>
                        </div>

                        <SmileRange
                            min={-1}
                            max={1}
                            step={0.01}
                            defaultValue={(preferences as any)[key] || 0}
                            onChange={(value) => {
                                setPreference({ key, value });
                            }}
                        />
                    </div>
                ))}
            </div>

            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    width: '30vw',
                    padding: 10,
                    textAlign: 'left',
                    backgroundColor: '#632e72',
                    fontSize: '1.2em',
                    color: 'white',
                }}
            >
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

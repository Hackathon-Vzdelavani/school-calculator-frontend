import React from 'react';
import { Range } from 'react-range';

interface ISmileRangeProps {
    min: number;
    max: number;
    step: number;
    defaultValue: number;
    onChange: (value: number) => void;
}

export function SmileRange({
    min,
    max,
    step,
    defaultValue,
    onChange,
}: ISmileRangeProps) {
    const [value, setValue] = React.useState<number>(defaultValue);

    return (
        <div
            style={{
                display: 'inline-block',
                textAlign: 'left',
                width: 400,
            }}
        >
            <Range
                min={-1}
                max={1}
                step={0.01}
                values={[value]}
                onChange={([value]) => {
                    setValue(value);
                    onChange(value);
                }}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: 6,
                            borderRadius: 3,
                            width: '100%',
                            backgroundColor: '#b164a5',
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            outline: 'none',
                            fontSize: 30,
                            //height: 30,
                            //width: 30,
                            //borderRadius: 3,
                            //backgroundColor: '#632e72',
                        }}
                    >
                        {
                            ['😱', '😵', '😐', '🙂', '😍'][
                                (Math.ceil(((value - min) / (max - min)) * 5) ||
                                    1) - 1
                            ]
                        }
                    </div>
                )}
            />
        </div>
    );
}

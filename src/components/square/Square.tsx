import React from 'react';
import { UseRefRenders } from '../../UseCountRenders';

interface ISquareProps {
    increment(count: number): void;
    count: number;
}

const Square: React.FC<ISquareProps> = props => {
    UseRefRenders('square');

    return (
        <button onClick={() => props.increment(props.count)}>{props.count}</button>
    )
}

export default React.memo(Square);
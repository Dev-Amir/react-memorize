import React from 'react';
import { UseRefRenders } from '../../UseCountRenders';

interface IHelloProps {
    incrementCount(): void;
    // count: number,
}

const Hello: React.FC<IHelloProps> = props => {
    UseRefRenders('Hello');

    return (
        <div>
            <button onClick={props.incrementCount}>Hello</button>

          {/* <div>count: {props.count}</div> */}
        </div>
    )
}

export default React.memo(Hello);
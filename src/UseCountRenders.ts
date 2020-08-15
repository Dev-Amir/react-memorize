import { useRef } from 'react';

export const UseRefRenders = (strName: string): void => {
    const renders = useRef<number>(0);

    console.log(`${strName} renders: `, renders.current++);
}
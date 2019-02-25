import React, { useState, useEffect } from 'react';

const useEffectFunc = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <section>
            <p>You clicked {count} times</p>
            <button onClick={handleCount}>Click me!</button>
        </section>
    );
};

export default useEffectFunc;

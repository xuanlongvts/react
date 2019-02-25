import React, { useState } from 'react';

const useStateFunc = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    };

    return (
        <section>
            <p>You clicked {count} times</p>
            <button onClick={handleCount}>Click me!</button>
        </section>
    );
};

export default useStateFunc;

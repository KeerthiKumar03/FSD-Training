import React, { useReducer } from "react";

function reducer(count, action) {
    if (action === "increment") {
        return count + 1;
    }
    if (action === "decrement") {
        return count - 1;
    }
    return count;
}

function App() {
    const [count, dispatch] = useReducer(reducer, 0);

    const increment = () => dispatch("increment");
    const decrement = () => dispatch("decrement");

    return (
        <div>
            <h1>Count: {count}</h1> {/* Display the current count */}
            <button onClick={increment}>Increment</button> {/* Increment the count */}
            <button onClick={decrement}>Decrement</button> {/* Decrement the count */}
        </div>
    );
}

export default App;
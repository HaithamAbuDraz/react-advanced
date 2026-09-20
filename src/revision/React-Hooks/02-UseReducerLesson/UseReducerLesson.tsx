import { useReducer } from 'react'

const initialState = 0;

type Action = { type: 'increment' } | { type: 'decrement' };

function reducer(state: number, action: Action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
    }
}

function UseReducerLesson() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </div>
    )
}

export default UseReducerLesson;
const { useState } = require('react');

const useBooleanState = ({ initalState = false }) => {
    const [ booleanState, setBooleanState ] = useState(initalState);

    const toggle = () => {
        setBooleanState(!booleanState);
    }

    const setTrue = () => {
        setBooleanState(true);
    }

    const setFalse = () => {
        setBooleanState(false);
    }

    return {
        value: booleanState,
        toggle,
        setTrue,
        setFalse
    }
}

export default useBooleanState;
import React, {useState} from "react";
import alphaNumericSort from './alphaNumericSort'
import './App.css';

const ShowCase = ({ title, input, defaultArray = [] }) => {
    const [inputArray, setInputArray] = useState(input || defaultArray);
    const [isValid, setIsValid] = useState(true);
    const onChange = (e) => {
        try {
            const parsed = JSON.parse(e.target.value);
            setIsValid(true);
            setInputArray(parsed);
        } catch (e) {
            setIsValid(false);
        }
    };
    return (
        <>
            <h1>{title}</h1>
            <textarea onChange={onChange}>{JSON.stringify(inputArray)}</textarea>
            <br />

            <h3>Output</h3>
            <div className="arr-result">
                <h2>Array with sorting:</h2>
                <p className="result">{alphaNumericSort(inputArray)}</p>
            </div>
        </>
    );
};

export default ShowCase;

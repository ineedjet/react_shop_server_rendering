import { calc } from "./src/calc";
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/Hello';

console.log("3 + 4 = ", calc.plus(3, 4));

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
)
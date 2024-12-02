// index.js
// import React from 'react'
// import ReactDOM from 'react-dom'
import './App.css';

// Random Hex Color Generator
const randomColor = () => {
    let letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

const App = () => {
    // Create an array of 5 colors using a for loop
    const colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push(randomColor());
    }

    return (
        <div className='color-wrapper'>
            {/* Loop over the colors array and create a paragraph for each color */}
            {colors.map((color, index) => (
                <p key={index} style={{ backgroundColor: color }}>
                    {color}
                </p>
            ))}
        </div>
    )
}

export default App;


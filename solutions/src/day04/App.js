// index.js
import React from 'react'
// import ReactDOM from 'react-dom'
import './App.css';
import asabenehImage from './../images/asabeneh.jpg'

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
}
const date = 'Oct 3, 2020'


// Header Component
const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    Instructor: {author.firstName} {author.lastName}
                </p>
                <small>Date: {date}</small>
            </div>
        </header>
    )
}

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// User Card Component
const UserCard = () => {
    return (
        <div className="user-card">
            <img src={asabenehImage} alt="asabeneh" />
            <h2>{author.firstName} {author.lastName}</h2>
        </div>
    )
}

// JSX element, main
const techs = ['HTML', 'CSS', 'Javascript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// JSX element, main
const Main = () => {
    return (
        <main>
            <div className='main-wrapper'>
                <div>
                <p>Prerequisite to get started {' '}
                    <strong><em>react.js</em></strong>
                    :
                </p>
                <ul>
                    {techsFormatted}
                </ul>
                {result}
                {personAge}
            </div>
            <UserCard />
            </div>
        </main>
    )
}

const copyRight = '2020'

// JSX element, footer
const Footer = () => {
    return (
        <footer>
            <div className='footer-wrapper'>
                <p>Copyright &copy;{copyRight}</p>
            </div>
        </footer>
    )
}

const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0)',
    border: 'none',
    borderRadius: 5,
}
const Button = () => <button style={buttonStyles}>action</button>

const InputField = ({value, label, name, placeholder, type, onChange}) => {
    return (
        <div className="form-group">
            {label && <label htmlFor="input-field">{label}</label>}
            <input
            type={type}
            value={value}
            name={name}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
            />
        </div>
    )
}

const AlertBox = () => {
    const handleClose = (e) => {
        e.target.parentElement.style.display = 'none';
        alert('warning alert box');
    };

    return (
        <div className="alert">
            <span className="closebtn" onClick={handleClose}>&times;</span>
            <p>Success alert box</p>
        </div>
    )
}

// Hexadecimal color generator
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

// The App, or the parent or the container component
const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default AlertBox;
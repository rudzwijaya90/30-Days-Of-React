import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import asabenehImage from './../images/asabeneh.jpg'

const user = (
  <div>
    <img src={asabenehImage} alt="asabeneh" />
  </div>
)

const name = 'ASABENEH YETAYEH'
const job = 'Senior Developer'
const country = 'Finland'

const skills = [
  "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB",
  "Python", "Flask", "Django", "Numpy", "Pandas", "Data Analysis",
  "MySQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"
]

const techsFormatted = skills.map((skill) => <li>{skill}</li>)

const footer = 'Joined on Aug 30, 2020'

const main = (
    <main>
      <p className='skills-text'>SKILLS</p>
      <ul className='tech'>{techsFormatted}</ul>
    </main>
)

// JSX element, app
function App () {
    return (
        <div className='app'>
            {user}
            <h1>{name}</h1>
            <p className='job-country'>{job}, {country}</p>
            {main}
            <p className='footer'>{footer}</p>
        </div>
    )}

  


export default App;

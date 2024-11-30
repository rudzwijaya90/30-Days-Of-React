// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import frontEnd from './images/frontend_technologies.png'


// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
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

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, subscribe
const subscribe = 'SUBSCRIBE'
const paragraph = 'Sign up with your email address to receive news and updates'
const button = 'Subscribe'

const emailSubscribe = (
  <div className='subscribe-wrapper'>
    <h1>{subscribe}</h1>
    <p>{paragraph}</p>
    <input type="text" value="First name" placeholder="First name" />
    <input type="text" value="Last name" placeholder="Last name" />
    <input type="email" value="Email" placeholder="email" /><br />
    <button>{button}</button>
  </div>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img src={frontEnd} alt='frontend' />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
      {emailSubscribe}
    </div>
  </main>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
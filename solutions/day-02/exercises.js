/* Write your name in a JSX element and store it in a name variable */
const myName = (
    <div>
        <h1>Bambang</h1>
    </div>
)

/* Write a JSX element which displays your full name, country, title, gender, 
email, phone number. Use h1 for the name and p for the rest of the 
information and store it in a user variable */
const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }
const user = (
    <div style={style}>
    <h1>Bambang Setyono</h1>
        <p>Wakanda</p>
        <p>Superman</p>
        <p>Male</p>
        <p>wakandathebest@gmail.com</p>
        <p>088812345</p>
    </div>
)

/* Write a footer JSX element */

const footer = (
    <div style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}>
        <footer>This is footer</footer>
    </div>
)

const app = (
    <div style={{ border: '2px solid orange', color: 'orange', backgroundColor:'red' }}>
        {myName}
        {user}
        {footer}
    </div>
)

/* Exercises: Inline Style */
/* Create a style object for the main JSX, answer is above */
/* Create a style object for the footer and app JSX */
/* Add more styles to the JSX elements */

/* Exercises: Internal Styles
Apply different styles to your JSX elements */

/* Exercise: Inject data to JSX
Practice how to make JSX element and injecting dynamic data
(string, number, boolean, array, object) */

const string = "This is string data";
const number = 34;
const boolean = false;
const array = ["bambang", 5, 8, 9]
const object = {
    country: "Wakanda",
    language: "Spongebob",
    population: 4500000
}

const practice = (
    <div>
        <p>{string}</p>
        <p>{number}</p>
        <p>{boolean}</p>
        <p>{array}</p>
        <p>{object}</p>
    </div>
)
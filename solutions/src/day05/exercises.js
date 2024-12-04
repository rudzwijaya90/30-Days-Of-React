import './App.css';
import asabenehImage from './../images/frontend_technologies.png'

const Image = (img) => {
    return (
        <div className="image-wrapper">
            <img src={asabenehImage} alt="asabenehImage" />
        </div>
    )

}

const Subscribe = (props) => {
    return (
        <section className='subs-wrapper'>
        <div className='content'>
            <h2>{props.subscribe}</h2>
            <p>{props.subspara}</p>
            <input placeholder='First Name'></input>
            <input placeholder='Last Name'></input>
            <input placeholder='Email'></input>
            <br />
            <button>{props.button}</button>
        </div>
        </section>
    )
}

const Exercises = () => {
    
    return (
        <div>
        <Image />
        <Subscribe 
        subscribe="SUBSCRIBE" 
        subspara="Sign up with your email address to receive news and updates"
        button="Subscribe"
        />
        </div>
    )
}

export default Exercises;
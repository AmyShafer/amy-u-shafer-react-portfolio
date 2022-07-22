import React, {
    useState
} from 'react';
import {
    validateEmail
} from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const {
        name,
        email,
        message
    } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Send Form: ',
                formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is kapot!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please enter your {e.target.name}.`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            });
            console.log('Handle Form', formState);
        }
    };

    return ( 
      <section id = "contact-me" class = "contact-me">
        <img id = "contact-me-header" src = "/assets/images/contactMe.png" alt = "contact me header"/>
          <ul>
            <li>
              <a href = "https://github.com/AmyShafer" target = "_blank" > GitHub </a>
            </li >
            <li>
                <a href = "https://www.linkedin.com/in/amyushafer/" target = "_blank">LinkedIn</a></li>
            <li>
            <a href = "mailto: amy.uno.shafer@gmail.com" target = "_blank" >Gmail</a>
            </li>
            <li>
            <i class = "fa-solid fa-circle-arrow-down"></i>
                <a href = "https://docs.google.com/document/d/1igq0QKsMxfM___oE69w5vd-pB5aptX1iaQ0xq224cj0/edit?usp=sharing" target = "_blank">My Resume</a> 
            </li> 
        </ul> 
      </section>
    );
}

export default ContactForm;
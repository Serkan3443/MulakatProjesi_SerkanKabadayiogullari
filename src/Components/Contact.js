import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>BIZE ULASIN</h1>
            <form>
                <input type='text' placeholder='Tam Ad' required></input>
                <input type='email' placeholder='Email adresinizi giriniz' required></input>
                <textarea placeholder='Buraya yazin...' name='message'></textarea>
                <input type='submit' value='Gonder'></input>
            </form>
        </div>
    )
}

export default Contact;
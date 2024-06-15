// About.jsx
import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
            <div className='about-text'>
                <h1>HAKKIMIZDA DAHA FAZLA BILGI EDININ</h1>
                <p>Fitness, sadece fiziksel sagligi iyilestirmez, ayni zamanda zihinsel ve duygusal dengeyi de saglar; duzenli egzersizle, bedeninizi guclendirirken, kendinize olan guveninizi artirir ve yasam kalitenizi yukseltirsiniz. Hadi Sen de Gym sayfamiza katilarak hayatini guclendirebilirsin.</p>
                <button>DAHA FAZLA OKU</button>
            </div>
        </div>
    )
}

export default About;

import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
    return (
        <div id='features'>
            <h1>OZELLIKLER</h1>
            <div className='a-container'>
                <FeatureBox image={fimage1} title="Halter" />
                <FeatureBox image={fimage2} title="Spesifik Kas" />
                <FeatureBox image={fimage3} title="Kaslarýnýzý Esnetin" />
                <FeatureBox image={fimage4} title="Kardiyo Egzersizi" />
            </div>
        </div>
    )
}

export default Feature;
import React from 'react';

function FeatureBox(props){
    return (
        <div className='a-box'>
            <div class='a-b-img'>
                <img src={props.image} alt='' />
            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <p>Spor yaparak Hayatini ve Vucudunu guzellestir.Spor yapmak bir tutkudur</p>
            </div>
        </div>
    )
}

export default FeatureBox;
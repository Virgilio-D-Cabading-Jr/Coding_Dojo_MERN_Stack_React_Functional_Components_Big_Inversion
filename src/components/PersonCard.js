import React from 'react';

// ///////////////////////////////////////////////
//  PERSON CARD
//////////////////////////////////////////////////

const PersonCard = props => {
    return(
        <fieldset>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </fieldset>
    );
}

export default PersonCard;
import React, {useState} from 'react';

const Person = (props) =>{

    const [currentAge, setCurrentAge] = useState(props.age);

    const addAge = ()=>{
        setCurrentAge(currentAge + 1)
    }

    return (
        <div>
            <h1>{ props.name }</h1>
            <p>Age: { currentAge }</p>
            <p>Hair Color: { props.color }</p>
            <button onClick={addAge}>Happy Birthday!</button>
        </div>
    );
}

export default Person;

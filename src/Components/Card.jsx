import React from 'react';

const Card = (props) => {
    

    return (
        <div className='Card'>
            <a href={props.wiki} target='_blank'>
                <div className='CardContents'>
                    <div className='imageContainer'>
                    <img src = {'src/assets/' + props.name + '.png'}/>
                    </div>
                    <h2>{props.name}</h2>
                    <h3>{props.region}</h3>
                </div>
            </a>
        </div>
    )
}
export default Card;
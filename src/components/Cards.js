import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> Some things that might interest you!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/bowser.jpg')}
                            text='Shoutout to the rest of the Bowser Community! Here are some players that helped me out a lot!'
                            label='Shoutouts'
                            path='/shoutouts'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/bowser-2.jpg')}
                            text="Here is my Bowser guide, where I break down Bowser's moveset and gameplan!"
                            label='Bowser Guide'
                            path='/bowser-guide'
                        />
                        <CardItem
                            src={require('../images/revival-of-ultimate.png')}
                            text='My run at Revival of Ultimate! Look at my biggest tournament run so far!'
                            label='Smash Ultimate'
                            path='/ssbucareer'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

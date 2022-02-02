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
                            src={require('../images/revival-of-ultimate.png')}
                            text='My run at Revival of Ultimate! Look at my biggest tournament run so far!'
                            label='Smash Ultimate'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/twitch.jpg')}
                            text='Visit my Twitch channel, where I stream Smash Ultimate, Third Strike and other games!'
                            label='Social Media'
                            path='/socialmedia'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/bowser.jpg')}
                            text='Shoutout to the rest of the LA Bowser Community! Here are some players that helped me out a lot!'
                            label='Smash Ultimate'
                            path='/shoutouts'
                        />
                        <CardItem
                            src={require('../images/Twitter.png')}
                            text='Take a look at my Twitter! Here I talk about Smash, among other things.'
                            label='Social Media'
                            path='/socialmedia'
                        />
                        <CardItem
                            src={require('../images/bowser-2.jpg')}
                            text="Here is my Bowser guide, where I break down Bowser's moveset and gameplan!"
                            label='Smash Ultimate'
                            path='/bowser-guide'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

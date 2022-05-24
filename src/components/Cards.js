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
                            text='Here are some 
                            people in the Smash community 
                            I wanted to give a shoutout!'
                            label='Shoutouts'
                            path='/shoutouts'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/bowser-2.jpg')}
                            text="Here is my Bowser guide,
                            where I break down 
                            Bowser's moveset and gameplan!"
                            label='Bowser Guide'
                            path='/bowser-guide'
                        />
                        <CardItem
                            src={require('../images/revival-of-ultimate.png')}
                            text='My competitive career in Smash Ultimate! 
                            Look at my biggest tournament runs so far!'
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

import React from "react";
import '../../App.css';

export default function SocialMedia () {
    return (
        <div className='socialmedia'>
            <div classname='title'>
                <h1>SOCIAL MEDIA</h1>
                <h4>Here's my Social Media, where you can
                <br/> see what I post daily!</h4>
            </div>
            <div className='body'>
                <div className='list'>
                    <div className='element'>
                        <a href="https://twitter.com/ssbu_elmo" target='_blank' rel='noreferrer'>
                            <img className="special special-button" src={require('../../images/twitter-logo.png')} alt='Twitter' />
                        </a>
                        <p>I tweet daily about Smash, among other topics!</p>
                    </div>
                    <div className='element'>
                        <a href='https://www.youtube.com/channel/UCWJPI7TW6j_aPxpYLWAij9g/featured' target='_blank' rel='noreferrer'>
                            <img className="special special-button" src={require('../../images/youtube-logo.png')} alt='YouTube' />
                        </a>
                        <p>I ocassionally upload videos, usually some
                        highlights of my streams on Twitch.</p>
                    </div>
                    <div className='element'>
                        <a href='https://www.twitch.tv/ssbu_elmo' target='_blank' rel='noreferrer'>
                            <img className="special special-button" src={require('../../images/twitch-logo-2019.png')} alt='Twitch' />
                        </a>
                        <p>I stream regularly on here, most commonly
                        Smash, but possibly some other games like 3rd Strike.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

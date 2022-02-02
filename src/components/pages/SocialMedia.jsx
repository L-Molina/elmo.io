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
                <ul className='list'>
                    <li className='element'>
                        <h4>Twitter: <a href="https://twitter.com/ssbu_elmo" target='_blank' rel='noreferrer'>@ssbu_elmo</a></h4>
                        <img src={require('../../images/twitter-logo.png')} alt='' />
                        <p>I tweet daily about Smash, among other topics!</p>
                    </li>
                    <li className='element'>
                        <h4>YouTube: <a href='https://www.youtube.com/channel/UCWJPI7TW6j_aPxpYLWAij9g/featured' target='_blank' rel='noreferrer'>Elmo</a></h4>
                        <img src={require('../../images/youtube-logo.png')} alt='' />
                        <p>I ocassionally upload videos, usually some
                        highlights of my streams on Twitch.</p>
                    </li>
                    <li className='element'>
                        <h4>Twitch: <a href='https://www.twitch.tv/ssbu_elmo' target='_blank' rel='noreferrer'>ssbu_elmo</a></h4>
                        <img src={require('../../images/twitch-logo-2019.png')} alt='' />
                        <p>I stream regularly on here, most commonly
                        Smash, but possibly some other games like 3rd Strike.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

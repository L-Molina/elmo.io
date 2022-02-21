import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>The one, and only, Elmo!</h1>
            <p>Smash Ultimate Bowser main</p>
            <p>From: Argentina</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                READ DESCRIPTION
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                VISIT MY TWITCH CHANNEL!
                <i className='far fa-play-circle' />
                </Button>
                
            </div>
        </div>
  );
}

export default HeroSection;

/* <video autoPlay loop muted>
                    <source src='' type='video/mp4'/>
                </video> */
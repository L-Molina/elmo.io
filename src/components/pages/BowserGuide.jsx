import React from 'react';
import '../../App.css';

export default function BowserGuide() {
    return (
        <div className='bowser-guide'>
            <div className='title'>
                <h1>BOWSER GUIDE</h1>
                <img src={require("../../images/bowser-alts.PNG")} alt="" />
                <h5>Welcome to the Dragon's Lair!</h5>
                
            </div>
            <div className='body'>
            <p>Written by: Elmo</p>
            <p>Bowser is considered one of the best superheavyweights in Smash Ultimate, 
            and my personal choice for my main. Having focused on this character for over 2 years, 
            it should come as no surprise that I have some things I can teach with it comes to this big turtle.
            <br/>Its Showtime!</p>
            <h3>This guide will be divided into the following sections:</h3>
            <ul className='list'>
                <li className='element'>
                    General overview, in my perspective
                </li>
                <li className='element'>
                    Individual Moves:
                    <ul className='list'>
                       <li className='element'>Grounded Normals</li>
                       <li className='element'>Aerial Attacks</li>
                       <li className='element'>Special Moves</li>
                       <li className='element'>Throws</li>
                    </ul>
                </li>
                <li className='element'>
                    His Neutral
                </li>
                <li className='element'>
                    His Advantage:
                    <ul className='list'>
                       <li className='element'>Juggling</li>
                       <li className='element'>Edgeguarding</li>
                       <li className='element'>Ledgetrapping</li>
                    </ul>
                </li>
                <li className='element'>
                    His Disadvantage
                </li>
            </ul>
            </div>
            <div className='title'>
                <h3>General overview: My perspective</h3>
            </div>
            <div className='body'>
                <p>Let me ask you a question: did you ever think about what would happen if we combined a heavy hitting Grappler with an aggressive Rushdown character? 
                <br /> Well, Bowser right here is the exact answer to that question.</p>
                <p>Lets get the obvious things out of the way first: 
                <br /> Bowser is a Grappler/Brawler who specializes on conditioning his oponnent's shield and jumping patterns, 
                which then lets him capitalize into his terrifying advantage state, formidable edgeguarding and ledgetrapping, as well as his fantastic corner pressure. 
                Alongside this, he gets some of the biggest reward for callouts out of any character in the game, as one single read could lead to a stock at virtually any percent.
                <br />At the same time, however, he struggles heavily to reset back into neutral once he is put into disadvantage state, 
                whether he is being juggled or consistently denied recovering back to stage, as well as getting back from the ledge. </p>
                <p>He is pretty unique compared to the other superheavyweights in Smash Ultimate, thanks to his safer grounded normals, 
                useful out of shield options and incredible ground mobility, all of which make him absolutely terrifying on the ground in the vast majority of matchups.
                </p>
            </div>
        </div>
    );
}

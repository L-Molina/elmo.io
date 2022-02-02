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
                <br /> Well, Bowser is the exact answer to that question.</p>
                <br />
                <p>Lets get the obvious things out of the way first: 
                <br /> Bowser is a Grappler/Brawler who specializes on conditioning his oponnent's shield and jumping patterns, 
                which then lets him capitalize into his terrifying advantage state, formidable edgeguarding and ledgetrapping, as well as his fantastic corner pressure. 
                Alongside this, he gets some of the biggest reward for callouts out of any character in the game, as one single read could lead to a stock at virtually any percent.
                <br />At the same time, however, he struggles heavily to reset back into neutral once he is put into disadvantage state, 
                whether he is being juggled or consistently denied recovering back to stage, as well as getting back from the ledge. </p>
                <br />
                <p>He is pretty unique compared to the other superheavyweights in Smash Ultimate, thanks to his safer grounded normals, 
                useful out of shield options and incredible ground mobility, all of which make him absolutely terrifying on the ground in the vast majority of matchups.
                <br />This also comes at the expense of some traits that you would expect from a traditional Smash Ultimate character: 
                His aerial attacks are nearly useless for shield pressure, his fastest option at all is still really slow when compared to most of the cast, 
                and his aerial drift can be dissapointing, especially in offstage situations.</p>
                <br />
                <p>Ok, we talked about enough general things, lets get into the real details. Starting from the ground, literally.</p>
            </div>
            <div className='title'>
                <h4>Grounded Normals</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Jab:</h4> 
                        <img src={require("../../images/jab.PNG")} alt="" />
                        <p>Starting off, we have a very strange jab compared to the rest of the cast. Despite its Frame 7 startup, its good range,
                        combined with its surprisingly low ending lag, make it pretty safe to just throw out against
                        most characters and... Its also a combo starter?
                        <br />Yup, if your opponent is at 0 percent, the full jab comboes into a well timed dash grab, which then goes into upthrow into an aerial. 
                        If that wasnt enough, jab also kills at very high percents, so if you couldnt kill your opponent at 150, you still have this.
                        <br />For those on the know out there, Jab 1 into side B can also work as a kill confirm at very high precents, 
                        so you dont have to finish the full jab if you wanna take their stock. We will talk about side B later, though.</p>
                    </li>
                    <li className="element">
                        <h4>Forward Tilt:</h4>
                        <img src={require("../../images/ftilt.PNG")} alt="" />
                        <p>Oh, boy. This, in my opinion, is probably the best ftilt in the game. 
                        <br />Fast startup, pretty safe on shield if you space it, 
                        a bit of a step back before the hitbox so it can whiff punish opponents, a bit of armor, a bit of intangibility which makes it effectively disjointed 
                        (similar to a sword attack), a very powerful kill option (especially with rage), an amazing option for catching the 2-frame, as well as catching people stalling,
                        one of the best neutral getup punishes in the game thanks to its 5 active frames, can set up techchases at low-mid percents... 
                        <br />Jesus, this move is GREAT. Use it, please.</p>
                    </li>
                    <li className="element">
                        <h4>Up Tilt:</h4>
                        <img src={require("../../images/uptilt.PNG")} alt="" />
                        <p>If you have played Smash Ultimate competitively for any amount of time, 
                        i'm willing to bet you know about Snake's Up Tilt, one of the best normals in the whole game. 
                        <br />Bowser, if you can believe this, has basically an armored version of it.
                        <br />So, this move is not great against grounded opponents, but is 
                        basically broken as an antiair. (I mean this)
                        <br />Its very high kill power, fantastic range, armor and intangibility, make for an amazing tool against anything in the air. 
                        It does have some extremely niche combo potential, mainly with the very last active frame after a jablock,
                        but that isn't very practical. Other than that, you can start your advantage state when it hits, so its definitely not unrewarding.</p>
                    </li>
                    <li className="element">
                        <h4>Down Tilt:</h4>
                        <img src={require("../../images/dtilt.PNG")} alt="" />
                        <p></p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

import React from 'react';
import '../../App.css';

export default function Shoutouts () {
    return (
        <div className='shoutouts'>
            <div className='title'>
                <h1>SHOUTOUTS</h1>
            </div>
            <div className='body'>
                <p>Here are some of the Bowser players I would like to shoutout,
                either because I consider them friends,
                or because they inspired me/helped me throughout my Smash career.
                Check them out!</p>
                <div className='list'>
                    <div className='element'>
                        <a href="https://twitter.com/El_Boira" target='_blank' rel='noreferrer'>
                            <img className='special special-button' src={require('../../images/boira.jpg')} alt='Boira'/>
                        </a>
                        <p>The single best Bowser in Argentina: here is Boira, ladies and gentlemen!
                        <br />Not only is he a really strong player with some great results behind him,
                        but he also cares for the community a lot.
                        I heavily appreciate him for that (haha, see what I did there?)</p>
                        <p>(additional information: <a href="https://twitter.com/tiky_tyki" target='_blank' rel='noreferrer'>@tiky_tyki</a>)</p>
                    </div>
                    <div className='element'>
                        <a href="https://twitter.com/venharcore" target='_blank' rel='noreferrer'>
                            <img className='special special-button' src={require("../../images/venharcore.jpg" )} alt='venharcore' />
                        </a>
                        <p>For those of you who dont know him, Venharcore is a Chilean Bowser player who,
                        by the way, has been doing super well results-wise.
                        He is also a big friend of mine, even if we didnt actually play all that often.</p>
                    </div>
                    <div className='element'>
                        <a href="https://twitter.com/polazo6942" target='_blank' rel='noreferrer'>
                            <img className='special special-button' src={require("../../images/polazo.jpg" )} alt='polazo6942' />
                        </a>
                        <p>Here we have another Chilean Bowser player: Polazo! 
                        For this one I need to provide some context:
                        <br />So last year, there was an Online South American Character Crew Battle Tournament,
                        there players from all of SA would get a chance to represent their main
                        in an online Crew Batle Tournament, and naturally, I tried to get in for Bowser.
                        however, to do this, I would have to prove myself in a First To 10 game set,
                        against none other than Polazo. After we finished our set,
                        he was kind enough to give me quite a bit of advise about 
                        what I could be doing better. I still appreciate him for that.</p>
                    </div>
                    <div className='element'>
                        <a href="https://twitter.com/DLeon420" target='_blank' rel='noreferrer'>
                            <img className='special special-button' src={require("../../images/leon.jpg")} alt='LeoN' />
                        </a>
                        <p>And now we get to LeoN, the single best Bowser player in the world.
                        <br />This guy has been an inspiration for me ever since I decided to main Bowser,
                        which is to be expected. His gameplay opened my eyes to what this Character 
                        would truly do, and I strive to reach such a level of proficiency,
                        as well as accomplish things half as impressive as he did.
                        <br />Truly a Bowser icon.</p>
                    </div>
                </div>
                <p>Written by: Elmo</p>
            </div>
        </div>
    )
}
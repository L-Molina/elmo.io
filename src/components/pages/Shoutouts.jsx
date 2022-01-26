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
                <br/> either because i consider them friends,
                <br/> or because they inspired me/helped me in my Smash career.
                <br/> Check them out!</p>
                <ul className='shoutout-list'>
                    <li className='shoutout-element'>
                        <h3>Boira (Twitter: <a href="https://twitter.com/El_Boira" target='_blank' rel='noreferrer'>@El_Boira</a>)</h3>
                        <img src={require('../../images/boira.jpg')}/>
                        <p>The single best Bowser in Argentina is first on the list.
                        <br/> Not only is he a really strong player with some great results behind him,
                        <br/> but he also cares for the community a lot.
                        <br/> I heavily appreciate him for that (haha, see what I did there?)</p>
                        <p>(additional information: <a href="https://twitter.com/tiky_tyki" target='_blank' rel='noreferrer'>@tiky_tyki</a>)</p>
                    </li>
                    <li className='shoutout-element'>
                        <h3>Venharcore (Twitter: <a href="https://twitter.com/venharcore" rel='noreferrer'>@venharcore</a>)</h3>
                        <img src={require("../../images/venharcore.jpg" )} />
                        <p>For those of you who dont know him, he is a Chilean Bowser player who,
                        <br/> by the way, has been doing super well results-wise.
                        <br/>Also a big friend of mine, even if we didnt actually play all that often.</p>
                    </li>
                    <li className='shoutout-element'>
                        <h3>Polazo (Twitter: <a href="https://twitter.com/polazo6942" target='_blank' rel='noreferrer'>@polazo6942</a>)</h3>
                        <img src={require("../../images/polazo.jpg" )} />
                        <p>Here we have another Chilean Bowser player. 
                        <br/>For this one I need to provide some context:
                        <br/>So last year, there was an Online South American Character Crew Battle Tournament,
                        <br/>where players from all of SA would get a chance to represent their main
                        <br/>in an online Crew Batle Tournament, and naturally, I tried to get in for Bowser.
                        <br/>However, to do this, I would have to prove myself in a First To 10 game set,
                        <br/>against none other than Polazo. After we finished our set,
                        <br/>he was kind enough to give me quite a bit of advise about 
                        <br/>what I could be doing better. I still appreciate him for that.</p>
                    </li>
                    <li className='shoutout-element'>
                        <h3>LeoN (Twitter: <a href="https://twitter.com/DLeon420" target='_blank' rel='noreferrer'>@DLeon420</a>)</h3>
                        <img src={require("../../images/leon.jpg")} />
                        <p>And now we get to LeoN, the single best Bowser player in the world.
                        <br/>This guy has been an inspiration for me ever since I decided to main Bowser,
                        <br/>which is to be expected. His gameplay opened my eyes to what this Character 
                        <br/>could truly do, and I strive to reach not only such a level of proficiency,
                        <br/>but also accomplish things half as impressive as he did.
                        <br/>Truly a Bowser icon.</p>
                    </li>
                </ul>
                <p>Written by: Elmo</p>
            </div>
        </div>
    )
}
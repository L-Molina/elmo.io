import { useLayoutEffect } from 'react';
import '../../App.css';

export default function Shoutouts () {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='shoutouts'>
            <div className='title'>
                <h1>SHOUTOUTS</h1>
            </div>
            <div className='body'>
                <p>Here are some players I would like to shoutout,
                either because I consider them friends,
                or because they inspired me/helped me throughout my Smash career.
                Check them out!</p>
                <div className='list'>
                    <div className='element'>
                        <a href="https://twitter.com/El_Boira" target='_blank' rel='noreferrer'>
                            <img className='special-button' src={require('../../images/boira.jpg')} alt='Boira'/>
                        </a>
                        <p>The single best Bowser in Argentina: here is Boira, ladies and gentlemen!
                        <br />Not only is he a really strong player with some great results behind him,
                        but he also cares for the community a lot, and so I heavily appreciate him for that.</p>
                        <p>(additional information: <a href="https://twitter.com/tiky_tyki" target='_blank' rel='noreferrer'>@tiky_tyki</a>)</p>
                    </div>
                    <div className='element'>
                        <a href="https://twitter.com/venharcore" target='_blank' rel='noreferrer'>
                            <img className='special-button' src={require("../../images/venharcore.jpg" )} alt='venharcore' />
                        </a>
                        <p>For those of you who dont know him, Venharcore is a Chilean Bowser player who,
                        by the way, has been doing super well results-wise.
                        He is also a big friend of mine, even if we didnt actually play all that often.</p>
                    </div>
                    <div className='element'>
                        <a href="https://twitter.com/polazo6942" target='_blank' rel='noreferrer'>
                            <img className='special-button' src={require("../../images/polazo.jpg" )} alt='polazo6942' />
                        </a>
                        <p>Here we have another Chilean Bowser player: Polazo! 
                        For this one I need to provide some context:
                        <br />So last year, there was an Online South American Character Crew Battle Tournament,
                        there players from all of SA would get a chance to represent their main
                        in an online Crew Batle Tournament, and naturally, I tried to get in for Bowser.
                        However, to do this, I would have to prove myself in a First To 10 set against Polazo.
                        After we finished, he was kind enough to give me a bit of advice about 
                        what I could do better. I still appreciate him for that.</p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/Aivo382" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/aivo.jpg")} alt="Aivo" className="special-button" />
                        </a>
                        <p>
                        Aivo
                        </p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/AlanAlan1864" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/oz.jpg")} alt="Oz (Alan)" className="special-button" />
                        </a>
                        <p>
                        Oz (Alan)
                        </p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/SsbByaks" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/byaks.jpg")} alt="Byaks" className="special-button" />
                        </a>
                        <p>
                        Byaks
                        </p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/JacintoDCSmash" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/jacintodc.jpg")} alt="CajintoCDs" className="special-button" />
                        </a>
                        <p>
                        JacintoDC
                        </p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/mrflitcher" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/mrflitcher.jpg")} alt="Mr. Flitcher" className="special-button" />
                        </a>
                        <p>
                        Mr. Flitcher
                        </p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/MetagrossOP" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/angie.jpg")} alt="MetagrossOP" className="special-button" />
                        </a>
                        <p>
                        Angie
                        </p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/rodriiponce1" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/baki.jpg")} alt="Baki" className="special-button" />
                        </a>
                        <p>
                        Baki
                        </p>
                    </div>
                    <div className="element">
                        <a href="https://twitter.com/LDarkstalker" target='_blank' rel='noreferrer'>
                            <img src={require("../../images/darkstalker.jpg")} alt="Darkstalker" className="special-button" />
                        </a>
                        <p>
                        Darkstalker
                        </p>
                    </div>
                    <div className='element'>
                        <a href="https://twitter.com/DLeon420" target='_blank' rel='noreferrer'>
                            <img className='special-button' src={require("../../images/leon.jpg")} alt='LeoN' />
                        </a>
                        <p>And now we get to LeoN, the single best Bowser player in the world.
                        <br />This guy has been an inspiration for me ever since I decided to main Bowser. 
                        His gameplay opened my eyes to what this character could truly do.
                        <br />Truly a Bowser icon.</p>
                    </div>
                </div>
                <p>Written by: Elmo</p>
            </div>
        </div>
    )
}
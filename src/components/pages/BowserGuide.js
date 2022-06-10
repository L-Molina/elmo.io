import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function BowserGuide() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }); 

    return (
        <div className='bowser-guide'>
            <div className='title'>
                <h1>BOWSER GUIDE</h1>
                <img src={require("../../images/bowser-alts.PNG")} alt="Bowser's alts" />
                <h5>Welcome to the Dragon's Lair!</h5>
            </div>
            <div className='body'>
            <p>Written by: Elmo</p>
            <p>Bowser is considered one of the best superheavyweights in Smash Ultimate, 
            and my personal choice for my main. Having focused on this character for over 2 years, 
            it should come as no surprise that I have some things I can teach with it comes to this big turtle.
            <br/>It's Showtime!</p>
            <h3>This guide will be divided into the following sections:</h3>
            <ul className='list'>
                <li className='element'>
                    General overview, in my perspective
                </li>
                <li className='element' >
                    Individual Moves:
                    <ul className='list'>
                        <li className='element'>
                            <Link to="/bowser-guide/ground-moves">
                                Grounded Normals
                            </Link>
                        </li>
                        <li className='element'>
                            <Link to="/bowser-guide/aerials">
                                Aerial Attacks
                            </Link>
                        </li>
                        <li className='element'>
                            <Link to="/bowser-guide/special-moves">
                                Special Moves
                            </Link>
                        </li>
                        <li className='element'>
                            <Link to="/bowser-guide/throws">
                                Throws
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='element'>
                    <Link to="/bowser-guide/neutral">
                        His Neutral
                    </Link>
                </li>
                <li className='element'>
                    <Link to="/bowser-guide/advantage">
                        His Advantage: 
                    </Link>
                    <ul className='list'>
                       <li className='element'>Juggling</li>
                       <li className="element">
                           Offstage Game
                        </li>
                       <ul className="list">
                            <li className='element'>Edgeguarding</li>
                            <li className='element'>Ledgetrapping</li>
                       </ul>
                    </ul>
                </li>
                <li className='element'>
                    <Link to="/bowser-guide/disadvantage">
                        His Disadvantage
                    </Link>
                    <ul className="list">
                        <li className="element">Escaping Juggles</li>
                        <li className="element">Recovery</li>
                        <li className="element">Getting back from the Ledge</li>
                    </ul>
                </li>
                <li className="element">
                    <Link to="/bowser-guide/other">
                        Other Notes
                    </Link>
                    <ul className="list">
                        <li className="element">Tough Guy</li>
                    </ul>
                </li>
                <li className="element">
                    Conclusion
                </li>
            </ul>
            </div>
            <div className='title'>
                <h3>General overview: My perspective</h3>
            </div>
            <div className='body'>
                <p>Let me ask you a question: did you ever think about what would 
                happen if we combined a heavy hitting Grappler with an aggressive Rushdown character? 
                <br /> Well, Bowser is the exact answer to that question.</p>
                <br />
                <p>Lets get the obvious things out of the way first: 
                <br /> Bowser is a Grappler/Brawler who specializes on conditioning
                his oponnent's shield and jumping patterns, which then lets him capitalize
                into his terrifying advantage state, formidable edgeguarding and ledgetrapping, 
                as well as his fantastic corner pressure. Alongside this, he gets some of 
                the biggest reward for callouts out of any character in the game, as one single
                read could lead to a stock at virtually any percent.
                <br />At the same time, however, he struggles heavily to reset back into 
                neutral once he is put into disadvantage state, whether he is being juggled 
                or consistently denied recovering back to stage, as well as getting back from the ledge. 
                </p>
                <br />
                <p>He is pretty unique compared to the other superheavyweights in Smash Ultimate,
                thanks to his safer grounded normals, useful out of shield options and incredible
                ground mobility, all of which make him absolutely terrifying on the ground in the 
                vast majority of matchups.
                <br />This also comes at the expense of some traits that you would expect from a 
                traditional Smash Ultimate character: His aerial attacks are nearly useless for 
                shield pressure, his fastest option at all is still really slow when compared to most of the cast, 
                and his aerial drift can be dissapointing, especially in offstage situations.</p>
                <br />
            </div>
            <div className="title">
                <h4>Conclusion</h4>
            </div>
            <div className="body">
                <p>Bowser is the character I stuck with since I started playing competitive Ultimate, and have acheived notable tournament wins on strong players with the turtle.
                I'm glad that I can show what the character has to offer, and hopefully you can say the same about reading it!
                </p>
            </div>
        </div>
    );
}

import React, { useLayoutEffect } from 'react';
import '../../App.css';

export default function SSBUCareer() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="ssbucareer">
            <div className="title">
                <h2>SSBU Career: Elmo</h2>
                <p>Elmo has been competing for over 2 years at this point. 
                <br /> So let's find out, how did he do?</p>
            </div>
            <div className="body">
                <p>Written by: Elmo</p>
                <p>Now, I unfortunately haven't been able to reach a proper top 8 placement at a tournament
                as of the date of this article being written (April 2022). However, that doesn't tell the full
                story.
                <br />With intruguing sets all over the place, ocasional upsets, and high level Smash LATAM gameplay 
                throughout, there is already plenty to talk about within my competitive career. 
                <br />Join me, as we break it down, starting from:
                </p>
                <div className="list">
                    <div className="element">
                        <h2 className="title">The beggining</h2>
                        <p>My smash ultimate tournament journey started out not so great, actually. First off, 
                        I decided to attend the following online tournaments:</p>
                        <div className="list">
                            <div className="element">
                                <h3>Coin Cup #8</h3>
                                <p>This was the first tournament I ever attended, and... I did exactly as you would
                                expect with this being my first time.</p>
                                <img src={require('../../images/coin-cup-8.PNG')} alt="Coin Cup 8" />
                                <p>Ok, this wasn't the best of starts but surely we pick up from here, right...?</p>
                            </div>
                            <div className="element">
                                <h3>Coin Cup #9</h3>
                                <p>Oh, dang it... Well, didn't go well once again. It's a bit unfortunate, but what can 
                                you do, right?</p>
                                <img src={require('../../images/coin-cup-9.PNG')} alt="Coin Cup 9" />
                                <p>Welp, there isn't much to say about this. Maybe smash just isn't for m- Oh, wait a minute!</p>
                            </div>
                        </div>
                    </div>
                    <div className="element">
                        <h2 className="title">The Glimpses of Potential</h2>
                        <p>Note: from now on I will only be listing the tournaments I attended where I managed to win at least one
                        set, just so I don't bombard you with 0-2s that you probably don't really care about.</p>
                        <div className="list">
                            <div className="element">
                                <h3>Smash Chronicles #1</h3>
                                <img src={require('../../images/smash-chronicles.PNG')} alt="Smash Chronicles"/>
                                <p>After having my first opponent DQ'd out of winners, I faced off against the inkling main 
                                Tinchomaz, who I can fairly say was a pretty strong player since the set was very even throughout.
                                <br />But oh boy, Losers is the real deal here: I had to fight none other than Toti, A ROB/Link player
                                who, in the following editions, would proceed to place in top 16/top 8 quite a few times, proving
                                that he was an extremely tough opponent.
                                <br />And what a tough opponent I overcame! Opening with a solid game 1 against his Link, he would proceed to wipe out the R.O.B.,
                                a character which, to this day, remains a big question mark for me in terms of Matchups. He proceeded to beat me Game 2, to which
                                followed an incredibly tense Game 3 on Yoshi's story, with both of us with a feet out of the tournament, I managed to come out on
                                top with a Fair that killed at 170%.
                                <br />Great job, Elmo, great job.</p>
                            </div>
                            <div className="element">
                                <h3>Distance Demon #4</h3>
                                <p>Another tournament where I only had a single victory, but it's definitely worth talking about.</p>
                                <img src={require('../../images/distance-demon-4.PNG')} alt="Distance demon 4"/>
                                <p>So, at first glance, this tournament wasnt all that notable. I mean, I beat someone who was expected
                                to end up in last place and that's it, right? 
                                <br />While that is true, this tournament also started somewhat of a storyline with Royal, as 
                                well as with Tacho himself.
                                <br />See, Royal and I aren't strangers to playing in friendlies now, consistently going back and forth,
                                but that wasn't really the case when I fought him here; in fact, it might've been the first time we'd ever
                                played. He did swiftly send me packing at the time, but nowadays it's definitely not certain who would come
                                out on top: whether Bowser or Terry Bogard, whether Donkey Kong or Wario, we are still waiting for our
                                awaited rematch.
                                <br />As for Tacho, this wouldn't be the last time we would fight under serious conditions, as we agreed on a
                                weird Squad Strike-like FT5 set which would be streamed on TAKUMI's Twitch channel (link here). 
                                <br />Starting with Sephiroth vs Mii Brawler, he would manage to defeat me and take Game 1, but he wasn't prepared for what was to
                                come next: Once my infamous "Builder Mario" Mii Brawler, running the terrifying Thrust Uppercut came out to play,
                                it was all but courteins, as I proceeded to sweep his entire lineup of characters just by using Brawler's powerful
                                Thrupper setups to take early stocks. A delightful experience for anyone who was a fan of Mii Brawler to watch.</p>
                            </div>
                        </div>
                    </div>
                    <div className="element">
                        <h2 className="title">The Peak</h2>
                        <div className="list">
                            <div className="element">
                                <h3>Revival of Ultimate</h3>
                                <p>This is it, chief. This is Elmo at it's most terrifying (yet).</p>
                                <img src={require('../../images/revival-of-ultimate-result.PNG')} alt="Revival of Ultimate" />
                                <p>This tournament was the first time I came close to cracking Top 8 at any tournament I have ever attended,
                                and it featured some interesting matches. Here's a rundown.
                                <br />My first match of the night would put me face to face with R-QI, who played Sheik/R.O.B., and was rather
                                forgettable, as the matches ended quickly and were fairly one sided, with me taking the set 2-0 and moving on.
                                <br />Now the second match of the event was agaisnt none other than Felagund (nowadays known as Fel), one of 
                                THE best players in Argentina, ever since the game's release (also a very nice person, by the way, here's 
                                a link to his Twitter so you can give him a follow). Game 1 I was terrified and not confident enough that Bowser
                                could overcome his Byleth, so I switched to Captain Falcon, my secondary at the time. The match wasn't one sided at all,
                                but i did sucumb to Fel's experience and fundamentals. For Game 2 I took a deep breath, and decided to go back
                                to the good ol' plan, sticking it out with Bowser through my last life in Winners, no matter what happened.
                                <br />It (miraculously) worked. Game 2 was generally in Fel's favor, until he goes down to his last stock, I decide to bet
                                it all on a Bowser Bomb shieldbreak, which managed to land! With Fel as low as 25%~, the fate of Game 2 was sealed as I
                                finished it with a Forward Smash.
                                <br />Now, sadly not all is roses, as Game 3 was unfortunately dominated by Fel's Byleth, sending me packing to Losers bracket
                                on the verge of pulling off the impossible.
                                <br />(Fel will go on to place 4th at the tournament, 1 spot below where he was seeded, losing to Lucastrupa twice)</p>
                                <h3><br />Losers</h3>
                                <p>In Losers bracket, my first opponent would be PA's dorito, a Bayonetta who was seeded to place 11th and had just 
                                eliminated supra, another excellent player. Unlike other opponents thus far, however, I had plenty of experience specifically 
                                against this foe, so I was well versed to overcome this challenge. 
                                <br />Game 1 started with a Pyra counterpick that threw me off a little bit, with those pesky Blazing Ends that were difficult to get past. I was eventually able to seal the game
                                with an edgeguard, as Pyra's recovery was much more exploitable than Bayonetta's, but this was only the beggining.
                                <br /> Game 2 saw him go right back to the Bayo; I decided to stick to my guns: using Bowser's powerful tools out of shield to provoke
                                and punish unsafe approaches, slowly building up damage until I could get the KO with a Side B command grab or an Up B 
                                out of shield. It paid off, as I managed to win and advance to the next round. Got a good rythm goin, ain't I?
                                <br />Sadly, this story had an anticlimactic sad end at the hands of the insanely good Lohan, another Byleth player who ended up finishing 5th.
                                <br />Game 1 started with my Bowser not being able to deal with Lohan's unfair combination of fundamentals and insane gimmicks that threw me off guard, things that
                                Fel hadn't even attempted to do. I felt like the run was over going into Game 2, but I ultimately decided to atleast try something 
                                different if only for the sake of it: Roy. He did not fair any better unfortunately, as Game 2 faired in an almost equal manner, taking me out of the tournament at 9th place,
                                my highest placing at a tournament to this day, just below Top 8.</p>
                                <p>I was on the verge of greatness. It was this close!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

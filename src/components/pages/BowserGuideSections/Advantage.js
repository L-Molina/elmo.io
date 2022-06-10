import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function Advantage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bowser-guide'>
            <div className="title">
                <h1>Advantage State</h1>
            </div>
            <div className="body">
                <p>After a combo, or even a single substantial hit, we start talking about advantage state, where the opponent has very limited options compared to you and, thus, is 
                important that you know how to capitalize off of it.</p>
                <br />
                <h4 className='title'>Juggles</h4>
                <p>Juggles basically involve sending your opponent upwards in an attempt to keep them there by covering the options they might use to
                get back down.
                <br />Usually this translates to a series of different options: </p>
                <ul className="list">
                    <li className="element">
                        <p>Double jump out: Against most characters this is an opportunity to get
                        them offstage if you manage to hit them again.</p>
                    </li>
                    <li className="element">
                        <p>Land aggressively with attacks: Honestly it mostly just depends on the attack they use, as if they do a divekick
                        type of attack to get back down, it's pretty easy to just shield and punish, and if they come down with something safe but reactable, like R.O.Bs like to do with their
                        Nair, you can get up close, parry and get a punish; if they have something like a B-reverse special move, it also becomes more demanding since you have to keep that in 
                        mind at all times as well.</p>
                    </li>
                    <li className="element">
                        <p>Try to come back with fastfall + airdodge: specific, but is often possible to punish if you know where they're going
                        to land, which, since they dont have much drift after neutral airdodge, becomes easier; directional airdodge is a bit tricky too, as it's an option that can help them
                        go wherever they want to mixup their landing, but is still not very useful because of having only one airdodge as well as the amount of lag you will have while airborne,
                        so it's still possible to deal with.</p>
                    </li>
                </ul>
                <p>Now, imagine that you juggled your opponent for a decent amount of damage and you now want to put them in a position where you can kill them effectively.</p>
                <p id='bowser_guide_offstage_game'><br />Well, in that case we need to look at a certain fundamental concept of Smash.</p>
            </div>
            <div className="title">
                <h3>Offstage Game</h3>
            </div>
            <div className="body">
                <p>Now then, the offstage game for Bowser will be divided into two parts, for simplicity's sake: Edgeguarding and Ledgetrapping.</p>
                <ul className="list">
                    <li className="element">
                        <p>First we got the Edgeguarding phase, where both players are off the level and one will try to hit the other while they are recovering, 
                        in an attempt to secure a kill. 
                        <br />For Bowser, edgeguarding has one key word: Forward Air. Yes, that move, do you remember it? Cause now it's the time to use it.
                        <br />Having such tremendous coverage, doing a lot of damage, and having very high killpower are the three main reasons to use Fair if you 
                        ever want to go offstage.
                        <br />To catch people off guard, however, or if you wanna be in a Yeet Smash compilation, we have Bowser Bomb: it can be used to ledge trump 
                        opponents who want to stay at the ledge for a while, which then can be followed with a Bair for a kill.</p>
                    </li>
                    <li className="element">
                        Now for the Ledgetrapping phase on the other hand, we got a lot of options.
                        <ul className="list">
                            <li className="element">
                                First, staying onstage to attempt to catch the opponent's 2-frame, which is the 2 frames of vulnerability upon grabbing the
                                ledge, tends to be very easy for Bowser in most matchups, thanks to Forward Tilt (angled downwards), Down Tilt and Fire Breath,
                                all three hitting below the ledge and having relatively low cooldown, to ensure that you aren't too vulnerable if you miss them.
                            </li> 
                            <li className="element">
                                If you do miss them, however, and find your opponent on the ledge, these two options are still very useful to cover multiple options:
                                since Ftilt catches 2-frames it can also hit the opponent from stalling at the ledge, as well as it can be used to hard punish neutral getup
                                on reaction bacause of it's 5 active frames.
                            </li>
                            <li className="element">
                                Fire Breath is no slouch either: opponents will most likely ledge jump to get around it, as if
                                spaced properly it will catch every other getup option: neutral getup, getup attack (if out of range), double jumps back in and rolls.
                            </li>  
                            <li className="element">
                                After that, his Fair is useful once again to catch low ranged getup attacks, rolls, ledge jumps, double jumps back in and potentially
                                neutral getup, so pretty much every single option that isn't ledge hang.
                            </li>
                            <li className="element">
                                His upsmash is useful as a callout against ledge rolls to kill really early (better than fsmash if you use it behind you).
                            </li>
                            <li className="element">
                                Side B is fantastic as it catches anyone trying to shield Bowser's attacks at the corner as well as anyone trying to escape to a nearby platform.
                            </li>
                            <li className="element">
                                Uptilt covers everything (ok, I'm kidding... Or am I?) except neutral getups, ledge attacks and most ledge hangs.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
}
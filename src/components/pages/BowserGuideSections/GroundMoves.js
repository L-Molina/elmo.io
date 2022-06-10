import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function GroundMoves() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bowser-guide'>
            <div className='title'>
                <h1>Grounded Normals</h1>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Jab:</h4> 
                        <img src={require("../../../images/jab.PNG")} alt="Jab 1 and 2" />
                        <p>Starting off, we have a very strange jab compared to the rest of the cast. Despite its Frame 7 startup, its good range,
                        combined with its surprisingly low ending lag, make it pretty safe to just throw out against
                        most characters and... It's also a combo starter?
                        Yup, if your opponent is at 0 percent, the full jab comboes into a well timed dash grab, which then goes into upthrow into an aerial. 
                        If that wasnt enough, jab also kills at very high percents, so if you couldnt kill your opponent at 150, you still have this.
                        For those on the know out there, Jab 1 into side B can also work as a kill confirm at very high precents, 
                        so you dont have to finish the full jab if you wanna take their stock. We will talk about side B later, though.</p>
                    </li>
                    <li className="element">
                        <h4>Forward Tilt:</h4>
                        <img src={require("../../../images/ftilt.PNG")} alt="Forward Tilt" />
                        <p>Oh, boy. This, in my opinion, is probably the best ftilt in the game. 
                        Fast startup, pretty safe on shield if you space it, 
                        a bit of a step back before the hitbox so it can whiff punish opponents, a bit of armor, a bit of intangibility which makes it effectively disjointed 
                        (similar to a sword attack), a very powerful kill option (especially with rage), an amazing option for catching the 2-frame, as well as catching people stalling,
                        one of the best neutral getup punishes in the game thanks to its 5 active frames, can set up techchases at low-mid percents... 
                        Jesus, this move is GREAT. Use it, please.</p>
                    </li>
                    <li className="element">
                        <h4>Up Tilt:</h4>
                        <img src={require("../../../images/uptilt.PNG")} alt="Up Tilt" />
                        <p>If you have played Smash Ultimate competitively for any amount of time, 
                        i'm willing to bet you know about Snake's Up Tilt, one of the best normals in the whole game. 
                        Bowser, if you can believe this, has basically an armored version of it.
                        <br /> So, this move is not great against grounded opponents, but is 
                        basically broken as an antiair. (I mean this)
                        It's very high kill power, fantastic range, armor and intangibility, make for an amazing tool against anything in the air. 
                        It does have some extremely niche combo potential, mainly with the very last active frame after a jablock,
                        but that isn't very practical. Other than that, you can start your advantage state when it hits, so its definitely not unrewarding.</p>
                    </li>
                    <li className="element">
                        <h4>Down Tilt:</h4>
                        <img src={require("../../../images/dtilt.PNG")} alt="Down Tilt" />
                        <p>Unfortunately, when it comes to this move, theres mostly no reason to use it 
                        over ftilt or fire breath on the ground or in 2 frame situations (we will talk about fire breath later). 
                        <br /> It does last for a decent amount of time, however, and it can kill at high percents, so its not useless.</p>
                    </li>
                    <li className="element">
                        <h4>Dash attack:</h4>
                        <img src={require("../../../images/da.PNG")} alt="Dash Attack" />
                        <p>This move is very straightforward but very useful: its your typical burst movement option 
                        used to catch landings or whiff punish opponents in situations where your other options dont quite reach. 
                        Simple, but effective. There is not much else to say.</p>
                    </li>
                    <li className="element">
                        <h4>Forward Smash</h4>
                        <img src={require("../../../images/fsmash.PNG")} alt="Forward Smash" />
                        <p>The strength behind this classic dropkick is the main selling point. It kills at 
                        around 20 to 30 percent when fully charged! Absolutely insane. 
                        <br />To add up to the armor (which, by the way, is present all over Bowser's normals), there are invencibility frames 
                        on his legs for a few of the active frames, not to be confused with the intangibility seen on his tilt attacks. 
                        <br /> This makes it pretty easy for Bowser to overpower enemy attacks with this, making it 
                        incredibly terrifying as both a shield break punish and a hard callout with some of the highest reward in the entire game. 
                        Knowing when to use this nuke will net you some incredibly early stocks. Trust me, I experienced it first hand. </p>
                    </li>
                    <li className="element">
                        <h4>Up Smash</h4>
                        <img src={require("../../../images/upsmash.PNG")} alt="Up Smash" />
                        <p>This attack is pretty interesting, because it in theory occupies a similar role to up tilt. However, both 
                        are useful in very different ground-to-air situations, which I will get into.
                        <br />For a start, Up smash is significantly stronger, but a bit laggier and shorter ranged, so it sacrifices coverage in return for stronger reward at lower percents.
                        In addition, his shell has invinvibility during the active hitbox frames (similar to fsmash), allowing him to overpower pretty much the entire cast trying to land directly avobe him.
                        So yea, dont press divekicks in disadvantage less you want to die at 50.
                        <br />On the topic of coverage, upsmash is also Bowser's main option to call out rolls, whether when dropping through the angel platform after losing a stock, or during a ledgetrap,
                        where its incredibly rewarding.
                        <br />One final thing to note is the landing hitbox (yes, this move has a landing hitbox), which can potentially catch people trying to airdodge the upsmash.
                        It also sets up for potential followups which is always funny when it happens. </p>
                    </li>
                    <li className="element">
                        <h4>Down Smash</h4>
                        <img src={require("../../../images/dsmash.PNG")} alt="Down Smash" />
                        <p>Here we have probably Bowser's second biggest upgrade from Smash 4. 
                        The change from the second Whirling Foretress to a bigger but laggier version of 
                        Wolf's dsmash was a pretty huge glowup to a move with several good purposes in his toolkit.
                        <br />It's most obvious utility lies in being used as a faster punish than the other smash attacks, 
                        while not being too shabby killpower-wise. Therefore, it is very useful as a spotdodge read, to punish 
                        ledge regrabs (which dont give you intangibility, in case you didnt know) and as a followup after a jablock, 
                        as well as a way to cover all tech options if in the corner, where they might get hit even if they tech and roll away. 
                        <br />All of these are pretty niche situations, albeit this attack definitely does its job in these better than any other move in his kit, so it has it's place.</p>
                    </li>
                </ul>
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
}
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function Neutral() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bowser-guide'>
            <div className="title">
                <h1>Neutral</h1>
            </div>
            <div className="body">
                <p>As we already discussed, Bowser's safest and most rewarding options, 
                which in turn define the way he should be playing the game, are on the ground. Namely,
                his long range grab and tilt attacks, his Fire Breath for ground control, 
                and Flying Slam to counter shields, all of which are mostly hard to react to and punish.
                <br />However, focusing TOO much on controlling the ground will eventually make 
                Bowser vulneravle to jumps, so he was given a good varety of antiairs and ways to stuff 
                the opponents approach in order to compensate for this: his long range fair, 
                uptilt and upsmash are extremely powerful when catching jumps, so they will mostly condition
                an opponent to be on their toes and at least consider shielding a possible 
                incoming attack. This is futile, of course, for reasons you might have already guessed.
                <br />Always consider, however, to try and be as safe and non-commital as possible
                with your antiairs, as it isn't difficult to whiff punish someone who is recklessly 
                pushing these buttons.
                <br />So the takeaways from this part are: be precise with playing either on the 
                ground or in the air, be ready to punish people for feeling too safe to do anything,
                and don't be reckless to hit your opponent for no reason. The eventual opening will
                come in every matchup, with enough patience and one good read. This one opening is
                often all you need to dominate a whole stock or even the entire game, but it does
                hinge on you using the information that you have gathered on your specific opponent.
                </p>
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
}
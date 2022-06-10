import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function Disadvantage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bowser-guide'>
            <div className="title">
                <h1>Disadvantage State</h1>
            </div>
            <div className="body">
                <p>When you get put into disadvantage state, your main goal is to return to neutral whenever you can, having limited options to do so,
                which can all be dealt with by your opponent, depending on the character. It may or may not come as a surprise to hear that Bowser
                isn't very well prepared to be in disadvantage, though it's only fair to cover the options he does have, right?
                </p>
                <h4 className="title">Escaping Juggles</h4>
                <p>It's not a controversial opinion to say that Bowser's worst position is right avobe an opponent trying to juggle him. However, he does
                have a few options worth going over.
                </p>
                <ul className="list">
                    <li className="element">
                        Landing aggresively (using mainly Down Air but also potentially Bowser Bomb): This is mostly useful to switch up the pacing of the match
                        in your favor, as well as getting an opponent off of you. This primarily forces shields which can be punished with either Down B for a
                        shieldbreak, or this next option...
                    </li>
                    <li className="element">
                        Land with a Command Grab (Flying Slam): Being Frame 6 and beating shields makes this one of Bowser's best tools to land, as it nets you huge
                        damage and forces them to get pout of the way to avoid both Dair and this.
                        <br />Which segments nicely into our last option:
                    </li>
                    <li className="element">
                        Land passively (do nothing or maybe cover yourself with an aerial/airdodge): The slowest and most simplistic way to land, as it is 
                        only really useful if the opponent is fearing your other options and tries to get out of the way, since if you dont do anything 
                        commital you get to land for free and reset neutral.
                    </li>
                </ul>
                <h4 className="title">How to Recover</h4>
                <p>Bowser's recovery isn't the greatest, however just by using his Up B you have a decent amount of mixup potential, which we will go over:</p>
                <ul className="list">
                    <li className="element">
                        The Drift: As we discussed when talking about his specials, Bowser can vary between three different distances for his Up B. These allow
                        for various mixups such as: a recovery from very low, a delay on your recovery to fake out landing onstage, recover just avobe and slightly away from the ledge
                        and drift towards it, among many others that I dont even know exist. 
                    </li>
                    <li className="element">
                        The Hitbox: Bowser's aerial Up B has a hitbox, which is good and bad. On one hand, it's very susceptible to getting countered or traded with since it has very
                        little disjoint and small damage unless it connects fully. In return, however, it can also be used as a potential edgeguard mixup to make someone trying to recover
                        have to guess between having to tech and grab the ledge or fake it and make them airdodge, likely killing them, all by simply recovering towards the ledge and holding
                        down on the control stick to avoid grabbing the ledge for as long as you want, as long as you dont fall below it (you won't be able to grab it at that point). It can
                        also be very useful to recover high and harass someone trying to 2-frame you with the multihits, although it's very unsafe if you dont hit anything.
                    </li>
                </ul>
                <h4 className="title">Getting off the Ledge</h4>
                <p>Bowser's Ledge options aren't the greatest or anything, but its definitely much better than getting juggled forever or spiked offstage, isn't it?</p>
                <ul className="list">
                    <li className="element">
                        Normal Ledge options: When it comes to universal options, there are five in total: regular getup, ledge jump, getup attack, ledge roll and ledge stall.
                        <br />One by one, Bowser's regular getup is below average due to his large hurtbox, his ledge jump can be combined with a Fair or Nair to cover yourself
                        on the way down, his getup attack is a bit slow but reaches farther than every single other getup attack in the game, his ledge roll has poor distance
                        and invulnerability so it's not great, and his ledge stall is not that great because his hand is exposed when he is hanging so it's easy to hit him.
                    </li>
                    <li className="element">
                        Character-specific Ledge options: Some of you would've noticed that I skipped a ledge option: dropping the ledge and double jumping back in, or just double
                        jump back in for short. You can combine it with various options, which is why I skipped it: for example, Fair can be used to punish someone for not shielding
                        or doing whatever at the edge; Nair can be used to surprise someone right at the edge and potentially start a combo; finally Flying Slam command grab is 
                        very useful for blowing up blocking opponents. You dont have any protection during any of these, though, so expect to eat a punish if you miss.
                    </li>
                </ul>
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
}
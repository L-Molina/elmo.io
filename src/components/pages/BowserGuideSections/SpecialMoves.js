import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function SpecialMoves() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bowser-guide'>
        <div className="title">
                <h1>Special Moves</h1>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Neutral B: Fire Breath</h4>
                        <img className='special' src={require("../../../images/firebreath.png")} alt="Fire Breath" /> <br />
                        <img src={require("../../../images/neutralb.PNG")} alt="Neutral B Frame Data" />
                        <p>Bowser has many good attacks in his moveset, but this one is certainly his best, having been improved vastly from Smash 4.
                        <br />It has continuous hitboxes that decrease in size the longer you hold the B button. It can also be angled upwards or downwards,
                        giving it more flexibility in many scenarios.
                        <br />It's amazing range and exceptional damage allows him to chase down opponents who want to run away or 
                        try to poke at him with fullhop aerials, as well as punish shorthop antiairs, ledge getups, various characters' recoveries,
                        and... Shields?
                        <br />Yes, this move is actually not punishable against shield, since if you block it the hitboxes would most likely drain your shield heavily
                        until the shield gets poked and you take some damage. It is also not really unsafe on hit, despite being unable to launch opponents or kill.
                        <br />After catching a recovering opponent with neutral B, you get a chance to gimp them with either forward tilt angled downwards, or forward air,
                        since they won't be able to inmediately grab the ledge.
                        </p>
                    </li>
                    <li className="element">
                        <h4>Side B: Flying Slam</h4>
                        <img className='special' src={require("../../../images/flyingslam.PNG")} alt="Flying Slam" /> <br />
                        <img src={require("../../../images/sideb.PNG")} alt="Side B Frame Data" /> 
                        <p>A command grab is a tool that often defines a grappler, to the point to where their core mixup game revolves around landing these incredibly dangerous moves.
                        While Bowser's side B might not be as centralizing to his playstyle as some other grapplers even in Smash, this is definitely not a tool to be slept on.
                        <br />Despite it's respectable range and absurd frame 6 startup, it does have the problem of only being active for a single frame. It is also very laggy, so don't whiff it
                        unless you want to eat a punish. This can also be a problem when using it as an out of shield option, as it can be very precise to hit a smaller opponent with it.
                        <br />With all of that being said, the sheer speed of the command grab does make it an unreactable thread when Bowser is nearby. Since its (naturally) unblockable, 
                        it makes shielding anywhere on the stage, whether on a platform, when he is at the ledge or simply as Bowser jumps at you, extremely unsafe. This is especially true at high percents 
                        where it will kill. It can also rob your opponents at criminally low percents if they dont know how to DI the slam (for details on Flying Slam DI,
                        check out <a href="https://i.imgur.com/8LJJaV5.jpg" target='_blank' rel='noreferrer'>this link</a> for an more in-depth look)
                        <br />Finally, lets talk about the famous Bowsercide: basically, both Bowser and the opponent have control of where the slam will happen, and the level of control 
                        will favor the player with the lower percentage. So if you are at high percents and bowser is at low percents, he has more control over where you land with Flying Slam.
                        This is important to remember, as both of you can also redirect the Flying Slam offstage. Whenever this happens, Bowser will die first, and the opponent will be able
                        to recover, as long as their options allow them to. For example, Meta knight can survive a Bowsercide no matter the stage, so if he gets to control where the Flying Slam
                        lands and puts you offstage, you just die for using your command grab. 
                        </p>
                    </li>
                    <li className="element">
                        <h4>Up B: Whirling Fortress</h4>
                        <img className='special' src={require("../../../images/whirlingfortress.PNG")} alt="Whirling Fortress" /> <br />
                        <img src={require("../../../images/upb.PNG")} alt="Up B Frame Data" />
                        <img src={require("../../../images/upbair.PNG")} alt="Aerial Up B Frame Data" /> 
                        <p>One of the most unique and notorious attacks ever slapped onto a heavyweight, it became Bowser's best (and often only) way to really relieve shield 
                        pressure from his opponent, who would otherwise leave Bowser stuck in his shield throughout the entire match. Because of this, it's common to see counterplay 
                        from opponents to specifically beat up B, like shielding, spacing around it, rolling away or dashing away from it, all of which you can potentially catch.
                        <br /> Shields are countered by a grab or command grab, escapes can be checked with a long range fire breath or simply by reclaiming stage control, and spacing can be played around similarly, either by 
                        antiairing someone trying to space you out with aerials, or catching their defensive options afterwards. In other words, as little whiffed up Bs as possible to avoid
                        getting punished, and be able to use it to catch crossups or close range agression.
                        <br />It couldnt all be flowers when it comes to Bowser: his recovery can be especially exploitable if you dont know what you're doing. 
                        <br />To start, his up B in the air has three different distances: for the shortest distance, you need to mash B inmediately after pressing up B, for normal distance you just press up B, 
                        and for the longest discance you have to start mashing B just as the animation is about to end. To practice the long distance, simply go to ledge, drop from it, double jump and press neutral B,
                        then try to recover, since you will need to get the longest distance to make it back.
                        <br />Keep in mind as well, that the up B in the air has a pretty high hitbox that makes it pretty susceptible to being countered offstage, but can also hit opponents
                        trying to edgeguard you who either go offstage too late or arent shielding at the ledge as a mixup.</p>
                    </li>
                    <li className='element'>
                        <h4>Down B: Bowser Bomb</h4>
                        <img className='special' src={require("../../../images/bowserbomb.PNG")} alt="Bowser Bomb" /><br />
                        <img src={require("../../../images/downb.PNG")} alt="Down B Frame Data" />
                        <img src={require("../../../images/downbair.PNG")} alt="Aerial Down B Frame Data" /> 
                        <p>Like I mentioned, Bowser's kit isnt ALL broken moves, as down B is merely decent.
                        <br />Its a shieldbreaker both on the ground and in the air, which can allow you to grab the ledge if close enough, similar to Yoshi. The big downside is it's significantly slower
                        startup, making it less viable as a mixup tool, since it's slow enough to be escaped if reacted to. That being said, there are many scenarios where the opponent isnt expecting 
                        you to use a super risky move like this, where it can become a viable option. And, of course, the reward you get off of it will be a stock almost regardless of what percent the
                        opponent is when you break a shield. It also has a very strong late hit that sends up, as well as an incredibly strong spike for the early hit. 
                        <br />One of my favorite tricks with Bowser is to use a waveland onto a platform near the ledge to snap it with the down B after you drop off. This can be useful both as a ledgetrump 
                        setup, and possibly to catch ledge jumps or double jumps back in, which can cheese stocks below 20 percent. It is also really hype to hit when catching a ledge jump even without this trick
                        (if you want to see some Down B clips, check out my <a href='https://www.youtube.com/channel/UCWJPI7TW6j_aPxpYLWAij9g/featured' target='_blank' rel='noreferrer'>Youtube Channel</a>)
                        </p>
                    </li>
                </ul>
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
}
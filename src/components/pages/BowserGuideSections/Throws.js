import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../App.css";

export default function Throws() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div className='bowser-guide'>
            <div className="title">
                <h1>Throws</h1>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Grab</h4>
                        <img className='special' src={require("../../../images/grab.PNG")} alt="Grab" /><br />
                        <img src={require("../../../images/grabframedata.PNG")} alt="Grab Frame Data" />
                        <p>Bowser's grab is unique in that its frame 8, so it is slower than average, but has great range to compensate. This even makes it viable out of shield 
                        (even if taking into account the extra 4 frames it takes for the shieldgrab to come out after you actually block something) since the sheer range allows it to
                        grab opponents where most of the non-tether grabs just dont quite reach, which is a game breaker in a lot of matchups.
                        <br />Now, for the actual throws themselves:
                        </p>
                    </li>
                    <li className="element">
                        <p>Down Throw is generally the least used throw. It's best use is at high percents where neither Fthrow or Bthrow would kill yet, as it deals slightly more
                        damage than those. Other than that there's not much that those other two do.
                        </p>
                    </li>
                    <li className="element">
                        <p>Forward Throw is slower than Bthrow but it does the same damage and kills just as effectively. If you get a grab at high percents facing the ledge instead 
                        of facing the stage, Fthrow is your best friend.
                        </p>
                    </li>
                    <li className="element">
                        <p>Back Throw is your main kill throw at high percents when you aren't facing the blastzone. It is also faster, so it can be harder to react with the correct DI,
                        making it kill earlier.
                        </p>
                    </li>
                    <li className="element">
                        <p>Finally, the Big One. Up Throw is your main throw at low to mid percents, as it comboes into a variety of aerials, mainly Nair, Fair, Upair and Bair, all of 
                        with their pros and cons. Nair gives optimal damage but its harder to execute in order to get all the hits, Fair throws them offstage and works for the longest 
                        percent window, Upair is easiest to execute but only gives a juggle and will almost never kill, and Bair is like a combination of Nair and Fair in terms of trades
                        that can also steal double jumps while being hardest to execute. Finally, Up B can work as a mixup route on platform stages with lower ceilings, where it can 
                        potentially steal stocks at criminal percents, especially with bad DI.
                        </p>
                    </li>
                </ul>
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
}
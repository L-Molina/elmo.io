import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function Other() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bowser-guide'>
            <div className="title">
                <h1>Other Notes</h1>
            </div>
            <div className="body">
                <p>Bowser isn't really a techchase-focused character. Your best options to set up techchases are Fair 
                and Ftilt at lower percents.
                <br />If they miss their tech, go for a jablock with Jab1 into a Dsmash (watch out however, because 
                it can whiff on some characters depending on their hurtbox)
                <br />If they tech in place, you can keep pressing Jab to beat it, and even if they shield it and try
                to punish you can shield or spotdodge.
                <br />Finally, if they techroll you can chase them down, as you can grab them or dash attack to cover
                roll out and dash back and make reads against rolls in with either grab or upsmash depending on percent.
                </p>
                <h4 className="title">Unique Mechanic: Tough Guy</h4>
                <p>Tough Guy is a mechanic shared by both Bowser and newcomer KAZUYA MISHIMA, which allows them to eat 
                certain attacks automatically and retaliate, to give them that feeling of tanks. The moves that they can 
                armor must not exceed the threshold of 19 units of knockback for Bowser (14 for Kazuya). If you 
                know about the knockback formula, you might already guess that this isn't a very long list of moves: 
                it mostly limits to rapid jabs like Fox, Falco, Rosalina, The Belmonts, among others; some multihit attacks
                like Ivysaur's Nair and Ftilt can also be armored.
                <br />Worth pointing out two important things: first, crouching will slightly add additional resistance
                to knockback (this is called "crouch cancelling"), which can help you to armor through a few more 
                attacks. Lastly, Tough Guy wears down as the character gains percent, so this mechanic is much more 
                impactful early on when Bowser has taken little damage.
                </p>
                <br />
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
}
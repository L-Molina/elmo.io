import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function Aerials() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="bowser-guide">
            <div className="title">
                <h1>Aerial Attacks</h1>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Neutral Air</h4>
                        <img src={require("../../../images/nair.PNG")} alt="Neutral Air" />
                        <p>Bowser's most deceptive attack in his entire kit, in my opinion. 
                        A lot of people use this move for shield pressure in neutral, which doesnt 
                        really work due to it being unsafe on shield. However, this attack is far 
                        more useful for other scenarios.
                        <br />It's amazing at covering platforms because of the large, long lasting hitboxes,
                        which also make it possible to shield poke most characters shielding on plats. 
                        It also has incredible sinergy with another move that we will talk about later.
                        Additionally, it can serve as a useful option after a ledge jump, to hit opponents for not shielding, 
                        as well as a potential shorthop antiair which can rack up good damage and even combos.
                        <br />Finally, what most of you are waiting for: The Combos!
                        <br />Nair has two different launch angles, depending on whether you hit it facing the opponent or not.
                        The front one will be referred to as Front hit Nair and the other will be called Back hit Nair.
                        <br />Front hit Nair at 0 till low percents, when landing, can combo into a variety of attacks, mainly an uptilt, 
                        a second aerial (most notably fair) or a side B, which works as a way to confirm a Bowsercide in certain MUs.
                        <br />At around mid percents it starts launching them higher, where you can followup with a quick 
                        fullhop RAR Bair which works as a kill confirm.
                        <br />Rising with it mostly works after an upthrow, or after landing Front hit Nair if platforms are nearby.
                        At specific percents it will combo into a third aerial for an extension, which racks up insane damage, 
                        but is a pretty tight combo. It can also potentially combo into Bair or Upair for an early kill, though its even harder.
                        <br />Back hit Nair is more unsafe in neutral, but does insane damage on its own, if all the hits connect. It can also combo from 0 all the way to high 
                        percents into different aerials like a Fair, Bair or Upair, all of which can end up killing.
                        <br />One final thing to note about this aerial is the fact that its hitboxes can be pretty inconsistent depending on spacing. 
                        Sometimes it launches them higher, sometimes not at all, and sometimes the hits just dont connect the same way with very 
                        similar spacing and timing. This can be a big problem for when you need to confirm the nair to get the combo you want, 
                        because if you get the wrong hitbox they might fall out of your combo, so be careful.</p>
                    </li>
                    <li className="element">
                        <h4>Forward Air</h4>
                        <img src={require("../../../images/fair.PNG")} alt="Forward Air" />
                        <p>Fair is... absurd, but not for the reasons you might expect.
                        <br />For a start, this move has a similar problem to Nair, where it looks like a good shield pressure aerial, 
                        even tho its -9 on shield. It also doesnt have any intangibility on the arms, so if you try and land
                        with it while spacing yourself back, Bowser still sticks out his arm hurtbox, where he can potentially get hit and punished.
                        <br />That's it for its flaws, though: this move still has a massive hitbox, above him, in front of him, below him, 
                        and even slightly behind him, all of which are useful in their own way. 
                        It also deals great damage, has exceptional killpower for a Fair when not unstaled, and has a very generous autocancel window, 
                        to the point where you can short hop and buffer the move without fastfalling and still autocancel it. 
                        <br />Just like Jab, at low percents landing a Fair with good timing can setup into a dash grab for a full combo, and there
                        is a very niche kill setup into RAR short hop Bair using the very last active hitbox (the one that hits behind him).
                        <br />Other than that, it is also one of his main ledgetrapping options for coverage, his primary antiair, 
                        his best edgeguarding tool, one of his main kill moves in neutral and his preferred combo finisher because of it being much easier 
                        and sending offstage for edgeguarding, unlike Nair or Upair which send upwards for juggles.</p>
                    </li>
                    <li className="element">
                        <h4>Back Air</h4>
                        <img src={require("../../../images/bair.PNG")} alt="Back Air" />
                        <p>What a beast of an attack, dude! The frame 9, extremely powerful aerial dropkick is one of Bowser's most dangerous weapons.
                        <br />However, it is important to keep in mind the extreme amounts of landing lag that it has. Luckily, the exact same autocancel window
                        that Fair has works with this aerial as well, which makes it terrifying as a shorthop antiair at higher percents. It also makes it a deadly
                        option to cover ledge jumps to kill.
                        </p>
                    </li>
                    <li className="element">
                        <h4>Up Air</h4>
                        <img src={require("../../../images/upair.PNG")} alt="Up Air" />
                        <p>Nothing too special about this one, to be honest. It's a simple kill move/combo finisher after upthrow and nair extensions. 
                        It can also be used when landing to get Bowser's maximum damage routes. However, the hitbox is pretty narrow, so it isnt very useful in this context.</p>
                    </li>
                    <li className="element">
                        <h4>Down Air</h4>
                        <img src={require("../../../images/dair.PNG")} alt="Down Air" />
                        <p>Your primary way to aggresively land from disadvantage, this move serves as a powerful mixup to switch up the pacing. 
                        <br />The spike of the early hit also makes it scary to punish opponents recovering predictably, 2 frame in some niche matchups, or 
                        punishing ledge jumps. It also has a very disjointed landing hit, to make spacing around it when juggling Bowser quite difficult, 
                        which in turn can condition people to shield.
                        <br />Another niche use is actually as a footstool followup. Since its fast enough to work in that context, this can work as a frame 
                        4 option out of shield to punish usually safe attacks and put them in an awkward spot, although it's definitely very specific.
                        </p>
                    </li>
                </ul>
            </div>
            <p className="element"><Link to="/bowser-guide">Back</Link></p>
        </div>
    )
};
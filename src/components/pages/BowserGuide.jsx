import React, { useLayoutEffect } from 'react';
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
                    <a href="#bowser_guide_overview">General overview, in my perspective</a>
                </li>
                <li className='element' >
                    Individual Moves:
                    <ul className='list'>
                       <li className='element'><a href="#bowser_guide_grounded_normals">Grounded Normals</a></li>
                       <li className='element'><a href="#bowser_guide_aerial_attacks">Aerial Attacks</a></li>
                       <li className='element'><a href="#bowser_guide_special_moves">Special Moves</a></li>
                       <li className='element'><a href="#bowser_guide_throws">Throws</a></li>
                    </ul>
                </li>
                <li className='element'>
                    <a href="#bowser_guide_neutral">His Neutral</a>
                </li>
                <li className='element'>
                    <a href="#bowser_guide_advantage_state">His Advantage:</a> 
                    <ul className='list'>
                       <li className='element'>Juggling</li>
                       <li className="element">
                           <a href="#bowser_guide_offstage_game">Offstage Game</a>
                        </li>
                       <ul className="list">
                            <li className='element'>Edgeguarding</li>
                            <li className='element'>Ledgetrapping</li>
                       </ul>
                    </ul>
                </li>
                <li className='element'>
                    <a href="#bowser_guide_disadvantage_state">His Disadvantage</a>
                    <ul className="list">
                        <li className="element">Escaping Juggles</li>
                        <li className="element">Recovery</li>
                        <li className="element">Getting back from the Ledge</li>
                    </ul>
                </li>
                <li className="element">
                    <a href="#bowser_guide_other">Other Notes</a>
                    <ul className="list">
                        <li className="element">Tough Guy</li>
                    </ul>
                </li>
                <li className="element" id='bowser_guide_overview'>
                    <a href="#bowser_guide_conclusion">Conclusion</a>
                </li>
            </ul>
            </div>
            <div className='title'>
                <h3>General overview: My perspective</h3>
            </div>
            <div className='body'>
                <p>Let me ask you a question: did you ever think about what would happen if we combined a heavy hitting Grappler with an aggressive Rushdown character? 
                <br /> Well, Bowser is the exact answer to that question.</p>
                <br />
                <p>Lets get the obvious things out of the way first: 
                <br /> Bowser is a Grappler/Brawler who specializes on conditioning his oponnent's shield and jumping patterns, 
                which then lets him capitalize into his terrifying advantage state, formidable edgeguarding and ledgetrapping, as well as his fantastic corner pressure. 
                Alongside this, he gets some of the biggest reward for callouts out of any character in the game, as one single read could lead to a stock at virtually any percent.
                <br />At the same time, however, he struggles heavily to reset back into neutral once he is put into disadvantage state, 
                whether he is being juggled or consistently denied recovering back to stage, as well as getting back from the ledge. </p>
                <br />
                <p>He is pretty unique compared to the other superheavyweights in Smash Ultimate, thanks to his safer grounded normals, 
                useful out of shield options and incredible ground mobility, all of which make him absolutely terrifying on the ground in the vast majority of matchups.
                <br />This also comes at the expense of some traits that you would expect from a traditional Smash Ultimate character: 
                His aerial attacks are nearly useless for shield pressure, his fastest option at all is still really slow when compared to most of the cast, 
                and his aerial drift can be dissapointing, especially in offstage situations.</p>
                <br />
                <p id='bowser_guide_grounded_normals'>Ok, we talked about enough general things, lets get into the real details. Starting from the ground, literally.</p>
            </div>
            <div className='title'>
                <h4>Grounded Normals</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Jab:</h4> 
                        <img src={require("../../images/jab.PNG")} alt="Jab 1 and 2" />
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
                        <img src={require("../../images/ftilt.PNG")} alt="Forward Tilt" />
                        <p>Oh, boy. This, in my opinion, is probably the best ftilt in the game. 
                        Fast startup, pretty safe on shield if you space it, 
                        a bit of a step back before the hitbox so it can whiff punish opponents, a bit of armor, a bit of intangibility which makes it effectively disjointed 
                        (similar to a sword attack), a very powerful kill option (especially with rage), an amazing option for catching the 2-frame, as well as catching people stalling,
                        one of the best neutral getup punishes in the game thanks to its 5 active frames, can set up techchases at low-mid percents... 
                        Jesus, this move is GREAT. Use it, please.</p>
                    </li>
                    <li className="element">
                        <h4>Up Tilt:</h4>
                        <img src={require("../../images/uptilt.PNG")} alt="Up Tilt" />
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
                        <img src={require("../../images/dtilt.PNG")} alt="Down Tilt" />
                        <p>Unfortunately, when it comes to this move, theres mostly no reason to use it 
                        over ftilt or fire breath on the ground or in 2 frame situations (we will talk about fire breath later). 
                        <br /> It does last for a decent amount of time, however, and it can kill at high percents, so its not useless.</p>
                    </li>
                    <li className="element">
                        <h4>Dash attack:</h4>
                        <img src={require("../../images/da.PNG")} alt="Dash Attack" />
                        <p>This move is very straightforward but very useful: its your typical burst movement option 
                        used to catch landings or whiff punish opponents in situations where your other options dont quite reach. 
                        Simple, but effective. There is not much else to say.</p>
                    </li>
                    <li className="element">
                        <h4>Forward Smash</h4>
                        <img src={require("../../images/fsmash.PNG")} alt="Forward Smash" />
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
                        <img src={require("../../images/upsmash.PNG")} alt="Up Smash" />
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
                        <img src={require("../../images/dsmash.PNG")} alt="Down Smash" />
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
                <p id='bowser_guide_aerial_attacks'>Alright, now that we covered Bowser's grounded options, let's jump right into the next section, which is...</p>
            </div>
            <div className="title">
                <h4>Aerial Attacks</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Neutral Air</h4>
                        <img src={require("../../images/nair.PNG")} alt="Neutral Air" />
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
                        <img src={require("../../images/fair.PNG")} alt="Forward Air" />
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
                        <img src={require("../../images/bair.PNG")} alt="Back Air" />
                        <p>What a beast of an attack, dude! The frame 9, extremely powerful aerial dropkick is one of Bowser's most dangerous weapons.
                        <br />However, it is important to keep in mind the extreme amounts of landing lag that it has. Luckily, the exact same autocancel window
                        that Fair has works with this aerial as well, which makes it terrifying as a shorthop antiair at higher percents. It also makes it a deadly
                        option to cover ledge jumps to kill.
                        </p>
                    </li>
                    <li className="element">
                        <h4>Up Air</h4>
                        <img src={require("../../images/upair.PNG")} alt="Up Air" />
                        <p>Nothing too special about this one, to be honest. It's a simple kill move/combo finisher after upthrow and nair extensions. 
                        It can also be used when landing to get Bowser's maximum damage routes. However, the hitbox is pretty narrow, so it isnt very useful in this context.</p>
                    </li>
                    <li className="element">
                        <h4>Down Air</h4>
                        <img src={require("../../images/dair.PNG")} alt="Down Air" />
                        <p>Your primary way to aggresively land from disadvantage, this move serves as a powerful mixup to switch up the pacing. 
                        <br />The spike of the early hit also makes it scary to punish opponents recovering predictably, 2 frame in some niche matchups, or 
                        punishing ledge jumps. It also has a very disjointed landing hit, to make spacing around it when juggling Bowser quite difficult, 
                        which in turn can condition people to shield.
                        <br />Another niche use is actually as a footstool followup. Since its fast enough to work in that context, this can work as a frame 
                        4 option out of shield to punish usually safe attacks and put them in an awkward spot, although it's definitely very specific.
                        </p>
                    </li>
                </ul>
                <p id='bowser_guide_special_moves'>Well, that sure was a look at Bowser's aerials. Now lets deep dive into the most important part of his whole kit, his...</p>
            </div>
            <div className="title">
                <h4>Special Moves</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Neutral B: Fire Breath</h4>
                        <img className='special' src={require("../../images/firebreath.png")} alt="Fire Breath" /> <br />
                        <img src={require("../../images/neutralb.PNG")} alt="Neutral B Frame Data" />
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
                        <img className='special' src={require("../../images/flyingslam.PNG")} alt="Flying Slam" /> <br />
                        <img src={require("../../images/sideb.PNG")} alt="Side B Frame Data" /> 
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
                        <img className='special' src={require("../../images/whirlingfortress.PNG")} alt="Whirling Fortress" /> <br />
                        <img src={require("../../images/upb.PNG")} alt="Up B Frame Data" />
                        <img src={require("../../images/upbair.PNG")} alt="Aerial Up B Frame Data" /> 
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
                        <img className='special' src={require("../../images/bowserbomb.PNG")} alt="Bowser Bomb" /><br />
                        <img src={require("../../images/downb.PNG")} alt="Down B Frame Data" />
                        <img src={require("../../images/downbair.PNG")} alt="Aerial Down B Frame Data" /> 
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
                <p id='bowser_guide_throws'>Time to deepdive into the last few moves in Bowser's moveset, and these are pretty interesting.</p>
            </div>
            <div className="title">
                <h4>Throws</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Grab</h4>
                        <img className='special' src={require("../../images/grab.PNG")} alt="Grab" /><br />
                        <img src={require("../../images/grabframedata.PNG")} alt="Grab Frame Data" />
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
                <p id='bowser_guide_neutral'>Alright, we got the individual moves out of the way. Let's stop with all this frame data nonsense and talk about being in a match itself with the character, step by step. The first step 
                is the most important of them all:</p>
            </div>
            <div className="title">
                <h3>Neutral</h3>
            </div>
            <div className="body">
                <p>As we already discussed, Bowser's safest and most rewarding options, which in turn define the way he should be playing the game, are on the ground. Namely,
                his long range grab and tilt attacks, his Fire Breath for ground control, and Flying Slam to counter shields, all of which are mostly hard to react to and punish.
                <br />However, focusing TOO much on controlling the ground will eventually make Bowser vulneravle to jumps, so he was given a good varety of antiairs and ways to stuff 
                the opponents approach in order to compensate for this: his long range fair, uptilt and upsmash are extremely powerful when catching jumps, so they will mostly condition
                an opponent to be on their toes and at least consider shielding a possible incoming attack. This is futile, of course, for reasons you might have already guessed.
                <br />Always consider, however, to try and be as safe and non-commital as possible with your antiairs, as it isn't difficult to whiff punish someone who is recklessly 
                pushing these buttons.
                <br />So the takeaways from this part are: be precise with playing either on the ground or in the air, be ready to punish people for feeling too safe to do anything,
                and don't be reckless to hit your opponent for no reason. The eventual opening will come in every matchup, with enough patience and one good read. This one opening is
                often all you need to dominate a whole stock or even the entire game, but it does hinge on you using the information that you have gathered on your specific opponent.
                </p>
                <p id='bowser_guide_advantage_state'>Neutral isn't the only stage in the game, however. Having brought up combos and followups beforehand, let's talk about what happens when you get that opening:</p>
            </div>
            <div className="title">
                <h3>Advantage State</h3>
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
                <p>Now, we've been talking about what happens when you get the hit, but...
                <br />What about when your OPPONENT gets a hit?</p>
                <p id='bowser_guide_disadvantage_state'>
                <br />Well, that's the topic coming up next... 
                </p>
            </div>
            <div className="title">
                <h4>Disadvantage State</h4>
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
                <p id='bowser_guide_other'>Finally, let's wrap it up with some other things to note that don't fall into any of the previous categories.</p>
            </div>
            <div className="title">
                <h4>Other Notes</h4>
            </div>
            <div className="body">
                <p>Bowser isn't really a techchase-focused character. Your best options to set up techchases are Fair and Ftilt at lower percents.
                <br />If they miss their tech, go for a jablock with Jab1 into a Dsmash (watch out however, because it can whiff on some characters depending on their hurtbox)
                <br />If they tech in place, you can keep pressing Jab to beat it, and even if they shield it and try to punish you can shield or spotdodge.
                <br />Finally, if they techroll you can chase them down, as you can grab them or dash attack to cover roll out and dash back and make reads against rolls in 
                with either grab or upsmash depending on percent.
                </p>
                <h4 className="title">Unique Mechanic: Tough Guy</h4>
                <p>Tough Guy is a mechanic shared by both Bowser and newcomer KAZUYA MISHIMA, which allows them to eat certain attacks automatically and retaliate, to give them
                that feeling of tanks. The moves that they can armor must not exceed the threshold of 19 units of knockback for Bowser (14 for Kazuya). If you know about the 
                knockback formula, you might already guess that this isn't a very long list of moves: it mostly limits to rapid jabs like Fox, Falco, Rosalna, The Belmonts, among others;
                some multihit attacks like Ivysaur's Nair and Ftilt can also be armored.
                <br />Worth pointing out two important things: first, crouching will slightly add additional resistance to knockback (this is called "crouch cancelling"), which can help
                you to armor through a few more attacks. Lastly, Tough Guy wears down as the character gains percent, so this mechanic is much more impactful early on when Bowser has taken
                little damage.
                </p>
                <br />
                <p id='bowser_guide_conclusion'>Phew. that was a lot of things to cover. Let's end things up already.</p>
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

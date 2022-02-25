import React from 'react';
import '../../App.css';

export default function BowserGuide() {
    return (
        <div className='bowser-guide'>
            <div className='title'>
                <h1>BOWSER GUIDE</h1>
                <img src={require("../../images/bowser-alts.PNG")} alt="" />
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
                    General overview, in my perspective
                </li>
                <li className='element'>
                    Individual Moves:
                    <ul className='list'>
                       <li className='element'>Grounded Normals</li>
                       <li className='element'>Aerial Attacks</li>
                       <li className='element'>Special Moves</li>
                       <li className='element'>Throws</li>
                    </ul>
                </li>
                <li className='element'>
                    His Neutral
                </li>
                <li className='element'>
                    His Advantage:
                    <ul className='list'>
                       <li className='element'>Juggling</li>
                       <li className='element'>Edgeguarding</li>
                       <li className='element'>Ledgetrapping</li>
                    </ul>
                </li>
                <li className='element'>
                    His Disadvantage
                    <ul className="list">
                        <li className="element">Escaping Juggles</li>
                        <li className="element">Recovery</li>
                        <li className="element">Getting back from the Ledge</li>
                    </ul>
                </li>
                <li className="element">
                    Other Notes
                    <ul className="list">
                        <li className="element">Tough Guy</li>
                    </ul>
                </li>
                <li className="element">
                    Conclusion
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
                <p>Ok, we talked about enough general things, lets get into the real details. Starting from the ground, literally.</p>
            </div>
            <div className='title'>
                <h4>Grounded Normals</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Jab:</h4> 
                        <img src={require("../../images/jab.PNG")} alt="" />
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
                        <img src={require("../../images/ftilt.PNG")} alt="" />
                        <p>Oh, boy. This, in my opinion, is probably the best ftilt in the game. 
                        Fast startup, pretty safe on shield if you space it, 
                        a bit of a step back before the hitbox so it can whiff punish opponents, a bit of armor, a bit of intangibility which makes it effectively disjointed 
                        (similar to a sword attack), a very powerful kill option (especially with rage), an amazing option for catching the 2-frame, as well as catching people stalling,
                        one of the best neutral getup punishes in the game thanks to its 5 active frames, can set up techchases at low-mid percents... 
                        Jesus, this move is GREAT. Use it, please.</p>
                    </li>
                    <li className="element">
                        <h4>Up Tilt:</h4>
                        <img src={require("../../images/uptilt.PNG")} alt="" />
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
                        <img src={require("../../images/dtilt.PNG")} alt="" />
                        <p>Unfortunately, when it comes to this move, theres mostly no reason to use it 
                        over ftilt or fire breath on the ground or in 2 frame situations (we will talk about fire breath later). 
                        <br /> It does last for a decent amount of time, however, and it can kill at high percents, so its not useless.</p>
                    </li>
                    <li className="element">
                        <h4>Dash attack:</h4>
                        <img src={require("../../images/da.PNG")} alt="" />
                        <p>This move is very straightforward but very useful: its your typical burst movement option 
                        used to catch landings or whiff punish opponents in situations where your other options dont quite reach. 
                        Simple, but effective. There is not much else to say.</p>
                    </li>
                    <li className="element">
                        <h4>Forward Smash</h4>
                        <img src={require("../../images/fsmash.PNG")} alt="" />
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
                        <img src={require("../../images/upsmash.PNG")} alt="" />
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
                        <img src={require("../../images/dsmash.PNG")} alt="" />
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
                <p>Alright, now that we covered Bowser's grounded options, let's jump right into the next section, which is...</p>
            </div>
            <div className="title">
                <h4>Aerial Attacks</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Neutral Air</h4>
                        <img src={require("../../images/nair.PNG")} alt="" />
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
                        <img src={require("../../images/fair.PNG")} alt="" />
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
                        <img src={require("../../images/bair.PNG")} alt="" />
                        <p>What a beast of an attack, dude! The frame 9, extremely powerful aerial dropkick is one of Bowser's most dangerous weapons.
                        <br />However, it is important to keep in mind the extreme amounts of landing lag that it has. Luckily, the exact same autocancel window
                        that Fair has works with this aerial as well, which makes it terrifying as a shorthop antiair at higher percents. It also makes it a deadly
                        option to cover ledge jumps to kill.
                        </p>
                    </li>
                    <li className="element">
                        <h4>Up Air</h4>
                        <img src={require("../../images/upair.PNG")} alt="" />
                        <p>Nothing too special about this one, to be honest. It's a simple kill move/combo finisher after upthrow and nair extensions. 
                        It can also be used when landing to get Bowser's maximum damage routes. However, the hitbox is pretty narrow, so it isnt very useful in this context.</p>
                    </li>
                    <li className="element">
                        <h4>Down Air</h4>
                        <img src={require("../../images/dair.PNG")} alt="" />
                        <p>Your primary way to aggresively land from disadvantage, this move serves as a powerful mixup to switch up the pacing. 
                        <br />The spike of the early hit also makes it scary to punish opponents recovering predictably, 2 frame in some niche matchups, or 
                        punishing ledge jumps. It also has a very disjointed landing hit, to make spacing around it when juggling Bowser quite difficult, 
                        which in turn can condition people to shield.
                        <br />Another niche use is actually as a footstool followup. Since its fast enough to work in that context, this can work as a frame 
                        4 option out of shield to punish usually safe attacks and put them in an awkward spot, although it's definitely very specific.
                        </p>
                    </li>
                </ul>
                <p>Well, that sure was a look at Bowser's aerials. Now lets deep dive into the most important part of his whole kit, his...</p>
            </div>
            <div className="title">
                <h4>Special Moves</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Neutral B: Fire Breath</h4>
                        <img src={require("../../images/firebreath.png")} alt="" /> <br />
                        <img src={require("../../images/neutralb.PNG")} alt="" />
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
                        <img src={require("../../images/flyingslam.PNG")} alt="" /> <br />
                        <img src={require("../../images/sideb.PNG")} alt="" /> 
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
                        <img src={require("../../images/whirlingfortress.PNG")} alt="" /> <br />
                        <img src={require("../../images/upb.PNG")} alt="" />
                        <img src={require("../../images/upbair.PNG")} alt="" /> 
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
                    <li className="element">
                        <h4>Down B: Bowser Bomb</h4>
                        <img src={require("../../images/bowserbomb.PNG")} alt="" /><br />
                        <img src={require("../../images/downb.PNG")} alt="" />
                        <img src={require("../../images/downbair.PNG")} alt="" /> 
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
                <p>Time to deepdive into the last few moves in Bowser's moveset, and these are pretty interesting.</p>
            </div>
            <div className="title">
                <h4>Throws</h4>
            </div>
            <div className="body">
                <ul className="list">
                    <li className="element">
                        <h4>Grab</h4>
                        <img src={require("../../images/grab.PNG")} alt="" /><br />
                        <img src={require("../../images/grabframedata.PNG")} alt="" />
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
        </div>
    );
}

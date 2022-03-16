import React from 'react';
import '../../App.css';

export default function Description() {
    return (
        <div className='description'>
            <div className="title">
                <h2>Who am I?</h2>
            </div>
            <div className="body">
                
                <p>My name is Lautaro Molina, I am a 19-year old from Argentina and I love (besides playing Smash) making music and Programming.
                <br />Here, let me show you something:
                </p>
                <h4 className="title">Skills</h4>
                <div className="list">
                    <div className="element">
                        <img className='special' src={require("../../images/html.png" )} alt="HTML5" />
                        <img className='special' src={require("../../images/css.png" )} alt="CSS3" />
                        <img className='special' src={require("../../images/javascript.png" )} alt="JS" />
                        <img className='special' src={require("../../images/react.png" )} alt="React" />
                        <img className='special' src={require("../../images/python.png" )} alt="Python" />
                        <img className='special' src={require("../../images/english-certificate.png" )} alt="First Certificate English" />
                    </div>
                </div>
                <h4 className='title'>Work Experience</h4>
                <div className="list">
                    <div className="element">
                        <a href="https://www.gm2dev.com/" target='_blank' rel='noreferrer'>
                        <img className='special' src={require("../../images/gm2dev.png")} alt="Gm2Dev Logo" />
                        </a>                        
                        <p>Work Field: Administration (Part-Time)</p>
                        <p>Active Period: February 2021-August 2021</p>
                        <p>Social Media: <a href="https://twitter.com/gm2dev" target='_blank' rel='noreferrer'>Twitter</a> <a href="https://www.instagram.com/gm2dev/" target='_blank' rel='noreferrer'>Instagram</a></p>
                        <p>I have a lot to say about GM2, but I won't spend time talking about what they do, since you can see their website above.
                        To begin with, the community is really welcoming to new workers, on top of having an excellent working environment, whether
                        you work from home (which is what I did) or actually go to the office, so you never feel uncomfortable doing your job.
                        <br />My tasks in the position involved: utilizing ZoHo People, Google Drive and Confluence to manage different pieces of information, such 
                        as books, documents, bills as well as instructional articles for utilizing different tools.</p>
                    </div>    
                </div>
                <h4 className="title">Education</h4>
                <div className="list">
                    <div className="element">
                    <a href="https://huergo.edu.ar/" target='_blank' rel='noreferrer'>
                    <img className='special' src={require("../../images/huergo.png")} alt="Huergo Logo" />
                    </a>
                    <p>From: 2016 - To: 2021
                    <br />Title: Computer Oriented Technician
                    <br />Social Media: <a href="https://twitter.com/institutohuergo" target='_blank' rel='noreferrer'>Twitter</a> <a href="https://www.instagram.com/institutohuergo/" target='_blank' rel='noreferrer'>Instagram</a>
                    </p>
                    </div>
                    <div className="element">
                    <a href="https://www.coderhouse.com/" target='_blank' rel='noreferrer'>
                    <img className='special' src={require("../../images/coderhouse.png")} alt="Coderhouse Logo" />
                    </a>
                    <p>From: 2022 - Ongoing
                    <br />Course: React JS
                    <br />Social Media: <a href="https://twitter.com/coderhouse" target='_blank' rel='noreferrer'>Twitter</a> <a href="https://www.instagram.com/coderhouse/" target='_blank' rel='noreferrer'>Instagram</a>
                    </p>
                    </div>
                </div>
            </div>
            <p className='body'>Written by: Elmo</p>
        </div>
    )
}

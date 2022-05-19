import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Hoping to have fun with you!
        </p>
        <p className='footer-subscription-text'>
          Become part of the Elmo community! We got chocolate!
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/description'>Description</Link>
            <Link to='/ssbucareer'>My Career</Link>
            <Link to='/shoutouts'>Shoutouts</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>My Social Media</h2>
            <a href="https://twitter.com/ssbu_elmo" target='_blank' rel='noreferrer'>
              Twitter
            </a>
            <a href='https://www.youtube.com/channel/UCWJPI7TW6j_aPxpYLWAij9g/featured' target='_blank' rel='noreferrer'>
              Youtube
            </a> 
            <a href='https://www.twitch.tv/ssbu_elmo' target='_blank' rel='noreferrer'>
              Twitch
            </a> 
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              E-L-M-O
            </Link>
          </div>
          <small className='website-rights'>E-L-M-O © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/socialmedia'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link'
              to='/socialmedia'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

/*
import { Button } from './Button';


          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>

<div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> 

<Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Linkedin'
            >
              <i class='fab fa-linkedin' />
            </Link>
        
<Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
*/
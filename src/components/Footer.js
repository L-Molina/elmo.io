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
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/description'>Description</Link>
            <Link to='/ssbucareer'>My Career</Link>
            <Link to='/shoutouts'>Shoutouts</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>My Social Media</h2>
            <Link to='/socialmedia'>Twitch</Link>
            <Link to='/socialmedia'>Youtube</Link>
            <Link to='/socialmedia'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              E-L-M-O
            </Link>
          </div>
          <small class='website-rights'>E-L-M-O © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link'
              to='/socialmedia'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link'
              to='/socialmedia'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
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
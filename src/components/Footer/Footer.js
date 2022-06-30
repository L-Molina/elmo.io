import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Rising to the top!
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
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Smash Ultimate</h2>
            <Link to='/bowser-guide'>How to Bowser</Link>
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
          <small className='website-rights'>E-L-M-O © 2022 All Rights Reserved</small>
          <div className='social-icons'>
            <a className='social-icon-link' href='https://www.youtube.com/channel/UCWJPI7TW6j_aPxpYLWAij9g/featured' target='_blank' rel='noreferrer'>
              <i className='fab fa-youtube' />
            </a>
            <a className='social-icon-link' href="https://twitter.com/ssbu_elmo" target='_blank' rel='noreferrer'>
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
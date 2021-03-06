import '../../App.css';
import { Button } from '../Navbar/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>The one, and only, Elmo!</h1>
            <p>Smash Ultimate Bowser main</p>
            <p>From: Argentina</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                KNOW WHO I AM!
                <i className='far fa-play-circle' />
                </Button>
                
            </div>
        </div>
  );
}

export default HeroSection;
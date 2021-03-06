import { useLayoutEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../Cards/Cards';

function Home () {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
}

export default Home;
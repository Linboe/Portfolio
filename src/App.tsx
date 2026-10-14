import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { navLinks } from './data/navLinks';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';
import CustomCursor from './components/CustomCursor/CustomCursor'

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

function App() {
    const [talkPulse, setTalkPulse] = useState(0);

    function handleBrandClick() {
        setTalkPulse((n) => n + 1);
    }

    return (
        <>
            <CustomCursor />
            <Navbar
                brand="L☘nn"
                links={navLinks}
                onBrandClick={handleBrandClick}
            />
            <main>
                <Home talkPulse={talkPulse} />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer name="Linn" />
        </>
    );
}


export default App;

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { navLinks } from './data/navLinks';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

function App() {
    return (
        <>
            <Navbar brand="L☘nn" links={navLinks} />
            <main>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer name="Linn" />
        </>
    );
}

export default App;

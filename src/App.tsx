import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { navLinks } from './data/navlinks';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';

function App() {
    return (
        <>
            <Navbar brand="Linn" links={navLinks} />
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

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.1 }); // lägre värde = mjukare/tröggare

        // Håll ScrollTrigger synkad med Lenis
        lenis.on('scroll', ScrollTrigger.update);

        // Låt GSAP:s ticker driva Lenis
        const update = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

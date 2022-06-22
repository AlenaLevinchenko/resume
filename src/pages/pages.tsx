import './pages.css';
import { useEffect } from "react";
import { CLASS_HEADER, CLASS_PAGES } from "../constants";
import { Skills } from "../skills/skills";
import { About } from "../about/about";
import { Experience } from "../experience/experience";
import { Contacts } from "../contacts/contacts";
import { Portfolio } from "../portfolio/portfolio";

interface IPagesProps {
    setBurger: (value: boolean) => void;
    setAllowClick: (allow: boolean) => void;
}

export const Pages = ({
    setBurger,
    setAllowClick
}: IPagesProps) => {
    const classProgress = CLASS_PAGES + '__progress';

    let lastScroll = 0;

    useEffect(() => {
        const list = document.querySelector('.' + CLASS_PAGES) as HTMLElement;

        function onScroll () {
            const header = document.querySelector('.' + CLASS_HEADER) as HTMLElement;
            const avatar = document.querySelector('.' + CLASS_HEADER + '__avatar') as HTMLElement;

            const headerHeight = 232;
            const startPoint = 160;

            let translate = 0;
            let opacity = 1;

            if (lastScroll < startPoint) {
                setAllowClick(true);
            } else {
                setAllowClick(false);
            }

            if (lastScroll >= startPoint && lastScroll <= headerHeight) {
                translate = -lastScroll + startPoint;
                opacity = 1 - lastScroll / headerHeight;
                setBurger(false);
            } else if (lastScroll > headerHeight) {
                translate = -headerHeight;
                opacity = 0;
                setBurger(true);
            }

            header.style.transform = `translate(0, ${translate}px)`;
            avatar.style.opacity = opacity.toString();

            lastScroll = list.scrollTop;
        }

        onScroll();

        list.addEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const list = document.querySelector('.' + CLASS_PAGES) as HTMLElement;
        const progress = document.querySelector('.' + classProgress) as HTMLElement;

        const onScroll = () => {
            if (progress) {
                progress.style.width = `${list.scrollTop / (list.scrollHeight - window.innerHeight) * 100}%`;
            }
        };

        list.addEventListener('scroll', onScroll);
    }, [lastScroll]);

    return (
        <div className={CLASS_PAGES}>
            <About />
            <Experience />
            <Skills />
            <Portfolio />
            <Contacts />
            <div className={classProgress} />
        </div>
    );
}
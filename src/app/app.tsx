import { useEffect, useState } from 'react';
import './app.css';
import { CLASS_ABOUT, CLASS_APP, CLASS_PAGES, ICON_ARROW_UP } from "../constants";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Pages } from "../pages/pages";
import { Loader } from "../loader/loader";
import { Tooltip } from "../tooltip/tooltip";
import { TOOLTIP_UP } from "./constants";
import { setTheme } from "../utils/setTheme";
import { getTheme } from "../utils/getTheme";

export const App = () => {
    const classUp = CLASS_APP + '__up';

    const [burger, setBurger] = useState(false);
    const [allowClick, setAllowClick] = useState(true);
    const [showUp, setUp] = useState(false);

    const onClick = () => {
        const firstPage = document.querySelector('.' + CLASS_ABOUT) as HTMLElement;
        firstPage.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    useEffect(() => {
        const pages = document.querySelector('.' + CLASS_PAGES) as HTMLElement;
        const onScroll = () => {
            if (pages.scrollTop > 300) {
                setUp(true);
            } else {
                setUp(false);
            }
        };

        pages.addEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const theme = getTheme();
        setTheme(theme);
    }, []);

    return (
        <div className={CLASS_APP}>
            <Loader />
            <Header allowClick={allowClick}/>
            <Menu burger={burger} />
            <Pages
                setBurger={(value) => setBurger(value)}
                setAllowClick={(allow) => setAllowClick(allow)}
            />
            {showUp &&
                <Tooltip
                    text={TOOLTIP_UP}
                    position={{
                        left: 'unset',
                        right: '12px',
                        bottom: '30px'
                    }}
                >
                    <i
                        className={`
                        ${classUp}
                        ${ICON_ARROW_UP}
                    `}
                        onClick={onClick}
                    />
                </Tooltip>
            }
        </div>
    );
}

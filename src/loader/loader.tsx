import './loader.css';
import { CLASS_LOADER } from "../constants";
// @ts-ignore
import logo from '../images/logo.png';
// @ts-ignore
import logo_dark from '../images/logo_dark.png';
import { useEffect } from "react";
import { ETheme } from "../utils/setTheme";

export const Loader = () => {
    const classContainer = CLASS_LOADER + '__container';
    const classLogo = CLASS_LOADER + '__logo';
    const classBlocker = classLogo + '__blocker';

    const theme = localStorage.getItem('theme');
    const darkTheme = theme === ETheme.DARK

    useEffect(() => {
        const bg = document.querySelector('.' + CLASS_LOADER) as HTMLElement;
        setTimeout(() => {
            if (bg) {
                bg.style.opacity = '0';
                setTimeout(() => {
                    bg.style.display = 'none';
                }, 1000);
            }
        }, 2000);
    }, []);

    return (
        <div className={CLASS_LOADER}>
            <div className={classContainer}>
                <img src={darkTheme ? logo : logo_dark} className={classLogo} />
                <div className={classBlocker} />
            </div>
        </div>
    );
}
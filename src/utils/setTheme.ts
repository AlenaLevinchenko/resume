import { DARK_THEME, LIGHT_THEME } from "../constants";

export type TTheme = 'light' | 'dark';

export const setTheme = (
    theme: TTheme
) => {
    if (theme === 'light') {
        LIGHT_THEME.forEach(({ value, label }) => {
            document.documentElement.style.setProperty(label, value);
        });

        localStorage.setItem('theme', 'light');
    } else {
        DARK_THEME.forEach(({ value, label}) => {
            document.documentElement.style.setProperty(label, value);
        });

        localStorage.setItem('theme', 'dark');
    }
}
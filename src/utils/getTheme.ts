import { TTheme } from "./setTheme";

export const getTheme = ():TTheme => {
    //@ts-ignore
    const theme: TTheme = localStorage.getItem('theme');
    return theme || 'dark';
}
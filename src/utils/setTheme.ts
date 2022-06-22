import {
    CLASS_HEADER, CLASS_INPUT,
    CLASS_LOADER,
    CLASS_SKILLS,
    CLASS_SWITCH,
    CLASS_TEXTAREA,
    DARK_THEME,
    LIGHT_THEME
} from "../constants";

export enum ETheme {
    DARK = 'dark',
    LIGHT = 'light'
}

export const setTheme = (
    theme: ETheme
) => {
    const header = document.querySelector('.' + CLASS_HEADER) as HTMLElement;
    const left = document.querySelector('.' + CLASS_SKILLS + '__cards--left') as HTMLElement;
    const right = document.querySelector('.' + CLASS_SKILLS + '__cards--right') as HTMLElement;
    const switcher = document.querySelector('.' + CLASS_SWITCH) as HTMLElement;
    const loader = document.querySelector('.' + CLASS_LOADER + '__logo__blocker') as HTMLElement;
    const textArea = document.querySelector('.' + CLASS_TEXTAREA) as HTMLElement;
    const textAreaLabel = document.querySelector('.' + CLASS_TEXTAREA + '__label') as HTMLElement;
    const textAreaIcon = document.querySelector('.' + CLASS_TEXTAREA + '__icon') as HTMLElement;
    const inputs = document.querySelector('.' + CLASS_INPUT) as any;
    // const inputLabels = document.querySelector('.' + CLASS_INPUT) as any;
    // const inputIcons = document.querySelector('.' + CLASS_INPUT) as any;

    if (theme === ETheme.LIGHT) {
        LIGHT_THEME.forEach(({ color, label }) => {
            document.documentElement.style.setProperty(label, color);
        });

        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        left.style.background = 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))';
        right.style.background = 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))';
        loader.style.background = 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%)';
        switcher.style.background = 'rgba(0, 0, 0, 0.1)';
        textArea.style.color = '#20232a';
        textAreaLabel.style.color = '#20232a';
        textAreaIcon.style.color = '#20232a';
        // for (let input of inputs) {
        //     input.style.color = '#20232a';
        // }
        // for (let label of inputLabels) {
        //     label.style.color = '#20232a';
        // }
        // for (let icon of inputIcons) {
        //     icon.style.color = '#20232a';
        // }

        localStorage.setItem('theme', ETheme.LIGHT);
    } else {
        DARK_THEME.forEach(({color, label}) => {
            document.documentElement.style.setProperty(label, color);
        });

        header.style.boxShadow = '0 2px 8px var(--color-background)';
        left.style.background = 'linear-gradient(to right, rgba(32, 35, 42, 1), rgba(32, 35, 42, 0))';
        right.style.background = 'linear-gradient(to left, rgba(32, 35, 42, 1), rgba(32, 35, 42, 0))';
        loader.style.background = 'linear-gradient(to right, rgba(32, 35, 42, 0) 0%, rgba(32, 35, 42, 1) 10%)';
        switcher.style.background = 'rgba(255, 255, 255, 0.2)';
        textArea.style.color = '#282c34';
        textAreaLabel.style.color = '#282c34';
        textAreaIcon.style.color = '#282c34';
        // for (let input of inputs) {
        //     input.style.color = '#282c34';
        // }
        // for (let label of inputLabels) {
        //     label.style.color = '#282c34';
        // }
        // for (let icon of inputIcons) {
        //     icon.style.color = '#282c34';
        // }

        localStorage.setItem('theme', ETheme.DARK);
    }
}
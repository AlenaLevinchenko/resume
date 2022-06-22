import './menu.css';
import { CLASS_BURGER, CLASS_MENU, ICON_ARROW_RIGHT, ICON_MOON, ICON_SUN } from "../constants";
import { useEffect, useState } from "react";
import { Burger } from "../burger/burger";
import { CHOOSE_THEME, IGNORE_CLASSES, MENU } from "./constants";
import { SwitchButton } from "../switch/switch";
import { ETheme, setTheme } from "../utils/setTheme";

interface IMenuProps {
    burger: boolean;
}

export const Menu = ({
    burger
}: IMenuProps) => {
    const classContainer = CLASS_MENU + '__container';
    const classBackground = CLASS_MENU + '__background';
    const classInner = CLASS_MENU + '__inner';
    const classOpened = classContainer + '--opened';
    const classLink = classInner + '__link';
    const classText = classLink + '__text';
    const classIcon = classLink + '__icon';
    const classArrow = classLink + '__arrow';
    const classSwitch = CLASS_MENU + '__switch';
    const classLabel = classSwitch + '__label';

    const [opened, setOpened] = useState(false);

    const onSwitch = () => {
        const theme = localStorage.getItem('theme') || ETheme.DARK;

        if (theme === ETheme.DARK) {
            setTheme(ETheme.LIGHT);
        } else {
            setTheme(ETheme.DARK);
        }
    };

    const onClick = (
        { target }: any,
        ignoreClasses?: string[]
    ) => {
        if (ignoreClasses) {
            for (let i = 0; i < ignoreClasses.length; i++) {
                const el = document.querySelector('.' + ignoreClasses[i]) as HTMLElement;
                if (target === el) return;
            }
        }

        const background = document.querySelector('.' + classBackground) as HTMLElement;
        if (opened) {
            setOpened(false);
            setTimeout(() => background.style.zIndex = '-1', 400);
            return;
        }

        const burger = document.querySelector('.' + CLASS_BURGER) as HTMLElement;
        if (target === burger) {
            background.style.zIndex = '200';
            setOpened(true);
        }
    };

    const onSelect = (
        selector: string
    ) => {
        const page = document.querySelector(`[id="${selector}"]`) as HTMLElement;
        page.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        if (opened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [opened]);

    return (
        <div
            className={`
                ${classContainer}
                ${opened ? classOpened : ''}
            `}
            onClick={(e) => onClick(e, IGNORE_CLASSES)}
        >
            <Burger
                isShow={burger}
                isOpened={opened}
            />
            <div className={classBackground}>
                <div className={`${CLASS_MENU}`}>
                    <div className={classInner}>
                        {
                            MENU.map(({ icon, title }) => {
                                return (
                                    <a
                                        key={title}
                                        className={classLink}
                                        onClick={() => onSelect(title)}
                                    >
                                        <p className={classText}>
                                            <i
                                                className={`
                                                ${classIcon}
                                                ${icon}
                                            `}
                                            />
                                            {title}
                                        </p>
                                        <i
                                            className={`
                                                ${classArrow}
                                                ${ICON_ARROW_RIGHT}
                                            `}
                                        />
                                    </a>
                                )
                            })
                        }
                    </div>
                    <span className={classSwitch}>
                        <p className={classLabel}>
                            {CHOOSE_THEME}
                        </p>
                        <SwitchButton
                            onSwitch={onSwitch}
                            leftIcon={ICON_SUN}
                            rightIcon={ICON_MOON}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
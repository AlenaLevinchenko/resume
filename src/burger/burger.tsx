import './burger.css';
import { CLASS_BURGER } from "../constants";

interface IBurgerProps {
    isShow: boolean;
    isOpened: boolean;
}

export const Burger = ({
    isOpened,
    isShow
}: IBurgerProps) => {
    const classShow = CLASS_BURGER + '--show';
    const classOpened = CLASS_BURGER + '--opened';
    const classBar = CLASS_BURGER + '__bar';

    return (
        <div
            className={`
                    ${CLASS_BURGER}
                    ${isShow ? classShow : ''}
                    ${isOpened ? classOpened : ''}
                `}
        >
            <div
                className={`
                        ${classBar}
                        ${classBar + '--1'}
                    `}
            />
            <div
                className={`
                        ${classBar}
                        ${classBar + '--2'}
                `}
            />
            <div
                className={`
                        ${classBar}
                        ${classBar + '--3'}
                    `}
            />
        </div>
    );
}
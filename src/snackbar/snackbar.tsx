import './snackbar.css';
import { CLASS_SNACKBAR } from "../constants";
import { useEffect, useRef, useState } from "react";

interface ISnackbarProps {
    text: string;
}

export const Snackbar = ({
    text
}: ISnackbarProps) => {
    const classHide = CLASS_SNACKBAR + '--hide';

    const [hide, setHide] = useState(false);
    const ref = useRef(null);

    const snackbar = document.querySelector('.' + CLASS_SNACKBAR) as HTMLElement;

    useEffect(() => {
        if (
            snackbar &&
            ref.current !== snackbar
        ) {
            snackbar.classList.add(classHide);
            setTimeout(() => {
                snackbar.style.display = 'none';
            }, 700);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setHide(true);
        }, 3500);
    }, []);

    return (
        <div className={`
                ${CLASS_SNACKBAR}
                ${hide ? classHide : ''}
            `}
             ref={ref}
        >
            {text}
        </div>
    );
}
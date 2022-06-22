import './tooltip.css';
import { CLASS_SNACKBAR, CLASS_TOOLTIP } from "../constants";
import { useEffect, useRef, useState } from "react";

interface ITooltipProps {
    text: any;
    children: any;
    position?: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
    }
    ignoreClasses?: string[];
}

export const Tooltip = ({
    text,
    children,
    position = {},
    ignoreClasses
}: ITooltipProps) => {
    const { left, right, top, bottom } = position;

    const classContainer = CLASS_TOOLTIP + '__container';

    const [active, setActive] = useState(false);
    const ref = useRef(null) as any;
    let timeout: any;
    const tooltip = document.querySelector('.' + CLASS_SNACKBAR) as HTMLElement;

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, 400);
    };

    const onMouseMove = (e: any) => {
        if (ignoreClasses) {
            for (let i = 0; i < ignoreClasses.length; i++) {
                const target = e.target;
                if (target.classList.contains(ignoreClasses[i])) {
                    hideTip();
                    const onMouseLeave = () => {
                        setTimeout(() => {
                            const elements = document.querySelectorAll(':hover') as any;
                            for (let idx in elements) {
                                if (elements[idx] === ref.current) {
                                    showTip();
                                }
                            }
                        }, 250);
                    }
                    target.addEventListener('mouseleave', onMouseLeave);
                    return;
                }
            }
        }
    };

    if (!text) {
        return children;
    };

    return (
        <div
            className={classContainer}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
            onMouseMove={onMouseMove}
            ref={ref}
        >
            {children}
            {active &&
                <div className={CLASS_TOOLTIP}
                     style={{
                         left: left,
                         right: right,
                         top: top,
                         bottom: bottom
                     }}
                >
                    {text}
                </div>
            }
        </div>
    );
}
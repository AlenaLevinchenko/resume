import './switch.css';
import { CLASS_SWITCH } from "../constants";
import { useState } from "react";

interface ISwitchButtonProps {
    leftIcon?: string;
    rightIcon?: string;
    onSwitch: () => void;
    active?: boolean;
}

export const SwitchButton = ({
    leftIcon,
    rightIcon,
    active,
    onSwitch
}: ISwitchButtonProps) => {
    const classInner = CLASS_SWITCH + '__inner';
    const classIcon = CLASS_SWITCH + '__icon';
    const classLeft = classIcon + '--left';
    const classRight = classIcon + '--right';
    const classBg = classInner + '__bg';

    const [on, setOn] = useState(active);

    const onClick = () => {
        onSwitch();
        setOn(!on);
    };

    return (
        <div
            className={CLASS_SWITCH}
            onClick={onClick}
        >
            {leftIcon &&
                <i
                    className={`
                        ${classIcon}
                        ${classLeft}
                        ${leftIcon}
                    `}
                    style={{opacity: on ? 0.4 : 0}}
                />
            }
            <div
                className={classInner}
                style={{transform: `translate(${on ? '26px' : 0} ,0)`}}
            />
            {rightIcon &&
                <i
                    className={`
                        ${classIcon}
                        ${classRight}
                        ${rightIcon}
                    `}
                    style={{opacity: !on ? 0.4 : 0}}
                />
            }
            <div
                className={classBg}
                style={{
                    opacity: on ? 0.25 : 0,
                    width: on ? '85%' : '30%'
                }}
            />
        </div>
    );
}
import './button.css';
import { CLASS_BUTTON } from "../constants";

interface IButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    icon: string;
    label: string;
    disabled?: boolean;
    onClick: (e: React.SyntheticEvent) => void;
}

export const Button = ({
    className = '',
    icon,
    label,
    disabled,
    type,
    onClick
}: IButtonProps) => {
    const classIcon = CLASS_BUTTON + '__icon';

    return (
        <button
            className={`
                ${CLASS_BUTTON}
                ${className}
            `}
            disabled={disabled}
            onClick={(e) => onClick(e)}
            type={type}
        >
            <i
                className={`
                    ${classIcon}
                    ${icon}
                `}
            />
            {label}
        </button>
    );
}
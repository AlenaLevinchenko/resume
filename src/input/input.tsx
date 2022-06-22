import './input.css';
import { CLASS_INPUT } from "../constants";

interface IInputProps {
    className?: string;
    icon: string;
    label: string;
    error?: boolean;
    value?: string;
    name?: string;
    id?: string;
    onChange: (e: any) => void;
}

export const Input = ({
    className = '',
    icon,
    label,
    value,
    error,
    id,
    name,
    onChange
}: IInputProps) => {
    const classContainer = CLASS_INPUT + '__container';
    const classIcon = CLASS_INPUT + '__icon';
    const classLabel = CLASS_INPUT + '__label';
    const classError = CLASS_INPUT + '--error';

    return (
        <div className={`
                ${classContainer}
                ${className}
            `}
        >
            <input
                className={`
                    ${CLASS_INPUT}
                    ${error ? classError: ''}
                `}
                onChange={(e) => onChange(e.target.value)}
                required
                value={value}
                id={id}
                name={name}
            />
            {label &&
                <p className={classLabel}>
                    {label}
                </p>
            }
            <i
                className={`
                    ${classIcon}
                    ${icon}
                `}
            />
        </div>
    );
}
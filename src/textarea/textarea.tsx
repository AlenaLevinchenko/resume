import './textarea.css';
import { CLASS_TEXTAREA } from "../constants";

interface IInputProps {
    className?: string;
    icon: string;
    label: string;
    value?: string;
    error?: boolean;
    height?: number;
    name?: string;
    id?: string;
    onChange: (e: any) => void;
}

export const Textarea = ({
    className = '',
    icon,
    label,
    error,
    height,
    value,
    name,
    id,
    onChange
}: IInputProps) => {
    const classContainer = CLASS_TEXTAREA + '__container';
    const classIcon = CLASS_TEXTAREA + '__icon';
    const classLabel = CLASS_TEXTAREA + '__label';
    const classError = CLASS_TEXTAREA + '--error';

    return (
        <div className={`
                ${classContainer}
                ${className}
            `}
        >
            <textarea
                className={`
                    ${CLASS_TEXTAREA}
                    ${error ? classError: ''}
                `}
                onChange={(e) => onChange(e.target.value)}
                style={{height: height + 'px'}}
                required
                id={id}
                name={name}
                value={value}
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
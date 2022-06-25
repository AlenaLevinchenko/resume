import './contentBox.css';
import { CLASS_BOX } from "../constants";

interface IContextBoxProps {
    title: string;
    children: any;
    icon?: string;
    className?: string;
}

export const ContentBox = ({
    title,
    className,
    children,
    icon
}: IContextBoxProps) => {
    const classTitle = CLASS_BOX + '__title';
    const classIcon = CLASS_BOX + '__icon';

    return (
            <div className={`
                ${CLASS_BOX}
                ${className ? className : ''}
            `}
            >
                <p className={classTitle}>
                    {title}
                </p>
                {children}
                <i
                    className={`
                        ${classIcon}
                        ${icon}
                    `}
                />
            </div>
    );
}
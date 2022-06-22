import './page.css';
import { CLASS_PAGE } from "../constants";

interface IPageProps {
    children?: any;
    className?: string;
    id: string;
    onClick?: (e: any) => void;
}

export const Page = ({
    children,
    className = '',
    id,
    onClick
}: IPageProps) => {
    return (
        <div
            className={`
                ${CLASS_PAGE}
                ${className}
    
            `}
             id={id}
            onClick={(e) => {
                if (onClick) onClick(e)
            }}
        >
            {children}
        </div>
    )
}
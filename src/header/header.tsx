import './header.css';
import { CLASS_HEADER } from "../constants";
import { NAME } from "./constants";
import { useState } from "react";
import { deviceType, EDeviceType } from "../utils/getDeviceType";

interface IHeaderProps {
    allowClick: boolean;
}

export const Header = ({
    allowClick
}: IHeaderProps) => {
    const classHeader = CLASS_HEADER;
    const classTitle = classHeader + '__title';
    const classAvatar = classHeader + '__avatar';
    const classHover = classHeader + '__avatar--hover';
    const classBg = classAvatar + '__bg';
    const classBgInner = classAvatar + '--inner';
    const classBgOuter = classAvatar + '--outer';

    const [showAvatar, setShowAvatar] = useState(false);

    const onClick = () => {
        if (allowClick) {
            const avatar = document.querySelector('.' + classAvatar) as HTMLElement;
            const bgInner = document.querySelector('.' + classBgInner) as HTMLElement;
            const bgOuter = document.querySelector('.' + classBgOuter) as HTMLElement;
            const isMobile = deviceType() === EDeviceType.MOBILE;
            const transform = isMobile ? 'scale(150%) translate(0, 88px)' : 'scale(200%) translate(0, 64px)';
            avatar.style.transformOrigin = 'center';
            if (showAvatar) {
                avatar.style.transform = 'scale(100%) translate(0, 0)';
                bgInner.style.pointerEvents = 'none';
                bgOuter.style.pointerEvents = 'none';
                bgInner.style.opacity = '0';
                bgOuter.style.opacity = '0';
            } else {
                avatar.style.transform = transform;
                bgInner.style.pointerEvents = 'unset';
                bgOuter.style.pointerEvents = 'unset';
                bgInner.style.opacity = '1';
                bgOuter.style.opacity = '1';
            }
            setShowAvatar(!showAvatar);
        }
    };

    return (
        <>
            <div
                className={`
                    ${classBg}
                    ${classBgOuter}
                `}
                onClick={onClick}
            />
            <div className={classHeader}>
                <div
                    className={`
                        ${classAvatar}
                        ${allowClick ? classHover : ''}
                    `}
                    onClick={onClick}
                />
                <div
                    className={`
                        ${classBg}
                        ${classBgInner}
                    `}
                    onClick={onClick}
                />
                <p className={classTitle}>
                    {NAME}
                </p>
            </div>
        </>
    );
}
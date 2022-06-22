import './card.css';
import { CLASS_CARD, CLASS_SKILLS } from "../constants";
import { useRef } from "react";

interface ICardProps {
    cardIndex: number;
    setCard: (card: number) => void;
    icon: string;
}

export const Card = ({
    cardIndex,
    setCard,
    icon
}: ICardProps) => {
    const classContainer = CLASS_CARD + '__container';
    const classIcon = CLASS_CARD + '__icon';
    const classLight = CLASS_CARD + '--light';
    const classSelected = CLASS_CARD + '--selected';

    const cardRef = useRef(null);
    const lightRef = useRef(null);

    const onClick = () => {
        const light = lightRef && lightRef.current as any;
        const card = cardRef && cardRef.current as any;
        const skills = document.querySelector('.' + CLASS_SKILLS + '__cards') as HTMLElement;
        const cards = skills.children;

        if (card) {
            for (let index in cards) {
                const card = cards[index];
                if (
                    card.firstChild &&
                    Number(index) !== cardIndex - 1
                ) {
                    // @ts-ignore
                    card.firstChild.classList.remove(classSelected);
                }
            }
            card.classList.toggle(classSelected);
            setCard(cardIndex);
        }

        if (
            light &&
            !light.classList.length
        ) {
            light.classList.add(classLight);
            setTimeout(() => {
                light.classList.remove(classLight);
            }, 1300);
        }
    }

    return (
        <div className={classContainer}>
            <div
                className={CLASS_CARD}
                ref={cardRef}
                onClick={onClick}
            >
                <i
                    className={`
                        ${classIcon}
                        ${icon}
                    `}
                />
                <div
                    ref={lightRef}
                />
            </div>
        </div>
    )
}
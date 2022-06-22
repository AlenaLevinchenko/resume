import './skills.css';
import { Page } from "../page/page";
import { CLASS_CARD, CLASS_SKILLS, ICON_ARROW_LEFT, ICON_ARROW_RIGHT } from "../constants";
import { Card } from "../card/card";
import { useEffect, useState } from "react";
import { CARDS, CLICK_CARD_TEXT, SKILLS_TITLE } from "./contants";

interface IArrowProps {
    direction: EArrowDirection;
    isShow: boolean;
    onClick: () => void;
}

enum EArrowDirection {
    LEFT = 'left',
    RIGHT = 'right'
}

export const Skills = () => {
    const classCards = CLASS_SKILLS + '__cards';
    const classLeft = classCards + '--left';
    const classRight = classCards + '--right';
    const classInfo = classCards + '__info';

    const [card, setCard] = useState<any>(null);
    const [isShowRight, setShowRight] = useState(false);
    const [isShowLeft, setShowLeft] = useState(false);

    const onClick = (id: number) => {
        if (id === card) {
            setCard(null);
        } else {
            setCard(id);
        }
    };

    const onBgClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
            !target.classList.contains(CLASS_CARD) &&
            !target.classList.contains(CLASS_CARD + '__icon')
        ) {
            setCard(null);
            const classSelected = CLASS_CARD + '--selected';
            const card = document.querySelector('.' + classSelected) as HTMLElement;
            if (card) {
                card.classList.remove(classSelected);
            }
        }
    };

    const onClickScroll = (
        direction: EArrowDirection
    ) => {
        const container = document.querySelector('.' + classCards) as HTMLElement;
        const randomLargeNumber = 100000;

        if (container) {
            const left = direction === EArrowDirection.LEFT ? 0 : randomLargeNumber;
            container.scroll({
                behavior: 'smooth',
                left: left
            });
        }
    };

    useEffect(() => {
        const container = document.querySelector('.' + classCards) as HTMLElement;

        const onScroll = () => {
            const offset = 50;
            if (container.scrollWidth > container.offsetWidth + container.scrollLeft + offset) {
                setShowRight(true);
            } else {
                setShowRight(false);
            }

            if (container.scrollLeft > offset) {
                setShowLeft(true);
            } else {
                setShowLeft(false);
            }
        };

        onScroll();

        if (container) {
            container.addEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <Page
            className={CLASS_SKILLS}
            id={SKILLS_TITLE}
            onClick={onBgClick}
        >
            <div className={classLeft}>
                <Arrow
                    direction={EArrowDirection.LEFT}
                    isShow={isShowLeft}
                    onClick={() => onClickScroll(EArrowDirection.LEFT)}
                />
            </div>
            <div className={classCards}>
                {
                    CARDS.map(({ icon , id }) => {
                        return (
                            <Card
                                key={id}
                                icon={icon}
                                cardIndex={id}
                                setCard={() => onClick(id)}
                            />
                        )
                    })
                }
            </div>
            <div className={classInfo}>
                    {
                        card ?
                            CARDS[card - 1].text
                            : CLICK_CARD_TEXT
                    }
            </div>
            <div className={classRight}>
                <Arrow
                    direction={EArrowDirection.RIGHT}
                    isShow={isShowRight}
                    onClick={() => onClickScroll(EArrowDirection.RIGHT)}
                />
            </div>
        </Page>
    );
}

const Arrow = ({
    direction,
    isShow,
    onClick
}: IArrowProps) => {
    if (!isShow) return null;

    const classIcon = CLASS_SKILLS + '__icon';

    const icon = direction === EArrowDirection.LEFT ? ICON_ARROW_LEFT : ICON_ARROW_RIGHT;
    const arrows = [];
    for (let i = 0; i < 3; i++) {
        if (direction === EArrowDirection.LEFT) {
            arrows.push(2 - i);
        } else {
            arrows.push(i);
        }
    }

    return (
        <div
            className={classIcon}
            onClick={onClick}
        >
            {
                arrows.map((index) => {
                    return (
                        <i
                            key={index}
                            className={`
                                ${classIcon + `--${index}`}
                                ${icon}
                            `}
                        />
                    );
                })
            }
        </div>
    );
}
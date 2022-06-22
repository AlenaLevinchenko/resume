import './about.css';
import { Page } from "../page/page";
import { CLASS_ABOUT, CLASS_NUMBER, CLASS_PAGES, ICON_PERSON } from "../constants";
import {
    ABOUT_ME,
    ABOUT_ME_TITLE,
    AGE,
    AGE_FIELD,
    LOCATION,
    LOCATION_FIELD,
    POSITION,
    POSITION_FIELD
} from "./contants";
import { ContentBox } from "../contentBox/contentBox";
import { useEffect, useRef, useState } from "react";

interface IFieldProps {
    field: string;
    value: string;
    isNumber?: boolean;
}

export const About = () => {
    const classContent = CLASS_ABOUT + '__content';

    const [show, setShow] = useState(false);
    const ref = useRef(false);

    useEffect(() => {
        const page = document.querySelector('.' + CLASS_ABOUT) as HTMLElement;
        if (page) {
            setTimeout(() => {
                page.style.opacity = '1';
            }, 2600);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (!ref.current) {
                setShow(true);
            }
        }, 10000);

        const pages = document.querySelector('.' + CLASS_PAGES) as HTMLElement;

        const onHide = () => {
            ref.current = true;
            setShow(false);
        };

        pages.addEventListener('scroll', onHide);
    }, []);

    return (
        <Page
            className={CLASS_ABOUT}
            id={ABOUT_ME_TITLE}
        >
            <ContentBox
                title={ABOUT_ME_TITLE}
                icon={ICON_PERSON}
            >
                <Field
                    field={POSITION_FIELD}
                    value={POSITION}
                />
                <Field
                    field={AGE_FIELD}
                    value={AGE}
                    isNumber
                />
                <Field
                    field={LOCATION_FIELD}
                    value={LOCATION}
                />
                <p className={classContent}>
                    {ABOUT_ME}
                </p>
            </ContentBox>
            {show &&
                <ScrollDown />
            }
        </Page>
    );
}

const Field = ({
    field,
    value,
    isNumber
}: IFieldProps) => {
    const classField = CLASS_ABOUT + '__field';

    return (
        <span className={classField}>
            <p>
                {field}
            </p>
            <p className={isNumber ? CLASS_NUMBER : ''}>
                {value}
            </p>
        </span>
    )
}

const ScrollDown = () => {
    const classScroll = CLASS_ABOUT + '__scroll';
    const classContainer = classScroll + '__container'
    const classArrow = classScroll + '__arrow';
    const classInner = classScroll + '--inner';
    const classOuter = classScroll + '--outer';

    return (
        <div className={classContainer}>
            <div className={classOuter}>
                <div className={classInner}>
                    <div className={classScroll}>
                        <span className={classArrow} />
                    </div>
                </div>
            </div>
            <div className={classOuter}>
                <div className={classInner}>
                    <div className={classScroll}>
                        <span className={classArrow} />
                    </div>
                </div>
            </div>
            <div className={classOuter}>
                <div className={classInner}>
                    <div className={classScroll}>
                        <span className={classArrow} />
                    </div>
                </div>
            </div>
        </div>
    );
}
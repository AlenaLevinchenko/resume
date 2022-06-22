import './experience.css';
import { Page } from "../page/page";
import {
    EDUCATION_DATA,
    EDUCATION_EXPERIENCE_TITLE,
    EDUCATION_TITLE,
    EXPERIENCE_DATA,
    EXPERIENCE_TITLE
} from "./contants";
import { ContentBox } from "../contentBox/contentBox";
import { CLASS_EXPERIENCE, ICON_EDUCATION, ICON_WORK } from "../constants";

interface ILineProps {
    title: string;
    text: string;
    from: string;
}

export const Experience = () => {
    return (
        <Page
            className={CLASS_EXPERIENCE}
            id={EDUCATION_EXPERIENCE_TITLE}
        >
            <ContentBox
                title={EDUCATION_TITLE}
                icon={ICON_EDUCATION}
            >
                {
                    EDUCATION_DATA.map(({ title, text, from }, index) => {
                        return (
                            <Line
                                key={index}
                                title={title}
                                text={text}
                                from={from}
                            />
                        );
                    })
                }
            </ContentBox>
            <ContentBox
                title={EXPERIENCE_TITLE}
                icon={ICON_WORK}
            >
                {
                    EXPERIENCE_DATA.map(({ title, text, from }, index) => {
                        return (
                            <Line
                                key={index}
                                title={title}
                                text={text}
                                from={from}
                            />
                        );
                    })
                }
            </ContentBox>
        </Page>
    );
}

const Line = ({
    title,
    text,
    from
}: ILineProps) => {
    const className = CLASS_EXPERIENCE + '__line';
    const classFrom = className + '__from';
    const classDot = className + '__dot';
    const classLine = className + '__time-line';
    const classContent = className + '__content';
    const classTitle = classContent + '__title';
    const classText = classContent + '__text';

    return (
        <span className={className}>
            <p className={classFrom}>
                {from}
            </p>
            <div className={classDot} />
            <div className={classLine} />
            <span className={classContent}>
                <p className={classTitle}>
                    {title}
                </p>
                <p className={classText}>
                    {text}
                </p>
            </span>
        </span>
    );
}
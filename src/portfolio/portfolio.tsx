import './portfolio.css';
import { Page } from "../page/page";
import { CLASS_PORTFOLIO } from "../constants";
import { PORTFOLIO_TITLE } from "./contants";

export const Portfolio = () => {
    return (
        <Page
            className={CLASS_PORTFOLIO}
            id={PORTFOLIO_TITLE}
        >

        </Page>
    );
}

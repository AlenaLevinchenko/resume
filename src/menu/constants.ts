import { ABOUT_ME_TITLE } from "../about/contants";
import { EDUCATION_EXPERIENCE_TITLE } from "../experience/contants";
import { SKILLS_TITLE } from "../skills/contants";
import { CONTACTS_TITLE } from "../contacts/contants";
import {
    CLASS_MENU,
    CLASS_SWITCH,
    ICON_BUILDING,
    ICON_CONTACTS,
    ICON_LIST,
    ICON_PERSON,
    ICON_WORK
} from "../constants";
import { PORTFOLIO_TITLE } from "../portfolio/contants";

export const MENU = [
    {
        title: ABOUT_ME_TITLE,
        icon: ICON_PERSON
    },
    {
        title: EDUCATION_EXPERIENCE_TITLE,
        icon: ICON_WORK
    },
    {
        title: SKILLS_TITLE,
        icon: ICON_LIST
    },
    {
        title: PORTFOLIO_TITLE,
        icon: ICON_BUILDING
    },
    {
        title: CONTACTS_TITLE,
        icon: ICON_CONTACTS
    }
];

export const CHOOSE_THEME = 'Переключить тему:';

export const IGNORE_CLASSES = [
    CLASS_MENU,
    CLASS_MENU + '__inner',
    CLASS_SWITCH,
    CLASS_SWITCH + '__inner',
    CLASS_MENU + '__switch',
    CLASS_MENU + '__switch__label'
];

import './contacts.css';
import { Page } from "../page/page";
import {
    CLASS_CONTACTS,
    CLASS_NUMBER, ICON_CHECK,
    ICON_COPY,
    ICON_EMAIL,
    ICON_LETTER,
    ICON_MESSAGE,
    ICON_PERSON,
    ICON_PHONE,
    ICON_SEND
} from "../constants";
import {
    CONTACT_ME,
    CONTACTS_TITLE,
    COPIED_TO_CLIPBOARD,
    EMAIL,
    EMAIL_ID,
    EMAIL_LABEL,
    EMAIL_LINK,
    MAIL_SENT,
    MESSAGE_ID,
    NAME_ID,
    PHONE,
    PHONE_LABEL,
    PHONE_LINK,
    SEND,
    TOOLTIP_CALL,
    TOOLTIP_COPY,
    TOOLTIP_EMAIL
} from "./contants";
import { ContentBox } from "../contentBox/contentBox";
import { Input } from "../input/input";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";
import { useEffect, useState } from "react";
import { Snackbar } from "../snackbar/snackbar";
import { Tooltip } from "../tooltip/tooltip";

interface IItemProps {
    label: string;
    value: string;
    link?: string;
    icon?: string;
    tooltip?: string;
    onClickCopy?: () => void;
}

export const Contacts = () => {
    const classTextarea = CLASS_CONTACTS + '__textarea';
    const classContacts = CLASS_CONTACTS + '__contact-box';

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(false);

    const [showCopied, setShowCopied] = useState(false);
    const [showSent, setShowSent] = useState(false);

    const onCopy = () => {
        setShowCopied(true);
        setTimeout(() => {
            setShowCopied(false);
        }, 4000);
    };

    const onSent = () => {
        setShowSent(true);
        setTimeout(() => {
            setShowSent(false);
        }, 4000);
    };

    const validate = () => {
        let valid = true;

        if (!message.length) {
            setNameError(true);
            valid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError(true);
            valid = false;
        }

        if (!message.length) {
            setMessageError(true);
            valid = false;
        }

        return valid;
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (validate()) {
            const data = new FormData(e.currentTarget);

            console.log({
                name: data.get(NAME_ID),
                mail: data.get(EMAIL_ID),
                message: data.get(MESSAGE_ID),
            });

            setName('');
            setEmail('');
            setMessage('');

            onSent();
        }

        // service.onLogin(
        //     data.get('login'),
        //     data.get('password'),
        //     data.get('login'),
        // )
        //     .then((result) => {
        //         dispatch(onLogin(result));
        //         navigate('/contacts');
        //     })
        //     .catch(() => {
        //         setLoginError(true);
        //         setPasswordError(true);
        //         setPassword('');
        //     });
    };

    useEffect(() => {
        if (
            name === '' ||
            email === '' ||
            message === '' ||
            nameError ||
            emailError ||
            messageError
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [name, nameError, email, emailError, message, messageError]);

    useEffect(() => {
        if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
            email === ''
        ) {
            setEmailError(false);
        }
    }, [email])

    return (
        <Page
            className={CLASS_CONTACTS}
            id={CONTACTS_TITLE}
        >
            <ContentBox
                title={CONTACTS_TITLE}
                className={classContacts}
            >
                <Item
                    label={PHONE_LABEL}
                    value={PHONE}
                    link={PHONE_LINK}
                    icon={ICON_PHONE}
                    onClickCopy={onCopy}
                    tooltip={TOOLTIP_CALL}
                />
                <Item
                    label={EMAIL_LABEL}
                    value={EMAIL}
                    link={EMAIL_LINK}
                    icon={ICON_LETTER}
                    onClickCopy={onCopy}
                    tooltip={TOOLTIP_EMAIL}
                />
            </ContentBox>
            <ContentBox
                title={CONTACT_ME}
            >
                <form onSubmit={(e) => onSubmit(e)}>
                    <Input
                        onChange={(value) => setName(value)}
                        value={name}
                        label={'Имя'}
                        icon={ICON_PERSON}
                        id={NAME_ID}
                        name={NAME_ID}
                        error={nameError}
                    />
                    <Input
                        onChange={(value) => setEmail(value)}
                        label={'E-mail'}
                        value={email}
                        icon={ICON_EMAIL}
                        id={EMAIL_ID}
                        name={EMAIL_ID}
                        error={emailError}
                    />
                    <Textarea
                        className={classTextarea}
                        value={message}
                        onChange={(value) => setMessage(value)}
                        label={'Сообщение'}
                        icon={ICON_MESSAGE}
                        height={64}
                        id={MESSAGE_ID}
                        name={MESSAGE_ID}
                        error={messageError}
                    />
                    <Button
                        type={'submit'}
                        label={SEND}
                        icon={ICON_SEND}
                        onClick={() => {}}
                        disabled={disabled}
                    />
                </form>
            </ContentBox>
            {showCopied &&
                <Snackbar
                    text={COPIED_TO_CLIPBOARD}
                />
            }
            {showSent &&
                <Snackbar
                    text={MAIL_SENT}
                />
            }
        </Page>
    );
}

const Item = ({
    label,
    value,
    link,
    icon,
    tooltip,
    onClickCopy,
}: IItemProps) => {
    const className = CLASS_CONTACTS + '__item';
    const classLabel = className + '__label';
    const classText = className + '__text';
    const classIcon = className + '__icon';
    const classCopy = className + '__copy';

    const [showChecked, setShowChecked] = useState(false);

    const onCopy = (e: React.SyntheticEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(value);
        if (onClickCopy) {
            setShowChecked(true);
            onClickCopy();
            setTimeout(() => setShowChecked(false), 4000);
        }
    };

    return (
        <Tooltip
            text={tooltip}
            ignoreClasses={[classCopy]}
        >
            <a
                className={className}
                href={link}
            >
                <p className={classLabel}>
                    {icon &&
                        <i
                            className={`
                                    ${classIcon}
                                    ${icon}
                                `}
                        />
                    }
                    {label}
                </p>
                <p className={`
                            ${classText}
                            ${CLASS_NUMBER}
                        `}
                >
                    {value}
                </p>
                <Tooltip
                    text={TOOLTIP_COPY}
                    position={{
                        left: 'unset',
                        right: '-92px',
                        top: '40px'
                    }}
                >
                    {showChecked ?
                        <i
                            className={`
                                ${classCopy}
                                ${ICON_CHECK}
                            `}
                            onClick={e => e.preventDefault()}
                        />
                        :
                        <i
                            className={`
                                ${classCopy}
                                ${ICON_COPY}
                            `}
                            onClick={onCopy}
                        />
                    }
                </Tooltip>
            </a>
        </Tooltip>
    );
}
import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

const Test = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("de")}>De</button>
            <hr />
            <Trans i18nKey="description.part1">
                My nameeeee is Abolfazl, I'm 19 years of age.
            </Trans>
            <div> {t("description.part2")} </div>
        </div>
    );
}

export default Test;
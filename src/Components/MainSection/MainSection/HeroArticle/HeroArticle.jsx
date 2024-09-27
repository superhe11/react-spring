import React, { useContext } from 'react';
import { ThemeContext } from '../../../Selector/ThemeContext';
import classNames from 'classnames';
import style from './HeroArticle.module.css';

export const HeroArticle = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <article className={style.heroArticle}>
            <h1 className={style.title}>Projects</h1>
            <div className={style.description}>
                <p>
                    From configuration to security, web apps to big
                    data—whatever the infrastructure needs of your application
                    may be, there is a Spring Project to help you build it.
                    Start small and use just what you need—Spring is modular by
                    design.
                </p>
            </div>
            <button
                className={classNames(style.button, {
                    [style.darkTheme]: theme === 'dark'
                })}
            >
                RELEASE CALENDAR
            </button>
        </article>
    );
};

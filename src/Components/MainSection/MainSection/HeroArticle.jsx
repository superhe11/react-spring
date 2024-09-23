import React, { useContext } from 'react';
import { ThemeContext } from '../../Selector/ThemeContext';

export const HeroArticle = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <article className="main__hero-article">
            <h1 className="main__title">Projects</h1>
            <div className="main__description">
                <p>
                    From configuration to security, web apps to big
                    data—whatever the infrastructure needs of your application
                    may be, there is a Spring Project to help you build it.
                    Start small and use just what you need—Spring is modular by
                    design.
                </p>
            </div>
            <button
                className={`main__button ${theme === 'dark' ? 'dark-theme' : ''}`}
            >
                RELEASE CALENDAR
            </button>
        </article>
    );
};

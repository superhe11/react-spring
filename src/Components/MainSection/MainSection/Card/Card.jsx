import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.module.css';

export const Card = ({ cardObj }) => {
    return (
        <div className={style.MainCardOutline}>
            <div className={cardObj.card.cardClass}>
                <img
                    className={cardObj.card.image.imageClass}
                    src={cardObj.card.image.src}
                    alt={cardObj.card.image.alt}
                />
                <div>
                    <h3>{cardObj.card.text.heading}</h3>
                    <p>{cardObj.card.text.description}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardObj: PropTypes.shape({
        card: PropTypes.shape({
            cardClass: PropTypes.string.isRequired,
            image: PropTypes.shape({
                imageClass: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired
            }).isRequired,
            text: PropTypes.shape({
                heading: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};

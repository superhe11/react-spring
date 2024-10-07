import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.module.css';

export const Card = ({ cardObj }) => {
    const { card } = cardObj || {};
    const { image, text } = card || {};

    return (
        <div className={style.MainCardOutline}>
            <div className={style.main__card}>
                {image ? (
                    <img
                        className={style.main__card_image}
                        src={image.src}
                        alt={image.alt}
                    />
                ) : (
                    <div>No Image</div>
                )}
                <div>
                    <h3>{text?.heading || 'No Heading'}</h3>
                    <p>{text?.description || 'No Description'}</p>
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

import React from 'react';

export const Card = ({ cardObj }) => {
    return (
        <div className="main__card-outline">
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

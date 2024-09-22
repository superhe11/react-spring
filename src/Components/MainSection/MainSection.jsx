import React from 'react';
import CardSection from './MainSection/CardSection';
import MainPlate from './MainSection/MainPlate';
import HeroArticle from './MainSection/HeroArticle';

const MainSection = () => {
    return (
        <MainPlate>
            <HeroArticle />
            <CardSection />
        </MainPlate>
    );
};

export default MainSection;

import React from 'react';
import { CardSection } from './MainSection/CardSection/CardSection';
import { MainPlate } from './MainSection/MainPlate/MainPlate';
import { HeroArticle } from './MainSection/HeroArticle/HeroArticle';

export const MainSection = () => {
    return (
        <MainPlate>
            <HeroArticle />
            <CardSection />
        </MainPlate>
    );
};

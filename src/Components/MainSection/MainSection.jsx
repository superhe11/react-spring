import React from 'react';
import { CardSection } from './MainSection/CardSection';
import { MainPlate } from './MainSection/MainPlate';
import { HeroArticle } from './MainSection/HeroArticle';

export const MainSection = () => {
    return (
        <MainPlate>
            <HeroArticle />
            <CardSection />
        </MainPlate>
    );
};

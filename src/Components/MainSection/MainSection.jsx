import React from 'react';
import { Provider } from 'react-redux';
import { CardSection } from './MainSection/CardSection';
import { MainPlate } from './MainSection/MainPlate';
import { HeroArticle } from './MainSection/HeroArticle';
import { store } from '../Redux/store';

export const MainSection = () => {
    return (
        <MainPlate>
            <HeroArticle />
            <Provider store={store}>
                <CardSection />
            </Provider>
        </MainPlate>
    );
};

import React from 'react';
import { Header } from './Components/Header/Header';
import { MainSection } from './Components/MainSection/MainSection';
import { ThemeProvider } from './Components/Selector/ThemeContext';

export const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <MainSection />
        </ThemeProvider>
    );
};

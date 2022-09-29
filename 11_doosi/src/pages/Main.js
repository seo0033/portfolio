import React from 'react';
import MainVisual from '../components/MainVisual';
import '../css/Main.scss';
import Categories from '../components/Categories';
import Subscribe from '../components/Subscribe';

const Main = () => {
    return (
        <main>
            <MainVisual />
            <Categories />
            <Subscribe />
        </main>
    )
}

export default Main
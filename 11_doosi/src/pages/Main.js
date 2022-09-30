import React from 'react';
import MainVisual from '../components/MainVisual';
import '../css/Main.scss';
import Categories from '../components/Category';
import Subscribe from '../components/Subscribe';
import Class from '../components/Class';

const Main = ({Category}) => {
    return (
        <main>
            <MainVisual />
            <Categories />
            <Subscribe />
            <Class />
        </main>
    )
}

export default Main
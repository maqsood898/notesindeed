import React from 'react'
import Hero from '../components/Hero';
import Materials from '../components/Materials';
import Subjects from '../components/Subjects';
import Founders from '../components/Founders';
import Contact from '../components/Contact';
import Reviews from '../components/Reviews';
import Pdfs from '../components/Pdfs';
import Stats from '../components/Stats';

const Body = () => {

    return (
        <>
            <Hero />

            <Subjects />

            <Materials />

            <Pdfs />

            <div className="free-ebook">
                <img src="img/get-free-ebook.png" alt="" />
            </div>

            <Founders />

            <Reviews />

            <Stats />

            <Contact />
        </>
    )
}
export default Body;
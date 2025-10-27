import React from 'react'
import Hero from '../Components/Hero'
import Feature from '../Components/Feature'
import Category from '../Components/Category'
import Collection from '../Components/Collection'
import LetestArticles from '../Components/LetestArticles'
import InstagramGallery from '../Components/InstagramGallery'

const Home = () => {
    return (
        <>
            <Hero />
            <Feature />
            <Category />
            <Collection />
            <LetestArticles />
            <InstagramGallery />

        </>
    )
}

export default Home
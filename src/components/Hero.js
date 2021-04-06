import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import Container from './reuseableComponents/Container'
import Loader from './reuseableComponents/Loader'
import Search from './Search'
import Recipes from './Recipes'


const Hero = () => {
    const { loading } = useContext(RecipesContext)
    return (

        <section className="hero">
            <Container>
                <Search />
            </Container>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Container>
                        <Recipes />
                    </Container>
                </>
            )}

        </section>
    )
}

export default Hero
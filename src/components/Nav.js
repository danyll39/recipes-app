import React from 'react'
import Container from './reuseableComponents/Container'
import Logo from './Logo'

const Nav = () => {
    return (
        <nav>
            <Container>
                <Logo />
            </Container>
        </nav>
    )
}

export default Nav

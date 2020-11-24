import PropTypes from "prop-types"
import React from "react"
import Container from "../ui/Container"
import Menu from "../nav/Menu"
//import { Link } from "gatsby"
//import useSiteMeta from "../../hooks/use-site-meta"

const Header = () => {
    //const data = useSiteMeta()

    return (
        <header className={"sticky top-0 z-50"}>
            <Container>
                <div className={"flex items-center py-8"}>
                    <svg className="ml-auto w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    <Menu />
                </div>
            </Container>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

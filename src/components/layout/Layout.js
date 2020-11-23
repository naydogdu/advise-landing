import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import Container from "../ui/Container"

const Layout = ({ children }) => (
    <div className="font-light antialiased">
        <Header />
        <main>
            <Container>
                {children}
            </Container>
        </main>
        <Footer />
    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

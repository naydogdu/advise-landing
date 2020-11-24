import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div className="bg-primary-50 font-light antialiased overflow-hidden">
        <Header />
        <main className={"text-xl leading-relaxed"}>
            {children}
        </main>
        <Footer />
    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import PropTypes from "prop-types"

const Container = ({ css, children }) => (
    <div className={["max-w-screen-xl mx-auto px-8 lg:px-16", css].join(' ')}>
        {children}
    </div>
)

Container.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string
}

export default Container

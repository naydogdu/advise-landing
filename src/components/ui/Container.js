import React from "react"
import PropTypes from "prop-types"

const Container = ({ children }) => (
    <div className={"max-w-screen-xl mx-auto px-8"}>
        {children}
    </div>
)

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container

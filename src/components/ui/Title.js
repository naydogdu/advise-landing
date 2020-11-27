import React from "react"
import PropTypes from "prop-types"

const Sub = ({ text }) => (text ?
    <span className={"block leading-none"}>{text}</span>
    : null
)

const Title = ({ ...props }) => {
    const Level = `h${ props.level }`

    return (
        <header>
            <Level className={"text-3xl md:text-5xl -ml-px"}>
                <strong className={"block leading-half -ml-px mb-3 tracking-tighter font-title text-primary-500 font-bold text-7xl md:text-8xl md:leading-half"}>
                    { props.children }
                </strong>
                <Sub text={props.subtitle} />
            </Level>
        </header>
    )
}

Title.defaultProps = {
    level: 2,
    subtitle: ``
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    level: PropTypes.number,
    subtitle: PropTypes.string
}

export default Title

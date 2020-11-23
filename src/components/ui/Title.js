import React from "react"
import PropTypes from "prop-types"

const Sub = ({ text }) => (text ?
    <span className={"block leading-none"}>{text}</span>
    : null
)

const Title = ({ ...props }) => {
    const Level = `h${ props.level }`

    return (
        <Level className={"text-5xl -ml-px"}>
            <strong className={"block leading-none -ml-px -mb-2 tracking-tighter font-title text-8xl text-primary-500 font-bold"}>
                { props.children }
            </strong>
            <Sub text={props.subtitle} />
        </Level>
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

import useSiteMeta from "../../hooks/use-site-meta"
import Title from "../ui/Title"
import Button from "../ui/Button"
import React from "react"
import Parser from 'html-react-parser'
import PropTypes from "prop-types"

const Hero = ({data, css, link}) => {
    const defaultData = useSiteMeta()
    const content = Object.entries(data).length ? data : defaultData
    const linkContent = Object.entries(link).length ? <Button to={link.url}>{link.text}</Button> : null

    return (
        <>
            <article className={css}>
                <Title subtitle={content.subtitle}>
                    {content.title.toLowerCase()}
                </Title>
                <p>{Parser(content.description)}</p>
                {linkContent}
            </article>
        </>
    )
}

Hero.defaultProps = {
    data: {},
    css: ``,
    link: {}
}

Hero.propTypes = {
    data: PropTypes.object,
    css: PropTypes.string,
    link: PropTypes.object
}

export default Hero

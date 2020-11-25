import useSiteMeta from "../../hooks/use-site-meta"
import Title from "../ui/Title"
import Button from "../ui/Button"
import React from "react"
import PropTypes from "prop-types"

const Hero = ({css}) => {
    const data = useSiteMeta()

    return (
        <>
            <article className={css}>
                <Title subtitle={data.subtitle}>
                    {data.title.toLowerCase()}
                </Title>
                <p className={"lg:pr-24 xl:pr-36"}>{data.description}</p>
                <Button to="/page-2/">On continue ?</Button>
            </article>
        </>
    )
}

Hero.propTypes = {
    css: PropTypes.string
}

export default Hero

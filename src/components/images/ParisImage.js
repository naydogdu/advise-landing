import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ParisImage = (props) => {
    const data = useStaticQuery(graphql`
        query {
          placeholderImage: file(relativePath: { eq: "paris.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `)

    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
    }

    return (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
    )
}

export default ParisImage

import { useStaticQuery, graphql } from "gatsby"

const useSiteMeta = () => {
    const { site } = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    title
                    subtitle
                    description
                    siteTitle
                    createdAt
                    author
                    home {
                        middle {
                            title
                            subtitle
                            description
                        }
                        getInTouch {
                            title
                            subtitle
                            description
                        }
                    }
                }
            }
        }
    `)

    return site.siteMetadata
}

export default useSiteMeta

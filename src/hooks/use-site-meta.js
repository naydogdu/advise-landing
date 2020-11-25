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
                            content
                        }
                    }
                }
            }
        }
    `)

    return site.siteMetadata
}

export default useSiteMeta

import { useStaticQuery, graphql } from "gatsby"

export const useSiteMeta = () => {
    const { site } = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    title
                    subtitle
                    description
                    author
                }
            }
        }
    `)

    return site.siteMetadata
}

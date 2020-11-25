module.exports = {
    siteMetadata: {
        title: `Advise`,
        subtitle: `Communication`,
        description: `Nous sommes l’une des agences les plus expérimentées de Paris. Nous aimons travailler sur des projets exigeants et complexes.`,
        siteTitle: `Advise Communication`,
        createdAt: `2000`,
        author: `@aydogduN`,
        home: {
            middle: {
                title: `Nous assurons`,
                subtitle: `depuis notre création, en 2000.`,
                content: `Nous avons réalisé plus de 400 sites et applications internet, des plus classiques aux plus sophistiquées (logiciels métiers, intranets, comparateurs, places de marché, e-commerce, sites multilingues...).`,
            }
        }
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: 'Poppins',
                        weights: ['300', '600', '800']
                    },
                    {
                        family: 'Josefin Sans',
                        weights: ['700']
                    }
                ]
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}

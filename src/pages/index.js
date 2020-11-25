import React from "react"
import Layout from "../components/layout/Layout"
import Container from "../components/ui/Container"
import About from "../components/content/About"
import Intro from "../components/content/Intro"
import useSiteMeta from "../hooks/use-site-meta"
import SEO from "../components/seo"

const IndexPage = () => {
    const data = useSiteMeta()

    return (
        <Layout>
            <SEO title={data.title} />
            <Container>
                <Intro />
            </Container>
            <About />
        </Layout>
    )
}

export default IndexPage

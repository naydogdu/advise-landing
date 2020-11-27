import React from "react"
import Layout from "../components/layout/Layout"
import About from "../components/content/About"
import Intro from "../components/content/Intro"
import useSiteMeta from "../hooks/use-site-meta"
import SEO from "../components/seo"
import GetInTouch from "../components/content/GetInTouch"

const IndexPage = () => {
    const data = useSiteMeta()

    return (
        <Layout>
            <SEO title={data.title} />
            <section className={"space-y-48"}>
                <Intro />
                <About />
                <GetInTouch css={"relative z-2"} />
            </section>
        </Layout>
    )
}

export default IndexPage

import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import useSiteMeta from "../hooks/use-site-meta"
import Title from "../components/ui/Title"
import Button from "../components/ui/Button"
import Blobs from "../components/ui/blobs/Blobs"
import HomeImage from "../components/images/HomeImage"
import { Crosses, Diagonals } from "../components/ui/Deco"
import Container from "../components/ui/Container"
import About from "../components/content/About"

const Hero = ({css}) => {
    const data = useSiteMeta()

    return (
        <>
            <SEO title={data.title} />
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

const IndexPage = () => (
    <Layout>
        <Container>
            <div className={"flex flex-col pt-6 mb-48 lg:flex-row lg:items-center"}>
                <Hero css="flex flex-col items-start lg:flex-1 py-24 space-y-8" />
                <div className={"relative lg:flex-1"}>
                    <Blobs>
                        <HomeImage alt="Test overriding alt" />
                    </Blobs>
                    <Diagonals color="text-primary-500" css={"z-6 w-full h-72 left-28 top-0"} />
                    <Crosses css={"-bottom-8 w-full h-64"} />
                </div>
            </div>
        </Container>
        <About />
    </Layout>
)

export default IndexPage

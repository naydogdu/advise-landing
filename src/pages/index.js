import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import { useSiteMeta } from "../hooks/use-site-meta"
import Title from "../components/ui/Title"
import Button from "../components/ui/Button"
import BlobOne from "../components/ui/blobs/BlobOne"
import BlobTwo from "../components/ui/blobs/BlobTwo"
import BlobThree from "../components/ui/blobs/BlobThree"
import HomeImage from "../components/images/HomeImage"
import BlobMask from "../components/ui/blobs/BlobMask"

const IndexPage = () => {
    const data = useSiteMeta()

    return (
        <Layout>
            <SEO title={data.title} />
            <div className={"flex flex-col lg:flex-row lg:items-center"}>
                <article className={"flex flex-col items-start lg:flex-1 py-24 space-y-8"}>
                    <header>
                        <Title subtitle={data.subtitle}>
                            {data.title.toLowerCase()}
                        </Title>
                    </header>
                    <p>{data.description}</p>
                    <Button to="/page-2/">On continue ?</Button>
                </article>
                <div className={"relative lg:flex-1"}>
                    <BlobOne />
                    <BlobTwo />
                    <BlobThree />
                    <div>
                        <HomeImage style={{clipPath: "url(#blobMask)"}} />
                    </div>
                    <BlobMask />
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

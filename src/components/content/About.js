import useSiteMeta from "../../hooks/use-site-meta"
import BlobFull from "../ui/blobs/BlobFull"
import Container from "../ui/Container"
import Title from "../ui/Title"
import React from "react"
import { Circle, DashedCircle } from "../ui/Deco";

const About = () => {
    const data = useSiteMeta()

    return (
        <div className={"relative"}>
            <Container css="relative z-1">
                <BlobFull css="text-white z-2" />
                <Circle css="top-1/2 -z-1 left-0 w-4/5 h-auto transform -translate-x-1/2 -translate-y-1/2" color="text-secondary-500" />
                <Circle css="top-1/2 z-2 left-0 w-2/3 h-auto transform -translate-x-1/2 -translate-y-1/2" />
                <DashedCircle css="top-1/2 z-3 left-0 w-1/2 h-auto transform -translate-x-1/2 -translate-y-1/2" color="text-primary-300" />
                <article className={"relative z-10 flex flex-col items-center text-center py-40 space-y-8"}>
                    <Title subtitle={data.home.middle.subtitle}>
                        {data.home.middle.title.toLowerCase()}
                    </Title>
                    <p className={"lg:px-24 xl:px-36"}>{data.home.middle.content}</p>
                </article>
            </Container>
        </div>
    )
}

export default About

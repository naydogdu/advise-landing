import Blobs from "../ui/blobs/Blobs"
import ParisImage from "../images/ParisImage"
import {Crosses, Diagonals} from "../ui/Deco"
import React from "react"
import Hero from "./Hero"
import Container from "../ui/Container"
import useSiteMeta from "../../hooks/use-site-meta"

const GetInTouch = ({css}) => {
    const data = useSiteMeta()

    return (
        <Container css={css}>
            <div className={"flex flex-col-reverse pt-6 mb-48 lg:flex-row-reverse lg:items-center"}>
                <Hero data={data.home.getInTouch}
                      css="flex flex-col items-start py-24 space-y-8 lg:flex-1 lg:pl-12 xl:pl-20"
                />
                <div className={"relative transform scale-x-reverse -translate-x-4 lg:flex-1"}>
                    <Blobs>
                        <div className={"transform h-full w-full scale-x-reverse"}>
                            <ParisImage />
                        </div>
                    </Blobs>
                    <Diagonals color="text-primary-500" css={"z-6 w-full h-72 left-28 top-0"} />
                    <Crosses css={"-bottom-8 w-full h-64"} />
                </div>
            </div>
        </Container>
    )
}

export default GetInTouch

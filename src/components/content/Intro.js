import Blobs from "../ui/blobs/Blobs"
import HomeImage from "../images/HomeImage"
import {Crosses, Diagonals} from "../ui/Deco"
import React from "react"
import Hero from "./Hero"
import Container from "../ui/Container"

const Intro = ({css}) => (
    <Container css={css}>
        <div className={"flex flex-col pt-6 lg:flex-row lg:items-center"}>
            <Hero link={{url: '#', text: 'On continue ?'}}
                  css="flex flex-col items-start py-24 space-y-8 lg:flex-1 lg:pr-24 xl:pr-36"
            />
            <div className={"relative lg:flex-1"}>
                <Blobs>
                    <HomeImage alt="Test overriding alt" />
                </Blobs>
                <Diagonals color="text-primary-500" css={"z-6 w-full h-72 left-28 top-0"} />
                <Crosses css={"-bottom-8 w-full h-64"} />
            </div>
        </div>
    </Container>
)

export default Intro

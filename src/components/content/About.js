import useSiteMeta from "../../hooks/use-site-meta"
import BlobFull from "../ui/blobs/BlobFull"
import Container from "../ui/Container"
import Title from "../ui/Title"
import React, {useEffect} from "react"
import {Circle, DashedCircle} from "../ui/Deco"
import {animated,useSpring,config} from "react-spring"
import _ from "lodash"

const About = () => {
    const AnimatedCircle = animated(Circle)
    const AnimatedDashedCircle = animated(DashedCircle)
    const data = useSiteMeta()
    const parallaxLevel = 10
    const scaleLevels = [ 0.85, 0.90, 1.10, 1.15 ]

    const [{ springScrollX }, springSetScrollX] = useSpring(() => ({
        springScrollX: 0,
        config: config.gentle
    }))

    useEffect(() => {
        const throttled = _.throttle(() => springSetScrollX({springScrollX: window.scrollY}), 200)
        window.addEventListener('scroll', throttled)
        return () => window.removeEventListener('scroll', throttled)
    }, [springSetScrollX])

    const moveCircles = springScrollX.interpolate(o => `translateX(${o / parallaxLevel}px)`)
    const scaleCircleOne = springScrollX.interpolate({
        range: [0, 1000], output: [scaleLevels[1], scaleLevels[2]]
    }).interpolate(n => n.toFixed(3))
    const scaleCircleTwo = springScrollX.interpolate({
        range: [0, 1000], output: [scaleLevels[0], scaleLevels[3]]
    }).interpolate(n => n.toFixed(2))

    return (
        <div className={"relative"}>
            <Container css="relative z-1">
                <BlobFull css="text-white z-2" />
                <animated.div className={"absolute inset-0 z-3"} style={{ transform: moveCircles }}>
                    <AnimatedCircle css="top-1/2 z-2 left-0 w-2/3 h-auto transform -translate-x-1/2 -translate-y-1/2"
                                    style={{ '--tw-scale-x': scaleCircleTwo, '--tw-scale-y': scaleCircleTwo }}
                    />
                    <AnimatedDashedCircle css="top-1/2 z-3 left-0 w-1/2 h-auto transform -translate-x-1/2 -translate-y-1/2"
                                          color="text-primary-300"
                                          style={{ '--tw-scale-x': scaleCircleOne, '--tw-scale-y': scaleCircleOne }}
                    />
                </animated.div>
                <animated.div className={"absolute inset-0 z-1"} style={{ transform: moveCircles }}>
                    <AnimatedCircle css="top-1/2 -z-1 left-0 w-4/5 h-auto transform -translate-x-1/2 -translate-y-1/2"
                                    color="text-secondary-500"
                                    style={{ '--tw-scale-x': scaleCircleOne, '--tw-scale-y': scaleCircleOne }}
                    />
                </animated.div>
                <article className={"relative z-10 flex flex-col items-center text-center py-40 space-y-8"}>
                    <Title subtitle={data.home.middle.subtitle}>
                        {data.home.middle.title.toLowerCase()}
                    </Title>
                    <p className={"lg:px-24 xl:px-36"}>{data.home.middle.description}</p>
                </article>
            </Container>
        </div>
    )
}

export default About

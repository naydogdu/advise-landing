import React from "react"
import BlobOne from "./BlobOne"
import BlobTwo from "./BlobTwo"
import BlobThree from "./BlobThree"
import BlobMask from "./BlobMask"
import PropTypes from "prop-types"
import { useSpring, animated } from 'react-spring'

const biggerWidth = "108%"
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 19}px,${y / 19}px,0)`
const trans2 = (x, y) => `translate3d(${x / 14}px,${y / 20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 8}px,${y / 14}px,0)`
const trans4 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`

const Blobs = ({colorOne, colorTwo, colorThree, children}) => {

    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: {
            mass: 10,
            tension: 550,
            friction: 140
        }
    }))

    return (
        <div role="presentation" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={{ transform: props.xy.interpolate(trans4) }}>
                <BlobOne color={colorOne} />
            </animated.div>
            <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
                <BlobTwo color={colorTwo} />
            </animated.div>
            <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
                <BlobThree color={colorThree} style={{ width: biggerWidth }} />
            </animated.div>
            <div className={"relative z-10 pb-full"}>
                <animated.div className={"absolute transform translate-x-16 -translate-y-6 object-cover"}
                     style={{
                         clipPath: "url(#blobmask)",
                         width: biggerWidth,
                         height: biggerWidth,
                         transform: props.xy.interpolate(trans1)
                     }}
                >
                    {children}
                </animated.div>
                <BlobMask />
            </div>
        </div>
    )
}

Blobs.defaultProps = {
    colorOne: `text-secondary-500`,
    colorTwo: `text-primary-100`,
    colorThree: `text-primary-500`
}

Blobs.propTypes = {
    colorOne: PropTypes.string,
    colorTwo: PropTypes.string,
    colorThree: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Blobs

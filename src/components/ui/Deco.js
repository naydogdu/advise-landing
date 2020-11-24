import React from "react"
import PropTypes from "prop-types"

const Diagonals = ({css, color}) => (
    //
    // This is handmade, guys ;)
    // See : https://codepen.io/aydogdun/pen/OJRLLEJ
    //
    <svg className={["stroke-current absolute", css, color].join(' ')}
         xmlns="http://www.w3.org/2000/svg"
    >
        <pattern id="diagonalPattern" patternUnits="userSpaceOnUse" width="16" height="16">
            <path d="M-1,1 l8,-8
                     M0,16 l16,-16
                     M12,20 l8,-8"
            />
        </pattern>
        <rect stroke="none" x="0" y="0" width="100%" height="100%" fill="url(#diagonalPattern)" />
    </svg>
)

Diagonals.defaultProps = {
    css: `w-full h-full`,
    color: `text-primary-200`
}

Diagonals.propTypes = {
    css: PropTypes.string,
    color: PropTypes.string
}

const Crosses = ({css, color}) => (
    //
    // Okay, I've got path's "d" chain from Figma export, but optimized & improved myself with a pattern :P
    // So, no limit for repeating... :)
    //
    <svg className={["fill-current absolute", css, color].join(' ')} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="crossPattern" x="0" y="0" width=".1" height=".1">
                <path d="M0 38.59L2.83 35.76L4.24 37.17L1.41 40H0V38.59ZM0 1.4L2.83 4.23L4.24 2.82L1.41 0H0V1.41V1.4ZM38.59 40L35.76 37.17L37.17 35.76L40 38.59V40H38.59ZM40 1.41L37.17 4.24L35.76 2.83L38.59 0H40V1.41ZM20 18.6L22.83 15.77L24.24 17.18L21.41 20L24.24 22.83L22.83 24.24L20 21.41L17.17 24.24L15.76 22.83L18.59 20L15.76 17.17L17.17 15.76L20 18.59V18.6Z" />
            </pattern>
        </defs>
        <rect fill="url(#crossPattern)" width="400" height="400" className={"transform -translate-x-4 -translate-y-4"} />
    </svg>
)

Crosses.defaultProps = {
    css: `w-full h-full`,
    color: `text-primary-200`
}

Crosses.propTypes = {
    css: PropTypes.string,
    color: PropTypes.string
}

const Circle = ({css, color}) => (
    <svg className={["stroke-current stroke-4 absolute", css, color].join(' ')}
         viewBox="0 0 100 100"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
    >
        <circle vectorEffect="non-scaling-stroke" cx="50" cy="50" r="48" />
    </svg>
)

Circle.defaultProps = {
    css: `w-full h-full`,
    color: `text-primary-100`
}

Circle.propTypes = {
    css: PropTypes.string,
    color: PropTypes.string
}

const DashedCircle = ({css, color}) => (
    <svg className={["stroke-current stroke-1 absolute", css, color].join(' ')}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 480 480"
    >
        <pattern id="dashedCircle" vectorEffect="non-scaling-stroke" patternUnits="userSpaceOnUse" width="16" height="16">
            <path d="M-1,1 l8,-8
                     M0,16 l16,-16
                     M12,20 l8,-8"
            />
        </pattern>
        <circle stroke="none"
                cx="240" cy="240" r="240"
                fill="url(#dashedCircle)"
                vectorEffect="non-scaling-stroke"
        />
    </svg>
)

DashedCircle.defaultProps = {
    css: `w-full h-full`,
    color: `text-primary-200`
}

DashedCircle.propTypes = {
    css: PropTypes.string,
    color: PropTypes.string
}

export { Diagonals, Crosses, Circle, DashedCircle }

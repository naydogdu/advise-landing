import React from "react"
import PropTypes from "prop-types"

const BlobThree = ({color, style}) => (
    <svg className={["absolute z-7 transform translate-x-20 -translate-y-20 fill-current", color].join(' ')}
         viewBox="0 0 705 751"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         style={style}
    >
        <g filter="url(#filter3_d)">
            <path fillRule="evenodd"
                  clipRule="evenodd"
                  d="M354.069 32.0234C426.907 31.2888 505.548 47.7099 556.049 100.203C603.972 150.016 589.077 229.225 607.801 295.763C625.449 358.475 674.618 414.408 662.479 478.415C649.777 545.387 598.163 598.203 542.879 638.081C487.737 677.855 421.431 710.091 354.069 700.876C289.856 692.093 249.175 632.597 199.395 591.096C153.701 553 101.837 522.076 75.5751 468.694C46.4337 409.46 31.2436 342.382 45.3049 277.883C60.2541 209.31 100.123 147.966 155.026 104.248C211.626 59.1794 281.721 32.7531 354.069 32.0234Z"
            />
        </g>
        <defs>
            <filter id="filter3_d" x="0" y="0" width="704.384" height="750.463" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="8"/>
                <feGaussianBlur stdDeviation="20"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.596078 0 0 0 0 0.909804 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
        </defs>
    </svg>
)

BlobThree.defaultProps = {
    color: `text-primary-500`,
    style: {}
}

BlobThree.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object
}

export default BlobThree

import React from "react"
import PropTypes from "prop-types"

const BlobOne = ({color}) => (
    <svg className={["w-full absolute transform -translate-y-8 -translate-x-4 fill-current", color].join(' ')}
         viewBox="0 0 729 674"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter1_d)">
            <path fillRule="evenodd"
                  clipRule="evenodd"
                  d="M370.694 54.5626C443.184 50.5334 523 9.04377 583.116 49.7515C643.275 90.4883 639.646 178.499 657.662 248.883C674.337 314.034 699.524 378.491 684.008 443.927C667.688 512.755 635.204 588.658 570.381 616.971C506.834 644.727 437.419 599.651 370.694 580.776C323.472 567.418 284.569 541.705 239.094 523.256C172.929 496.414 69.6351 514.92 44.05 448.258C18.9373 382.827 117.897 333.662 140.921 267.467C163.139 203.588 125.153 118.417 174.763 72.4491C224.075 26.757 303.57 58.2935 370.694 54.5626Z"
            />
        </g>
        <defs>
            <filter id="filter1_d" x="0" y="0" width="728.863" height="673.773" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

BlobOne.defaultProps = {
    color: `text-secondary-500`
}

BlobOne.propTypes = {
    color: PropTypes.string
}

export default BlobOne

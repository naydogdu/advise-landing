import React from "react"
import PropTypes from "prop-types"

const BlobTwo = ({color}) => (
    <>
        <svg className={["w-full absolute transform translate-x-8 -translate-y-4 fill-current", color].join(' ')}
             viewBox="0 0 616 582"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter2_d)">
                <path fillRule="evenodd"
                      clipRule="evenodd"
                      d="M377.795 49.9148C432.799 51.7948 489.609 24.8645 538.86 49.425C591.494 75.672 633.233 126.518 646.37 183.847C659.072 239.281 632.419 294.765 606.7 345.487C584.351 389.564 548.22 421.734 509.915 452.959C469.128 486.208 430.122 526.525 377.795 532.085C322.842 537.924 264.372 520.657 223.57 483.385C184.592 447.777 193.147 385.483 167.066 339.582C130.22 274.736 30.5609 235.478 40.7234 161.591C50.4228 91.0706 140.955 60.5214 208.527 38.1341C263.563 19.9 319.851 47.9343 377.795 49.9148Z"
                />
            </g>
            <defs>
                <filter id="filter2_d" x="0" y="0"
                        width="689.639"
                        height="581.198"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="20"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.258824 0 0 0 0 0.596078 0 0 0 0 0.909804 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>

        <svg className={["w-full absolute transform translate-y-4 fill-current", color].join(' ')}
             viewBox="0 0 655 640"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd"
                  clipRule="evenodd"
                  d="M316.128 1.27877C386.771 13.6244 396.775 114.095 446.607 165.666C483.762 204.118 538.007 219.554 569.085 263.065C610.647 321.253 664.514 384.152 653.084 454.739C641.425 526.732 576.906 581.538 512.096 614.983C452.447 645.765 381.644 643.225 316.128 628.624C260.451 616.217 223.96 568.702 174.774 539.812C117.783 506.337 29.5553 507.748 5.51214 446.181C-18.3512 385.074 41.4358 324.703 67.2123 264.378C90.1797 210.627 107.524 155.889 147.695 113.428C195.214 63.2015 248.017 -10.6243 316.128 1.27877Z"
            />
        </svg>
    </>
)

BlobTwo.defaultProps = {
    color: `text-primary-100`
}

BlobTwo.propTypes = {
    color: PropTypes.string
}

export default BlobTwo

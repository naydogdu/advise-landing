import React from "react"

const BlobMask = () => (
    <svg className={"w-0 h-0"} viewBox="0 0 756 746" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filterMask_d)">
            <path fillRule="evenodd"
                  clipRule="evenodd"
                  d="M384.309 9.82628C452.46 17.8376 500.898 72.5879 557.949 110.718C618.041 150.881 717.189 166.853 726.497 238.53C736.25 313.64 629.632 350.327 597.999 419.145C572.385 474.869 600.178 546.639 562.594 595.102C519.832 650.243 453.499 685.64 384.309 694.694C309.423 704.494 231.471 688.454 168.561 646.665C104.025 603.796 55.3837 537.927 35.5563 463.03C16.3544 390.496 36.8656 315.678 62.2463 245.069C86.8983 176.486 119.388 109.069 178.239 66.0826C237.18 23.0307 311.818 1.30484 384.309 9.82628Z"
            />
        </g>
        <defs>
            <filter id="filterMask_d" x="0" y="0" width="755.125" height="745.482" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="20"/>
                <feGaussianBlur stdDeviation="14"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.596078 0 0 0 0 0.909804 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
        </defs>
    </svg>
)

export default BlobMask

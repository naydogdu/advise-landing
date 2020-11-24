import React from "react"

const BlobFull = ({css}) => (
    <svg className={["h-full fill-current absolute top-0 left-1/2 transform -translate-x-1/2", css].join(' ')}
         viewBox="0 0 2157 626"
         preserveAspectRatio="none"
         fill="none"
         style={{width: "200%"}}
         xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd"
              clipRule="evenodd"
              d="M1090.96 0.722165C1327.84 7.9641 1465.55 86.6418 1642.22 141.448C1836.26 201.643 2140.9 241.459 2156.31 331.223C2171.93 422.143 1918.22 488.007 1711.49 544.845C1532.27 594.119 1319.86 619.171 1090.96 624.127C842.295 629.511 583.58 626.276 387.136 573.517C167.717 514.588 -8.86341 426.974 0.344472 331.223C9.37555 237.31 227.365 166.543 432.243 104.456C620.652 47.3607 840.933 -6.92155 1090.96 0.722165Z"
        />
    </svg>
)

export default BlobFull

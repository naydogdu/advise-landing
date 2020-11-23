import { Link } from "gatsby"
import React from "react"

const Button = ({...props}) => (
    <Link className={"font-semibold text-secondary-50 rounded-xl py-3 px-6 leading-tight bg-secondary-500 transition hover:bg-secondary-600 focus:ring focus:ring-secondary-500 focus:ring-opacity-50"}
          to={props.to}
    >
        {props.children}
    </Link>
)

export default Button

import React from "react"
import {useStaticQuery, Link, graphql} from "gatsby"
import {NavWrapper} from "../elements"

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "icon-96x96.png"}) {
                publicURL
            }
        }
    `)
    return (
        <NavWrapper>
            <Link to="/">
                <img src={data.logo.publicURL} alt="MyLogo" />
            </Link>
        </NavWrapper>
    )
}
import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P } from "../elements"

export const Footer = () => {

const data = useStaticQuery(graphql`

query {
    facebook: file(relativePath: {eq: "icon-48x48.png"}) {
        publicURL
    }
    twitter: file(relativePath: {eq: "icon-72x72.png"}) {
        publicURL
    }
    instagram: file(relativePath: {eq: "icon-48x48.png"}) {
        publicURL
    }
    whatsapp: file(relativePath: {eq: "icon-72x72.png"}) {
        publicURL
    }
}

`)
    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https:facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.facebook.publicURL} alt="Facebook logo"></img>
                </a>
                <a href="https:instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} alt="instagram logo"></img>
                </a>
                <a href="https:twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.twitter.publicURL} alt="twitter logo"></img>
                </a>
                <a href="https:whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.whatsapp.publicURL} alt="whatsapp logo"></img>
                </a>
            </FooterSocialIcons>
            <P size="xSmall" color="dark3">(c) 2020 GHF Company. All Rights Reserved</P>
        </FooterSocialWrapper>
    </FooterWrapper>
}
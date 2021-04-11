import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P } from "../elements"

export const Footer = () => {

const data = useStaticQuery(graphql`

query {
    instagram: file(relativePath: {eq: "whatsapp.svg"}) {
        publicURL
    }
    whatsapp: file(relativePath: {eq: "insta.svg"}) {
        publicURL
    }
}

`)
    return <FooterWrapper>
        <FooterSocialWrapper>
<<<<<<< HEAD
            <P font-size="xSmall" color="dark2" textAlign="center" style={{fontStyle: 'italic'}}>Connect with us</P>
=======
            <P font-size="xSmall" color="dark3" textAlign="center" style={{fontStyle: 'italic'}}>Connect with us</P>
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
            <FooterSocialIcons>
                <a href="https:instagram.com/li_goldiee" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} alt="instagram logo"></img>
                </a>
                <a href="https:whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.whatsapp.publicURL} alt="whatsapp logo"></img>
                </a>
            </FooterSocialIcons>
<<<<<<< HEAD
            <P size="xSmall" color="dark2">&copy; 2020 GHF Company. <br/>All Rights Reserved</P>
=======
            <P size="xSmall" color="dark3">&copy; 2020 GHF Company. <br/>All Rights Reserved</P>
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
        </FooterSocialWrapper>
    </FooterWrapper>
}
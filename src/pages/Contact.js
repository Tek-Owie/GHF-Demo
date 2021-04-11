import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
<<<<<<< HEAD
import { Footer, Navs, Post } from "../components"
=======
import { Footer, NavBar, Post } from "../components"
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
import { ContainerWrapper, H1, P } from "../elements"
import SEO from "../components/seo"

const contactUs = ({data}) => {
    const featureImage = data.imageSharp.fluid

    return (
        <ContainerWrapper>
            <SEO title="Contact Us" description="You can contact Golden Health and Fitness on the various social media platfroms"/>
<<<<<<< HEAD
            <Navs/>
            <Post>
                <H1>GET IN TOUCH</H1>
                <Img fluid={featureImage}/>
=======
            <NavBar/>
            <Img fluid={featureImage}/>
            <Post>
                <H1>GET IN TOUCH</H1>
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
                <P>Do you have questions, comment and contributions?<br/>Feel free to reach us on our social media handles: IG; FB; TW; WH<br/>Give us a shout-out and we'll be glad to respond to you ASAP!!</P>
            </Post>
            <Footer/>
        </ContainerWrapper>
    )
}
export default contactUs

export const contactUsQuery = graphql`
    query contactUsQuery {
<<<<<<< HEAD
        imageSharp(fluid: {originalName: {eq: "contactUs.jpg"}}) {
            fluid (maxWidth: 1000, quality: 50) {
=======
        imageSharp(fluid: {originalName: {eq: "woman-exercising-indoors.jpg"}}) {
            fluid (maxWidth: 1000, quality: 75) {
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
                ...GatsbyImageSharpFluid
            }
        }
    }
`
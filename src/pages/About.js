import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Footer, NavBar, Post} from "../components"
import { ContainerWrapper, H1, P} from "../elements"
import SEO from "../components/seo"

const aboutPage = ({data}) => {
    const featureImage = data.imageSharp.fluid

    return (
        <ContainerWrapper>
            <SEO title="About Us" description="Find out what Golden Health and Fitness does, how it started and why should patronize its services"/>
            <NavBar/>
            <Img fluid={featureImage}/>
            <Post>
                <H1>Lorem Ipsum</H1>
                <P>Lorem ipsum tolics peccata</P>
            </Post>
            <Footer/>
        </ContainerWrapper>
    )
}

export default aboutPage

export const aboutPageQuery = graphql`
    query AboutPageQuery {
        imageSharp(fluid: {originalName: {eq: "woman-exercising-indoors.jpg"}}) {
            fluid (maxWidth: 1000, quality: 75) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`
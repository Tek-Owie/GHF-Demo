import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
<<<<<<< HEAD
import { Footer, Navs, Post} from "../components"
=======
import { Footer, NavBar, Post} from "../components"
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
import { ContainerWrapper, H1, P} from "../elements"
import SEO from "../components/seo"

const aboutPage = ({data}) => {
    const featureImage = data.imageSharp.fluid

    return (
        <ContainerWrapper>
            <SEO title="About Us" description="Find out what Golden Health and Fitness does, how it started and why should patronize its services"/>
<<<<<<< HEAD
            <Navs/>
            <Post>
                <H1>what is golden health & fitness?</H1>
                <Img fluid={featureImage}/>
                <P>Golden Health & Fitness is a fitness, health, 
                wellness and lifestyle brand whose vision is to inspire, 
                educate and motivate everyone into the journey of living and embracing healthy lifestyles.</P>
                <P>It helps to dissect the nitty-gritties of being fit into smaller, 
                ingestible pieces for the consumption of the simplest minds.</P>
=======
            <NavBar/>
            <Img fluid={featureImage}/>
            <Post>
                <H1>Lorem Ipsum</H1>
                <P>Lorem ipsum tolics peccata</P>
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
            </Post>
            <Footer/>
        </ContainerWrapper>
    )
}

export default aboutPage

export const aboutPageQuery = graphql`
    query AboutPageQuery {
<<<<<<< HEAD
        imageSharp(fluid: {originalName: {eq: "aboutUs.jpg"}}) {
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
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({fluid}) => {
    
    const data = useStaticQuery (graphql`
        query {
<<<<<<< HEAD
            imageSharp(fluid: {originalName: {eq: "newFeatureImage.jpg"}}) {
                fluid (maxWidth: 1000, quality: 60) {
=======
            imageSharp(fluid: {originalName: {eq: "woman-exercising-indoors.jpg"}}) {
                fluid (maxWidth: 1000, quality: 75) {
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
                    ...GatsbyImageSharpFluid
                      
                }
            }
        }
    `)
    
    return (
        <FeatureImageWrapper>
            <Img  fluid={fluid ? fluid : data.imageSharp.fluid}/>
        </FeatureImageWrapper>
    )
}
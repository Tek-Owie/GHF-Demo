import React from "react";
import {ContainerWrapper} from "../elements";
<<<<<<< HEAD
import {Navs, Footer} from "../components"

export const Container = ({children}) => {
    return <ContainerWrapper>
    <Navs/>
=======
import {NavBar, Footer} from "../components"

export const Container = ({children}) => {
    return <ContainerWrapper>
        {/* <Nav></Nav> */}
        {/* React burger menu tutorial */}
        <NavBar/>
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
        {children}
        <Footer></Footer>
    </ContainerWrapper>
}
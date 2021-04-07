import React from "react";
import {ContainerWrapper} from "../elements";
import {NavBar, Footer} from "../components"

export const Container = ({children}) => {
    return <ContainerWrapper>
        {/* <Nav></Nav> */}
        {/* React burger menu tutorial */}
        <NavBar/>
        {children}
        <Footer></Footer>
    </ContainerWrapper>
}
import styled from "styled-components"

export const ContainerWrapper = styled.div`
    height: 100%;
<<<<<<< HEAD
    margin: auto;

=======
    // display: grid;
    display: block;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1rem;
    grid-template-rows: 4.5rem 20rem 5rem auto;
    gap: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        ${'' /* grid-template-columns: 1rem repeat(6, 1fr) 1rem; */}
        display: block;
    }
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
`
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import MainMenu from './MainMenu'
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800&display=swap');
body, html{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    }
`

const LayoutWrapper = styled.div`
    max-width: 960px;
    margin: 0 auto;
    `



const Layout = ({ children }) => (
    <div>
        <GlobalStyles />
        <MainMenu />
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    </div>
)


export default Layout

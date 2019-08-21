import React from "react";
import {graphql, StaticQuery, Link} from "gatsby";
import styled from 'styled-components';
import SiteInfo from "./SiteInfo";

const MainMenuWrapper = styled.div`
background-color: #000;
display: flex;
align-items: center;
min-height: 50px;
`

const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    width: 960px;
    height: 100%;
`

const MenuItem = styled(Link)`
display: block;
padding: 8px 16px;
color: #fff;
text-decoration: none;
`

const MainMenu =() => (
    <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter:{
        name:{
          eq: "main menu"
        }
      }) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }
    `} render={props=>(
        <MainMenuWrapper>
            <MainMenuInner>
                <SiteInfo />
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>(
                    <MenuItem to={item.object_slug} key={item.title}>{item.title}</MenuItem>
                ))}
            </MainMenuInner>
        </MainMenuWrapper>
    )}/>
)

export default MainMenu
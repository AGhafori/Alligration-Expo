import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0;//40px auto 0 auto;

    @media screen and (max-width: 820){
        flex-direction: column;
    }

`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: left;//center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
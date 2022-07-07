// Imports
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'


// Styles
const NavContainer = styled.nav`
    width:100%;
    display:flex;
    min-height:30px;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid #ccc;

    @media screen and (max-width:640px){
        justify-content:space-between;
    }
`
const Links = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    padding:10px 0 20px 0;
    justify-content:space-evenly;

    @media screen and (max-width:640px){
        display:none;
    }
`
const Img = styled.img`
    width:100px;
    height:75px;
    display:none;
    margin-bottom:10px;
    margin-left:10px;

    @media screen and (max-width:640px){
        display:inline;
    }

    @media screen and (max-width:400px){
        width:75px;
        height:50px;
    }
`
const StyledLink = styled.a`
    cursor:pointer;
    padding:3px 10px;
    border-radius:3px;
    text-decoration:none;
    transition:0.2s linear;
    color:${({pathname, value}) => value === pathname ? '#0d5091' : '#fff'};
    border:${({pathname, value}) => value === pathname ? '2px solid #0d5091' : '2px solid #242729'};

    &:hover{
        color:#0d5091;
        border:2px solid #0d5091;
    }
`
const BarsIcon = styled(AiOutlineMenu)`
    display:none;
    cursor:pointer;
    font-size:30px;
    margin-right:10px;

    @media screen and (max-width:640px){
        display:inline;
    }
    @media screen and (max-width:400px){
        font-size:25px;
    }
`


// Main Function
const Nav = () => {

    const pathname = window.location.pathname.split('/')[1];

    return (
        <NavContainer>
            <Links>            
                <Link href='/home'><StyledLink pathname={pathname} value='home'>HOME</StyledLink></Link>
                <Link href='/about'><StyledLink pathname={pathname} value='about'>ABOUT</StyledLink></Link>
                <Link href='/services'><StyledLink pathname={pathname} value='services'>SERVICES</StyledLink></Link>
                <Link href='/portfolio'><StyledLink pathname={pathname} value='portofolio'>PORTFOLIO</StyledLink></Link>
                <Link href='/bdp'><StyledLink pathname={pathname} value='bdp'>BDP</StyledLink></Link>
                <Link href='/contact-us'><StyledLink pathname={pathname} value='contact-us'>CONTACT US</StyledLink></Link>
            </Links>
            <Img src='/Images/Logo.png'/>
            <BarsIcon />
        </NavContainer>
    )
}


// Export
export default dynamic(() => Promise.resolve(Nav), {ssr:false});
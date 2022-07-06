// Imports
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styled from 'styled-components'


// Styles
const NavContainer = styled.nav`
    width:100%;
    display:flex;
    min-height:30px;
    align-items:center;
    padding:10px 0 20px 0;
    justify-content:space-evenly;
    border-bottom:1px solid #ccc;
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


// Main Function
const Nav = () => {

    const pathname = window.location.pathname.split('/')[1];
    console.log(pathname);

    return (
        <NavContainer>
            <Link href='/home'><StyledLink pathname={pathname} value='home'>HOME</StyledLink></Link>
            <Link href='/about'><StyledLink pathname={pathname} value='about'>ABOUT</StyledLink></Link>
            <Link href='/services'><StyledLink pathname={pathname} value='services'>SERVICES</StyledLink></Link>
            <Link href='/portfolio'><StyledLink pathname={pathname} value='portofolio'>PORTFOLIO</StyledLink></Link>
            <Link href='/bdp'><StyledLink pathname={pathname} value='bdp'>BDP</StyledLink></Link>
            <Link href='/contact-us'><StyledLink pathname={pathname} value='contact-us'>CONTACT US</StyledLink></Link>
        </NavContainer>
    )
}


// Export
export default dynamic(() => Promise.resolve(Nav), {ssr:false});
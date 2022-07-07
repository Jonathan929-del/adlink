// Imports
import {useState} from 'react'
import dynamic from 'next/dynamic'
import SocialsBar from './SocialsBar'
import styled from 'styled-components'


// Styles
const HeaderContainer = styled.nav`
  width:100%;
  color:#fff;
  display:grid;
  min-height:70px;
  align-items:center;
  background-color:inherit;
  border-bottom:1px solid #ccc;
  grid-template-rows:repeat(1, fr);
  grid-template-columns:repeat(12, 1fr);
  grid-template-areas:'number number email email socials socials img img support subscribe subscribe lang';

  @media screen and (max-width:992px){
    padding-top:10px;
    grid-template-rows:repeat(2, fr);
    grid-template-columns:repeat(12, 1fr);
    grid-template-areas:'number number email email email socials socials socials support subscribe subscribe lang'
                        'img img img img img img img img img img img img';
  }
  @media screen and (max-width:768px){
    grid-template-columns:repeat(13, 1fr);
    grid-template-areas:'number number number number email email email support support support subscribe subscribe lang'
                        'img img img img img socials socials socials socials socials socials socials socials';
  }
  @media screen and (max-width:640px){
    grid-template-columns:repeat(12, 1fr);
    grid-template-areas:'number number number number email email email email support support support support'
                        'socials socials socials socials socials subscribe subscribe subscribe subscribe lang lang lang';
  }
  @media screen and (max-width:450px){
    grid-template-columns:repeat(9, 1fr);
    grid-template-areas:'number number number email email email support support support'
                        'socials socials socials socials socials subscribe subscribe subscribe lang';
  }
  @media screen and (max-width:400px){
    grid-template-rows:repeat(3, 1fr);
    grid-template-columns:repeat(4, 1fr);
    grid-template-areas:'number number email email'
                        'socials socials subscribe subscribe'
                        'support support lang lang';
  }
`
const NumberContainer = styled.div`
  display:flex;
  grid-area:number;
  align-items:center;
  justify-content:center;

  @media screen and (max-width:992px){
    width:150px;
  }
`
const Number = styled.p`
  cursor:pointer;
  transition:0.2s linear;

  &:hover{
    color:#0d5091;
  }

  @media screen and (max-width:640px){
    font-size:12px;
  }
`
const EmailContainer = styled.div`
  grid-area:email;
  text-align:center;
`
const StyledLink = styled.a`
  color:#fff;
  text-decoration:none;
  transition:0.2s linear;

  &:hover{
    color:#0d5091;
  }

  @media screen and (max-width:640px){
    font-size:12px;
  }
`
const SocialbarContainer = styled.div`
  display:flex;
  margin:0 20px;
  grid-area:socials;
  align-items:center;
  justify-content:center;
`
const ImgContainer = styled.div`
  display:flex;
  grid-area:img;
  align-items:center;
  justify-content:center;

  @media screen and (max-width:640px){
    display:none;
  }
`
const Img = styled.img`
  width:150px;
  height:100px;
  margin-top:10px;

  @media screen and (max-width:992px){
    margin-top:25px;
  }
`
const SupportContainer = styled.div`
  display:flex;
  grid-area:support;
  align-items:center;
  justify-content:center;
`
const Support = styled.p`
  width:100px;
  cursor:pointer;
  margin-left:10px;
  transition:0.2s linear;

  &:hover{
    color:#0d5091;
  }

  @media screen and (max-width:640px){
    width:unset;
    font-size:12px;
    margin-left:unset;
  }
`
const SubscribeContainer = styled.div`
  display:flex;
  margin:10px 0;
  align-items:center;
  grid-area:subscribe;
  justify-content:center;
` 
const Subscribe = styled.a`
  color:#fff;
  cursor:pointer;
  padding:5px 15px;
  border-radius:3px;
  text-decoration:none;
  transition:0.2s linear;
  background-color:#0d5091;

  &:hover{
    background-color:#0f5daa;
  }

  @media screen and (max-width:640px){
    font-size:12px;
  }
`
const LanguageContainer = styled.div`
  display:flex;
  grid-area:lang;
  align-items:center;
  justify-content:center;
`
const Language = styled.p`
  cursor:pointer;
  transition:0.2s linear;

  &:hover{
    color:#0d5091;
  }

  @media screen and (max-width:640px){
    font-size:12px;
  }

  @media screen and (max-width:450px){
    margin-left:5px;
  }
`


// Main Function
const Header = () => {

  const [language, setLanguage] = useState('En');
  const languageToggler = () => {
    language === 'Ar' ? setLanguage('En') : setLanguage('Ar');
  }

  return (
    <HeaderContainer>
      <NumberContainer>
        <Number>
          (+2) 01228250309
        </Number>
      </NumberContainer>
      <EmailContainer>
        <StyledLink href='https://adlinkegypt.net/' target='_blank'>
          info@adlinkegypt.net
        </StyledLink>
      </EmailContainer>
      <SocialbarContainer>
        <SocialsBar />
      </SocialbarContainer>
      <ImgContainer>
        <Img src='/Images/Logo.png' alt='Ad Link Logo'/>
      </ImgContainer>
      <SupportContainer>
        <Support>
          Fast Support
        </Support>
      </SupportContainer>
      <SubscribeContainer>
        <Subscribe href='/'>
          Subscribe
        </Subscribe>
      </SubscribeContainer>
      <LanguageContainer>
        <Language>
          En
        </Language>
      </LanguageContainer>
    </HeaderContainer>
  )
}


// Export
export default dynamic(() => Promise.resolve(Header), {ssr:false});
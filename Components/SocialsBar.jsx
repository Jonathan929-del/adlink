// Imports
import {useState} from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import {BsFacebook, BsTwitter} from 'react-icons/bs'
import {AiFillYoutube, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


// Styles
const SocialsContainer = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:992px){
        width:300px;
    }
`
const StyledLink = styled.a`
    color:#fff;
    margin:0 4px;
    position:relative;
`
const FacebookIcon = styled(BsFacebook)`
    font-size:20px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'facebook' ? '#0d5091' : '#fff'};
`
const FacebookContainer = styled.div`
    top:30px;
    left:-20px;
    width:100px;
    font-size:16px;
    position:absolute;

    @media screen and (max-width:400px){
        top:20px;
        font-size:12px;
    }
`
const YoutubeIcon = styled(AiFillYoutube)`
    font-size:20px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'youtube' ? '#0d5091' : '#fff'};
`
const YoutubeContainer = styled.div`
    top:30px;
    left:-20px;
    position:absolute;

    @media screen and (max-width:400px){
        top:20px;
        font-size:12px;
    }
`
const InstagramIcon = styled(AiFillInstagram)`
    font-size:20px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'instagram' ? '#0d5091' : '#fff'};
`
const InstagramContainer = styled.div`
    top:30px;
    left:-20px;
    position:absolute;

    @media screen and (max-width:400px){
        top:20px;
        font-size:12px;
    }
`
const LinkedinIcon = styled(AiFillLinkedin)`
    font-size:20px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'linkedin' ? '#0d5091' : '#fff'};
`
const LinkedinContainer = styled.div`
    top:30px;
    left:-20px;
    position:absolute;

    @media screen and (max-width:400px){
        top:20px;
        font-size:12px;
    }
`
const TwitterIcon = styled(BsTwitter)`
    font-size:20px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'twitter' ? '#0d5091' : '#fff'};
`
const TwitterContainer = styled.div`
    top:30px;
    left:-20px;
    position:absolute;

    @media screen and (max-width:400px){
        top:20px;
        font-size:12px;
    }
`


// Main Function
const SocialsBar = () => {

    const [isHovered, setIsHovered] = useState();
    const hoverHandler = (link) => {
        setIsHovered(link);
    };
    const leaveHandler = () => {
        setIsHovered('');
    }
    
    return (
        <SocialsContainer>
            <StyledLink href='https://www.facebook.com/ADLINKBDP/' onMouseEnter={() => hoverHandler('facebook')} onMouseLeave={leaveHandler}>
                <FacebookIcon isHovered={isHovered} />
                {isHovered === 'facebook' &&
                    <FacebookContainer>
                        <Fade top duration={500}>AD LINK</Fade>
                    </FacebookContainer>
                }
            </StyledLink>
            <StyledLink href='/' onMouseEnter={() => hoverHandler('youtube')} onMouseLeave={leaveHandler}>
                <YoutubeIcon isHovered={isHovered} />
                {isHovered === 'youtube' &&
                    <YoutubeContainer>
                        <Fade top duration={500}>youtube</Fade>
                    </YoutubeContainer>
                }
            </StyledLink>
            <StyledLink href='/' onMouseEnter={() => hoverHandler('instagram')} onMouseLeave={leaveHandler}>
                <InstagramIcon isHovered={isHovered} />
                {isHovered === 'instagram' &&
                    <InstagramContainer>
                        <Fade top duration={500}>instagram</Fade>
                    </InstagramContainer>
                }
            </StyledLink>
            <StyledLink href='/' onMouseEnter={() => hoverHandler('linkedin')} onMouseLeave={leaveHandler}>
                <LinkedinIcon isHovered={isHovered} />
                {isHovered === 'linkedin' &&
                    <LinkedinContainer>
                        <Fade top duration={500}>linkedin</Fade>
                    </LinkedinContainer>
                }
            </StyledLink>
            <StyledLink href='/' onMouseEnter={() => hoverHandler('twitter')} onMouseLeave={leaveHandler}>
                <TwitterIcon isHovered={isHovered} />
                {isHovered === 'twitter' &&
                    <TwitterContainer>
                        <Fade top duration={500}>twitter</Fade>
                    </TwitterContainer>
                }
            </StyledLink>
        </SocialsContainer>
    )
}


// Export
export default SocialsBar;
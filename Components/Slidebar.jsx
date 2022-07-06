// Imports
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


// Styles
const SlidebarContainer = styled.div`
    width:50%;
    height:400px;
    margin:50px auto;
`
const ImgContainer = styled.div`
    width:100%;
    height:100%;
    margin:auto;
    display:flex;
    justify-content:center;
`
const LeftArrowIcon = styled(BsArrowLeft)`
    padding:10px;
    font-size:30px;
    margin-left:5px;
    border-radius:50%;
    transition:0.2s linear;
    background-color:#00000085;

    &:hover{
        background-color:#000000a1;
    }
`
const RightArrowIcon = styled(BsArrowRight)`
    padding:10px;
    font-size:30px;
    margin-right:5px;
    border-radius:50%;
    transition:0.2s linear;
    background-color:#00000085;

    &:hover{
        background-color:#000000a1;
    }
`
const Img = styled.div`
    width:100%;
    height:400px;
    position:relative;
    background-size:cover;
    background-image:${({imgSrc}) => `url('${imgSrc}')`};
`
const Layer = styled.div`
    top:0;
    left:0;
    width:100%;
    height:100%;
    color:#fff;
    display:flex;
    position:absolute;
    padding:40px 100px;
    flex-direction:column;
    justify-content:flex-start;
    background-color:#000000ad;
`
const Heading = styled.h4`
    font-size:25px;
    font-weight:300;
`
const Titles = styled.div`
    width:60%;
    display:grid;
    margin-top:10px;
    grid-template-columns:repeat(2, 1fr);
`
const Title = styled.p`
    font-size:17px;
`


// Main Function
const Slidebar = () => {

    const images = [
        {
            img:'/Images/Web Development.png',
            header:'Web Design',
            titles:['Static Web Templates', 'Dynamic Web Templates', 'UI', 'UX', 'E-Commerce', 'Dashboard', 'Domain', 'Hosting']
        },
        {
            img:'/Images/Branding.png',
            header:'Branding',
            titles:['Logo Design', 'Branding Development', 'Corporate Identity', 'Company Profile', 'Promotion Material', 'packing']
        },
        {
            img:'/Images/Marketing.png',
            header:'Digital Marketing',
            titles:['Google Business', 'News Letters', 'Social Media', 'SEO', 'SMS']
        },
        {
            img:'/Images/Presentation.png',
            header:'Multimedia CD',
            titles:['Video', 'Animation', 'Auto run', 'Presentation']
        },
        {
            img:'/Images/Planning.png',
            header:'Media',
            titles:['Campaign', 'Planning', 'Video Production', 'Photography']
        },
        {
            img:'/Images/Mobile Apps.png',
            header:'Mobile Apps',
            titles:['IOS', 'Android', 'Windows']
        },
        {
            img:'/Images/System.png',
            header:'Software',
            titles:['Basic ERP', 'ERP Systems', 'CRM', 'Desktop Apps', 'Web Apps']
        },
        {
            img:'/Images/Printing.png',
            header:'Printing',
            titles:['Offset', 'Digital', 'Outdoor', 'Indoor', 'Silk Screen']
        },
        {
            img:'/Images/Training.png',
            header:'Training',
            titles:['Management', 'Career']
        },
	];

    const prevArrow = (
        <LeftArrowIcon />
    );

    const nextArrow = (
        <RightArrowIcon />
    )

	return (
		<SlidebarContainer>
            <Slide indicators={true} duration={5000} infinite={true} transitionDuration={500} prevArrow={prevArrow} nextArrow={nextArrow}>
                {images.map((each, index) => (
                    <ImgContainer key={index}>
                        <Img imgSrc={each.img}>
                            <Layer>
                                <Heading>{each.header}</Heading>
                                <Titles>
                                    {each.titles.map((title, index) => (
                                        <Title key={index}>.{title}</Title>
                                    ))}
                                </Titles>
                            </Layer>
                        </Img>
                    </ImgContainer>
                ))}
            </Slide>
		</SlidebarContainer>
	);
};


// Export
export default dynamic(() => Promise.resolve(Slidebar), {ssr:false});
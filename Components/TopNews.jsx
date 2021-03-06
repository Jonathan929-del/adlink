// Imports
import dynamic from 'next/dynamic'
import styled from 'styled-components'


// Styles
const TopNewsContainer = styled.div`
    width:100%;
    display:flex;
    margin:10px 0;
    min-height:30px;
    align-items:center;
    padding-bottom:10px;
    border-bottom:1px solid #ccc;
`
const Heading = styled.h3`
    @media screen and (max-width:640px){
        font-size:15px;
    }
`
const News = styled.div`
    height:100%;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`
const NewsContent = styled.p`
    font-size:15px;
    font-weight:300;
    margin-left:10px;

    @media screen and (max-width:640px){
        font-size:13px;
    }
`


// Main Function
const TopNews = () => {
  return (
    <TopNewsContainer>
        <News>
            <Heading>
                Top News:
            </Heading>
            <NewsContent>
                Some News Some News Some News Some News Some News Some News Some News Some News Some News Some News
            </NewsContent>
        </News>
    </TopNewsContainer>
  )
}


// Export
export default dynamic(() => Promise.resolve(TopNews), {ssr:false});
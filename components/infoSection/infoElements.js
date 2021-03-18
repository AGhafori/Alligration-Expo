import styled from 'styled-components'


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#fff')}; // ändra alla till vit bakgrund

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }

`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1000px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    
    @media screen and (max-width: 768px){
        height: 1300px;
    } 

`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 777px;
    padding-top: 0;
    padding-bottom: 20px;
`

export const TopLine = styled.p`
    color: #344454;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 10px;

`

export const Heading = styled.p`
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const Subtitle = styled.p`
    max-width: 600px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`

export const ImgWrap = styled.div`
    max-width: 350px;//230px;
    justify-content: flex-start;
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 1px 0;
    padding-right: 0;

`
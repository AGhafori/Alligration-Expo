import React from 'react'
import {
    InfoRow,
    InfoWrapper,
    InfoContainer,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    ImgWrap


}from './infoElements'

const InfoSection = ({lightBg,
    topLine,
    id,
    lightText,
    img,
    alt,
    darkText,
    description,
    headline,
    imgStart}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper imgStart={imgStart}>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}> {headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>

                </InfoRow>
            </InfoWrapper>

            </InfoContainer>
            
        </>
    )
}

export default InfoSection
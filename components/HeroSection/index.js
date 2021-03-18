import React, {useState} from 'react'
import { Button } from '../ButtonElements'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBTNWrapper,
    ArrowForWard,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="hem">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>
                    ALLIGRATION
                </HeroH1>
                <HeroP>
                    TAR INTEGRATION TILL NÄSTA NIVÅ!
                </HeroP>
                <HeroBTNWrapper>
                    <Button to='Om-Alligration'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary ="true"
                    dark = "true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                        veta mer? {hover ? <ArrowForWard /> : <ArrowRight/>}
                    </Button>
                </HeroBTNWrapper>

            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection

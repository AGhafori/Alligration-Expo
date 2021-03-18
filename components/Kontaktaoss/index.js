import React from 'react'
import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/Icon2.svg'
import Icon3 from '../../images/Icon3.svg'
import {
    KontaktaossContainer,
    KontaktaossH1,
    KontaktaossWrapper,
    KontaktaossCard,
    KontaktaossIcon,
    KontaktaossH2,
    KontaktaossP
} from './KontaktaossElements'


const Kontaktaoss = () => {
    return (
        <KontaktaossContainer id="Kontakta_oss">
            <KontaktaossH1>Kontakta oss via: </KontaktaossH1>
            <KontaktaossWrapper>
                <KontaktaossCard>
                    <KontaktaossIcon src={Icon1}/>
                    <KontaktaossH2>telefon:</KontaktaossH2>
                    <KontaktaossP>+46732672864</KontaktaossP>
                </KontaktaossCard>

                <KontaktaossCard>
                    <KontaktaossIcon src={Icon2}/>
                    <KontaktaossH2>E-post: </KontaktaossH2>
                    <KontaktaossP>alireza.ahmadi188@gmail.com </KontaktaossP>
                </KontaktaossCard>

                <KontaktaossCard>
                    <KontaktaossIcon src={Icon3}/>
                    <KontaktaossH2>Adress: </KontaktaossH2>
                    <KontaktaossP>Vendelsfridsgatan 1c</KontaktaossP>
                </KontaktaossCard>
            </KontaktaossWrapper>
        </KontaktaossContainer>
    )
}

export default Kontaktaoss

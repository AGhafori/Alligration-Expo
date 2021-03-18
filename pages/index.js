import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection'
import { homeObjOne, homeObjTow } from '../components/infoSection/Data'
import Kontaktaoss from '../components/Kontaktaoss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Hem = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTow} />
            <Kontaktaoss />
            <Footer />

            
        </>
    )
}

export default Hem

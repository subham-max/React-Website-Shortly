import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/data';
import Statistics from '../components/Statistics';
import Footer from '../components/Footer';
import API from '../components/API';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle =() =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen ={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <InfoSection {...homeObjOne}/>
        <API/>
        <Statistics/>
        <Footer/>
        </>
    )
}

export default Home

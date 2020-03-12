import React, { Component } from "react"
import Header from "../Common/Header"

//image use image={image} or image="path to public"
//import image from '../assets/img/header-bg.jpg'

//Re usable components
import Services from "../Common/Services"
import Portfolio from "../Common/Portfolio"
import TimeLine from "../Common/TimeLine"
import Contact from "./Contact"


export default class Home extends Component{
    render(){
        return(
            <div>
                <Header 
                    title="Welcome to Our Studio"
                    subtitle = "IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image="img/header-bg.jpg"
                />
                <Services/>
                <Portfolio/>
                <TimeLine/>
                <Contact />
            </div>
        )
    }
}
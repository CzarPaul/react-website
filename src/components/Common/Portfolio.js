import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

const portfolio = [
    { title:"Threads", subtitle:"Illustration", img:"img/portfolio/01-thumbnail.jpg"},
    { title:"Explore", subtitle:"Graphic Design", img:"img/portfolio/02-thumbnail.jpg"},
    { title:"Finish", subtitle:"Identity", img:"img/portfolio/03-thumbnail.jpg"},
    { title:"Lines", subtitle:"Branding", img:"img/portfolio/04-thumbnail.jpg"},
    { title:"Southwest", subtitle:"Website Design", img:"img/portfolio/05-thumbnail.jpg"},
    { title:"Window", subtitle:"Photography", img:"img/portfolio/06-thumbnail.jpg"},
]

export default class Portfolio extends Component{
    render(){
        return(
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            portfolio.map((item, index) => {
                                return <PortfolioItem {...item} key={index}/>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
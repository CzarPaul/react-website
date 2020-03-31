import React, { Component } from "react"
import TimeLineItem from "./TimeLineItem"

export default class TimeLine extends Component{

    timeLines=[
        {contentSide:"", img:"img/about/1.jpg", date:"2009-2011", subtitle:"Our Humble Beginnings",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
        {contentSide:"timeline-inverted", img:"img/about/2.jpg", date:"March 2011", subtitle:"An Agency is Bornc",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
        {contentSide:"", img:"img/about/3.jpg", date:"December 2012", subtitle:"Transition to Full Servicec",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
        {contentSide:"timeline-inverted", img:"img/about/4.jpg", date:"July 2014", subtitle:"Phase Two Expansion",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
    ]
    render(){
        return(
            <section className="page-section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                {
                                    this.timeLines.map((block, index) => {
                                        return <TimeLineItem key={index} {...block}/>
                                    })
                                }
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Be Part
                                        <br />Of Our
                                        <br />Story!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
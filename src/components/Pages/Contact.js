import React, { Component } from "react"
import Field from "../Common/Field"
import { withFormik } from 'formik'
import * as Yup from 'yup'

const fields = 
{
    sections: [
        [
            {name:'name', elementName:'input', type:'text', placeholder:'Your name.*'},
            {name:'email', elementName:'input', type:'email', placeholder:'Your email.*'},
            {name:'phone', elementName:'input', type:'text', placeholder:'Your phone number.*'},
        ],
        [
            {name:'message', elementName:'textarea', type:'text', placeholder:'Please enter a message.*'},
        ]
    ]
}


class Contact extends Component{

    submitForm = (e) => {
        alert("Form submitted. Thank you very much !")
    }

    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                                <div className="row">
                                    {fields.sections.map((section, sectionIndex) => {
                                        return(
                                            <div className="col-md-6" key={sectionIndex}>
                                                {
                                                    section.map((field, index) => {
                                                        return (
                                                            <Field 
                                                                {...field} 
                                                                key= {index}
                                                                value={this.props.values[field.name]}
                                                                name={field.name}
                                                                onChange={this.props.handleChange}
                                                                onBlur={this.props.handleBlur}
                                                                touched={(this.props.touched[field.name])}
                                                                errors={this.props.errors[field.name]}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })}
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button 
                                            id="sendMessageButton" 
                                            className="btn btn-primary btn-xl text-uppercase" 
                                            type="submit"
                                            >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup
            .string()
            .min(3,"Your namer is longer than that")
            .required('You must give us your name.'),
        email: Yup
            .string()
            .email("You need to five us a valid email.")
            .required("We need your email."),
        phone: Yup
            .string()
            .min(10,"Please provide your 10 digit phone number.")
            .max(15, "Your phone number is too long.")
            .required("We need your phone number to reach you at."),
        message: Yup
            .string()
            .min(500, "You need to provide us more detailed information")
            .required("Message is required")

    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES ",values)
        alert("You've submitted the form",JSON.stringify.values)
    }
})(Contact)
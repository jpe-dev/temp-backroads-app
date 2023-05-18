import React from 'react'
import Title from './Title'
import { servicesList } from '../data/servicesList'

const Services = () => {
    const services = servicesList.map((service => {
        const { id, icon, title, description } = service
        return (
            <article className="service">
                <span className="service-icon"><i className={"fas fa-" + icon + " fa-fw"}></i></span>
                <div className="service-info">
                    <h4 className="service-title">{title}</h4>
                    <p className="service-text">
                        {description}
                    </p>
                </div>
            </article >
        )
    }));
    return (
        <section className="section services" id="services">
            <Title title={'our'} subTitle={'services'} />
            <div className="section-center services-center">
                {services}
            </div>
        </section>
    )
}

export default Services
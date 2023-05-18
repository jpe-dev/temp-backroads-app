import React from 'react'
import Title from './Title'
import { toursData } from '../data/toursData'


const Tours = () => {
    const tours = toursData.map((tour => {
        const { title, description, startDate, place, daysNumber, price, image } = tour;
        const dateFormat = Intl.DateTimeFormat("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
        }).format(startDate); // March 19, 2023
        return (
            <article className="tour-card">
                <div className="tour-img-container">
                    <img src={image} className="tour-img" alt={"image for tours " + title} />
                    <p className="tour-date">{dateFormat}</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>{title}</h4>
                    </div>
                    <p>
                        {description}
                    </p>
                    <div className="tour-footer">
                        <p>
                            <span><i className="fas fa-map"></i></span> {place}
                        </p>
                        <p>days {daysNumber}</p>
                        <p>from ${price}</p>
                    </div>
                </div>
            </article>
        )
    }));
    return (
        <section className="section" id="tours">
            <Title title={'featured'} subTitle={'tours'} />

            <div className="section-center featured-center">
                {tours}
            </div>
        </section>
    )
}

export default Tours
import React from 'react'
import { services } from '../data'

export default function Services() {
  return (
<section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
       
       {
        services.map((service)=>{
           return <article key={service.id} className="service">
            <span className="service-icon"><i className={service.icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">
                {
                    service.text
                }
              </p>
            </div>
          </article>
        })
       }
      </div>
    </section>  )
}

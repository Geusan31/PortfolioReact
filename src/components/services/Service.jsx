import React from "react";
import { services } from "../../constants";

const Service = () => {
  return (
    <>
      <h2>Services</h2>
      <div className="container-card">
        {
          services.map((service) => {
            return (
              <div className="card" key={service.id}>
                <div className="header-card">
                  <div className="logo">
                    <img width="50" src={service.icon} alt={service.title} />
                  </div>
                  <h2>{service.title}</h2>
                </div>
                <div className="desc-card">
                  {service.description}
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Service
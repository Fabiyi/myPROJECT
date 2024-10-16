import React from "react";


export default function ServiceCard({ service }) {
    return (
      <div className="">
        <h2 className="">{service.name}</h2>
        <p className="">{service.description}</p>
      </div>
    );
  }
  
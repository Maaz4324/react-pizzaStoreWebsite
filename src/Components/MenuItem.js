import React from "react";

function MenuItem(props) {
  return (
    <div>
      <div className="card card-container" style={{width: '18rem'}}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price} INR
          </p>
          <a href="#" className="btn btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

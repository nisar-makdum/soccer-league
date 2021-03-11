import React from 'react';
import img from '../../images/1111.jpg';

const BgImage = () => {
    return (
        <div>
              <img style={{ height:"300px", width:"100%"}} src={img} alt=""/>
            <div className="card-img-overlay">
              <h1 className="text-center" style={{color:"Lavender"}}>SOCCER LEAGUE INFO</h1>
            </div>
        </div>
    );
};

export default BgImage;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faFlag, faFutbol, faMars, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import maleImage from '../../images/Rectangle 28.png';
import femaleImage from '../../images/female.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/YouTube.png';
import twitter from '../../images/Twitter.png';


const ClubInfo = (props) => {
        const { strLeague, strCountry, strSport, strGender, intFormedYear, strLogo, strBanner, strDescriptionEN, strFacebook, strYoutube, strTwitter} = props.club;
        
        // Conditional Formatting
        const [identity, setIdentity] = useState(false)
        let show;
        let showImage;
        let textButton;

        if(identity) {
            show = <p> <FontAwesomeIcon icon={faMars}/>  Gender: Female</p>
            showImage = <img  src={femaleImage} className='img-fluid rounded img-thumbnail pt-4' alt="..."></img>
            textButton = <p>Switch to Male <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>  
        }
        else{
            show = <p> <FontAwesomeIcon icon={faMars}/>  Gender: {strGender}</p>
            showImage = <img  src={maleImage} className='img-fluid rounded img-thumbnail pt-4' alt="..."></img>
            textButton = <p>Switch to Female <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
        }


    return (

        <div style={{ backgroundColor: 'DarkSlateBlue' }}>
            <header>
                <div>
                        <img style={{ height:"300px", width:"100%"}} src={strBanner} alt=""/>
                    <div className="card-img-overlay">
                        <img className="img-fluid rounded mx-auto d-block" style={{ height:"80px", width:"250px"}}src={strLogo} alt=""/>
                    </div>
                </div>
            </header>
            
            <div className="m-5">
                <div >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div class="card mb-3" style={{ maxWidth: '1000px' }}>
                                    <div class="row g-0">
                                        <div class="bg-white text-dark col-md-6">
                                            <div class="card-body" style={{paddingLeft: '50px', marginTop: '30px'}}>
                                                <h3 class="card-title">{strLeague}</h3>
                                                <p  class="card-text"> <FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                                                <p class="card-text"> <FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</p>
                                                <p class="card-text"> <FontAwesomeIcon icon={faFutbol}/>  Sports Type: {strSport}</p>
                                                
                                                {show}
                                                <button style={{width: '200px', height: '40px'}} onClick={() => setIdentity(!identity)} className="btn btn-dark">{textButton}</button>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            {showImage}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div pt-5>
                <p>{strDescriptionEN}</p>
                <br/>
            </div>

            {/* Dynamic Icon */}
             <div >
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <a href={`https://${strFacebook}`} target="_blank">
                    <img style={{height:"60px"}} src={facebook} alt=""/>
                </a>
                <a href={`https://${strYoutube}`} target="_blank">
                    <img style={{height:"60px"}} src={youtube} alt=""/>
                </a>
                <a href={`https://${strTwitter}`} target="_blank">
                    <img style={{height:"60px"}} src={twitter} alt=""/>
                </a>
            </div>
            </div>
        </div>
    );
};

export default ClubInfo;
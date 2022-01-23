import React, { useRef } from "react";
import "./pick.scss";

function Pick() {
  return (
      <div className="srollList">
      
    <div>       
        <div>
            <div className="changed">                                           
                <div className="icon-red">                            
                    <img className="icw" src="./assets/icons/Heart.svg"/>                          
                </div>
                <img
                    className="bg"
                    src="./assets/images/unsplash__79ZJS8pV70.png"
                    alt="Chicken Fried"
                />                   
                <div className="button-white">
                    <span>35 min</span>
                    <div className="img-wrapper">
                    </div>
                </div>
                            
                <div className="button-red">
                    <span>10% off</span>
                    <div className="img-wrapper">
                    </div>
                </div>
            </div>                       
        </div>        
        <p className="">    
            <b> Demo Restaurant                                   </b>
            <img className="icw-star" src="./assets/icons/Star2.svg"/>                                                 
            <span className="gold">4.7      </span>
            <span className="grey">(7K+)</span><br />
            <span className="grey">Italian</span>
            <br />
            <img className="icw-bic" src="./assets/icons/delivery-bike.svg"/>  
            <span className="grey">$10</span>
        </p>
    </div>


    <div>       
        <div>
            <div className="changed">                                           
                <div className="icon-red">                            
                    <img className="icw" src="./assets/icons/Heart.svg"/>                          
                </div>
                <img
                    className="bg"
                    src="./assets/images/unsplash_kcA-c3f_3FE.png"
                    alt="Chicken Fried"
                />                   
                <div className="button-white">
                    <span>35 min</span>
                    <div className="img-wrapper">
                    </div>
                </div>
                
            </div>                       
        </div>        
        <p className="">    
            <b> Demo Restaurant                                   </b>
            <img className="icw-star" src="./assets/icons/Star2.svg"/>                                                 
            <span className="gold">4.7      </span>
            <span className="grey">(7K+)</span><br />
            <span className="grey">Italian</span>
            <br />
            <img className="icw-bic" src="./assets/icons/delivery-bike.svg"/>  
            <span className="grey">$10</span>
        </p>
    </div>



</div>

  );
}

export default Pick;

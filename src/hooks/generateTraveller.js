import React,{ useState, useEffect } from 'react';
import Traveller from '../components/traveller.component';



const initialTravellerConfiguration = () => {
    
    return {
            x:window.innerWidth/2,
            y:window.innerHeight/2,
            traveller:<svg><Traveller x={window.innerWidth/2} y={window.innerHeight/2} /></svg>
            }
}


const updateTravellerConfiguration = (x,y) => {
    
    return {
            x:x,
            y:y,
            traveller:<svg><Traveller x={x} y={y} /></svg>
            }
}


const pickUpTraveller =(e) => {

    updateTravellerConfiguration(e.clientX,e.clientY);
}

const GenerateTraveller = () => {

  
  

    const [traveller, setTraveller] = useState(initialTravellerConfiguration());
    
  
    return traveller.traveller
  };


  export default GenerateTraveller;
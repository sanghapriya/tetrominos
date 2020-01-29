import React,{ useState,useEffect, useContext } from 'react';
import {ElementContext} from '../context/mainContext';
import Traveller from '../components/traveller.component';


const GenerateTraveller = () => {

    const [elements, setElements] = useContext(ElementContext);
    
  
    return <div 
                onMouseDown ={ (e) => setElements({...elements,travellerDetails:{grab:true,x:e.clientX,y:e.clientY}})}
                onMouseMove = {(e) => {     
                                        e.persist();
                                        
                                       if (elements.travellerDetails.grab) {
                                       return setElements(
                                                    {...elements,   
                                                        travellerDetails:{
                                                                    grab:elements.travellerDetails.grab, 
                                                                    x:(elements.travellerDetails.grab?e.clientX:elements.travellerDetails.x),
                                                                    y:(elements.travellerDetails.grab?e.clientY:elements.travellerDetails.y)
                                                                    }})
                                                                }
                                        else {return elements}
                                                                
                                                
                                                }}

                onMouseUp = {(e) => {   
                                         return setElements({...elements,   
                                                            travellerDetails:
                                                                {...elements.travellerDetails,
                                                                grab:false,
                                                                x:e.clientX,
                                                                y:e.clientY}
                                                            })
                                                              }}>
                        <Traveller x={elements.travellerDetails.x} y={elements.travellerDetails.y } />
                    </div>; 
                    }


  export default GenerateTraveller;
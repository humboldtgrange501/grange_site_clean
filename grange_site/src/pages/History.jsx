import React from "react";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../css/History.css';
import ThirdButton from "../components/ThirdButton";

export function History () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
            <Helmet><title>Our History</title></Helmet>
            <div className="history-div">
                <h1>Our History & Heritage</h1>

                <p className="p1">
                Since its founding in 1867, the Grange has served as a cornerstone for rural life in America.
                While the Grange advocates for agricultural and community interests, its roots as a fraternal
                organization also include a rich heritage of ritual, symbolism, and life lessons passed through the generations.
                </p>

                

                <div className="degrees-div">
                    <h2 className="degrees-h2">Grange Degrees, Seasons & Symbols</h2>
                    <p className="p2">Explore the tools, lessons, and values that form the foundation of Grange heritage.</p>
                    
                    <ThirdButton>
                        <a href="../images/degrees_and_symbols.jpg" target="_blank" rel="norefferrer" className="thirdbtn-a">
                            View the Degrees & Symbols
                        </a>
                    </ThirdButton>
                        
                   
                </div>
                
            </div>
        </>
    )
}
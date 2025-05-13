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
                    The Humboldt Grange #501, founded in 1933, has long served as a cornerstone of community engagement 
                    and rural advocacy in Humboldt County. As part of the National Grange of the Order of 
                    Patrons of Husbandry&mdash;a fraternal organization founded in 1867 to support agricultural communities&mdash;the
                    Humboldt Grange #501 continues this legacy by fostering local connection and civic involvement.
                </p>

                <div className="history-photos">
                    <img src="../images/historical/old_grange.jpg" alt="historical grange exterior"/>
                    <img src="../images/historical/old_grange_dance.jpg" alt="historical grange event"/>
                    <img src="../images/historical/old_grange_store.jpg" alt="historical grange storefront"/>
                    
                </div>

                

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
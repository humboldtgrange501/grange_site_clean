import React from "react";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../css/History.css';

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

                <h2>Introduction to Grange Heritage, Ritual, and Lessons</h2>
                <p className="p2">
                Like other fraternal societies, the Grange preserves its core values and teachings through a system of
                <strong> Degrees</strong>—short enactments or rituals that help members learn from the natural world and
                agricultural life. These Degrees form the spiritual and philosophical backbone of the Grange experience.
                </p>
    
                <h3>Degrees of the Grange</h3>
                <p style={{textAlign:'center'}}>
                There are a total of <strong>seven Degrees</strong> in the Grange. The first four are presented at the
                local (Subordinate) level. The higher Degrees—Fifth, Sixth, and Seventh—are conferred at Pomona (regional),
                State, and National Grange gatherings, respectively.
                <br/>
                <br/>
                Any member who has received the earlier Degrees may witness or participate in those that follow.
                </p>

                <div className="season-lesson-div">
                    <h3>Seasons & Lessons</h3>
                    <p>
                    The first four Degrees each correspond to a season, reflecting the agricultural cycle:
                    </p>
                    <p>
                        <strong>Spring</strong>: Faith
                        <br/>
                        <strong>Summer</strong>: Hope
                        <br/>
                        <strong>Fall</strong>: Charity
                        <br/>
                        <strong>Winter</strong>: Fidelity
                    </p>

                    <p>
                    These values—<strong>Faith, Hope, Charity, and Fidelity</strong>—form the foundation of Grange membership
                    and the moral compass for service in the community.
                    </p>

                </div>

                <div className="emsymb-div">
                    <h3>Emblems and Symbols</h3>
                    <p>
                    Each Degree includes emblems—tools of the farm and field—that symbolize deeper moral and spiritual truths.
                    </p>

                    <h4>First Degree - Spring: Faith</h4>
                    <ul>
                    <li><strong>The Ax</strong>: Perseverance</li>
                    <li><strong>The Plow</strong>: Preparation and Wisdom</li>
                    <li><strong>The Harrow</strong>: Study and Observation</li>
                    <li><strong>The Spade</strong>: Thoroughness</li>
                    </ul>

                    <h4>Second Degree - Summer: Hope</h4>
                    <ul>
                    <li><strong>The Hoe</strong>: Cultivation of the Mind</li>
                    <li><strong>The Pruning Knife</strong>: Restraint</li>
                    </ul>

                    <h4>Third Degree - Fall: Charity</h4>
                    <ul>
                    <li><strong>The Sickle</strong>: Harvest, Prosperity, and Honest Employment</li>
                    </ul>

                    <h4>Fourth Degree - Winter: Fidelity</h4>
                    <ul>
                    <li><strong>The Agate</strong>: Fidelity</li>
                    </ul>

                    <p>
                    These symbols, paired with seasonal rituals and lessons, connect members to both the natural world and
                    the ethical responsibilities of citizenship, family, and service.
                    </p>

                </div>
                
            </div>
        </>
    )
}
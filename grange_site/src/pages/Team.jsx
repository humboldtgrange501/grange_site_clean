import { Helmet } from 'react-helmet';
import LeadershipTeam from '../components/LeadershipTeam';
import { useEffect } from 'react';
import '../css/Team.css';

export function Team () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  

    return (
        <>
            <Helmet><title>Meet the Team</title></Helmet>
            <h1>Meet the Team</h1>
            <LeadershipTeam />
        </>
    )
}
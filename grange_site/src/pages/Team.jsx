import { Helmet } from 'react-helmet';
/* import LeadershipTeam from '../components/LeadershipTeam'; */
import { useEffect } from 'react';
import '../css/Team.css';

export function Team () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  

    return (
        <>
            <Helmet><title>Our Members</title></Helmet>
            <h1>Our Members</h1>
            <img src="/images/team/group_photo.jpg" alt="Grange members and volunteers at a Fix-It day" id="group_photo"
            />
            {/*<LeadershipTeam />*/}
        </>
    )
}
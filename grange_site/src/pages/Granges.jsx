import { Helmet } from 'react-helmet';
import GrangesInfo from '../components/GrangesInfo';
import { useEffect } from 'react';
import '../css/Granges.css';

export function Granges () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  

    return (
        <>
            <Helmet><title>Granges of Humboldt County</title></Helmet>
            <h1>Granges of Humboldt County</h1>
            <GrangesInfo />
        </>
    )
}
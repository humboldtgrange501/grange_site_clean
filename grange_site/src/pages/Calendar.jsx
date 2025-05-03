import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../css/Calendar.css';

export function Calendar () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
            <Helmet><title>Calendar</title></Helmet>
            <h1>Calendar of Events</h1>

            <div className="calendar-section">
                {/* Full View (hidden on small screens) */}
                <iframe
                    className="calendar-full"
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=PST&showPrint=0&title=Humboldt%20Grange%20%23501%20Events&src=MmIwMTI0ZTk0OTVjN2NhZTg4N2VlNWJjNDllYmU3NmJmNDkxNDYwZmJkZjQwYTdhMmUzYTZhMGNiY2Y3NzMzZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688&mode=WEEK"
                    style={{ border: 'none', width: '100%', height: '600px' }}
                    title="Humboldt Grange #501 Events"
                    frameBorder="0"
                    scrolling="no"
                />
                
                {/* Agenda View (visible only on small screens) */}
                    <div className="calendar-agenda-div">
                    <iframe
                        className="calendar-agenda"
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=PST&showPrint=0&title=Humboldt%20Grange%20%23501%20Events&src=MmIwMTI0ZTk0OTVjN2NhZTg4N2VlNWJjNDllYmU3NmJmNDkxNDYwZmJkZjQwYTdhMmUzYTZhMGNiY2Y3NzMzZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688&mode=AGENDA"
                        style={{ border: 'none', width: '100%', height: '600px' }}
                        title="Humboldt Grange #501 Events"
                        frameBorder="0"
                        scrolling="no"
                    />
                    </div>
                </div>
        </>
    )
}
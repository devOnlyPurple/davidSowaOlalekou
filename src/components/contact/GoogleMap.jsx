import React from 'react';

function GoogleMap() {
    return (
        <div className="google-map">

            <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=SOMAYAF%20SOGBOSSITO&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                title="Google Map"
            ></iframe>
        </div>
    );
}

export default GoogleMap;
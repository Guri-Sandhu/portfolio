import React from 'react';
import ReactMapboxGl, {Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./ContactForm.scss";

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidzA0MjQ5NzkiLCJhIjoiY2trOXowb2M2MG1iODJ3cnpldWtkaTU0YyJ9.t6LjM59x5dtGxby9WgHQ0A'
  });

// Jump component which is populated with image thumbnails which can be clicked on to go to a certain image
const SmallMap = ():JSX.Element => {

    return (
        <div className="mapbox">
            <Map
                style={"mapbox://styles/w0424979/ckka0gr2i2u7l17msz20s7pme"}
                center={[-63.263078,45.385511]}
                containerStyle={{
                height: '250px',
                width: '250px'
                }}
            >
                <Marker
                    coordinates={[-63.263078,45.385511]}
                    anchor="center">
                    <div className="marker"></div>
                </Marker>
            </Map>
            </div>
        
    );
}

export default SmallMap;
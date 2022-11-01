import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "../styles/Map.css";
// ? https://blog.logrocket.com/integrating-google-maps-react/
// ? https://github.com/ovieokeh/contact-page-with-google-maps/blob/add-map/src/components/map/map.css

const Map = ({ location, zoomLevel }) => (
	<div className="map">
		<div className="google-map">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyBlzfWPK2o1C3YeMmTFqeDW7r5dBD7A26k",
				}}
				defaultCenter={location}
				defaultZoom={zoomLevel}>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</div>
	</div>
);

export default Map;

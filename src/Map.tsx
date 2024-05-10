import "mapbox-gl/dist/mapbox-gl.css";

import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = ({ data, onMarkerClick }) => {
  return (
    <ReactMapGL
      initialViewState={{
        zoom: 4,
        // center of india
        latitude: 20.5937,
        longitude: 78.9629,
      }}
      // {...viewport}
      // viewState={viewport}
      mapboxAccessToken={
        "pk.eyJ1IjoibmlraGlsc2FyYWYiLCJhIjoiY2xlc296YjRjMDA5dDNzcXphZjlzamFmeSJ9.7ZDaMZKecY3-70p9pX9-GQ"
      }
      // onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {data.map((point) => (
        <Marker
          key={point.id}
          latitude={point.latitude}
          longitude={point.longitude}
        >
          <button
            style={{
              border: "none",
              background: "transparent",
              width: "32px",
              height: "32px",
            }}
            onClick={() => onMarkerClick(point)}
          >
            <img
              src="/marker-icon.png"
              alt="Marker"
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          </button>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;

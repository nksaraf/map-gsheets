import React, { useEffect, useState } from "react";

import Map from "./Map.js";
import { fetchDataFromSheet } from "./api.ts";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchDataFromSheet();
      setData(fetchedData);
    };

    loadData();
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "50%", height: "100%" }}>
        <Map data={data} onMarkerClick={setSelectedPoint} />
      </div>
      <div style={{ width: "50%", padding: 20 }}>
        {selectedPoint ? (
          <div>
            <h2>{selectedPoint.name}</h2>
            <img src={selectedPoint.image}></img>
            <p>Latitude: {selectedPoint.latitude}</p>
            <p>Longitude: {selectedPoint.longitude}</p>
          </div>
        ) : (
          <p>Click a marker to see details</p>
        )}
      </div>
    </div>
  );
};

export default App;

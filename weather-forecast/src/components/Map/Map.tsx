import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map as OlMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const Map: React.FC = () => {
  useEffect(() => {
    new OlMap({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;

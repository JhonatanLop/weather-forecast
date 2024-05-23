import React, { useEffect, useRef } from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new OlMap({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0], // Coordenadas iniciais [lon, lat]
          zoom: 2, // Nível de zoom inicial
        }),
      });

      // Limpeza para evitar múltiplas instâncias do mapa
      return () => map.setTarget(undefined);
    }
  }, []);

  return <div id="map" ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;

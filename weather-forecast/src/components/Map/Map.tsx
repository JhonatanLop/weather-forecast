import React, { useRef, useEffect } from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

interface MapProps {
    lat: number;
    lon: number;
    zoom: number
}

const Map: React.FC<MapProps> = ({ lat, lon, zoom }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<OlMap | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            mapInstance.current = new OlMap({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                view: new View({
                    center: fromLonLat([lon, lat]),
                    zoom: zoom,
                }),
            });

            return () => {
                mapInstance.current?.setTarget(undefined);
            };
        }
    }, []);

    useEffect(() => {
        if (mapInstance.current) {
            const view = mapInstance.current.getView();
            view.setCenter(fromLonLat([lon, lat]));
            view.setZoom(zoom);
        }
    }, [lat, lon, zoom]);

    return <div id="map" ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
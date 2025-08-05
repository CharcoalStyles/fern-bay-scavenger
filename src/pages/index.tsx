import { Chango, Geist_Mono } from "next/font/google";
import Map, { Layer, Source, MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { boundingBox, mapPoints, mapViewState } from "@/data/points";

const changoSans = Chango({
  variable: "--font-chango-sans",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

const calculateBoundsWithPadding = (
  bbox: [number, number, number, number],
  paddingDegrees = 0.01
): [[number, number], [number, number]] => {
  return [
    [bbox[0] - paddingDegrees, bbox[1] - paddingDegrees], // Southwest corner
    [bbox[2] + paddingDegrees, bbox[3] + paddingDegrees], // Northeast corner
  ];
};

export default function Home() {
  const mapRef = useRef<MapRef | null>(null);
  const [viewState, setViewState] = useState(mapViewState);
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Log the window size whenever it changes
    console.log(`Window size: ${width}x${height}`);
  }, [width, height]);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Calculate bounds and fit map to feature collection
  useEffect(() => {
    if (
      mapPoints &&
      mapPoints.features.length > 0 &&
      mapLoaded &&
      mapRef.current
    ) {
      try {
        // Fit the map to the bounding box with padding
        mapRef.current.fitBounds(
          [
            [boundingBox[0], boundingBox[1]],
            [boundingBox[2], boundingBox[3]],
          ], // [[minLng, minLat], [maxLng, maxLat]]
          {
            padding: {
              top: 50,
              bottom: 50,
              left: 50,
              right: 50,
            },
            duration: 1000, // Animation duration in milliseconds
          }
        );
      } catch (error) {
        console.error("Error calculating bounds:", error);
      }
    }
  }, [mapPoints, mapLoaded]);

  return (
    <div className={`font-sans`}>
      <main className="bg-white min-h-screen text-gray-700 flex flex-col row-start-2 items-center ">
        <h1
          className={`p-2 w-full text-center ${changoSans.className} text-xl`}>
          Seaside Estate Scavenger Hunt
        </h1>
        <div className="w-full h-fit">
          <Map
            ref={mapRef}
            {...viewState}
            maxBounds={calculateBoundsWithPadding(boundingBox, 0.005)}
            onMove={(evt) => setViewState(evt.viewState)}
            onLoad={() => setMapLoaded(true)}
            style={{
              width: "100%",
              height: `${height ? height /  2 : 0}px`,
            }}
            mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json">
            <Source id="my-data" type="geojson" data={mapPoints}>
              <Layer type="circle" paint={layerStyle.paint} />
            </Source>
          </Map>
        </div>
        <div className={`${geistMono.className} p-2`}>1q234</div>
      </main>
    </div>
  );
}

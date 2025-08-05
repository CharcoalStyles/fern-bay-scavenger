import { bbox } from "@turf/turf";
import { FeatureCollection, Point } from "geojson";
import { LngLatBounds, LngLatBoundsLike } from "maplibre-gl";

export const mapPoints: FeatureCollection<Point> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.80868585413265, -32.85968515271781],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81150331186086, -32.858130011363514],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.810034570121, -32.86095570141828],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.80973362557728, -32.86193286200501],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81111971080435, -32.86140588118033],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.8113318274937, -32.86075584745587],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81188203461062, -32.86201613575401],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81527607592813, -32.86152552343384],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81592499537652, -32.86374085836383],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81749157725528, -32.86238109194334],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81801913879883, -32.8616035439864],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81535300209669, -32.8569537454576],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.8160483363032, -32.85742212629981],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.81713069644888, -32.855581649815264],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [151.8155169963103, -32.85421504456084],
        type: "Point",
      },
    },
  ],
};

//generate a bounding box and maplibre view state from the points
export const boundingBox = bbox(mapPoints) as  [number, number, number, number];
export const paddedBoundingBox = boundingBox

export const mapViewState = {
  longitude: (boundingBox[0] + boundingBox[2]) / 2,
  latitude: (boundingBox[1] + boundingBox[3]) / 2,
  zoom: 14,
  bearing: 0,
  pitch: 0,
};
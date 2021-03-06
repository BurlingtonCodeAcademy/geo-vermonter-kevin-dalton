import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import borderData from "../data/border";
import ChangeView from './ChangeView'
import L from 'leaflet'
import leafletPip from 'leaflet-pip'



function Map(props) {


  
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      scrollWheelZoom= {false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px", zIndex: 0, marginLeft: '15vw', marginRight: '0' }}
    >
      <ChangeView center = {props.center} zoom = {props.zoom} /> 
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
    
  );
}



export default Map;

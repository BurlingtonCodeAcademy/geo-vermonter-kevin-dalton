import {useMap} from 'react-leaflet'

//Function to change center and zoom of map//
export default function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}



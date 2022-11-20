import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
    
};

const center = {
  lat : -7.797068,
  lng : 110.370529
};

function MyComponent (){
  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey : "AIzaSyBbZkKZtHcLLZoGLarC32BgVUETa_2lTms"
  })



const [map, setMap] = React.useState(null)

const onLoad = React.useCallback(function callback(map){
const bounds = new window.google.maps.LatLngBounds();
map.fitBounds(bounds);
setMap(map)
},[])

const onUnmount = React.useCallback(function callback(map){

  setMap(null)
},[])

return isLoaded?(
<GoogleMap
mapContainerStyle={containerStyle}
center={center}
zoom={10}
onLoad={onLoad}
onUnmount={onUnmount}
>
  {/*child components, such as market,info windows,etc*/}
  <></>
</GoogleMap>
) : <></>
}
export default React.memo(MyComponent)

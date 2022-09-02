import GoogleMaps from "simple-react-google-maps";
const Map = () => {
  return (
    <GoogleMaps
      apiKey={process.env.REACT_APP_MAPS_API_KEY}
      style={{ height: "400px", width: "100%" }}
      zoom={15}
      center={{ lat: -32.95281094500746, lng: -60.639199086785915 }}
      markers={{ lat: -32.95281094500746, lng: -60.639199086785915 }}
    />
  );
};

export default Map;

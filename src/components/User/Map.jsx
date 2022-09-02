import GoogleMaps from "simple-react-google-maps";
const Map = () => {
  return (
    <GoogleMaps
      apiKey={"AIzaSyB70bb7XY4Le0cVYOcp0M0a5yzK8ica0Hg"}
      style={{ height: "400px", width: "100%" }}
      zoom={15}
      center={{ lat: -32.95281094500746, lng: -60.639199086785915 }}
      markers={{ lat: -32.95281094500746, lng: -60.639199086785915 }}
    />
  );
};

export default Map;

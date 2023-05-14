import logo from "./logo.svg";
import "./App.css";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

function App() {
  const { isLeaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLeaded) {
    <p>LOading.............</p>;
  }

  return (
    <div className="App">
      <div>
        <GoogleMap
          center={{ lat: 48.8584, lng: 2.2945 }}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "870px" }}
        />
      </div>

      {/* </GoogleMap> */}
    </div>
  );
}

export default App;

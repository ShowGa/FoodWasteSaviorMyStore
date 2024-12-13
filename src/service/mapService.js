import axios from "axios";

const MAP_API_KEY = import.meta.env.VITE_MAPBOX_API_KEY;

const MAP_API_URL_Complete =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/";

class MapService {
  getCompleteLocation(address) {
    return axios.get(MAP_API_URL_Complete + `${address}.json`, {
      params: {
        access_token: MAP_API_KEY,
        autocomplete: true,
        limit: 1,
      },
    });
  }
}

export default new MapService();

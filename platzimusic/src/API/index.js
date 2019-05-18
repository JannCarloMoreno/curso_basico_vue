import config from "./config"
const { apiKey } = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=${apiKey}&format=json`
export default function getArtists() {
  return fetch(URL)
/*           .then((res) => {
            return res.json()
          })
          .then((json) => {
            return json.topartists.artist
          }) */
          .then(res => res.json())
          .then(json => json.topartists.artist)
}
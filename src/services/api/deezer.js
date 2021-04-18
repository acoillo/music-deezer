import Page from './page';
import axios from 'axios';

const request = axios.create({
  baseURL : Page.constants.url_base_api,
  timeout : 30000,
  headers : {'X-RapidAPI-Key' : Page.constants.api_key}
});

export default {
  getBuscarCancion( value ) {
    const albums = request.get(`${Page.constants.url_api}/search?q=${value}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));
    return albums
  },
  getBuscarAlbum( value ) {
    const albums = request.get(`${Page.constants.url_api}/album/${value}`)
    .then(response => response.data)
    .catch(error => console.log(error));
    return albums
  },
  getBuscarArtista( value ) {
    const albums = request.get(`${Page.constants.url_api}/artist/${value}`)
    .then(response => response.data)
    .catch(error => console.log(error));
    return albums
  }
}

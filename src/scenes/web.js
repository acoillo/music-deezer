import React, { Component } from 'react';
import MenuGeneral from '../components/MenuGeneral';
import ReproductorFooter from '../components/ReproductorFooter';
import Home from './Home';
import './web.scss'

class Web extends Component {
  state = {
    tracks: {
      id: '82715364',
      title: 'Skyfall',
      link: 'https://www.deezer.com/track/82715364',
      preview: "https://cdns-preview-3.dzcdn.net/stream/c-30850f08c37d0860c788a31084ec8641-3.mp3",
      artist: {
        id: '75798',
        name: 'Adele',
        link: 'https://www.deezer.com/artist/75798',
        picture_big: "https://cdns-images.dzcdn.net/images/artist/22c83631d238c4e21800a75a79c54c61/500x500-000000-80-0-0.jpg"
      },
      album: {
        id: '8307448',
        title: 'Skyfall',
        cover_big: 'https://cdns-images.dzcdn.net/images/cover/81e6d7baa7f47b804704922412e7a014/500x500-000000-80-0-0.jpg'
      }
    },
    reproducir: false
  }

  actualizar_cancion = (value) => {
    this.setState({
      tracks: value,
      reproducir: true
    });
  }

  render() {
    return (
      <>
        <div className='contenedor__web--full'>
          <div className='contenedor__menu web' >
            <MenuGeneral />
          </div>
          <div className='contenedor__scenes'>
            <Home onSelectCancionReproductor={this.actualizar_cancion} />
          </div>
        </div>
        <div className='contenedor__reproductor--footer'>
          <ReproductorFooter tracks={this.state.tracks} reproducir={this.state.reproducir} />
        </div>
      </>
    );
  }
}

export default Web;

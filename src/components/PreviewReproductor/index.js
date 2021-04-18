import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import { Button } from 'antd';
import './styles.scss';

class PreviewReproductor extends Component {
 
  state = {
    sound: '',
    escuchando: false,
  }

  soudPlay = (src) => {
    this.setState({
      sound: src
    });
    const sound = new Howl({
      src,
      html5: true
    })
    if (this.state.escuchando) {
      this.setState({
        escuchando: false
      });
      Howler.stop();
      sound.play();
    } else {
      this.setState({
        escuchando: true
      });
      Howler.stop();
      sound.play();
    }
  }

  render() {
    return (
      <div className='contenedor__prevew--full'>
        <div className='contenedor__preview--img' >
          <img src={this.props.cancion.album.cover_big} />
        </div>
        <div className='contenedor__preview--descripcion' >
          <h4>{this.props.cancion.title}</h4>
          <div className='contenedor__fans'><span className='artista'>Lo mejor de {this.props.cancion.artist.name}</span><span className='fans'>{this.props.artista.nb_fan} Fans</span></div>
          <p className='info__album'>
            La canción corresponde al álbum "{this.props.cancion.album.title}" que incluye #{this.props.album.nb_tracks} canciones, siendo lanzado oficialmente en la fecha "{this.props.album.release_date}". <br />
            Actualmente el álbum cuenta con #{this.props.album.fans} Fans.
          </p><br />
          <div className='contenedor__botones'>
            <Button type="primary" shape="round" danger onClick={() => this.soudPlay(this.props.cancion.preview)} style={{width: 110}}>
              Reproducir
            </Button>
            <a className='button enlace__deezer' target='_blank' href={this.props.cancion.link}>Seguir</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewReproductor;


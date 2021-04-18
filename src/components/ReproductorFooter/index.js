import React, { Component } from 'react';
import { Slider } from 'antd';
import { Howl, Howler } from 'howler';
import './styles.scss'


class ReproductorFooter extends Component {
  state = {
    sound: '',
    escuchando: false,
    Volumen: 0.3,
    id_sound: ''
  }

  soudPlay = (src) => {
    this.setState({
      sound: src,
      escuchando: true
    });
    const sound = new Howl({
      src,
      html5: true
    })
    Howler.stop();
    this.state.id_sound = sound.play();
  }

  soudPause = (id) => {
    this.setState({
      escuchando: false
    });
  }

  onChange = value => {
    this.setState({
      Volumen: value,
    });
    Howler.volume(value);
  };

  render() {
    const { Volumen } = this.state;
    return (
      <div className='contenedor__reproductor--footer'>
        <div className='reproductor__img'>
          <img src={this.props.tracks.album.cover_big} />
        </div>
        <div className='contenedor__reproductor'>
          <div className='contenedor__artista'>
            <p>{this.props.tracks.title}</p>
            <span>{this.props.tracks.artist.name} - {this.props.tracks.album.title}</span>
          </div>
          <div className='contenedor__control'>
            <a><i class="fas fa-step-backward" ></i></a>
            <a ><i class="fas fa-play" onClick={() => this.soudPlay(this.props.tracks.preview)}></i></a>
            {/*<a ><i class="fas fa-pause" onClick={() => this.soudPause(this.state.id_sound)} ></i></a>*/}
            <a><i class="fas fa-step-forward" ></i></a>
          </div>
          <div className='contenedor__vol'>
            <Slider
              min={0}
              max={1}
              onChange={this.onChange}
              value={typeof Volumen === 'number' ? Volumen : 0}
              step={0.01}
            />
            <i class="fas fa-volume-down"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ReproductorFooter;

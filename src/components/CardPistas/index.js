import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import './styles.scss';

class CardPistas extends Component {
  state = {
    sound: '',
    escuchando: false,
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

  render() {
    return (
      <div className='contenedor__card--full'>
        {
          this.props.visualizar === true ? 
            this.props.tracks.map((item, i) => (
              <div className='contendedor__card' onClick={() => this.soudPlay(this.props.tracks[i].preview)}>
                <img src={this.props.tracks[i].album.cover_medium} />
                <p>{this.props.tracks[i].title}</p>
                <h5>{this.props.tracks[i].artist.name}</h5>
                <a ><i class="fas fa-play" onClick={() => this.soudPlay(this.props.tracks[i].preview)}></i></a>
              </div>
            ))
           :  '...'
        }
      </div>
    );
  }
}

export default CardPistas;

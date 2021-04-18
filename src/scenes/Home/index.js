import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ReactDOM from 'react-dom';
import Buscar from '../../components/Buscar';
import Reproductor from '../../components/Reproductor';
import PreviewReproductor from '../../components/PreviewReproductor';
import CardPistas from '../../components/CardPistas';
import 'antd/dist/antd.css';
import deezer from '../../services/api/deezer.js';
import './styles.scss';

class Home extends Component {
  state = {
    cancion: {
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
    artista: {},
    album: [],
    tracks: {},
    visualizar: false
  }

  actualizar_cancion = (value, data) => {
    this.props.onSelectCancionReproductor(value);
    this.setState({
      cancion: value,
      tracks: data,
      visualizar: true
    });
    deezer.getBuscarAlbum(value.album.id).then(item => this.setState({
      album: item
    }));
    deezer.getBuscarArtista(value.artist.id).then(item => this.setState({
      artista: item
    }));
  }

  render() {
    return (
      <div className='contenedor__recientes--full'>
        <Row className='contenedor__buscar' justify="space-between">
          <Col xs={20} sm={20} md={16} lg={16} xl={16}>

            <Buscar onSelectCancion={this.actualizar_cancion} />
          </Col>
          <Col xs={4} sm={4} md={8} lg={8} xl={8} style={{ textAlign: 'right' }}>
            <div className='contenedor__user'><i class="far fa-user"></i><span className='web'> Usuario</span></div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ marginTop: 40 }}>
            <PreviewReproductor cancion={this.state.cancion} album={this.state.album} artista={this.state.artista} />
          </Col>
        </Row>
        <div className='resultados__text'>
          Resultados
        </div>
        <Row>
          <Col span={24} >
            <CardPistas tracks={this.state.tracks} visualizar={this.state.visualizar} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;